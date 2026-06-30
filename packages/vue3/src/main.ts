import './live-manager';
import { createApp } from 'vue';
import TDesign from 'tdesign-vue-next';
import 'tdesign-vue-next/es/style/index.css';
import '@tencentcloud/uikit-base-component-vue3/dist/styles/index.css';
import 'tuikit-live-manager-sdk-vue/dist/style.css';
import 'tuikit-live-manager-sdk-vue/common/style/index.css';
import './store/auth-store';
import App from './App.vue';
import router from './router/index';

const app = createApp(App);

// 全局 Vue 渲染错误处理器：捕获组件渲染异常，避免白屏
app.config.errorHandler = (err, instance, info) => {
  console.error('[Vue ErrorHandler]', { err, component: instance?.$?.type?.name, info });

  // 动态导入 SDK 的错误工具（避免循环依赖）
  import('tuikit-live-manager-sdk-vue').then(({ getErrorInfo, getErrorMessage }) => {
    const { code, info: msg } = getErrorInfo(err);
    const displayMsg = getErrorMessage(code, msg);
    const componentName = (instance as any)?.$options?.name || instance?.$?.type?.name || 'Unknown';
    console.error(`[Vue Error] Component: ${componentName}, ${displayMsg || msg || String(err)}`);
  }).catch(() => {
    // 如果 SDK 未加载，至少输出原始错误
    console.error('[Vue ErrorHandler] Failed to load error utils:', err);
  });
};

app.use(TDesign);
app.use(router);
app.mount('#app');
