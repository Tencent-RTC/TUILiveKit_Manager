interface UseMessageReturn {
    successMsg: string;
    errorMsg: string;
    showMessage: (type: "success" | "error", msg: string) => void;
}
/**
 * 消息提示 Hook
 * 拆分自 LiveControl.tsx
 */
export declare function useMessage(): UseMessageReturn;
export {};
