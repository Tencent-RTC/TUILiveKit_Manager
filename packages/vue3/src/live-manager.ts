import { configureLiveManager, initHttpClient } from 'tuikit-live-manager-sdk-vue';
import axios from 'axios';
import customerExtension from './customer.config';

export const liveManagerConfig = configureLiveManager(customerExtension);

// 初始化 HTTP 客户端（真实环境）
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 10000,
});

initHttpClient(axiosInstance);
