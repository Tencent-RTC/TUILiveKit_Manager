import type { SurveyScene } from './rum-reporter';
/**
 * 反馈入口标识，同时作为 conversion_click 的触点名（ext1）。
 * internal-tools「Demo 转化」页按该值归因各入口带来的点击量。
 */
export type SurveyEntry = 
/** 左下角 fixed 常驻反馈按钮 */
'survey_fab'
/** 跑马灯「意见反馈」文案 */
 | 'survey_feedback';
/**
 * 打开反馈问卷：上报触点后在新标签页打开腾讯问卷。
 *
 * 触点上报先于跳转，且失败不阻塞（RUM 未初始化时也要让用户能填问卷）。
 *
 * @param entry 入口标识，用于区分点击来源
 * @param scene 场景（mock_demo / build_demo）
 */
export declare function openSurvey(entry: SurveyEntry, scene: SurveyScene): void;
