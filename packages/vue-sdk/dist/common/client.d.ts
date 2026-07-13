/**
 * SDK HTTP 客户端
 *
 * 设计：提供工厂函数，让各前端项目注入自己的 axios 实例。
 * 这样 baseURL、拦截器、登录跳转等框架相关逻辑保留在各项目中，
 * SDK 只使用注入的 HTTP 方法。
 */
import type { AxiosInstance, AxiosRequestConfig } from 'axios';
/**
 * 初始化 HTTP 客户端（每个前端项目启动时调用一次）
 *
 * 自动注册凭证透传拦截器：proxy 模式下，所有请求自动携带
 * x-sdk-app-id / x-user-id / x-user-sig 请求头，供后端 credentialProxy 中间件提取。
 */
export declare function initHttpClient(client: AxiosInstance): AxiosInstance;
/**
 * 获取当前 HTTP 客户端实例
 */
export declare function getHttpClient(): AxiosInstance;
export declare function request<T>(config: AxiosRequestConfig): Promise<T>;
export declare function get<T>(url: string, params?: Record<string, unknown>): Promise<T>;
export declare function post<T>(url: string, data?: unknown): Promise<T>;
export declare function put<T>(url: string, data?: unknown): Promise<T>;
export declare function del<T>(url: string, params?: Record<string, unknown>): Promise<T>;
