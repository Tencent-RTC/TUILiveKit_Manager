{/* @slate id="95k6hVzdu3LilYzx1g7BB" nodeId="07c5e384-2610-43b2-80c5-fa53563e2991" */}
## 概述

{/* @slate id="dZSzZ2C8c82jr-5swMsbQ" */}
本文档将帮助您使用 **TUILiveKit Manager React SDK** 快速构建直播运营管理后台。

{/* @slate id="VoklH_0oYAyRrhpbK_Ieh" */}
本包以**闭源交付**模式发布，仅包含编译后的产物和类型声明（`.js` / `.d.ts` / `.css`），不包含核心业务源码。

## 架构概览

TUILiveKit Manager React SDK 提供了两种开发模式，适用于不同场景：
<div style="background:#f7f8fa;border-radius:10px;padding:20px;font-family:-apple-system,BlinkMacSystemFont,sans-serif;max-width:680px;margin:16px 0;">
  <div style="text-align:center;font-size:15px;font-weight:700;color:#0052d9;padding:10px 0;border-bottom:2px solid #e0e6ed;margin-bottom:14px;">您的管理后台</div>
  <div style="background:#fff3e0;border-radius:8px;border:2px solid #ffcc02;padding:12px 16px;margin-bottom:4px;">
    <div style="font-size:13px;font-weight:600;color:#e65100;margin-bottom:4px;">Demo 工程（可直接运行）</div>
    <div style="font-size:12px;color:#888;">开箱即用的完整管理后台，基于下方组件和 Hooks 构建</div>
  </div>
  <div style="text-align:center;font-size:14px;color:#bbb;line-height:1.2;margin:0;">↓ 基于 ↓</div>
  <div style="background:#edf4ff;border-radius:8px;border:2px solid #b3d4ff;padding:12px 16px;margin-bottom:4px;">
    <div style="font-size:13px;font-weight:600;color:#0052d9;margin-bottom:8px;">含 UI 开发（预制页面）</div>
    <div style="display:flex;flex-wrap:wrap;gap:6px;">
      <span style="background:#f0f6ff;padding:4px 10px;border-radius:4px;font-size:12px;">LiveMonitor</span>
      <span style="background:#f0f6ff;padding:4px 10px;border-radius:4px;font-size:12px;">LiveList</span>
      <span style="background:#f0f6ff;padding:4px 10px;border-radius:4px;font-size:12px;">LiveControl</span>
      <span style="background:#f0f6ff;padding:4px 10px;border-radius:4px;font-size:12px;">GiftConfig</span>
      <span style="background:#f0f6ff;padding:4px 10px;border-radius:4px;font-size:12px;">GiftCategory</span>
      <span style="background:#f0f6ff;padding:4px 10px;border-radius:4px;font-size:12px;">RiskControl</span>
    </div>
  </div>
  <div style="text-align:center;font-size:14px;color:#bbb;line-height:1.2;margin:0;">↓ 内部调用 ↓</div>
  <div style="display:flex;gap:8px;margin-bottom:4px;">
    <div style="flex:1;background:#f0f2f5;border-radius:8px;border:2px solid #ccd5e0;padding:12px 16px;">
      <div style="font-size:13px;font-weight:600;color:#555;margin-bottom:8px;">无 UI 开发（核心 Hooks）</div>
      <div style="display:flex;flex-wrap:wrap;gap:4px;">
        <span style="background:#e8f5e9;padding:3px 8px;border-radius:4px;font-size:11px;color:#2e7d32;">useLiveMonitorState</span>
        <span style="background:#e8f5e9;padding:3px 8px;border-radius:4px;font-size:11px;color:#2e7d32;">useGiftState</span>
        <span style="background:#e8f5e9;padding:3px 8px;border-radius:4px;font-size:11px;color:#2e7d32;">useRiskControlState</span>
      </div>
    </div>
    <div style="flex:1;background:#fff;border-radius:8px;border:1px solid #e0e6ed;padding:12px 16px;">
      <div style="font-size:13px;font-weight:600;color:#333;margin-bottom:8px;">音视频 &amp; IM 渲染</div>
      <div style="display:flex;flex-wrap:wrap;gap:4px;">
        <span style="background:#e8f5e9;padding:3px 8px;border-radius:4px;font-size:11px;color:#2e7d32;">LiveView</span>
        <span style="background:#e8f5e9;padding:3px 8px;border-radius:4px;font-size:11px;color:#2e7d32;">BarrageList</span>
        <span style="background:#e8f5e9;padding:3px 8px;border-radius:4px;font-size:11px;color:#2e7d32;">useLiveListState</span>
        <span style="background:#e8f5e9;padding:3px 8px;border-radius:4px;font-size:11px;color:#2e7d32;">useLoginState</span>
      </div>
      <div style="font-size:11px;color:#888;margin-top:6px;">… 等 tuikit-atomicx-react 能力</div>
    </div>
  </div>
  <div style="background:#fff;border-radius:8px;border:1px solid #e0e6ed;padding:10px 16px;text-align:center;font-size:12px;color:#666;">
    <span style="font-weight:600;color:#333;">配置 &amp; 定制：</span>
    <span style="background:#f3f3f3;padding:3px 8px;border-radius:4px;font-size:11px;margin:0 2px;">configureLiveManager</span>
  </div>
