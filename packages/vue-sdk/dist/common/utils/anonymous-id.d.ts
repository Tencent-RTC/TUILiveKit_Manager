/**
 * 匿名用户标识（浏览器维度）
 *
 * 用于在「无真实 SDKAppID 的 mock demo 场景」下区分不同试用用户，
 * 使 demo 转化分析能够按用户去重（而非所有 mock 用户共用一个占位 SDKAppID）。
 *
 * 实现选择 localStorage 持久化随机 ID，而非 canvas 等设备指纹，理由：
 * 1. 精确无碰撞：设备指纹（canvas/字体 hash）存在同机型同浏览器撞 hash 的可能；
 * 2. 隐私合规：canvas 指纹在部分法域（如 GDPR）有合规争议，随机 ID 无此问题；
 * 3. 稳定可用：同一浏览器内 localStorage 持久化，跨会话可追踪同一试用者；
 * 4. 零依赖零体积：无需引入 @fingerprintjs/fingerprintjs 等库。
 *
 * 局限：清除浏览器存储后 ID 会重置（试用者会重新计数）。对 demo 转化分析可接受。
 */
/**
 * 获取当前浏览器的匿名用户标识。
 * 优先 localStorage 持久化 ID，保证跨会话稳定；不可用时退化为会话级随机 ID。
 */
export declare function getAnonymousId(): string;
