let l = null;
function s() {
  if (!l)
    throw new Error("SVGAParser 未初始化，请先调用 initSvgaParser()");
  return l;
}
function c(t) {
  l || (l = new t());
}
function v() {
  return l;
}
function S(t, o = 15e3) {
  return new Promise((u, n) => {
    if (!t) {
      n(new Error("URL 不能为空"));
      return;
    }
    const a = s();
    let e = null, r = !1;
    const i = () => {
      e && (clearTimeout(e), e = null);
    };
    e = setTimeout(() => {
      r || (r = !0, n(new Error("SVGA 资源加载超时，请检查 URL 是否可访问")));
    }, o), a.load(
      t,
      () => {
        r || (r = !0, i(), u(!0));
      },
      () => {
        r || (r = !0, i(), n(new Error("SVGA 资源加载失败，请检查 URL 是否正确")));
      }
    );
  });
}
function U(t, o = 15e3) {
  return new Promise((u, n) => {
    let a = null, e = !1;
    const r = () => {
      a && (clearTimeout(a), a = null);
    };
    a = setTimeout(() => {
      e || (e = !0, n(new Error("SVGA 文件解析超时")));
    }, o);
    const i = URL.createObjectURL(t);
    s().load(
      i,
      () => {
        e || (e = !0, r(), URL.revokeObjectURL(i), u(!0));
      },
      () => {
        e || (e = !0, r(), URL.revokeObjectURL(i), n(new Error("SVGA 文件无效或已损坏")));
      }
    );
  });
}
export {
  S as a,
  v as g,
  c as i,
  U as v
};
