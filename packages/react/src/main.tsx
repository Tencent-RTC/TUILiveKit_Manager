import "./live-manager";
import { createRoot } from "react-dom/client";
import "tdesign-react/es/style/index.css";
import "tuikit-live-manager-sdk-react/dist/style.css";
import 'tuikit-live-manager-sdk-react/common/style/index.css';
import "./store/auth-store";
import App from "./App.tsx";
import { AppErrorBoundary } from "tuikit-live-manager-sdk-react";

// ErrorBoundary 兜底：捕获组件渲染异常，避免白屏
// 注意：不使用 StrictMode，因为 SDK 的 startPlay/stopPlay 是有状态操作，
// StrictMode 的 double mount 会导致 SDK 内部状态与 cleanup 的异步 stopPlay 产生竞态条件
createRoot(document.getElementById("root")!).render(
  <AppErrorBoundary>
    <App />
  </AppErrorBoundary>,
);