</div>




<Table rowHeader id="P0toPCscwdq6Ojj5eB_HJ">
<Row id="mcMSCn8Eq6DCzlK7aRxOV">
<Cell id="CvowQJG3JomT7YqDJJ3Rc">

{/* @slate id="7nHPi9-LmoVjbG5Kle9LN" */}
模式

</Cell>
<Cell id="ehW-pSXnomyTZPkV4OjFZ">

{/* @slate id="KN7ybAgEA0zDgrIq-R0Hr" */}
说明

</Cell>
<Cell id="ktAebQrEYLdfCfD4DGY3E">

{/* @slate id="gb80zd6saOPGHLdjOE16Y" */}
适用场景

</Cell>
</Row>
<Row id="aHP7GUcmwGd-_VIvu6CrY">
<Cell id="G1K0JJ0mEaJfltCVjLgsK">

{/* @slate id="dXYpmXXSm2Ur_e3Y633bX" */}
**含 UI 开发**

</Cell>
<Cell id="vgOytBrsjoMCt7R3GuJtR">

{/* @slate id="Gp4WMUxn02CHoQk-MphIi" */}
直接使用预置页面组件，开箱即用

</Cell>
<Cell id="uYPnmpoJrmCo-zV_T_OCx">

{/* @slate id="E4caLA9mRUe6njXiNyA-a" */}
快速集成、标准化运营后台

</Cell>
</Row>
<Row id="Agcjs_XxEpcYaroKpMr9Q">
<Cell id="yWRU-voxzOqd67SFYYAHy">

{/* @slate id="toIGuayt141cS0Rwy_C3R" */}
**无 UI 开发**

</Cell>
<Cell id="AxqJiAaZzDzHY7QNCFHuf">

{/* @slate id="-UNS20pXvfyXXijxU31fb" */}
使用三大核心 State Hooks + tuikit-atomicx-react + tuikit-core 自行搭建 UI

</Cell>
<Cell id="BAh8yRARlgMyLytXwgp_B">

{/* @slate id="QxGaBOig3uW3sQW4-A4MH" */}
深度定制、嵌入现有系统、非标准交互

</Cell>
</Row>
</Table>

{/* @slate id="UYz-nX0qJlrF25GnlwRnR" */}
两种模式可以混合使用，共享同一套配置和定制能力。

{/* @slate id="fOe5XT92Bv0TpHwfdHoqh" nodeId="c7c39ff9-2c33-47ec-8c02-8df2f2faec9d" */}
## 准备工作

{/* @slate id="n9DFeyBkdDKvjpUb0K4fr" nodeId="9537d0d3-6678-42ad-a70b-59f9d1b3c279" */}
### 步骤1：开通服务

{/* @slate id="NBvmcm493eZPnf1sJrEuI" */}
请参见 <Ref type="link" href="https://cloud.tencent.com/document/product/647/105439" id="IdxxVgPakq5j5zfLxCPnZ">开通 TUILiveKit 服务</Ref> 获取 SDK 使用权限。

{/* @slate id="jB3EcvpV7J61HzB-mbkcG" nodeId="e1c59916-a1cb-432c-9722-ef064347c639" */}
### 步骤2：安装依赖

{/* @slate id="qz57aYF6iDsjWKgchdQW7" */}
在您的 React 项目中安装本 SDK。使用 pnpm 安装时，Peer 依赖将自动一并安装：

{/* @slate id="5TGQyqunTBqtnrwso2B8k" */}
```bash
pnpm add tuikit-live-manager-sdk-react
```

{/* @slate id="K8OYEMPN3kOb_lPqLs99h" nodeId="787827ad-5565-4883-9c7e-1fdc2af1557a" */}
## 含 UI 开发：使用预置页面组件

{/* @slate id="CCbaR-fFiJN56GtkAqoSw" */}
最快的方式是直接挂载预置组件，几分钟即可拥有完整的管理后台。

{/* @slate id="rUhVRHnbz7sHJq5yYgcui" nodeId="5aea1a3d-f740-4a8c-8ff3-a78160c915cd" */}
### 配置 SDK

{/* @slate id="POzba8eOi-zEYjuzT-3_7" */}
创建 `live-manager.ts` 配置入口：

{/* @slate id="jlTV6BljTkkcfMm58PHAj" */}
```ts
import { configureLiveManager } from 'tuikit-live-manager-sdk-react';

const config = configureLiveManager({
  brand: {
    app: {
      title: '直播间管理系统',
    },
  },
  menus: {
    liveMonitor: { enabled: true },
    roomList: { enabled: true },
    giftConfig: { enabled: true },
  },
});

export default config;
```

{/* @slate id="evfAScw4llXhNbW-vZVHW" nodeId="e1130627-200a-4b3f-a166-67eea6e042f4" */}
### 方式一：直接使用组件

{/* @slate id="MjMTj9KVrGtzFJ2MpP7zX" */}
适用于已将 SDK 作为依赖引入的 React 项目：

