/**
 * SVGA 相关处理
 */
import type { Parser as SVGAParser } from 'svgaplayerweb';
export declare function getSvgaParser(): InstanceType<typeof SVGAParser>;
/** 初始化共享的 SVGA Parser（由各前端项目在导入 svgaplayerweb 后调用） */
export declare function initSvgaParser(ParserClass: new () => InstanceType<typeof SVGAParser>): void;
/** 获取 SVGA Parser（如果已初始化），否则返回 null */
export declare function getSvgaParserIfInited(): InstanceType<typeof SVGAParser> | null;
/**
 * 验证 SVGA URL 是否可加载和解析
 */
export declare function validateSvgaUrl(url: string, timeout?: number): Promise<true>;
/**
 * 验证本地 SVGA 文件是否有效
 */
export declare function validateSvgaFile(file: File | Blob, timeout?: number): Promise<true>;
