/**
 * Aegis 性能监控 SDK
 * 文档: https://docs.qq.com/doc/DUVhITmRqT2pGdWRG
 */

import Aegis from 'aegis-web-sdk';

// Aegis 实例类型（扩展以支持 setUin）
interface IAegis extends Aegis {
  setUin: (uin: string) => void;
}

export interface AegisConfig {
  id: string;
  uin?: string;
  reportApiSpeed?: boolean;
  reportAssetSpeed?: boolean;
  spa?: boolean;
  hostUrl?: string;
  /** 是否自动从 localStorage 监听 sdkappid 变化并更新 uin */
  autoUpdateUin?: boolean;
  [key: string]: any;
}

let aegisInstance: IAegis | null = null;
let aegisConfig: AegisConfig | null = null;
let storageEventListener: ((e: StorageEvent) => void) | null = null;

/**
 * 从 localStorage 获取 sdkappid 作为 uin
 */
function getUinFromStorage(): string | undefined {
  return localStorage.getItem('sdk_app_id') || undefined;
}

/**
 * 初始化 Aegis
 * @param config 配置项
 * @returns Aegis 实例
 */
export function initAegis(config: AegisConfig): IAegis | null {
  if (!config.id) {
    console.warn('[Aegis] id is required');
    return null;
  }

  aegisConfig = config;
  const uin = config.uin || getUinFromStorage();

  const instance = new Aegis({
    reportApiSpeed: true,
    reportAssetSpeed: true,
    spa: true,
    hostUrl: 'https://rumt-zh.com',
    uin,
    ...config,
  }) as IAegis;

  aegisInstance = instance;

  // 如果没有传入 uin 但有 sdkappid，或者开启了自动更新
  if (config.autoUpdateUin || (!config.uin && getUinFromStorage())) {
    enableAutoUpdateUin();
  }

  return aegisInstance;
}

/**
 * 获取 Aegis 实例
 * @returns Aegis 实例
 */
export function getAegis(): IAegis | null {
  return aegisInstance;
}

/**
 * 安全更新 Aegis 的 uin
 * 优先使用 setConfig({ uin })，旧接口 setUin 仅作为兜底
 */
function applyAegisUin(instance: IAegis, uin: string): boolean {
  if (!uin) return false;

  const inst = instance as any;

  if (typeof inst.setConfig === 'function') {
    inst.setConfig({ uin });
    return true;
  }

  if (typeof inst.setUin === 'function') {
    inst.setUin(uin);
    return true;
  }

  if (inst.config && typeof inst.config === 'object') {
    inst.config.uin = uin;
    return true;
  }

  console.warn('[Aegis] 当前 SDK 实例不支持动态更新 uin');
  return false;
}

/**
 * 设置用户 ID
 * @param uin 用户唯一 ID
 */
export function setAegisUin(uin: string): void {
  if (aegisInstance) {
    applyAegisUin(aegisInstance, uin);
  }
}

/**
 * 销毁并重建 Aegis 实例（用于 uin 从空变为有值时的场景）
 * 仅当实例已存在且 uin 确实不同时才重建
 */
export function reinitAegisIfUinChanged(uin: string): void {
  if (!aegisConfig || !aegisConfig.id || !uin) return;

  const currentUin = (aegisInstance as any)?.config?.uin;
  if (String(currentUin) === String(uin)) return;

  // 销毁旧实例
  try {
    (aegisInstance as any)?.destroy?.();
  } catch {
    // 忽略销毁失败
  }

  // 重建实例（带 uin）
  aegisInstance = new Aegis({
    reportApiSpeed: true,
    reportAssetSpeed: true,
    spa: true,
    hostUrl: 'https://rumt-zh.com',
    ...aegisConfig,
    uin,
  }) as IAegis;

  console.log('[Aegis] instance reinitialized with uin:', uin);
}

/**
 * 根据当前 sdkappid 更新 uin
 * @returns 是否更新成功
 */
export function updateUinFromSdkAppId(): boolean {
  const sdkAppId = getUinFromStorage();
  if (sdkAppId && aegisInstance) {
    return applyAegisUin(aegisInstance, sdkAppId);
  }
  return false;
}

/**
 * 启用自动监听 sdkappid 变化并更新 uin
 */
export function enableAutoUpdateUin(): void {
  if (storageEventListener) return;

  storageEventListener = (e: StorageEvent) => {
    if (e.key === 'sdk_app_id' && aegisInstance) {
      const newUin = e.newValue || undefined;
      if (newUin) {
        applyAegisUin(aegisInstance, newUin);
        console.log('[Aegis] uin updated from sdk_app_id:', newUin);
      }
    }
  };

  window.addEventListener('storage', storageEventListener);
}

/**
 * 禁用自动监听
 */
export function disableAutoUpdateUin(): void {
  if (storageEventListener) {
    window.removeEventListener('storage', storageEventListener);
    storageEventListener = null;
  }
}

/**
 * 检查是否已初始化
 */
export function isAegisInited(): boolean {
  return aegisInstance !== null;
}

export { Aegis };
