/**
 * 礼物相关类型定义
 * 与 API 文档保持一致
 */
/** 礼物多语言详情 */
export interface GiftLanguageDetail {
    /** 语言代码 */
    language: string;
    /** 名称 */
    name: string;
    /** 描述 */
    description?: string;
}
/**
 * 分类多语言翻译详情
 * 每个对象表示某个语言下的分类名称和描述
 */
export interface CategoryLanguageDetail {
    /** 该语言下的分类名称 */
    categoryName: string;
    /** 该语言下的分类描述 */
    categoryDescription: string;
    /** 语言代码，如 zh-CN、en-US */
    language: string;
}
/** 礼物分类项（与 API 文档一致） */
export interface GiftCategoryItem {
    /** 分类 ID */
    id: string;
    /** 分类名称（已根据当前语言本地化） */
    name: string;
    /** 分类描述（已根据当前语言本地化） */
    description?: string;
    /** 扩展信息 */
    extensionInfo?: string;
    /** 礼物 ID 列表 */
    giftIds?: string[];
    /** 礼物数量 */
    giftCount?: number;
    /** 多语言列表 */
    languageList?: CategoryLanguageDetail[];
    /** @deprecated 旧字段名，等价于 name（用于语言切换时的 fallback） */
    defaultName?: string;
    /** @deprecated 旧字段名，等价于 description（用于语言切换时的 fallback） */
    defaultDescription?: string;
}
/** 礼物项（与 API 文档一致） */
export interface GiftItem {
    /** 礼物 ID */
    id: string;
    /** 礼物名称（已根据当前语言本地化） */
    name: string;
    /** 图标 URL */
    iconUrl: string;
    /** 价格（虚拟货币） */
    price: number;
    /** 动画 URL */
    animationUrl?: string;
    /** 是否启用 */
    enabled?: boolean;
    /** 扩展信息 */
    extensionInfo?: string;
    /** 描述（已根据当前语言本地化） */
    description?: string;
    /** 所属分类 ID 列表 */
    categoryIds?: string[];
    /** 所属分类名称列表（用于表格展示） */
    categories?: string[];
    /** 等级 */
    level?: string;
    /** 创建时间 */
    createdAt?: string;
    /** 多语言列表 */
    languageList?: GiftLanguageDetail[];
    /** @deprecated 旧字段名，等价于 name（用于语言切换时的 fallback） */
    defaultName?: string;
    /** @deprecated 旧字段名，等价于 description（用于语言切换时的 fallback） */
    defaultDescription?: string;
}
/** 创建礼物参数（与 API 文档一致） */
export interface CreateGiftParams {
    /** 礼物 ID（自定义） */
    id: string;
    /** 礼物名称 */
    name: string;
    /** 图标 URL */
    iconUrl: string;
    /** 价格（虚拟货币） */
    price: number;
    /** 动画 URL */
    animationUrl?: string;
    /** 是否启用 */
    enabled?: boolean;
    /** 扩展信息 */
    extensionInfo?: string;
    /** 等级 */
    level?: string;
    /** 描述 */
    description?: string;
    /** 所属分类 ID 列表 */
    categoryIds?: string[];
}
/** 更新礼物参数（与 API 文档一致） */
export interface UpdateGiftParams {
    /** 礼物 ID */
    giftId: string;
    /** 礼物名称 */
    name?: string;
    /** 图标 URL */
    iconUrl?: string;
    /** 价格 */
    price?: number;
    /** 动画 URL */
    animationUrl?: string;
    /** 等级 */
    level?: string;
    /** 描述 */
    description?: string;
    /** 扩展信息 */
    extensionInfo?: string;
    /** 所属分类 ID 列表 */
    categoryIds?: string[];
}
/** 礼物多语言查询参数（与 API 文档一致） */
export interface GiftLanguageQueryParams {
    /** 礼物 ID */
    giftId: string;
    /** 语言代码 */
    language: string;
}
/** 礼物多语言设置参数（与 API 文档一致） */
export interface GiftLanguageSetParams extends GiftLanguageQueryParams {
    /** 名称 */
    name: string;
    /** 描述 */
    description?: string;
}
/** 礼物多语言信息（与 API 文档一致） */
export interface GiftLanguageInfo {
    /** 名称 */
    name: string;
    /** 描述 */
    description?: string;
}
/** 创建礼物分类参数（与 API 文档一致） */
export interface CreateGiftCategoryParams {
    /** 分类 ID */
    categoryId: string;
    /** 分类名称 */
    name?: string;
    /** 分类描述 */
    description?: string;
    /** @deprecated 旧字段名，等价于 name */
    defaultName?: string;
    /** @deprecated 旧字段名，等价于 description */
    defaultDesc?: string;
    /** 扩展信息 */
    extensionInfo?: string;
}
/** 更新礼物分类参数（与 API 文档一致） */
export interface UpdateGiftCategoryParams {
    /** 分类 ID */
    categoryId: string;
    /** 分类名称 */
    name?: string;
    /** 分类描述 */
    description?: string;
    /** @deprecated 旧字段名，等价于 name */
    defaultName?: string;
    /** @deprecated 旧字段名，等价于 description */
    defaultDesc?: string;
    /** 扩展信息 */
    extensionInfo?: string;
}
/** 添加礼物-类别关联关系参数 */
export interface AddGiftCategoryRelationsParams {
    /** 礼物 ID */
    giftId: string;
    /** 要添加的分类 ID 列表 */
    categoryIds: string[];
}
/** 删除礼物-类别关联关系参数 */
export interface DeleteGiftCategoryRelationsParams {
    /** 礼物 ID */
    giftId: string;
    /** 要删除的分类 ID 列表 */
    categoryIds: string[];
}
/** 礼物分类多语言查询参数（与 API 文档一致） */
export interface GiftCategoryLanguageQueryParams {
    /** 分类 ID */
    categoryId: string;
    /** 语言代码 */
    language: string;
}
/** 礼物分类多语言设置参数（与 API 文档一致） */
export interface GiftCategoryLanguageSetParams extends GiftCategoryLanguageQueryParams {
    /** 名称 */
    name: string;
    /** 描述 */
    description?: string;
}
/** 礼物列表查询参数（与 API 文档一致） */
export interface GiftListQueryParams {
    /** 语言代码（可选） */
    language?: string;
}
/** 礼物列表查询结果（包含分类列表，与 API 文档一致） */
export interface GiftListResult {
    /** 礼物列表 */
    giftList: GiftItem[];
    /** 分类列表（随礼物列表一起返回） */
    giftCategoryList: GiftCategoryItem[];
}
/** @deprecated UI 组件历史命名，等价于 { gifts: GiftItem[]; total: number; categories?: GiftCategoryItem[] } */
export interface GiftListResponse {
    gifts: GiftItem[];
    total: number;
    categories?: GiftCategoryItem[];
}
