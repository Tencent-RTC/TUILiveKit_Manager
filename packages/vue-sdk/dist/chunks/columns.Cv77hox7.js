import { I as t } from "./shared-state.CEzqGWS1.js";
const x = {
  "[TUIEmoji_Expect]": "emoji_0@2x.png",
  "[TUIEmoji_Blink]": "emoji_1@2x.png",
  "[TUIEmoji_Guffaw]": "emoji_2@2x.png",
  "[TUIEmoji_KindSmile]": "emoji_3@2x.png",
  "[TUIEmoji_Haha]": "emoji_4@2x.png",
  "[TUIEmoji_Cheerful]": "emoji_5@2x.png",
  "[TUIEmoji_Smile]": "emoji_6@2x.png",
  "[TUIEmoji_Sorrow]": "emoji_7@2x.png",
  "[TUIEmoji_Speechless]": "emoji_8@2x.png",
  "[TUIEmoji_Amazed]": "emoji_9@2x.png",
  "[TUIEmoji_Complacent]": "emoji_10@2x.png",
  "[TUIEmoji_Lustful]": "emoji_11@2x.png",
  "[TUIEmoji_Stareyes]": "emoji_12@2x.png",
  "[TUIEmoji_Giggle]": "emoji_13@2x.png",
  "[TUIEmoji_Daemon]": "emoji_14@2x.png",
  "[TUIEmoji_Rage]": "emoji_15@2x.png",
  "[TUIEmoji_Yawn]": "emoji_16@2x.png",
  "[TUIEmoji_TearsLaugh]": "emoji_17@2x.png",
  "[TUIEmoji_Silly]": "emoji_18@2x.png",
  "[TUIEmoji_Wail]": "emoji_19@2x.png",
  "[TUIEmoji_Kiss]": "emoji_20@2x.png",
  "[TUIEmoji_Trapped]": "emoji_21@2x.png",
  "[TUIEmoji_Fear]": "emoji_22@2x.png",
  "[TUIEmoji_BareTeeth]": "emoji_23@2x.png",
  "[TUIEmoji_FlareUp]": "emoji_24@2x.png",
  "[TUIEmoji_Tact]": "emoji_25@2x.png",
  "[TUIEmoji_Shit]": "emoji_26@2x.png",
  "[TUIEmoji_ShutUp]": "emoji_27@2x.png",
  "[TUIEmoji_Sigh]": "emoji_28@2x.png",
  "[TUIEmoji_Hehe]": "emoji_29@2x.png",
  "[TUIEmoji_Silent]": "emoji_30@2x.png",
  "[TUIEmoji_Skull]": "emoji_31@2x.png",
  "[TUIEmoji_Mask]": "emoji_32@2x.png",
  "[TUIEmoji_Beer]": "emoji_33@2x.png",
  "[TUIEmoji_Cake]": "emoji_34@2x.png",
  "[TUIEmoji_RedPacket]": "emoji_35@2x.png",
  "[TUIEmoji_Bombs]": "emoji_36@2x.png",
  "[TUIEmoji_Ai]": "emoji_37@2x.png",
  "[TUIEmoji_Celebrate]": "emoji_38@2x.png",
  "[TUIEmoji_Bless]": "emoji_39@2x.png",
  "[TUIEmoji_Flower]": "emoji_40@2x.png",
  "[TUIEmoji_Watermelon]": "emoji_41@2x.png",
  "[TUIEmoji_Cow]": "emoji_42@2x.png",
  "[TUIEmoji_Fool]": "emoji_43@2x.png",
  "[TUIEmoji_Surprised]": "emoji_44@2x.png",
  "[TUIEmoji_Askance]": "emoji_45@2x.png",
  "[TUIEmoji_Monster]": "emoji_46@2x.png",
  "[TUIEmoji_Pig]": "emoji_47@2x.png",
  "[TUIEmoji_Coffee]": "emoji_48@2x.png",
  "[TUIEmoji_Ok]": "emoji_49@2x.png",
  "[TUIEmoji_Heart]": "emoji_50@2x.png",
  "[TUIEmoji_Sun]": "emoji_51@2x.png",
  "[TUIEmoji_Moon]": "emoji_52@2x.png",
  "[TUIEmoji_Star]": "emoji_53@2x.png",
  "[TUIEmoji_Rich]": "emoji_54@2x.png",
  "[TUIEmoji_Fortune]": "emoji_55@2x.png",
  "[TUIEmoji_857]": "emoji_56@2x.png",
  "[TUIEmoji_666]": "emoji_57@2x.png",
  "[TUIEmoji_Prohibit]": "emoji_58@2x.png",
  "[TUIEmoji_Convinced]": "emoji_59@2x.png",
  "[TUIEmoji_Knife]": "emoji_60@2x.png",
  "[TUIEmoji_Like]": "emoji_61@2x.png"
}, g = "https://web.sdk.qcloud.com/im/assets/emoji-plugin/", T = (e) => {
  if (!e)
    return [];
  const o = [];
  let i = e;
  for (; i.length > 0; ) {
    const n = i.indexOf("["), _ = i.indexOf("]");
    if (n === 0) {
      if (_ === -1) {
        o.push({ type: "text", text: i });
        break;
      }
      const j = i.slice(0, _ + 1), m = x[j];
      if (m) {
        o.push({
          type: "emoji",
          key: j,
          src: `${g}${m}`
        }), i = i.slice(_ + 1);
        continue;
      }
      o.push({ type: "text", text: j }), i = i.slice(_ + 1);
      continue;
    }
    if (n === -1) {
      o.push({ type: "text", text: i });
      break;
    }
    o.push({ type: "text", text: i.slice(0, n) }), i = i.slice(n);
  }
  return o;
};
function I(e, o) {
  const i = Math.max(1, o), n = Math.min(Math.max(1, e), i);
  if (i <= 7)
    return Array.from({ length: i }, (m, p) => p + 1);
  const _ = [], j = (m) => {
    _[_.length - 1] !== m && _.push(m);
  };
  j(1), n > 4 && j("...");
  for (let m = Math.max(2, n - 2); m <= Math.min(i - 1, n + 2); m++)
    j(m);
  return n < i - 3 && j("..."), j(i), _;
}
function U(e) {
  return e && (e.nameCard || e.userName || e.userId) || "";
}
function r(e) {
  const o = [
    { key: "check", width: 40 },
    { key: "userId", i18nKey: t.USERID, width: 120 },
    { key: "content", i18nKey: t.COMMENT_CONTENT, fitContent: !0, flexible: !0, minWidth: 150, ellipsis: !0 },
    { key: "type", i18nKey: t.SENSITIVE_TYPE, width: 100 },
    { key: "createdAtMs", i18nKey: t.CREATED_AT, width: 120 },
    { key: "action", i18nKey: t.ACTION, fitContent: !0, minWidth: 120, maxWidth: 260 }
  ];
  return e?.hideTypeColumn ? o.filter((i) => i.key !== "type") : o;
}
export {
  x as B,
  g as E,
  I as b,
  r as g,
  T as p,
  U as r
};
