import { createElement, lazy, Suspense, useEffect, useState } from 'react';
import type { ComponentType, ReactElement } from 'react';
import { createHashRouter, Navigate, Outlet, matchRoutes, useNavigate, useLocation } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import { i18next } from '@tencentcloud/uikit-base-component-react';
import MainLayout from '../layouts/MainLayout';
import { isLoggedIn, saveCredentials, login, reportPageView } from 'tuikit-live-manager-sdk-react';
import {
  type CoreRouteKey,
  checkServerConfig,
  getActiveAppConfig,
  getDefaultRoutePath,
  getRouteTitleKey,
  isCoreRouteEnabled,
} from 'tuikit-live-manager-sdk-react';
import ConfigRequiredPage from '../components/ConfigRequiredPage';
import CredentialLoginPage from '../components/CredentialLoginPage';
import { Message } from 'tuikit-live-manager-sdk-react';

// i18next 可能尚未初始化，安全封装 t() 函数
const t = (key: string, options?: any): string => {
  try {
    if (i18next && typeof i18next.t === 'function') {
      return String(i18next.t(key, options));
    }
  } catch {}
  return key;
};

const LiveList = lazy(() => import('tuikit-live-manager-sdk-react/views/LiveList'));
const LiveMonitor = lazy(() => import('tuikit-live-manager-sdk-react/views/LiveMonitor'));
const LiveControl = lazy(() => import('tuikit-live-manager-sdk-react/views/LiveControl'));
const GiftConfig = lazy(() => import('tuikit-live-manager-sdk-react/views/GiftConfig'));
const GiftCategory = lazy(() => import('tuikit-live-manager-sdk-react/views/GiftCategory'));

type AppRouteObject = Omit<RouteObject, 'children'> & {
  meta?: {
    title?: string;
    titleKey?: string;
    routeKey?: string;
    menuKey?: string;
    requiresAuth?: boolean;
  };
  children?: AppRouteObject[];
};

const appConfig = getActiveAppConfig();
const defaultRoutePath = getDefaultRoutePath();

// 设置页面标题
const setDocumentTitle = (title?: string) => {
  const brand = getActiveAppConfig().brand;
  const platformTitle = brand.pageTitle ? t(brand.pageTitle) : t('Live Room Management Platform');
  document.title = title ? `${title} - ${platformTitle}` : platformTitle;
};

// 路由守卫组件 - 检查登录状态
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  
  const isMockMode = typeof __MOCK_MODE__ !== 'undefined' ? __MOCK_MODE__ :
    (import.meta.env.VITE_API_BASE_URL === '' || !import.meta.env.VITE_API_BASE_URL)
    || (typeof window !== 'undefined' && (window as any).__PLAYWRIGHT_MOCK__ === true);
  
  // Mock 模式：跳过登录检查
  if (isMockMode) {
    return <>{children}</>;
  }
  
  if (!isLoggedIn()) {
    // 保存原始路径到 state，登录成功后跳回
    return <Navigate to='/config-required' state={{ from: location.pathname + location.search }} replace />;
  }
  return <>{children}</>;
};

// 配置缺失检测组件
const ConfigRequiredRoute: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [configStatus, setConfigStatus] = useState<{
    loading: boolean;
    missing: string[];
  }>({ loading: true, missing: [] });
  
  // Mock 模式检测：优先使用 __MOCK_MODE__，其次检查 VITE_API_BASE_URL
  const isMockMode = typeof __MOCK_MODE__ !== 'undefined' ? __MOCK_MODE__ :
    (import.meta.env.VITE_API_BASE_URL === '' || !import.meta.env.VITE_API_BASE_URL)
    || (typeof window !== 'undefined' && (window as any).__PLAYWRIGHT_MOCK__ === true);

  // Mock 模式：在 useEffect 中重定向，避免在渲染期间导航
  useEffect(() => {
    if (isMockMode) {
      navigate(defaultRoutePath, { replace: true });
    }
  }, [isMockMode, navigate, defaultRoutePath]);

  // Mock 模式：不渲染任何内容
  if (isMockMode) {
    return null;
  }

  useEffect(() => {
    const checkConfig = async () => {
      try {
        const res = await checkServerConfig();
        const data = res.data;
        if (!data) {
          setConfigStatus({ loading: false, missing: ['SDK_APP_ID', 'SECRET_KEY', 'USER_ID'] });
          return;
        }

        const missing: string[] = [];
        if (!data.hasSdkAppId) missing.push('SDK_APP_ID');
        if (!data.hasSecretKey) missing.push('SECRET_KEY');
        if (!data.hasIdentifier) missing.push('USER_ID');

        setConfigStatus({ loading: false, missing });

        // 服务端配置完整 → 自动登录
        if (missing.length === 0) {
          try {
            const loginRes = await login({});
            if (loginRes.code === 0 && loginRes.data) {
              saveCredentials(loginRes.data);
              const from = (location.state as any)?.from || defaultRoutePath;
              navigate(from, { replace: true });
              return;
            } else {
              console.error('[ConfigRequiredRoute] 自动登录失败:', loginRes.message);
              Message.error(loginRes.message || 'Auto Login Failed');
            }
          } catch (error: any) {
            console.error('[ConfigRequiredRoute] 自动登录异常:', error);
            Message.error(error.message || 'Auto Login Failed');
          }
        }
      } catch {
        setConfigStatus({ loading: false, missing: ['SDK_APP_ID', 'SECRET_KEY', 'USER_ID'] });
      }
    };

    checkConfig();
  }, [navigate, location.state]);

  if (configStatus.loading) {
    return (
      <div style={{ padding: 40, textAlign: 'center' }}>
        <div>{t('Checking Configuration')}</div>
      </div>
    );
  }

  return <CredentialLoginPage />;
};