{/* @slate id="ss14z78LJFbbhMwiU-2dJ" */}
```tsx
import { LiveMonitor, LiveList, LiveControl, GiftConfig, GiftCategory } from 'tuikit-live-manager-sdk-react';
import { createRoot } from 'react-dom/client';

function App() {
  return (
    <div>
      <LiveList />
    </div>
  );
}

createRoot(document.getElementById('root')!).render(<App />);
```

{/* @slate id="DfyNxJG8V7Srv1-xCXTEe" nodeId="c035d671-9d93-4781-89f2-cca069a061c0" */}
### 预置页面组件

<Table rowHeader id="yVIo1Z6oc7l5K6Jc6BzWr">
<Row id="WL0oWRw73GsRHD4fSx6ms">
<Cell id="CBoMB_CyesIztMiwjX-bU">

{/* @slate id="i7nnKs6xduZlQ4cvNKTS-" */}
组件

</Cell>
<Cell id="-4PE2cwb1_echab-Yn8h8">

{/* @slate id="xhdarDf2QizG_Ng0y9r7j" */}
模块标识

</Cell>
<Cell id="K__G54BSSSTGvBo7_clI4">

{/* @slate id="DddedrSzDUqdGgfUZ7r3Z" */}
功能说明

</Cell>
</Row>
<Row id="rf3bAmG1Z_nQMS8JKmHFK">
<Cell id="_omD0ruwFGEDsym_VAqxz">

{/* @slate id="KOweCMAFUpblCKZdjNTok" */}
`LiveMonitor`

</Cell>
<Cell id="4qY-zVFzyuWs7u9_G6oGZ">

{/* @slate id="GefL75VFZ4SAoXyPnGqoI" */}
`live-monitor`

</Cell>
<Cell id="CWUCzVAFjZ756Ekuh8FO5">

{/* @slate id="aTLmIGc_phCafP6Lekiws" */}
多路同屏监播，低延迟播放

</Cell>
</Row>
<Row id="LNg6J3uhBaE-X2S5MOfkm">
<Cell id="4mXO5B3r6yMh5Amv8-I31">

{/* @slate id="aAUQrQHhnJMfx4426hUhF" */}
`LiveList`

</Cell>
<Cell id="5YB2q3gFBYSfZUORRDNDl">

{/* @slate id="GcHbNmsSk1jVDRl0IHD99" */}
`room-list`

</Cell>
<Cell id="eXHksl_9D1WIkqzJlD3yz">

{/* @slate id="FH1vmRrf4tjLN3u0piJJi" */}
直播间列表，支持创建/编辑/关闭

</Cell>
</Row>
<Row id="Jb396pLsrl86_zAq2SqIU">
<Cell id="IG5GxPEcWe2hM8c6BDGWW">

{/* @slate id="tO_mMqkQX_909iI4FAbMM" */}
`LiveControl`

</Cell>
<Cell id="0mZN43rlPbcVvB31E6G3h">

{/* @slate id="Cw_Ch_Gb-4MhWpYh1XgSz" */}
`room-control`

</Cell>
<Cell id="OW-YUl4av6GtBAl3ffS9z">

{/* @slate id="0IJfh3XXR8TcLQn3LwTZz" */}
直播间详情、数据统计、用户管理

</Cell>
</Row>
<Row id="Zd1A7fJU5hAe7LM983961">
<Cell id="jNBcMHVYsaANrGyIcmD8r">

{/* @slate id="xKWCuC7Fu2Q_KY8vjd0Iq" */}
`GiftConfig`

</Cell>
<Cell id="oEsHY3AxKtrbid_ELH3E2">

{/* @slate id="XGpT2eVnLBYWIi_jjzV9j" */}
`gift-config`

</Cell>
<Cell id="1BElj5Yk-t_dT6XaVhI3U">

{/* @slate id="66jRA-2DRONiOPDLgljl0" */}
礼物增删改、分类管理

</Cell>
</Row>
<Row id="zgAQuC9kz6psxkFN9B2w2">
<Cell id="YDAZen8rfjT512YDiAovw">

{/* @slate id="hU-XyMNFP0oRDIAzFaYIC" */}
`GiftCategory`

</Cell>
<Cell id="DeaG4N3iIHklYe7whuSil">

{/* @slate id="iXH7vN_ViQYbYVGtiY5fY" */}
`gift-config`

</Cell>
<Cell id="OP8qK-08KY61NCfZsbcta">

{/* @slate id="HZzd3UvkPOmUxLzdLYwdX" */}
礼物分类管理

</Cell>
</Row>
<Row id="hV38oPFqwsS1LMpjc1n0a">
<Cell id="BiOmhOuEhogoqzGeludNI">

{/* @slate id="Fgf8H6sS4twQVU78-RY74" */}
`RiskControl`

</Cell>
<Cell id="dbU3-ymN-0spoPYrBUsT5">

{/* @slate id="t3SU8ZGgnP1o4xXdk8NHv" */}
`risk-control`

</Cell>
<Cell id="njhSkEjOLAUtgENoILPf8">

{/* @slate id="17CGNRUT4o2zoWk5JJuzD" */}
内容审核与风险管控

</Cell>
</Row>
</Table>

