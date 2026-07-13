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
}, g = "https://web.sdk.qcloud.com/im/assets/emoji-plugin/", t = (n) => {
  if (!n)
    return [];
  const _ = [];
  let i = n;
  for (; i.length > 0; ) {
    const e = i.indexOf("["), m = i.indexOf("]");
    if (e === 0) {
      if (m === -1) {
        _.push({ type: "text", text: i });
        break;
      }
      const j = i.slice(0, m + 1), o = x[j];
      if (o) {
        _.push({
          type: "emoji",
          key: j,
          src: `${g}${o}`
        }), i = i.slice(m + 1);
        continue;
      }
      _.push({ type: "text", text: j }), i = i.slice(m + 1);
      continue;
    }
    if (e === -1) {
      _.push({ type: "text", text: i });
      break;
    }
    _.push({ type: "text", text: i.slice(0, e) }), i = i.slice(e);
  }
  return _;
};
function E(n, _) {
  const i = Math.max(1, _), e = Math.min(Math.max(1, n), i);
  if (i <= 7)
    return Array.from({ length: i }, (o, p) => p + 1);
  const m = [], j = (o) => {
    m[m.length - 1] !== o && m.push(o);
  };
  j(1), e > 4 && j("...");
  for (let o = Math.max(2, e - 2); o <= Math.min(i - 1, e + 2); o++)
    j(o);
  return e < i - 3 && j("..."), j(i), m;
}
export {
  x as B,
  g as E,
  E as b,
  t as p
};