// 带布局的路由
const LayoutRoute: React.FC = () => {
  return (
    <ProtectedRoute>
      <MainLayout>
        <Suspense fallback={<div style={{ padding: 40, textAlign: 'center' }}>{t('Loading')}</div>}>
          <Outlet />
        </Suspense>
      </MainLayout>
    </ProtectedRoute>
  );
};

const routeOverrides = appConfig.routes?.routeOverrides ?? {};

const renderCoreRoute = (routeKey: CoreRouteKey, fallback: ReactElement) => {
  const OverrideComponent = routeOverrides[routeKey] as ComponentType<any> | undefined;
  return OverrideComponent ? createElement(OverrideComponent) : fallback;
};

const coreChildren: AppRouteObject[] = [
  {
    path: '/live-list',
    element: renderCoreRoute('live-list', <LiveList />),
    meta: { titleKey: getRouteTitleKey('live-list'), routeKey: 'live-list', menuKey: 'live-list', requiresAuth: true },
  },
  {
    path: '/live-monitor',
    element: renderCoreRoute('live-monitor', <LiveMonitor />),
    meta: { titleKey: getRouteTitleKey('live-monitor'), routeKey: 'live-monitor', menuKey: 'live-monitor', requiresAuth: true },
  },
  {
    path: '/live-control/:liveId',
    element: renderCoreRoute('live-control', <LiveControl />),
    meta: { titleKey: getRouteTitleKey('live-control'), routeKey: 'live-control', requiresAuth: true },
  },
  {
    path: '/gift-config',
    element: renderCoreRoute('gift-config', <GiftConfig />),
    meta: { titleKey: getRouteTitleKey('gift-config'), routeKey: 'gift-config', menuKey: 'gift-config', requiresAuth: true },
  },
  {
    path: '/gift-category',
    element: renderCoreRoute('gift-category', <GiftCategory />),
    meta: { titleKey: getRouteTitleKey('gift-category'), routeKey: 'gift-category', requiresAuth: true },
  },
].filter((route) => isCoreRouteEnabled(route.meta?.routeKey as CoreRouteKey));

const extraChildren: AppRouteObject[] = (appConfig.routes?.extraRoutes ?? []).map((route) => {
  const RouteComponent = route.component as ComponentType<any>;
  return {
    path: route.path.startsWith('/') ? route.path : `/${route.path}`,
    element: createElement(RouteComponent),
    meta: {
      title: route.title,
      routeKey: route.name,
      menuKey: route.menuKey,
      requiresAuth: route.requiresAuth ?? true,
    },
  };
});

// Mock 模式检测（使用 vite 定义的全局变量）
const isMockMode = typeof __MOCK_MODE__ !== 'undefined' ? __MOCK_MODE__ : 
  (import.meta.env.VITE_API_BASE_URL === '' || !import.meta.env.VITE_API_BASE_URL)
  || (typeof window !== 'undefined' && (window as any).__PLAYWRIGHT_MOCK__ === true);

const routes: AppRouteObject[] = [
  {
    path: '/',
    element: <Navigate to={defaultRoutePath} replace />,
  },
  // 非 Mock 模式才包含 config-required 路由
  ...(isMockMode ? [] : [
    {
      path: '/config-required',
      element: <ConfigRequiredRoute />,
      meta: { titleKey: 'Credential Login' },
    },
    {
      path: '/server-config',
      element: <ConfigRequiredPage missingItems={[]} />,
      meta: { titleKey: 'Server Config' },
    },
  ]),
  {
    element: <LayoutRoute />,
    children: [...coreChildren, ...extraChildren],
  },
  {
    path: '/*',
    element: <Navigate to={defaultRoutePath} replace />,
  },
];

// 根据路径匹配并设置页面标题
export const updateTitleByPath = (pathname: string) => {
  const matched = matchRoutes(routes as RouteObject[], pathname);
  if (matched && matched.length > 0) {
    for (let i = matched.length - 1; i >= 0; i--) {
      const route = matched[i].route as AppRouteObject;
      if (route.meta?.title || route.meta?.titleKey) {
        setDocumentTitle(route.meta.title || (route.meta.titleKey ? t(route.meta.titleKey) : undefined));
        return;
      }
    }
  }
  setDocumentTitle();
};

// 使用 hash history，无论部署在任何路径下路由都正确
// hash 路由不依赖 basename，因此移除了 createBrowserRouter 的 basename 配置
// 以及 v7_prependBasename future flag（该 flag 仅在 browser history 下生效）
export const router = createHashRouter(routes as RouteObject[], {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
  },
});

// 初始加载时立即设置标题（subscribe 只在路由变化时触发，不包含首次加载）
updateTitleByPath(router.state.location.pathname);
reportPageView(router.state.location.pathname);

// 使用 router 的 subscribe 监听路由变化设置标题
let previousPath = router.state.location.pathname;
router.subscribe((routerState) => {
  const currentPath = routerState.location.pathname;
  if (currentPath !== previousPath) {
    previousPath = currentPath;
    updateTitleByPath(currentPath);
    reportPageView(currentPath);
  }
});

export default router;