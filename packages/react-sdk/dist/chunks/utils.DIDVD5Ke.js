import { bK as l, bL as n, bM as c, bN as o, bO as r } from "./main-layout.C2kPbZH0.js";
class a extends n {
  constructor(e, t, s) {
    super(e), this.filter = t, this.thisArg = s;
  }
  next(e) {
    this.filter.call(this.thisArg, e) && this.sink.next(e);
  }
}
const p = l(a, "filter");
class h extends n {
  constructor(e, t) {
    super(e);
    const s = new n(e);
    s.next = () => {
      s.doDefer(), e.complete();
    }, s.complete = c, s.subscribe(t);
  }
}
const u = l(h, "takeUntil");
class f extends n {
  constructor(e, t) {
    super(e), this.f = t;
  }
  next(e) {
    this.f(e) ? this.sink.next(e) : (this.doDefer(), this.complete());
  }
}
const x = l(f, "takeWhile"), k = (i = r, e = r, t = r) => (s) => new o(s, i, e, t);
export {
  x as a,
  p as f,
  k as s,
  u as t
};