{/* @slate id="vhHTq4k1DWRteTcgcsWv5" */}
> {/* @slate id="ooout7xaObFGiVBun8NIy" */}
> 按需懒加载：`import { LiveList } from 'tuikit-live-manager-sdk-react/views/LiveList'`

{/* @slate id="rZGRf0bS-Q8p6iMycQg-q" nodeId="135046e1-b548-4274-a641-761f24049474" */}
## 无 UI 开发：使用核心 State Hooks

{/* @slate id="rEmxua6HlzcIWOWN8cbdq" */}
当您需要完全自定义 UI、或需要将管理功能嵌入到现有系统中时，使用以下组合自行搭建：

{/* @slate id="7ePbXs3AvUKARKKi5e5w_" */}
```text
您的自定义 UI（React 组件）
    │
    ├── SDK 三大核心 Hooks        ← 数据与操作层
    │   ├── useLiveMonitorState()   直播监控
    │   ├── useGiftState()           礼物管理
    │   └── useRiskControlState()    风控管理
    │
    ├── tuikit-atomicx-react      ← 音视频 & IM 渲染层
    │   ├── LiveView               直播视频画面渲染
    │   ├── BarrageList / BarrageInput  弹幕列表与输入
    │   ├── useLiveListState       加入/离开直播
    │   ├── useLiveAudienceState   观众列表
    │   ├── useLoginState          登录认证
    │   └── useLivePlayerState     播放器控制
    │
    └── tuikit-core 底层能力      ← 认证、HTTP、RUM、工具等
```

{/* @slate id="Zz9RqN-HzUoRDeCr-Y3ca" */}
> {/* @slate id="eUN5_iYZHhouQ4YquYasj" */}
> **关键区别**：SDK 的 State Hooks 负责**管理后台数据操作**（列出直播间、配置礼物、审核内容等），`tuikit-atomicx-react` 负责**音视频与 IM 渲染**（推拉流画面、弹幕消息、观众列表等）。完整的无 UI 开发需要同时使用两者。

{/* @slate id="ip3IWbsr7b6aeowYpYZ_5" nodeId="0a092cd8-d5f8-49e3-ab53-5e86bf3042ac" */}
### 核心架构

{/* @slate id="gd4AdI8NrdTSqm_QsnIr9" nodeId="f1d09c88-fc41-4411-a7eb-6c7ba74c10c8" */}
### useLiveMonitorState()

{/* @slate id="oHug26q7sd0FJj4x72uSg" */}
直播监控核心 Hook，单例模式。管理直播间列表、创建/编辑/结束直播、推拉流操作。

{/* @slate id="WZ6f9S0Zy2mammg_V2o2D" */}
```ts
import { useLiveMonitorState } from 'tuikit-live-manager-sdk-react';

const {
  init,            // 初始化 SDK 配置（baseURL 等）
  liveList,        // 直播列表 MonitorLiveInfo[]
  hasMore,         // 是否还有更多数据
  currentLive,     // 当前选中的直播
  setCurrentLive,  // 设置当前直播间（传入 liveId）
  fetchLiveList,   // 获取直播列表（支持分页）
  createLive,      // 创建直播 → Promise<MonitorLiveInfo>
  updateLive,      // 更新当前直播间信息
  endLive,         // 结束直播（支持指定 liveId 或使用 currentLive）
  fetchLiveDetail,  // 获取直播间详情（含推流信息）
  fetchLiveStats,   // 获取直播间统计
  startPlay,        // 开始播放（liveId + containerId）
  stopPlay,         // 停止播放
} = useLiveMonitorState();
```

{/* @slate id="UYk8Fr-GkRNNeopPloH7i" */}
> {/* @slate id="QN1qKjacgKs9cxjnLpUhP" */}
> **提示**：调用 `init({ baseURL })` 后再进行其他操作。这是一个单例 Hook，多组件共享同一实例。

{/* @slate id="Sjr-siWqVyYVfx-KkN95E" */}
**示例：自定义直播间列表**

{/* @slate id="xhH5D7Lx4bJbLIYOEFmak" */}
```tsx
import { useLiveMonitorState } from 'tuikit-live-manager-sdk-react';
import { useEffect, useState } from 'react';

function CustomLiveList() {
  const { init, liveList, fetchLiveList, createLive, setCurrentLive, fetchLiveDetail } = useLiveMonitorState();
  const [name, setName] = useState('');

  useEffect(() => {
    init({ baseURL: 'http://localhost:9000/api' });
    fetchLiveList();
  }, []);

  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={async () => {
        const live = await createLive({ liveName: name, coverUrl: '' });
        setCurrentLive(live.liveId);
        await fetchLiveDetail();
      }}>创建直播间</button>
      <ul>
        {liveList.map(live => (
          <li key={live.liveId} onClick={() => setCurrentLive(live.liveId)}>
            {live.liveName} — {live.onlineCount} 人
          </li>
        ))}
      </ul>
    </div>
  );
}
```

{/* @slate id="MyRwP-b80I_NeWY7u56yy" nodeId="f0279b6d-b5f8-4b07-a172-7e7524e3c739" */}
### useGiftState()

{/* @slate id="X06PeMaC12ckl5X0wr4pX" */}
礼物管理核心 Hook，单例模式。管理礼物的 CRUD 操作、分类管理和多语言配置。

