export const CUSTOMER_EXTENSION_PROTOCOL_VERSION = '1' as const;
export const CUSTOMER_EXTENSION_PROTOCOL_MAJOR = '1' as const;
export const LIVE_MANAGER_COMPONENTS_API_VERSION = '1.0.0' as const;
export const LIVE_MANAGER_COMPONENTS_API_VERSION_RANGE = '^1.0.0' as const;

export type CustomerExtensionProtocolVersion = typeof CUSTOMER_EXTENSION_PROTOCOL_VERSION;

export interface BrandConfig {
  appName?: string;
  pageTitle?: string;
  logoUrl?: string;
  primaryColor?: string;
  defaultAvatarUrl?: string;
  defaultCoverUrl?: string;
}

export type FeatureFlagKey =
  | 'enableGift'
  | 'enableGiftCategory'
  | 'enableLiveMonitor'
  | 'enableLiveControl'
  | 'enableUpload'
  | 'enableDebugInfo';

export interface FeatureFlags {
  enableGift?: boolean;
  enableGiftCategory?: boolean;
  enableLiveMonitor?: boolean;
  enableLiveControl?: boolean;
  enableUpload?: boolean;
  enableDebugInfo?: boolean;
}

export interface AppMenu {
  key: string;
  title: string;
  path: string;
  icon?: string;
  order?: number;
  hidden?: boolean;
  requiresAuth?: boolean;
  feature?: FeatureFlagKey;
}

export interface MenuExtension {
  hidden?: string[];
  rename?: Record<string, string>;
  order?: string[];
  extraMenus?: AppMenu[];
}

export interface AppRoute<TComponent = unknown> {
  path: string;
  name: string;
  title: string;
  component: TComponent | (() => Promise<TComponent>);
  requiresAuth?: boolean;
  menuKey?: string;
  feature?: FeatureFlagKey;
}

export interface RouteExtension<TComponent = unknown> {
  extraRoutes?: AppRoute<TComponent>[];
  routeOverrides?: Record<string, TComponent | (() => Promise<TComponent>)>;
  titleOverrides?: Record<string, string>;
}

export interface ComponentSlots<TComponent = unknown> {
  layout?: {
    headerLeft?: TComponent;
    headerRight?: TComponent;
    sidebarTop?: TComponent;
    sidebarBottom?: TComponent;
  };
  liveList?: {
    beforeToolbar?: TComponent;
    afterToolbar?: TComponent;
    tableExtraColumns?: TComponent;
    rowActions?: TComponent;
    liveFormExtraFields?: TComponent;
  };
  liveMonitor?: {
    monitorCardExtraInfo?: TComponent;
    userActionExtraItems?: TComponent;
  };
  liveControl?: {
    beforeLiveInfo?: TComponent;
    afterLiveInfo?: TComponent;
    customControlPanel?: TComponent;
  };
  giftConfig?: {
    giftTableExtraColumns?: TComponent;
    giftFormExtraFields?: TComponent;
    giftRowActions?: TComponent;
  };
}

export interface RuntimeConfig {
  apiBaseUrl?: string;
  authToken?: string;
  language?: 'zh-CN' | 'en-US';
  routerMode?: 'hash' | 'memory';
  popupContainer?: HTMLElement | string;
}

export interface CustomerExtensionV1<TComponent = unknown> {
  version: CustomerExtensionProtocolVersion;
  brand?: BrandConfig;
  menus?: MenuExtension;
  routes?: RouteExtension<TComponent>;
  components?: ComponentSlots<TComponent>;
  features?: FeatureFlags;
  runtime?: RuntimeConfig;
}

export interface ResolvedCustomerConfig<TComponent = unknown> {
  version: '1';
  brand: BrandConfig;
  menus: AppMenu[];
  routes?: RouteExtension<TComponent>;
  components?: ComponentSlots<TComponent>;
  features: Required<FeatureFlags>;
  runtime: RuntimeConfig;
}

export function defineCustomerExtension<TComponent = unknown>(
  extension: CustomerExtensionV1<TComponent>,
): CustomerExtensionV1<TComponent> {
  if (extension.version !== '1') {
    throw new Error(`Unsupported customer extension version: ${extension.version}`);
  }
  return extension;
}

export function resolveBrandConfig(defaultBrand: BrandConfig, extension?: BrandConfig): BrandConfig {
  return {
    ...defaultBrand,
    ...dropUndefined(extension),
  };
}

export function resolveFeatureFlags(
  defaultFeatures: Required<FeatureFlags>,
  extension?: FeatureFlags,
): Required<FeatureFlags> {
  return {
    ...defaultFeatures,
    ...dropUndefined(extension),
  };
}

