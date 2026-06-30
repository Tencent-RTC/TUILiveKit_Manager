import { createRouter, createWebHashHistory } from 'vue-router';
import type { RouteComponent, RouteRecordRaw } from 'vue-router';
import { isLoggedIn, saveCredentials, login, reportPageView } from 'tuikit-live-manager-sdk-vue';
import {
  type CoreRouteKey,
  getActiveAppConfig,
  getDefaultRoutePath,
  getRouteTitleKey,
  isCoreRouteEnabled,
} from 'tuikit-live-manager-sdk-vue';
import { checkServerConfig } from 'tuikit-live-manager-sdk-vue';
import { i18next } from '@tencentcloud/uikit-base-component-vue3';
import { ref } from 'vue';

// 安全调用 i18next.t 的辅助函数（i18next 可能尚未初始化）
const safeT = (key: string, fallback?: string): string => {
  try {
    if (i18next && typeof i18next.t === 'function') {
      return i18next.t(key);
    }
  } catch {
    // ignore
  }
  return fallback || key;
};

// 调试：将环境变量暴露到 window 对象
(window as any).VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const appConfig = getActiveAppConfig();
const defaultRoutePath = getDefaultRoutePath();
const routeOverrides = appConfig.routes?.routeOverrides ?? {};

const getCoreRouteComponent = (routeKey: CoreRouteKey, fallback: RouteRecordRaw['component']) => {
  return (routeOverrides[routeKey] as RouteRecordRaw['component'] | undefined) || fallback;
};

const coreChildren = ([
  {
    path: 'live-list',
    name: 'live-list',
    component: getCoreRouteComponent('live-list', () => import('tuikit-live-manager-sdk-vue/views/live-list')),
    meta: { titleKey: getRouteTitleKey('live-list'), routeKey: 'live-list', menuKey: 'live-list', requiresAuth: true },
  },
  {
    path: 'live-monitor',
    name: 'live-monitor',
    component: getCoreRouteComponent('live-monitor', () => import('tuikit-live-manager-sdk-vue/views/live-monitor')),
    meta: { titleKey: getRouteTitleKey('live-monitor'), routeKey: 'live-monitor', menuKey: 'live-monitor', requiresAuth: true },
  },
  {
    path: 'live-control/:liveId',
    name: 'live-control',
    component: getCoreRouteComponent('live-control', () => import('tuikit-live-manager-sdk-vue/views/live-control')),
    meta: { titleKey: getRouteTitleKey('live-control'), routeKey: 'live-control', requiresAuth: true },
  },
  {
    path: 'gift-config',
    name: 'gift-config',
    component: getCoreRouteComponent('gift-config', () => import('tuikit-live-manager-sdk-vue/views/gift-config')),
    meta: { titleKey: getRouteTitleKey('gift-config'), routeKey: 'gift-config', menuKey: 'gift-config', requiresAuth: true },
  },
  {
    path: 'gift-category',
    name: 'gift-category',
    component: getCoreRouteComponent('gift-category', () => import('tuikit-live-manager-sdk-vue/views/gift-category')),
    meta: { titleKey: getRouteTitleKey('gift-category'), routeKey: 'gift-category', requiresAuth: true },
  },
] as RouteRecordRaw[]).filter((route) => isCoreRouteEnabled(route.meta?.routeKey as CoreRouteKey));

const extraChildren: RouteRecordRaw[] = (appConfig.routes?.extraRoutes ?? []).map((route) => ({
  path: route.path.replace(/^\//, ''),
  name: route.name,
  component: route.component as RouteComponent,
  meta: {
    title: route.title,
    routeKey: route.name,
    menuKey: route.menuKey,
    requiresAuth: route.requiresAuth ?? true,
  },
}));

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../layouts/MainLayout.vue'),
    redirect: defaultRoutePath,
    children: [...coreChildren, ...extraChildren],
  },
  {
    path: '/config-required',
    name: 'config-required',
    component: () => import('../components/config-required.vue'),
    meta: { titleKey: 'Server Config' },
  },
  {
    path: '/credential-login',
    name: 'credential-login',
    component: () => import('../components/credential-login.vue'),
    meta: { titleKey: 'Credential Login' },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: defaultRoutePath,
  },
];

