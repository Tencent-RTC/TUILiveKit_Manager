import { RouterProvider } from 'react-router-dom';
import { UIKitProvider, i18next as i18nextInstance } from '@tencentcloud/uikit-base-component-react';
import { ConfigProvider } from 'tdesign-react';
import enConfig from 'tdesign-react/es/locale/en_US';
import zhConfig from 'tdesign-react/es/locale/zh_CN';
import { router } from './router';
import { enResource, zhResource } from 'tuikit-live-manager-sdk-react';
import { getDefaultLanguage, setDocumentLanguage } from 'tuikit-live-manager-sdk-react';
import { liveManagerConfig } from './live-manager';
import { useEffect, useMemo, useState } from 'react';

// 初始语言：优先 localStorage 用户切换过的语言，其次浏览器语言
const initialLanguage = liveManagerConfig.runtime.language || getDefaultLanguage();
setDocumentLanguage(initialLanguage);

// 使用导出的 i18next 实例注册资源（同步执行，确保在组件渲染前完成）
if (i18nextInstance && typeof i18nextInstance.addResourceBundle === 'function') {
  i18nextInstance.addResourceBundle('en-US', 'translation', enResource, true, true);
  i18nextInstance.addResourceBundle('zh-CN', 'translation', zhResource, true, true);
} else {
  console.warn('[React App] i18nextInstance 不可用');
}

// 同步 i18next 内部语言状态：确保 i18next 使用从 localStorage/浏览器推导出的语言，
// 而非 UIKitProvider 内部可能已初始化为浏览器默认语言的状态
if (i18nextInstance && typeof i18nextInstance.changeLanguage === 'function') {
  i18nextInstance.changeLanguage(initialLanguage);
}

function I18nInitializer() {
  return null;
}

function App() {
  // 响应式语言状态：监听 i18next 实例的 languageChanged 事件，确保 UIKitProvider 的 language prop 与 i18next 同步
  const [language, setLanguage] = useState<string>(initialLanguage);

  // 同时通过 languageResources prop 双重保障注册翻译资源
  const languageResources = useMemo(() => [
    { lng: 'en-US', translation: enResource },
    { lng: 'zh-CN', translation: zhResource },
  ], []);

  // 监听 i18next 语言变化事件，同步更新 UIKitProvider 的 language prop
  useEffect(() => {
    if (!i18nextInstance || typeof i18nextInstance.on !== 'function') return;

    const handler = (lng: string) => {
      setLanguage(lng);
    };

    i18nextInstance.on('languageChanged', handler);

    return () => {
      i18nextInstance.off('languageChanged', handler);
    };
  }, []);

  const globalConfig = language === 'zh-CN' ? zhConfig : enConfig;

  return (
    <ConfigProvider globalConfig={globalConfig}>
      <UIKitProvider theme='light' language={language} languageResources={languageResources}>
        <I18nInitializer />
        <RouterProvider router={router} />
      </UIKitProvider>
    </ConfigProvider>
  );
}

export default App;