{/* @slate id="rGk48zERarLg19UaJjLZC" */}
```ts
import { useGiftState } from 'tuikit-live-manager-sdk-react';

const {
  giftList,                  // 礼物列表 GiftItem[]
  giftCategoryList,          // 分类列表 GiftCategoryItem[]
  fetchGiftList,             // 获取礼物列表（同时返回分类）
  createGift,                // 创建礼物 → Promise<string>
  updateGift,                // 更新礼物
  deleteGift,                // 删除礼物（传入 giftId）
  createGiftCategory,        // 创建礼物分类
  updateGiftCategory,        // 更新礼物分类
  deleteGiftCategory,        // 删除礼物分类
  addGiftCategoryRelations,  // 添加礼物-分类关联
  deleteGiftCategoryRelations, // 移除礼物-分类关联
  fetchGiftLanguages,        // 获取多语言信息
  setGiftLanguages,          // 设置多语言信息
} = useGiftState();
```

{/* @slate id="ZhobGWEcueEQ7QauJ7ZCw" nodeId="aad29602-b2b9-46a1-846c-268cf83f2573" */}
### useRiskControlState(options)

{/* @slate id="tpnFIMGjpEEn6hzdWvpcC" */}
风控管理核心 Hook。管理内容审核、成员管控和聊天管理。**必须传入** <strong>`liveId`</strong><strong>。</strong>

{/* @slate id="MvtQ7yuaazl7AnD5piM1v" */}
```ts
import { useRiskControlState } from 'tuikit-live-manager-sdk-react';

const {
  // 审核管理
  textModerationAvailable,        // 审核能力是否可用
  moderationMode,                 // 审核模式：cloud | custom
  textModerationList,             // 文本审核记录列表
  textModerationTotal,            // 审核记录总数
  textModerationLoading,          // 审核列表加载状态
  fetchTextModerationList,        // 获取审核列表（支持分页参数）
  approveTextModerationItems,     // 批量放行审核记录
  bypassCorrectionKeyword,        // 绕过纠错关键词（仅 cloud 模式）

  // 成员管理
  muteMember,                     // 禁言成员
  unmuteMember,                   // 取消禁言
  banMember,                      // 封禁成员
  unbanMember,                    // 取消封禁
  mutedList,                      // 禁言列表
  bannedList,                     // 封禁列表

  // 聊天管理
  sendViolationWarning,           // 发送违规警告
  sendAdminMessage,               // 发送管理员消息
} = useRiskControlState({ liveId: 'xxx', pageSize: 20 });
```

{/* @slate id="E0pwomMZ5TnEAkojNbHVi" */}
**示例：自定义风控面板**

{/* @slate id="YM5_yCPearCo6JSfcL37U" */}
```tsx
import { useRiskControlState } from 'tuikit-live-manager-sdk-react';
import { useEffect } from 'react';

function CustomRiskPanel({ liveId }: { liveId: string }) {
  const { textModerationList, fetchTextModerationList, approveTextModerationItems, muteMember } =
    useRiskControlState({ liveId, pageSize: 20 });

  useEffect(() => { fetchTextModerationList(); }, []);

  return (
    <div>
      {textModerationList.map(item => (
        <div key={item.id}>
          <span>{item.content}</span>
          <button onClick={() => approveTextModerationItems({ ids: [item.id] })}>放行</button>
          <button onClick={() => muteMember({ memberAccounts: [item.userId], muteTime: 300 })}>禁言5分钟</button>
        </div>
      ))}
    </div>
  );
}
```

{/* @slate id="vqzToWfDcscr3fU_BvgSM" nodeId="7d358cd7-b178-423f-a09d-c8e150fe320a" */}
### tuikit-atomicx-react 渲染能力

{/* @slate id="Zm-TFOONTgcyf-sf9zSCb" */}
完整的无 UI 开发需要配合 `tuikit-atomicx-react` 提供的音视频与 IM 渲染能力：

<Table rowHeader id="TdeR9d19eurJUdGr3S9Ge">
<Row id="PTRF02NSta0QAhCHqK-4q">
<Cell id="B8lTh7yojTBPysWNKBc6X">

{/* @slate id="s3WS1ba1VqrzphUuuHw64" */}
类别

</Cell>
<Cell id="ooQXh4wwT7ElRluZXo72O">

{/* @slate id="78nq8gUm6BBorgzdsX98x" */}
导入

</Cell>
<Cell id="-_tglHVzpi_yiX9DO2G8M">

{/* @slate id="Uicu0GWxlfYYYwcqpKSUo" */}
说明

</Cell>
</Row>
<Row id="E-H90-Q4wl2pdTn-Wr48j">
<Cell id="okxVW6wGaRXUXoBM1tRkx">

{/* @slate id="Lc0fN9t8_y-Dg9XzSvwkX" */}
视频播放

</Cell>
<Cell id="dlgE9FBYuNTDO3FYzdK4s">

{/* @slate id="D-ao7ZuUnKE53GCflYJnD" */}
`LiveView` (from `tuikit-atomicx-react`)

</Cell>
<Cell id="XD8Zc5Ya-hL20wqvQ3jdH">

