import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ViewModuleIcon,
  VideoCamera1Icon,
  GiftIcon,
  UserIcon,
  TranslateIcon,
} from "tdesign-icons-react";
import { i18next } from '@tencentcloud/uikit-base-component-react';
import {
  resolveAccount,
  getMenuKeyFromPath,
  getDefaultLanguage,
  toggleLanguage,
  setDocumentLanguage,
  getActiveAppConfig,
  getUserProfilePortrait,
} from "tuikit-live-manager-sdk-react";
import type { SupportedLanguage, UserPortraitProfile } from "tuikit-live-manager-sdk-react";
import { updateTitleByPath } from "../router";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const t = i18next && typeof i18next.t === 'function'
    ? i18next.t.bind(i18next) as (key: string, options?: Record<string, string>) => string
    : ((key: string, _options?: Record<string, string>) => key);

  const navigate = useNavigate();
  const location = useLocation();
  const [, setSdkReady] = useState(false);
  const [userProfile, setUserProfile] = useState<UserPortraitProfile | null>(null);
  const [avatarLoadFailed, setAvatarLoadFailed] = useState(false);
  const [currentUserId, setCurrentUserId] = useState<string>('');
  const [currentLanguage, setCurrentLanguage] = useState<SupportedLanguage>(getDefaultLanguage());
  const sdkInitializedRef = useRef<boolean>(false);
  const appConfig = getActiveAppConfig<React.ReactNode>();
  const brand = appConfig.brand;
  const layoutSlots = appConfig.components?.layout;
  const menus = appConfig.menus;

  const displayUserName = userProfile?.nick || currentUserId || 'Administrator';

  useEffect(() => {
    if (!currentUserId) {
      setUserProfile(null);
      setAvatarLoadFailed(false);
      return;
    }

    let cancelled = false;

    void getUserProfilePortrait(currentUserId)
      .then((profile) => {
        if (cancelled) return;
        setUserProfile(profile);
        setAvatarLoadFailed(false);
      })
      .catch((error) => {
        if (cancelled) return;
        console.error('[MainLayout] Failed to fetch profile:', error);
        setUserProfile(null);
        setAvatarLoadFailed(false);
      });

    return () => {
      cancelled = true;
    };
  }, [currentUserId]);

  // 初始化用户信息和语言配置
  useEffect(() => {
    // 防止 Strict Mode 下重复初始化
    if (sdkInitializedRef.current) return;
    sdkInitializedRef.current = true;

    const setupUser = async () => {
      const account = await resolveAccount();

      if (account && account.sdkAppId !== 0) {
        setCurrentUserId(account.userId);
        setSdkReady(true);
      } else {
        console.error("MainLayout - No valid credentials found");
      }
    };

    setupUser();
  }, []);

  // 当前激活的菜单项
  const [activeMenu, setActiveMenu] = useState("live-list");

  // 监听路由变化,更新菜单状态
  useEffect(() => {
    const key = getMenuKeyFromPath(location.pathname);
    if (key) {
      setActiveMenu(key);
    }
  }, [location.pathname]);

  // 处理菜单点击
  const handleMenuClick = (path: string) => {
    navigate(path.startsWith('/') ? path : `/${path}`);
  };

  // 处理语言切换
  const handleToggleLanguage = () => {
    const nextLang = toggleLanguage(currentLanguage);
    // 先更新 html lang，再触发 i18next（changeLanguage 会自动持久化到 i18nextLng）
    setDocumentLanguage(nextLang);
    if (i18next && typeof i18next.changeLanguage === 'function') {
      i18next.changeLanguage(nextLang);
    }
    setCurrentLanguage(nextLang);
    // 更新浏览器标题
    updateTitleByPath(location.pathname);
  };

  /** 菜单 key → 图标组件映射 */
  const MENU_ICONS: Record<string, React.ReactNode> = {
    'live-monitor': <VideoCamera1Icon size="18px" />,
    'live-list': <ViewModuleIcon size="18px" />,
    'gift-config': <GiftIcon size="18px" />,
  };

  const renderUserAvatar = () => (
    <div className="user-avatar">
      {userProfile?.avatarUrl && !avatarLoadFailed ? (
        <img
          className="user-avatar-image"
          src={userProfile.avatarUrl}
          alt={t('Avatar Alt', { name: displayUserName })}
          referrerPolicy="no-referrer"
          onError={() => setAvatarLoadFailed(true)}
        />
      ) : (
        <UserIcon size="16px" />
      )}
    </div>
  );

  return (
    <div className="main-layout">
      {/* 顶部导航栏 */}
      <header className="main-header">
        <div className="header-left">
          {layoutSlots?.headerLeft}
          {/* Logo */}
          <div className="header-logo">
            {brand.logoUrl ? <img src={brand.logoUrl} alt="logo"/> : null}
            <span className="logo-text">{brand.appName || 'LiveKit'}</span>
          </div>
          <div className="header-divider" />
          <h1 className="page-title">{brand.pageTitle ? t(brand.pageTitle) : t('Live Room Management Platform')}</h1>
        </div>

        <div className="header-right">
          {layoutSlots?.headerRight}
          {/* 语言切换按钮 */}
          <div className="lang-switch-btn" onClick={handleToggleLanguage} title={currentLanguage === 'zh-CN' ? t('Switch to English') : t('Switch to Chinese')}>
            <TranslateIcon size="16px" />
            <span className="lang-switch-label">{currentLanguage === 'zh-CN' ? 'EN' : '中'}</span>
          </div>

          <div className="user-menu">
            {renderUserAvatar()}
            <span className="user-name">{displayUserName}</span>
          </div>
        </div>
      </header>

      <div className="main-body">
        {/* 侧边栏 */}
        <aside className="main-sidebar">
          <div className="sidebar-content">
            {layoutSlots?.sidebarTop}
            {/* 导航菜单 */}
            <nav className="sidebar-menu">
              {menus.map((menu: { key: string; title: string; path: string; icon?: string }) => (
                <div
                  key={menu.key}
                  className={`menu-item ${activeMenu === menu.key ? "active" : ""}`}
                  onClick={() => handleMenuClick(menu.path)}
                >
                  {MENU_ICONS[menu.icon || menu.key]}
                  <span>{t(menu.title)}</span>
                </div>
              ))}
            </nav>
            {layoutSlots?.sidebarBottom}
          </div>


        </aside>

        {/* 页面内容 */}
        <main className="main-content">
          <div className="content-wrapper">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