// 使用 hash history，无论部署在任何路径下路由都正确
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// 方便调试：将 router 挂到 window
(window as any).__router__ = router;

// 配置状态缓存
const configStatus = ref<{
  checked: boolean;
  missing: string[];
}>({ checked: false, missing: [] });

// 检查配置状态
async function checkConfigStatus() {
  if (configStatus.value.checked) return configStatus.value;

  try {
    const res = await checkServerConfig();
    const data = res.data;
    if (!data) {
      configStatus.value = { checked: true, missing: ['SDK_APP_ID', 'SECRET_KEY', 'USER_ID'] };
      return configStatus.value;
    }

    const missing: string[] = [];
    if (!data.hasSdkAppId) missing.push('SDK_APP_ID');
    if (!data.hasSecretKey) missing.push('SECRET_KEY');
    if (!data.hasIdentifier) missing.push('USER_ID');

    configStatus.value = { checked: true, missing };
  } catch (error) {
    console.error('[Router] 配置检查失败:', error);
    configStatus.value = { checked: true, missing: ['SDK_APP_ID', 'SECRET_KEY', 'USER_ID'] };
  }

  return configStatus.value;
}

// 根据路由 meta 设置 i18n 页面标题
export const updateDocumentTitle = () => {
  const currentRoute = router.currentRoute.value;
  const title = currentRoute.meta?.title as string | undefined;
  const titleKey = currentRoute.meta?.titleKey as string | undefined;
  const brand = getActiveAppConfig().brand;
  const platformTitle = brand.pageTitle ? safeT(brand.pageTitle, brand.pageTitle) : safeT('Live Room Management Platform', 'Live Room Management Platform');
  const titleStr = title || (titleKey ? safeT(titleKey, titleKey) : '');
  document.title = title || titleKey ? `${titleStr} - ${platformTitle}` : platformTitle;
};

// 路由守卫
router.beforeEach(async (to, _from, next) => {
  // 设置页面标题
  const title = to.meta?.title as string | undefined;
  const titleKey = to.meta?.titleKey as string | undefined;
  const brand = getActiveAppConfig().brand;
  const platformTitle = brand.pageTitle ? safeT(brand.pageTitle, brand.pageTitle) : safeT('Live Room Management Platform', 'Live Room Management Platform');
  const titleStr = title || (titleKey ? safeT(titleKey, titleKey) : '');
  document.title = title || titleKey ? `${titleStr} - ${platformTitle}` : platformTitle;

  // Mock 模式：跳过所有检查和登录
  if (import.meta.env.VITE_API_BASE_URL === '') {
    // 如果是访问 config-required 或 credential-login 页面，直接跳转到默认路径
    if (to.name === 'config-required' || to.name === 'credential-login') {
      next({ path: defaultRoutePath, replace: true });
      return;
    }
    next();
    return;
  }

  // 跳过配置缺失页面和凭证登录页面自身
  if (to.name === 'config-required' || to.name === 'credential-login') {
    next();
    return;
  }

  // 检查登录状态
  if (to.meta.requiresAuth) {
    if (!isLoggedIn()) {
      // 先检查配置状态
      const status = await checkConfigStatus();
      if (status.missing.length > 0) {
        // 跳转到凭证登录页面
        next({ name: 'credential-login', query: { redirect: to.fullPath } });
        return;
      }
      // 服务端配置完整 → 自动登录
      try {
        const loginRes = await login({});
        if (loginRes.code === 0 && loginRes.data) {
          saveCredentials(loginRes.data);
          next();
          return;
        } else {
          console.error('[Router] 自动登录失败:', loginRes.message);
        }
      } catch (error: any) {
        console.error('[Router] 自动登录异常:', error);
      }
      next({ name: 'credential-login' });
      return;
    }
  }

  next();
});

// 路由后置守卫：调试路由匹配结果 + 页面浏览上报
router.afterEach((to, _from) => {
  reportPageView(to.path);
});

export default router;