{/* @slate id="FXG34DCabpOXckgkHn8K3" */}
直播视频画面渲染组件

</Cell>
</Row>
<Row id="1SbZuCkC-Hs99R242rGtT">
<Cell id="hkgbrWdpz6VEz_dpmQgzn">

{/* @slate id="1-nZcJrw0jXN5bp44ownI" */}
弹幕消息

</Cell>
<Cell id="haTUrPjxTk-Xhtqq0MRdz">

{/* @slate id="bgUIDI8LyBA6h-n_QHskb" */}
`BarrageList`, `BarrageInput` (from `tuikit-atomicx-react`)

</Cell>
<Cell id="29TKGXv7LYstSw8KMBKQL">

{/* @slate id="55qQiWDQBj91D4pJyDcPO" */}
弹幕列表展示与输入框

</Cell>
</Row>
<Row id="KJE-4dR-sxyhy4knRc7jZ">
<Cell id="VmPiVib6cs6rna_ftMsrZ">

{/* @slate id="A3eR457EgVlKA-C9fOTYN" */}
观众列表

</Cell>
<Cell id="Ynvtb-AWnzCw1qxbt5Qw3">

{/* @slate id="6L4fTiw9AewdCKnyHymox" */}
`LiveAudienceList`, `useLiveAudienceState` (from `tuikit-atomicx-react`)

</Cell>
<Cell id="emtgbD9SWbTWBc00Q-r0h">

{/* @slate id="--nQB103oBQ7JzbJc27qt" */}
观众列表组件与状态

</Cell>
</Row>
<Row id="tDLKQpxosPVf_2tAk8tHw">
<Cell id="ALWqjnZWlystXQmWO4hkR">

{/* @slate id="S42cFZ3qWQ7QRojCDAMki" */}
直播操作

</Cell>
<Cell id="OUZXeojSeKboW0c9HRU3P">

{/* @slate id="MSb6XmiUEbOFHe39tsOGz" */}
`useLiveListState`, `LiveListEvent` (from `tuikit-atomicx-react`)

</Cell>
<Cell id="h-YQVju-GNmUZqIxdo9Zm">

{/* @slate id="gAMq2su-W82wQxko0zdGO" */}
加入/离开直播、事件订阅

</Cell>
</Row>
<Row id="BxXbavsgfZHlb9AKisOYM">
<Cell id="LFtz5tC8aXUsLaCrCcUxM">

{/* @slate id="5vpyLiCiF7S4NZR4MMslC" */}
登录认证

</Cell>
<Cell id="RoXLp3ldMpOxh3hgi4DtD">

{/* @slate id="F-LgxKVe2uczN4BgZaouB" */}
`useLoginState` (from `tuikit-atomicx-react`)

</Cell>
<Cell id="_YU1vex5UGjok43d_1Kl4">

{/* @slate id="otThfpP0ExrrRPcyOfn6M" */}
登录及用户信息获取

</Cell>
</Row>
<Row id="yuuYl8o8w6CWKlFJ4tlLr">
<Cell id="ohJVdIhd1w9eNQOdb-X3j">

{/* @slate id="SWzqV8xo7ZXEONrCAvVHq" */}
播放器控制

</Cell>
<Cell id="XAHNwEdThZqg-Pqg473cN">

{/* @slate id="aWmu3p_vDtGW4HNgfCXfk" */}
`useLivePlayerState` (from `tuikit-atomicx-react`)

</Cell>
<Cell id="7sIWC92pwShCW4mhFt-vS">

{/* @slate id="Yvu0PHfnWU8AwCsXuxfXa" */}
控制栏显隐、播放器设置

</Cell>
</Row>
</Table>

{/* @slate id="bI_q-VyUuhOeYBNVLbKAm" nodeId="eec79674-4560-4112-aea3-96ee13c450ab" */}
## 定制开发

{/* @slate id="q8nF8laqO8CkK0wLe6f0Y" nodeId="950f3ce0-af66-4d70-a0ae-b84eab0ed436" */}
### 品牌与菜单配置

{/* @slate id="wy_23wgZhX10XNT5JlHJ-" */}
两种开发模式都支持通过 `CustomerExtensionV1` 配置定制品牌和菜单：

{/* @slate id="LLkZXraRqKEx-YCEQHcwH" */}
```ts
import type { CustomerExtensionV1 } from 'tuikit-live-manager-sdk-react';

export default {
  brand: {
    app: {
      title: '我的直播间管理系统',
      logo: '/assets/my-logo.png',
    },
  },
  menus: {
    liveMonitor: { enabled: true, label: '直播监控' },
    roomList: { enabled: true, label: '直播间管理' },
    giftConfig: { enabled: true, label: '礼物配置' },
  },
} satisfies CustomerExtensionV1;
```

{/* @slate id="y9CX39sHFAXjdbn9Lha5L" nodeId="599aeb82-4113-4897-9be2-559cd452e716" */}
### 组件插槽（含 UI 模式）

{/* @slate id="2yNgCOpoz87Ocv7YBAlE6" */}
在关键位置注入自定义组件，不修改 SDK 源码即可扩展预置页面：

