import { aG as u, aH as s, aI as g } from "./error-message.BVYzOzgW.js";
import { r as o } from "./logger.DfjyL4S7.js";
const y = () => "gift_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9), L = (i, e, t) => {
  const a = i.Name || "", r = i.Desc || "", n = (i.LanguageList || []).map((c) => ({
    name: c.Name || "",
    description: c.Desc || "",
    language: c.Language || ""
  })), f = t.get(i.GiftId) || [];
  return {
    id: i.GiftId,
    name: a,
    iconUrl: i.IconUrl || "",
    price: i.Coins || 0,
    animationUrl: i.ResourceUrl || "",
    level: i.Level !== void 0 ? String(i.Level) : void 0,
    description: r,
    categoryIds: f,
    categories: e.get(i.GiftId) || [],
    createdAt: i.CreateTime !== void 0 ? String(i.CreateTime) : void 0,
    languageList: n
  };
}, C = (i) => {
  const e = i.CategoryName || "", t = i.CategoryDesc || "", a = (i.LanguageList || []).map((n) => ({
    categoryName: n.CategoryName || "",
    categoryDescription: n.CategoryDesc || "",
    language: n.Language || ""
  })), r = i.GiftIdList || [];
  return {
    id: i.CategoryId,
    name: e,
    description: t,
    giftIds: r,
    giftCount: r.length,
    languageList: a
  };
};
function G(i) {
  const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  return (i || []).forEach((a) => {
    const r = a.CategoryName || "";
    (a.GiftIdList || []).forEach((n) => {
      e.has(n) || (e.set(n, []), t.set(n, [])), r && e.get(n).push(r), t.get(n).push(a.CategoryId);
    });
  }), { giftToCategories: e, giftToCategoryIds: t };
}
async function w(i) {
  const e = await u(s.getGiftList, {});
  if (e && e.ErrorCode === 0 && e.Response) {
    const t = e.Response.GiftList || [], a = e.Response.CategoryList || [], { giftToCategories: r, giftToCategoryIds: n } = G(a), f = t.map((h) => L(h, r, n)), c = a.map((h) => C(h));
    return {
      gifts: f,
      total: e.Response.TotalCount || f.length,
      categories: c
    };
  }
  return { gifts: [], total: 0 };
}
async function E(i) {
  const e = i.id?.trim() || y();
  return await g(s.addGift, {
    GiftId: e,
    DefaultName: i.name || "",
    DefaultDesc: i.description || "",
    IconUrl: i.iconUrl || "",
    Coins: i.price || 0,
    ResourceUrl: i.animationUrl || "",
    Level: i.level ? parseInt(i.level) : 0,
    ExtensionInfo: i.extensionInfo || ""
  }), e;
}
async function I(i) {
  await g(s.editGift, {
    GiftId: i.giftId,
    DefaultName: i.name || "",
    DefaultDesc: i.description || "",
    IconUrl: i.iconUrl || "",
    Coins: i.price || 0,
    ResourceUrl: i.animationUrl || "",
    Level: i.level ? parseInt(i.level) : 0,
    ExtensionInfo: i.extensionInfo || ""
  });
}
async function p(i) {
  await g(s.delGift, { GiftId: i });
}
async function S(i, e) {
  const a = (await u(s.getGiftLanguage, { GiftId: i, Language: e }))?.Response?.Language;
  return {
    name: a?.Name || "",
    description: a?.Desc || ""
  };
}
async function D(i, e, t, a) {
  await g(s.setGiftLanguage, {
    GiftId: i,
    Language: e,
    Name: t,
    Desc: a || ""
  });
}
async function m(i, e) {
  await g(s.delGiftLanguage, { GiftId: i, Language: e });
}
async function _(i) {
  await g(s.addGiftCategory, {
    CategoryId: i.categoryId,
    DefaultName: i.name || i.defaultName || "",
    DefaultDesc: i.description || i.defaultDesc || ""
  });
}
async function R(i) {
  await g(s.editGiftCategory, {
    CategoryId: i.categoryId,
    DefaultName: i.name || i.defaultName || "",
    DefaultDesc: i.description || i.defaultDesc || ""
  });
}
async function A(i) {
  await g(s.delGiftCategory, { CategoryId: i });
}
async function T(i, e) {
  const a = (await u(s.getGiftCategoryLanguage, { CategoryId: i, Language: e }))?.Response?.Language;
  return {
    name: a?.CategoryName || "",
    description: a?.CategoryDesc || ""
  };
}
async function v(i, e, t, a) {
  await g(s.setGiftCategoryLanguage, {
    CategoryId: i,
    Language: e,
    CategoryName: t,
    CategoryDesc: a || ""
  });
}
async function N(i, e) {
  await g(s.delGiftCategoryLanguage, { CategoryId: i, Language: e });
}
async function U(i, e) {
  await g(s.addGiftCategoryRelations, { CategoryId: i, GiftIdList: e });
}
async function M(i, e) {
  await g(s.delGiftCategoryRelations, { CategoryId: i, GiftIdList: e });
}
const F = 500;
function x(i, e, t = {}) {
  const a = t.ttl ?? F, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  return async (...f) => {
    const c = e(...f), h = r.get(c);
    if (h)
      return h;
    if (a > 0) {
      const d = n.get(c);
      if (d && Date.now() - d.timestamp < a)
        return Promise.resolve(d.result);
    }
    const l = i(...f);
    r.set(c, l);
    try {
      const d = await l;
      return a > 0 && n.set(c, { result: d, timestamp: Date.now() }), d;
    } catch (d) {
      throw d;
    } finally {
      r.delete(c);
    }
  };
}
class q {
  constructor(e = {}) {
    this.giftList = [], this.giftCategoryList = [], this.loading = {}, this.error = null, this.destroyed = !1, this.onStateChange = e.onStateChange, this.deduplicatedFetchGiftList = x(
      (t) => this._fetchGiftListRaw(t),
      () => "fetchGiftList",
      { ttl: 500 }
    );
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
    this.destroyed = !0, this.onStateChange = void 0;
  }
  isDestroyed() {
    return this.destroyed;
  }
  // ========= 状态更新辅助方法 =========
  setLoading(e, t) {
    this.loading = { ...this.loading, [e]: t }, this.notifyStateChange();
  }
  setError(e) {
    this.error = e, this.notifyStateChange();
  }
  notifyStateChange() {
    this.isDestroyed() || this.onStateChange?.(this.getSnapshot());
  }
  // ========= 礼物列表操作 =========
  /**
   * 获取礼物列表（去重版）。
   * 短期内重复调用（如 addGiftCategoryRelations 内部 + Controller 再次调用）
   * 会复用前一次的结果，避免重复请求。
   */
  async fetchGiftList(e) {
    return this.deduplicatedFetchGiftList(e);
  }
  /** fetchGiftList 的原始实现，不经过去重包装 */
  async _fetchGiftListRaw(e) {
    this.setLoading("giftList", !0), this.setError(null);
    try {
      const t = await w(e?.language);
      return this.giftList = t.gifts || [], this.giftCategoryList = t.categories || [], this.setLoading("giftList", !1), this.notifyStateChange(), {
        giftList: t.gifts || [],
        giftCategoryList: t.categories || []
      };
    } catch (t) {
      const a = t instanceof Error ? t : new Error(String(t));
      throw this.setLoading("giftList", !1), this.setError(a), a;
    }
  }
  async createGift(e) {
    this.setLoading("giftAction", !0), this.setError(null);
    try {
      const t = await E(e);
      return this.setLoading("giftAction", !1), o("gift_manage", "create", !0, e.id), t;
    } catch (t) {
      const a = t instanceof Error ? t : new Error(String(t));
      throw this.setLoading("giftAction", !1), this.setError(a), o("gift_manage", "create", !1), a;
    }
  }
  async updateGift(e) {
    this.setLoading("giftAction", !0), this.setError(null);
    try {
      await I(e), this.setLoading("giftAction", !1), o("gift_manage", "update", !0, e.giftId);
    } catch (t) {
      const a = t instanceof Error ? t : new Error(String(t));
      throw this.setLoading("giftAction", !1), this.setError(a), o("gift_manage", "update", !1, e.giftId), a;
    }
  }
  async deleteGift(e) {
    this.setLoading("giftAction", !0), this.setError(null);
    try {
      await p(e), this.giftList = this.giftList.filter((t) => t.id !== e), this.setLoading("giftAction", !1), this.notifyStateChange(), o("gift_manage", "delete", !0, e);
    } catch (t) {
      const a = t instanceof Error ? t : new Error(String(t));
      throw this.setLoading("giftAction", !1), this.setError(a), o("gift_manage", "delete", !1, e), a;
    }
  }
  // ========= 礼物分类操作 =========
  async createGiftCategory(e) {
    this.setLoading("categoryAction", !0), this.setError(null);
    try {
      await _(e), this.setLoading("categoryAction", !1), o("gift_manage", "create_category", !0, e.categoryId);
    } catch (t) {
      const a = t instanceof Error ? t : new Error(String(t));
      throw this.setLoading("categoryAction", !1), this.setError(a), o("gift_manage", "create_category", !1), a;
    }
  }
  async updateGiftCategory(e) {
    this.setLoading("categoryAction", !0), this.setError(null);
    try {
      await R(e), this.setLoading("categoryAction", !1), o("gift_manage", "update_category", !0, e.categoryId);
    } catch (t) {
      const a = t instanceof Error ? t : new Error(String(t));
      throw this.setLoading("categoryAction", !1), this.setError(a), o("gift_manage", "update_category", !1, e.categoryId), a;
    }
  }
  async deleteGiftCategory(e) {
    this.setLoading("categoryAction", !0), this.setError(null);
    try {
      await A(e), this.giftCategoryList = this.giftCategoryList.filter((t) => t.id !== e), this.setLoading("categoryAction", !1), this.notifyStateChange(), o("gift_manage", "delete_category", !0, e);
    } catch (t) {
      const a = t instanceof Error ? t : new Error(String(t));
      throw this.setLoading("categoryAction", !1), this.setError(a), o("gift_manage", "delete_category", !1, e), a;
    }
  }
  // ========= 礼物-分类关联操作 =========
  async addGiftCategoryRelations(e) {
    this.setLoading("giftCategory", !0), this.setError(null);
    try {
      const { giftId: t, categoryIds: a } = e;
      for (const r of a)
        await U(r, [t]);
      this.setLoading("giftCategory", !1), await this.fetchGiftList().catch(() => {
      });
    } catch (t) {
      const a = t instanceof Error ? t : new Error(String(t));
      throw this.setLoading("giftCategory", !1), this.setError(a), a;
    }
  }
  async deleteGiftCategoryRelations(e) {
    this.setLoading("giftCategory", !0), this.setError(null);
    try {
      const { giftId: t, categoryIds: a } = e;
      for (const r of a)
        await M(r, [t]);
      this.setLoading("giftCategory", !1), await this.fetchGiftList().catch(() => {
      });
    } catch (t) {
      const a = t instanceof Error ? t : new Error(String(t));
      throw this.setLoading("giftCategory", !1), this.setError(a), a;
    }
  }
  // ========= 礼物多语言操作 =========
  async getGiftLanguage(e) {
    this.setLoading("giftLanguage", !0), this.setError(null);
    try {
      const t = await S(e.giftId, e.language);
      return this.setLoading("giftLanguage", !1), t;
    } catch (t) {
      const a = t instanceof Error ? t : new Error(String(t));
      throw this.setLoading("giftLanguage", !1), this.setError(a), a;
    }
  }
  async setGiftLanguage(e) {
    this.setLoading("giftLanguage", !0), this.setError(null);
    try {
      await D(e.giftId, e.language, e.name, e.description), this.setLoading("giftLanguage", !1);
    } catch (t) {
      const a = t instanceof Error ? t : new Error(String(t));
      throw this.setLoading("giftLanguage", !1), this.setError(a), a;
    }
  }
  async deleteGiftLanguage(e) {
    this.setLoading("giftLanguage", !0), this.setError(null);
    try {
      await m(e.giftId, e.language), this.setLoading("giftLanguage", !1);
    } catch (t) {
      const a = t instanceof Error ? t : new Error(String(t));
      throw this.setLoading("giftLanguage", !1), this.setError(a), a;
    }
  }
  // ========= 礼物分类多语言操作 =========
  async getGiftCategoryLanguage(e, t) {
    this.setLoading("giftCategoryLanguage", !0), this.setError(null);
    try {
      const a = await T(e, t);
      return this.setLoading("giftCategoryLanguage", !1), a;
    } catch (a) {
      const r = a instanceof Error ? a : new Error(String(a));
      throw this.setLoading("giftCategoryLanguage", !1), this.setError(r), r;
    }
  }
  async setGiftCategoryLanguage(e, t, a, r) {
    this.setLoading("giftCategoryLanguage", !0), this.setError(null);
    try {
      await v(e, t, a, r), this.setLoading("giftCategoryLanguage", !1);
    } catch (n) {
      const f = n instanceof Error ? n : new Error(String(n));
      throw this.setLoading("giftCategoryLanguage", !1), this.setError(f), f;
    }
  }
  async deleteGiftCategoryLanguage(e, t) {
    this.setLoading("giftCategoryLanguage", !0), this.setError(null);
    try {
      await N(e, t), this.setLoading("giftCategoryLanguage", !1);
    } catch (a) {
      const r = a instanceof Error ? a : new Error(String(a));
      throw this.setLoading("giftCategoryLanguage", !1), this.setError(r), r;
    }
  }
}
export {
  q as G
};
