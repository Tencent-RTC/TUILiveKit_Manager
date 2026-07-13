import { c8 as r, c9 as c, ca as l, cb as o, cc as n } from "./main-layout.DNtgEqmy.js";
class a extends c {
  constructor(e, t, s) {
    super(e), this.filter = t, this.thisArg = s;
  }
  next(e) {
    this.filter.call(this.thisArg, e) && this.sink.next(e);
  }
}
const u = r(a, "filter");
class h extends c {
  constructor(e, t) {
    super(e);
    const s = new c(e);
    s.next = () => {
      s.doDefer(), e.complete();
    }, s.complete = l, s.subscribe(t);
  }
}
const x = r(h, "takeUntil");
class f extends c {
  constructor(e, t) {
    super(e), this.f = t;
  }
  next(e) {
    this.f(e) ? this.sink.next(e) : (this.doDefer(), this.complete());
  }
}
const k = r(f, "takeWhile"), b = (i = n, e = n, t = n) => (s) => new o(s, i, e, t);
export {
  k as a,
  u as f,
  b as s,
  x as t
};
