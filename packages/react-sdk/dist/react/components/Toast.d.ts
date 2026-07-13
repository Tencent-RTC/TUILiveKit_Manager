export declare const Message: {
    success: (msg: string) => Promise<import("tdesign-react").MessageInstance>;
    error: (msg: string) => Promise<import("tdesign-react").MessageInstance>;
    warning: (msg: string) => Promise<import("tdesign-react").MessageInstance>;
    info: (msg: string) => Promise<import("tdesign-react").MessageInstance>;
};
export default Message;
