<template>
  <t-config-provider :global-config="globalConfig">
    <UIKitProvider theme="light" :language="language" :languageResources="languageResources">
      <router-view />
    </UIKitProvider>
  </t-config-provider>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { UIKitProvider } from '@tencentcloud/uikit-base-component-vue3';
// 直接导入 i18next 实例（与 React 端保持一致）
import i18nextInstance from '@tencentcloud/uikit-base-component-vue3/dist/providers/UIKitProvider/i18n';
import enConfig from 'tdesign-vue-next/es/locale/en_US';
import zhConfig from 'tdesign-vue-next/es/locale/zh_CN';
import { enResource, zhResource } from 'tuikit-live-manager-sdk-vue';
import { getDefaultLanguage, setDocumentLanguage } from 'tuikit-live-manager-sdk-vue';
import { liveManagerConfig } from './live-manager';

// 初始语言：优先 localStorage 用户切换过的语言，其次浏览器语言
const initialLang = liveManagerConfig.runtime.language || getDefaultLanguage();
setDocumentLanguage(initialLang);

// 同步 i18next 内部语言状态：确保 i18next 使用从 localStorage/浏览器推导出的语言，
// 而非可能已在 UIKitProvider 内部初始化为浏览器默认语言的状态
if (i18nextInstance && typeof i18nextInstance.changeLanguage === 'function') {
  i18nextInstance.changeLanguage(initialLang);
}

// 响应式语言状态，同步 i18next 变化
// 此时 i18next 已通过 changeLanguage 同步，直接使用 initialLang 避免不一致
const language = ref<string>(initialLang);
const setLanguageHandler = (lng: string) => {
  language.value = lng;
};

onMounted(() => {
  i18nextInstance.on('languageChanged', setLanguageHandler);
});

onBeforeUnmount(() => {
  i18nextInstance.off('languageChanged', setLanguageHandler);
});

// TDesign locale 跟随语言切换
const globalConfig = computed(() => language.value === 'zh-CN' ? zhConfig : enConfig);

// 通过 languageResources prop 双重保障注册翻译资源
const languageResources = [
  { lng: 'en-US', translation: enResource },
  { lng: 'zh-CN', translation: zhResource },
];

// 注册翻译资源（同步执行，确保在组件渲染前完成，与 React 端保持一致）
if (i18nextInstance && typeof i18nextInstance.addResourceBundle === 'function') {
  i18nextInstance.addResourceBundle('en-US', 'translation', enResource, true, true);
  i18nextInstance.addResourceBundle('zh-CN', 'translation', zhResource, true, true);
} else {
  console.warn('[Vue App] i18nextInstance 不可用');
}
</script>

<style>
* {
  box-sizing: border-box;
  font-family: 'PingFang SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

body {
  margin: 0;
  padding: 0;
}

#app {
  width: 100vw;
  height: 100vh;
  overflow-x: auto;
  overflow-y: hidden;
}
</style>
