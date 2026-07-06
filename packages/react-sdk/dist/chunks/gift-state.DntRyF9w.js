import { aI as h, aJ as f, aK as g } from "./layout.CXBa-Kt1.js";
import { s as l } from "./main-layout.FU67Uzr8.js";
import { r as c } from "./logger.pnqt7v8K.js";
const L = 500;
function C(e, t, a = {}) {
  const i = a.ttl ?? L, n = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  return async (...d) => {
    const s = t(...d), r = n.get(s);
    if (r)
      return r;
    if (i > 0) {
      const u = o.get(s);
      if (u && Date.now() - u.timestamp < i)
        return Promise.resolve(u.result);
    }
    const y = e(...d);
    n.set(s, y);
    try {
      const u = await y;
      return i > 0 && o.set(s, { result: u, timestamp: Date.now() }), u;
    } catch (u) {
      throw u;
    } finally {
      n.delete(s);
    }
  };
}
const G = () => "gift_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9), w = (e, t, a) => {
  const i = e.Name || "", n = e.Desc || "", o = (e.LanguageList || []).map((s) => ({
    name: s.Name || "",
    description: s.Desc || "",
    language: s.Language || ""
  })), d = a.get(e.GiftId) || [];
  return {
    id: e.GiftId,
    name: i,
    iconUrl: e.IconUrl || "",
    price: e.Coins || 0,
    animationUrl: e.ResourceUrl || "",
    level: e.Level !== void 0 ? String(e.Level) : void 0,
    description: n,
    categoryIds: d,
    categories: t.get(e.GiftId) || [],
    createdAt: e.CreateTime !== void 0 ? String(e.CreateTime) : void 0,
    languageList: o
  };
}, I = (e) => {
  const t = e.CategoryName || "", a = e.CategoryDesc || "", i = (e.LanguageList || []).map((o) => ({
    categoryName: o.CategoryName || "",
    categoryDescription: o.CategoryDesc || "",
    language: o.Language || ""
  })), n = e.GiftIdList || [];
  return {
    id: e.CategoryId,
    name: t,
    description: a,
    giftIds: n,
    giftCount: n.length,
    languageList: i
  };
};
function p(e) {
  const t = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
  return (e || []).forEach((i) => {
    const n = i.CategoryName || "";
    (i.GiftIdList || []).forEach((o) => {
      t.has(o) || (t.set(o, []), a.set(o, [])), n && t.get(o).push(n), a.get(o).push(i.CategoryId);
    });
  }), { giftToCategories: t, giftToCategoryIds: a };
}
async function m(e) {
  const t = await h(g.getGiftList, {});
  if (t && t.ErrorCode === 0 && t.Response) {
    const a = t.Response.GiftList || [], i = t.Response.CategoryList || [], { giftToCategories: n, giftToCategoryIds: o } = p(i), d = a.map((r) => w(r, n, o)), s = i.map((r) => I(r));
    return {
      gifts: d,
      total: t.Response.TotalCount || d.length,
      categories: s
    };
  }
  return { gifts: [], total: 0 };
}
async function D(e) {
  const t = e.id?.trim() || G();
  return await f(g.addGift, {
    GiftId: t,
    DefaultName: e.name || "",
    DefaultDesc: e.description || "",
    IconUrl: e.iconUrl || "",
    Coins: e.price || 0,
    ResourceUrl: e.animationUrl || "",
    Level: e.level ? parseInt(e.level) : 0,
    ExtensionInfo: e.extensionInfo || ""
  }), t;
}
async function _(e) {
  await f(g.editGift, {
    GiftId: e.giftId,
    DefaultName: e.name || "",
    DefaultDesc: e.description || "",
    IconUrl: e.iconUrl || "",
    Coins: e.price || 0,
    ResourceUrl: e.animationUrl || "",
    Level: e.level ? parseInt(e.level) : 0,
    ExtensionInfo: e.extensionInfo || ""
  });
}
async function N(e) {
  await f(g.delGift, { GiftId: e });
}
async function R(e, t) {
  const i = (await h(g.getGiftLanguage, { GiftId: e, Language: t }))?.Response?.Language;
  return {
    name: i?.Name || "",
    description: i?.Desc || ""
  };
}
async function T(e, t, a, i) {
  await f(g.setGiftLanguage, {
    GiftId: e,
    Language: t,
    Name: a,
    Desc: i || ""
  });
}
async function S(e, t) {
  await f(g.delGiftLanguage, { GiftId: e, Language: t });
}
async function v(e) {
  await f(g.addGiftCategory, {
    CategoryId: e.categoryId,
    DefaultName: e.name || e.defaultName || "",
    DefaultDesc: e.description || e.defaultDesc || ""
  });
}
async function U(e) {
  await f(g.editGiftCategory, {
    CategoryId: e.categoryId,
    DefaultName: e.name || e.defaultName || "",
    DefaultDesc: e.description || e.defaultDesc || ""
  });
}
async function E(e) {
  await f(g.delGiftCategory, { CategoryId: e });
}
async function A(e, t) {
  const i = (await h(g.getGiftCategoryLanguage, { CategoryId: e, Language: t }))?.Response?.Language;
  return {
    name: i?.CategoryName || "",
    description: i?.CategoryDesc || ""
  };
}
async function M(e, t, a, i) {
  await f(g.setGiftCategoryLanguage, {
    CategoryId: e,
    Language: t,
    CategoryName: a,
    CategoryDesc: i || ""
  });
}
async function $(e, t) {
  await f(g.delGiftCategoryLanguage, { CategoryId: e, Language: t });
}
async function x(e, t) {
  await f(g.addGiftCategoryRelations, { CategoryId: e, GiftIdList: t });
}
async function F(e, t) {
  await f(g.delGiftCategoryRelations, { CategoryId: e, GiftIdList: t });
}
class k {
  constructor(t = {}) {
    this.giftList = [], this.giftCategoryList = [], this.loading = {}, this.error = null, this.destroyed = !1, this.state$ = l(), this.destroy$ = l(), this.onStateChange = t.onStateChange, this.deduplicatedFetchGiftList = C(
      (a) => this._fetchGiftListRaw(a),
      () => "fetchGiftList",
      { ttl: 500 }
    );
  }
  /**
   * 获取响应式状态流（推荐方式）
   * 搭配 pipe(state$, takeUntil(destroy$), subscribe(...)) 使用
   */
  observeState() {
    return { state$: this.state$, destroy$: this.destroy$ };
  }
  // ========= 状态 getter（供框架层读取） =========
  getGiftList() {
    return this.giftList;
  }
  getGiftCategoryList() {
    return this.giftCategoryList;
  }
  getLoading() {
    return this.loading;
  }
  getError() {
    return this.error;
  }
  /** 获取完整状态快照 */
  getSnapshot() {
    return {
      giftList: this.giftList,
      giftCategoryList: this.giftCategoryList,
      loading: this.loading,
      error: this.error
    };
  }
  // ========= 销毁 =========
  destroy() {
    this.destroyed = !0, this.destroy$.next(), this.onStateChange = void 0;
  }
  isDestroyed() {
    return this.destroyed;
  }
  // ========= 状态更新辅助方法 =========
  setLoading(t, a) {
    this.loading = { ...this.loading, [t]: a }, this.notifyStateChange();
  }
  setError(t) {
    this.error = t, this.notifyStateChange();
  }
  notifyStateChange() {
    if (this.isDestroyed()) return;
    const t = this.getSnapshot();
    this.state$.next(t), this.onStateChange?.(t);
  }
  /**
   * 通用的 loading/error 包装器。
   * 自动管理 setLoading(key, true) → await fn() → setLoading(key, false)，
   * 异常时设置 error 并继续抛出。
   */
  async withLoading(t, a) {
    this.setLoading(t, !0), this.setError(null);
    try {
      return await a();
    } catch (i) {
      const n = i instanceof Error ? i : new Error(String(i));
      throw this.setError(n), n;
    } finally {
      this.setLoading(t, !1);
    }
  }
  // ========= 礼物列表操作 =========
  /**
   * 获取礼物列表（去重版）。
   * 短期内重复调用（如 addGiftCategoryRelations 内部 + Controller 再次调用）
   * 会复用前一次的结果，避免重复请求。
   */
  async fetchGiftList(t) {
    return this.deduplicatedFetchGiftList(t);
  }
  /** fetchGiftList 的原始实现，不经过去重包装 */
  async _fetchGiftListRaw(t) {
    const a = await this.withLoading(
      "giftList",
      () => m(t?.language)
    ), i = (a.gifts || []).sort((n, o) => {
      const d = (s) => {
        if (!s) return 0;
        const r = Number(s);
        if (!isNaN(r) && r > 0)
          return r < 1e12 ? r * 1e3 : r;
        const y = new Date(s).getTime();
        return isNaN(y) ? 0 : y;
      };
      return d(o.createdAt) - d(n.createdAt);
    });
    return this.giftList = i, this.giftCategoryList = a.categories || [], this.notifyStateChange(), {
      giftList: i,
      giftCategoryList: a.categories || []
    };
  }
  async createGift(t) {
    try {
      const a = await this.withLoading(
        "giftAction",
        () => D(t)
      );
      return c("gift_manage", "create", !0, t.id), a;
    } catch (a) {
      throw c("gift_manage", "create", !1), a;
    }
  }
  async updateGift(t) {
    try {
      await this.withLoading(
        "giftAction",
        () => _(t)
      ), c("gift_manage", "update", !0, t.giftId);
    } catch (a) {
      throw c("gift_manage", "update", !1, t.giftId), a;
    }
  }
  async deleteGift(t) {
    try {
      await this.withLoading(
        "giftAction",
        () => N(t)
      ), this.giftList = this.giftList.filter((a) => a.id !== t), this.notifyStateChange(), c("gift_manage", "delete", !0, t);
    } catch (a) {
      throw c("gift_manage", "delete", !1, t), a;
    }
  }
  // ========= 礼物分类操作 =========
  async createGiftCategory(t) {
    try {
      await this.withLoading(
        "categoryAction",
        () => v(t)
      ), c("gift_manage", "create_category", !0, t.categoryId);
    } catch (a) {
      throw c("gift_manage", "create_category", !1), a;
    }
  }
  async updateGiftCategory(t) {
    try {
      await this.withLoading(
        "categoryAction",
        () => U(t)
      ), c("gift_manage", "update_category", !0, t.categoryId);
    } catch (a) {
      throw c("gift_manage", "update_category", !1, t.categoryId), a;
    }
  }
  async deleteGiftCategory(t) {
    try {
      await this.withLoading(
        "categoryAction",
        () => E(t)
      ), this.giftCategoryList = this.giftCategoryList.filter((a) => a.id !== t), this.notifyStateChange(), c("gift_manage", "delete_category", !0, t);
    } catch (a) {
      throw c("gift_manage", "delete_category", !1, t), a;
    }
  }
  // ========= 礼物-分类关联操作 =========
  async addGiftCategoryRelations(t) {
    const { giftId: a, categoryIds: i } = t;
    await this.withLoading("giftCategory", async () => {
      for (const n of i)
        await x(n, [a]);
    }), await this.fetchGiftList().catch(() => {
    });
  }
  async deleteGiftCategoryRelations(t) {
    const { giftId: a, categoryIds: i } = t;
    await this.withLoading("giftCategory", async () => {
      for (const n of i)
        await F(n, [a]);
    }), await this.fetchGiftList().catch(() => {
    });
  }
  // ========= 礼物多语言操作 =========
  async getGiftLanguage(t) {
    return this.withLoading(
      "giftLanguage",
      () => R(t.giftId, t.language)
    );
  }
  async setGiftLanguage(t) {
    await this.withLoading(
      "giftLanguage",
      () => T(t.giftId, t.language, t.name, t.description)
    );
  }
  async deleteGiftLanguage(t) {
    await this.withLoading(
      "giftLanguage",
      () => S(t.giftId, t.language)
    );
  }
  // ========= 礼物分类多语言操作 =========
  async getGiftCategoryLanguage(t, a) {
    return this.withLoading(
      "giftCategoryLanguage",
      () => A(t, a)
    );
  }
  async setGiftCategoryLanguage(t, a, i, n) {
    await this.withLoading(
      "giftCategoryLanguage",
      () => M(t, a, i, n)
    );
  }
  async deleteGiftCategoryLanguage(t, a) {
    await this.withLoading(
      "giftCategoryLanguage",
      () => $(t, a)
    );
  }
}
export {
  k as G
};
