let n = null;
function r(e) {
  return e;
}
function i(e) {
  return n = { ...e }, n;
}
function a() {
  return n ? { ...n } : null;
}
function t() {
  n = null;
}
export {
  i as c,
  r as d,
  a as g,
  t as r
};