<Table rowHeader id="802xa6-2ClLLcwHBlwFUa">
<Row id="0B9m6w8IFYoK8kMg_X56D">
<Cell id="NxP7dS9GxkyhApGmGH-4U">

{/* @slate id="ftNjVGKP0i4lD7N6fUj2B" */}
插槽标识

</Cell>
<Cell id="aft0Wfcl0BNe5duAoBwf6">

{/* @slate id="fYrYasqkniFpOs2NYcLgo" */}
Props

</Cell>
<Cell id="0tPYhOvBoXz2GNY1L45cP">

{/* @slate id="LJzxYaiQ3QISZedgnOb1c" */}
说明

</Cell>
</Row>
<Row id="rzda2-PUG7VAYZ-DV0grM">
<Cell id="IvY_hAXqIcrJxoH1E3cKn">

{/* @slate id="2eD9AiTVm-VrOY_N10UAf" */}
`liveList.tableExtraColumns`

</Cell>
<Cell id="LovhsZjhxpGPjGS9JJlvc">

{/* @slate id="PAofdDFMLY4ST0uAEgA8N" */}
`{ live: MonitorLiveInfo }`

</Cell>
<Cell id="M60RAYqyxtBreoLlCdl0N">

{/* @slate id="pyT8ncOscGP1LWdJHp-3I" */}
直播间表格额外列

</Cell>
</Row>
<Row id="290JLd62GM1zRxirPBpgd">
<Cell id="i8cKsKy1jEdUhC_LPr-At">

{/* @slate id="tgCIOgDGm1y2eZQ-XLHPu" */}
`liveList.rowActions`

</Cell>
<Cell id="-9cvblsHpuOWjrib2gslt">

{/* @slate id="2zdPyPOo5hFS7oAIYa4QH" */}
`{ live: MonitorLiveInfo }`

</Cell>
<Cell id="xu0CyiDFtHGXuPltOGG3p">

{/* @slate id="NHaR1aoToWdBhFcMwEvul" */}
直播间行操作按钮

</Cell>
</Row>
<Row id="1KA6xvxtaaGRPztT3hHaW">
<Cell id="xLQ0F6zOSLXx6gbAuuHiI">

{/* @slate id="KmvfC-TS8KO4iYMREMj_t" */}
`liveMonitor.userActionExtraItems`

</Cell>
<Cell id="7JyMZJc9D15Mr0LUgY_9U">

{/* @slate id="-fgQbVDY4BZY3VtYMBWT6" */}
`{ live: MonitorLiveInfo }`

</Cell>
<Cell id="BU4W9puGTuokIjOZUyEmd">

{/* @slate id="pvtfJdAnNhUqtUTkzgJm-" */}
用户操作额外项

</Cell>
</Row>
<Row id="LPfzOewAcqlSSn3tgLFp9">
<Cell id="i9yX1II4so618gxCGJpuc">

{/* @slate id="V5jyWmQDKwDD6qp9O2wYn" */}
`liveControl.customControlPanel`

</Cell>
<Cell id="yHRQxQUrKZaJ33E0FOX6V">

{/* @slate id="0BY3SKimOkkDBOZxVnd3z" */}
`{ liveInfo, stats }`

</Cell>
<Cell id="mRCCD4euOmV8Aifgm0Ih2">

{/* @slate id="pt8u2atxeAQSML7j9fqzV" */}
自定义控制面板

</Cell>
</Row>
<Row id="KWusfvIIoww9WQe1SozMo">
<Cell id="h6zNd-ddcU_I4clABL3Hc">

{/* @slate id="AIUI1Ni_klYJJ-NVUay4k" */}
`giftConfig.giftTableExtraColumns`

</Cell>
<Cell id="CbEQ4-_RRpc_wLrIZvhLb">

{/* @slate id="D_1WApCR-fCZ5iBHhGgoy" */}
`{ gift }`

</Cell>
<Cell id="KmNOveruUndgoyLmn2zFI">

{/* @slate id="HfuD-gX1Jsd7vtJuTbXk3" */}
礼物表格额外列

</Cell>
</Row>
<Row id="TJzTLyCjuZOjO6RRJ7gA2">
<Cell id="JyrelNd4ircE-o2IRUQb2">

{/* @slate id="OTCb2rVqEEHKv98hzl4D0" */}
`giftConfig.giftRowActions`

</Cell>
<Cell id="TzP4sHiOZdJTSufvTWWRe">

{/* @slate id="3lA6dp82jLdB5Cv1jCT-4" */}
`{ gift }`

</Cell>
<Cell id="KFv1Ch09_kf-ZUHtI5LbH">

{/* @slate id="MS092CbPOA4aJTjlpxyQA" */}
礼物行操作按钮

</Cell>
</Row>
<Row id="Ik0vb5OJMXU4apaaaBXni">
<Cell id="alJN4s6tUWGAVqhy-GFbO">

{/* @slate id="kWC_CpxCfk2xnCYxc1lXW" */}
`layout.headerRight`

</Cell>
<Cell id="BBXCsTtWyBYmI1xKgxcAk">

{/* @slate id="xsV1XPanmAWH_9JIUI7Dz" */}
—

</Cell>
<Cell id="exKtDmwfnX2psMgiGVF-z">

