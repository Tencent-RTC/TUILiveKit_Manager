import "./main-layout.qKCc3UXK.js";
const r = (e, l = null) => {
  try {
    return JSON.parse(e);
  } catch (t) {
    return console.warn("Failed to parse JSON:", e, t), l;
  }
}, u = (e, l) => {
  let t = null;
  return (...n) => {
    t !== null && clearTimeout(t), t = window.setTimeout(() => {
      e(...n), t = null;
    }, l);
  };
}, s = (e, l = {}) => {
  const t = e;
  t?.requestFullscreen ? t?.requestFullscreen(l) : t?.mozRequestFullScreen ? t?.mozRequestFullScreen(l) : t?.webkitRequestFullScreen ? t?.webkitRequestFullScreen(l) : t?.msRequestFullscreen && t?.msRequestFullscreen(l);
}, o = () => {
  if (!document?.fullscreenElement && !document?.webkitFullscreenElement && !document?.mozFullScreenElement)
    return;
  const e = document;
  e?.exitFullscreen ? e?.exitFullscreen() : e?.msExitFullscreen ? e?.msExitFullscreen() : e?.mozCancelFullScreen ? e?.mozCancelFullScreen() : e?.webkitExitFullscreen && e?.webkitExitFullscreen();
}, i = async (e) => {
  if (navigator.clipboard?.writeText)
    return navigator.clipboard.writeText(e);
  const l = document.createElement("textarea");
  l.value = e, l.style.position = "fixed", l.style.opacity = "0", document.body.appendChild(l), l.select(), document.execCommand("copy"), document.body.removeChild(l);
};
function a(e) {
  return `live_obs_${e}`;
}
export {
  u as a,
  s as b,
  i as c,
  o as e,
  a as g,
  r as s
};