export function resolveRuntimeConfig(defaultRuntime: RuntimeConfig, extension?: RuntimeConfig): RuntimeConfig {
  return {
    ...defaultRuntime,
    ...dropUndefined(extension),
  };
}

export function resolveMenus(
  defaultMenus: AppMenu[],
  extension?: MenuExtension,
  features?: Required<FeatureFlags>,
): AppMenu[] {
  const hidden = new Set(extension?.hidden ?? []);
  const rename = extension?.rename ?? {};
  const orderIndex = new Map((extension?.order ?? []).map((key, index) => [key, index]));
  const normalizedDefaultMenus = defaultMenus
    .filter((menu) => !menu.hidden)
    .filter((menu) => !hidden.has(menu.key))
    .filter((menu) => !menu.feature || features?.[menu.feature] !== false)
    .map((menu, index) => ({
      ...menu,
      title: rename[menu.key] ?? menu.title,
      order: orderIndex.has(menu.key) ? orderIndex.get(menu.key) : menu.order ?? index,
    }));

  const extraMenus = (extension?.extraMenus ?? [])
    .filter((menu) => !menu.hidden)
    .filter((menu) => !menu.feature || features?.[menu.feature] !== false)
    .map((menu, index) => ({
      ...menu,
      order: orderIndex.has(menu.key)
        ? orderIndex.get(menu.key)
        : menu.order ?? normalizedDefaultMenus.length + index,
    }));

  const menus = [...normalizedDefaultMenus, ...extraMenus];
  assertUniqueMenuKeys(menus);

  return menus.sort((left, right) => {
    const leftOrder = left.order ?? 0;
    const rightOrder = right.order ?? 0;
    if (leftOrder !== rightOrder) return leftOrder - rightOrder;
    return menus.indexOf(left) - menus.indexOf(right);
  });
}

export function assertUniqueMenuKeys(menus: AppMenu[]): void {
  const seen = new Set<string>();
  for (const menu of menus) {
    if (seen.has(menu.key)) {
      throw new Error(`Duplicate menu key: ${menu.key}`);
    }
    seen.add(menu.key);
  }
}

export interface CustomerExtensionContractOptions {
  coreRouteNames?: string[];
  allowedRouteOverrides?: string[];
}

export interface CustomerExtensionContractResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
}

export function validateCustomerExtensionContract<TComponent = unknown>(
  extension: CustomerExtensionV1<TComponent>,
  resolvedMenus: AppMenu[],
  options: CustomerExtensionContractOptions = {},
): CustomerExtensionContractResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  if (extension.version !== CUSTOMER_EXTENSION_PROTOCOL_VERSION) {
    errors.push(`Unsupported customer extension version: ${extension.version}`);
  }

  try {
    assertUniqueMenuKeys(resolvedMenus);
  } catch (error) {
    errors.push(error instanceof Error ? error.message : String(error));
  }

  const extraRouteNames = new Set((extension.routes?.extraRoutes ?? []).map((route) => route.name));
  const extraRoutePaths = new Set((extension.routes?.extraRoutes ?? []).map((route) => normalizePath(route.path)));
  for (const menu of extension.menus?.extraMenus ?? []) {
    const path = normalizePath(menu.path);
    if (!extraRouteNames.has(menu.key) && !extraRoutePaths.has(path)) {
      errors.push(`Extra menu "${menu.key}" must match an extra route name or path.`);
    }
  }

  const allowedOverrides = new Set(options.allowedRouteOverrides ?? options.coreRouteNames ?? []);
  for (const routeName of Object.keys(extension.routes?.routeOverrides ?? {})) {
    if (!allowedOverrides.has(routeName)) {
      errors.push(`Route override "${routeName}" is not allowed.`);
    }
  }

  for (const route of extension.routes?.extraRoutes ?? []) {
    if (options.coreRouteNames?.includes(route.name)) {
      errors.push(`Extra route "${route.name}" conflicts with a core route.`);
    }
    if (typeof route.component !== 'function') {
      warnings.push(`Extra route "${route.name}" should use dynamic import for component loading.`);
    }
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
  };
}

function normalizePath(path: string): string {
  return path.startsWith('/') ? path : `/${path}`;
}

function dropUndefined<T extends object>(value?: T): Partial<T> {
  if (!value) return {};
  return Object.fromEntries(
    Object.entries(value).filter(([, entryValue]) => entryValue !== undefined),
  ) as Partial<T>;
}