{/* @slate id="K_Op72lFukwZmMoLuyXUN" */}
头部右侧区域

</Cell>
</Row>
<Row id="OHUSwnFcVw8T5pbYm7PgN">
<Cell id="e7pSIMg-a8A5ZIqCtQ3-A">

{/* @slate id="gOHrAoCsucxM1fyjdiGq-" */}
`layout.sidebarBottom`

</Cell>
<Cell id="LPu8UBhCQSP7ATlny0qyA">

{/* @slate id="83fHA6I5OReykQz4u1mXS" */}
—

</Cell>
<Cell id="jG9dbBvG3qalLQYYQeGHs">

{/* @slate id="uQqWa3bNFkJ3M7afZFICU" */}
侧边栏底部区域

</Cell>
</Row>
</Table>

{/* @slate id="YteYM-9TJB7yh9wY9Cwpk" */}
```ts
export default {
    components: {
    layout: { headerRight: () => <span>v2.0</span> },
    liveList: {
      tableExtraColumns: ({ live }) => <span>{live.customInfo?.tag}</span>,
    },
  },
} satisfies CustomerExtensionV1;
```

{/* @slate id="hHPlmfEAI_LEKoXwtWLWo" nodeId="f2e60215-e917-4150-8ffb-648cbc2707b6" */}
## API 参考

{/* @slate id="-mjiSYouQLMBWsF3tLc8l" nodeId="8ea08b87-c85b-4119-bca9-0c9334b20e36" */}
### `configureLiveManager(extension?)`

{/* @slate id="huVpgXohZNXD-MH1ds6qA" */}
```ts
interface CustomerExtensionV1<TComponent = unknown> {
  version?: '1';
  brand?: BrandConfig;
  menus?: MenuExtension;
  routes?: RouteExtension<TComponent>;
  components?: ComponentSlots<TComponent>;
  features?: FeatureFlags;
  runtime?: RuntimeConfig;
}

function configureLiveManager<TComponent = unknown>(
  extension?: CustomerExtensionV1<TComponent>,
): LiveManagerAppConfig<TComponent>
```

{/* @slate id="KVYpVj10F6l8VGC0_epsU" nodeId="5d11fc70-e60c-4e38-9397-59f6dbedbe24" */}
## 常见问题

{/* @slate id="pquad5EkcujDwxKpqpeRx" nodeId="a9085a91-6be7-4d18-a326-1ea5617e7e97" */}
### 含 UI 和无 UI 开发可以混用吗？

{/* @slate id="x7KPaxbCQgQx4KTsWHxfq" */}
可以。例如在自定义页面中使用 `useLiveMonitorState()` 管理数据，同时在另一个页面中直接挂载 `<GiftConfig />` 组件。两种模式共享同一个 SDK 实例。

{/* @slate id="E8IOymeVxg-June6L3k6a" nodeId="4aaf4a2c-0fa8-428b-8570-4fd70dfa7058" */}
### 如何自定义页面标题和 Logo？

{/* @slate id="hr3m0JKvetr9ikIQyjdj2" */}
在 `configureLiveManager` 的 `brand.app` 中设置 `title` 和 `logo`。

{/* @slate id="1nGdtAlO2ztHrNp_sm1Pa" nodeId="c370db6b-17bb-42a7-bcb0-425f6388a0c9" */}
### 支持哪些语言？

{/* @slate id="5x1qYHJiHYMU2IoiWPF2D" */}
支持 `zh-CN`（简体中文）和 `en-US`（英文），通过 `runtime.language` 设置。

{/* @slate id="EDm8E6d4mki8dNCVs9Tei" nodeId="10614a09-7b8b-4dbe-bc5a-9a1481c5f0e0" */}
### 如何在已有 React Router 项目中集成？

{/* @slate id="LaJ7UE82TKN34upkPXEnw" */}
直接以组件方式使用（如 `<LiveList />`），SDK 内部的路由独立运行，不会与宿主项目冲突。

{/* @slate id="xE36G8BmZW7KdwRHz66J9" nodeId="ca9f30b2-08bb-4162-9e1d-2248f2e00592" */}
## 相关文档

{/* @slate id="VNP-nCXhwIvzMmrUy95Us" */}
- <Ref type="link" href="https://github.com/Tencent-RTC/TUILiveKit_Manager" id="YyANVHHdHdGQiJGvJBFl0">TUILiveKit Manager — 完整文档</Ref>

{/* @slate id="qGuyOlSr0AZVM4pwLGcxB" */}
- <Ref type="link" href="https://cloud.tencent.com/document/product/647/123049" id="7mjdEBkbnfCNXppZuDttZ">准备工作（Web）</Ref>

{/* @slate id="bTZWIDAhAkIH8P8qy1mH-" */}
- <Ref type="link" href="https://cloud.tencent.com/document/product/647/105439" id="I_xM3E_6oyYxnuVss_VfB">开通 TUILiveKit 服务</Ref>

{/* @slate id="OB4qV1qBVoOPN33-oY3cc" */}
- <Ref type="link" href="https://cloud.tencent.com/document/product/647/117216" id="peQgJv8eCbNTVe5ntxgAc">TUILiveKit 管理员账号管理</Ref>
