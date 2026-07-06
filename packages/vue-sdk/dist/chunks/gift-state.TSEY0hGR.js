import { at as h, au as o, av as g } from "./en-US.BxRaQHCQ.js";
import { r as s } from "./logger.DfjyL4S7.js";
const u = () => "gift_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9), y = (a, e, t) => {
  const i = a.Name || "", r = a.Desc || "", n = (a.LanguageList || []).map((f) => ({
    name: f.Name || "",
    description: f.Desc || "",
    language: f.Language || ""
  })), c = t.get(a.GiftId) || [];
  return {
    id: a.GiftId,
    name: i,
    iconUrl: a.IconUrl || "",
    price: a.Coins || 0,
    animationUrl: a.ResourceUrl || "",
    level: a.Level !== void 0 ? String(a.Level) : void 0,
    description: r,
    categoryIds: c,
    categories: e.get(a.GiftId) || [],
    createdAt: a.CreateTime !== void 0 ? String(a.CreateTime) : void 0,
    languageList: n
  };
}, l = (a) => {
  const e = a.CategoryName || "", t = a.CategoryDesc || "", i = (a.LanguageList || []).map((n) => ({
    categoryName: n.CategoryName || "",
    categoryDescription: n.CategoryDesc || "",
    language: n.Language || ""
  })), r = a.GiftIdList || [];
  return {
    id: a.CategoryId,
    name: e,
    description: t,
    giftIds: r,
    giftCount: r.length,
    languageList: i
  };
};
function L(a) {
  const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  return (a || []).forEach((i) => {
    const r = i.CategoryName || "";
    (i.GiftIdList || []).forEach((n) => {
      e.has(n) || (e.set(n, []), t.set(n, [])), r && e.get(n).push(r), t.get(n).push(i.CategoryId);
    });
  }), { giftToCategories: e, giftToCategoryIds: t };
}
async function C(a) {
  const e = await h(o.getGiftList, {});
  if (e && e.ErrorCode === 0 && e.Response) {
    const t = e.Response.GiftList || [], i = e.Response.CategoryList || [], { giftToCategories: r, giftToCategoryIds: n } = L(i), c = t.map((d) => y(d, r, n)), f = i.map((d) => l(d));
    return {
      gifts: c,
      total: e.Response.TotalCount || c.length,
      categories: f
    };
  }
  return { gifts: [], total: 0 };
}
async function G(a) {
  const e = a.id || u();
  return await g(o.addGift, {
    Gift: {
      GiftId: e,
      Name: a.name || "",
      IconUrl: a.iconUrl || "",
      Coins: a.price || 0,
      ResourceUrl: a.animationUrl || "",
      Level: a.level ? parseInt(a.level) : 0,
      Desc: a.description || ""
    }
  }), e;
}
async function w(a) {
  await g(o.editGift, {
    Gift: {
      GiftId: a.giftId,
      Name: a.name || "",
      IconUrl: a.iconUrl || "",
      Coins: a.price || 0,
      ResourceUrl: a.animationUrl || "",
      Level: a.level ? parseInt(a.level) : 0,
      Desc: a.description || ""
    }
  });
}
async function E(a) {
  await g(o.delGift, { GiftId: a });
}
async function I(a, e) {
  const i = (await h(o.getGiftLanguage, { GiftId: a, Language: e }))?.Response?.Language;
  return {
    name: i?.Name || "",
    description: i?.Desc || ""
  };
}
async function S(a, e, t, i) {
  await g(o.setGiftLanguage, {
    GiftId: a,
    Language: e,
    Name: t,
    Desc: i || ""
  });
}
async function p(a, e) {
  await g(o.delGiftLanguage, { GiftId: a, Language: e });
}
async function m(a) {
  await g(o.addGiftCategory, {
    Category: {
      CategoryId: a.categoryId,
      CategoryName: a.name || a.defaultName || "",
      CategoryDesc: a.description || a.defaultDesc || ""
    }
  });
}
async function A(a) {
  await g(o.editGiftCategory, {
    Category: {
      CategoryId: a.categoryId,
      CategoryName: a.name || a.defaultName || "",
      CategoryDesc: a.description || a.defaultDesc || ""
    }
  });
}
async function R(a) {
  await g(o.delGiftCategory, { CategoryId: a });
}
async function _(a, e) {
  const i = (await h(o.getGiftCategoryLanguage, { CategoryId: a, Language: e }))?.Response?.Language;
  return {
    name: i?.CategoryName || "",
    description: i?.CategoryDesc || ""
  };
}
async function D(a, e, t, i) {
  await g(o.setGiftCategoryLanguage, {
    CategoryId: a,
    Language: e,
    CategoryName: t,
    CategoryDesc: i || ""
  });
}
async function v(a, e) {
  await g(o.delGiftCategoryLanguage, { CategoryId: a, Language: e });
}
async function N(a, e) {
  await g(o.addGiftCategoryRelations, { CategoryId: a, GiftIdList: e });
}
async function T(a, e) {
  await g(o.delGiftCategoryRelations, { CategoryId: a, GiftIdList: e });
}
class b {
  constructor(e = {}) {
    this.giftList = [], this.giftCategoryList = [], this.loading = {}, this.error = null, this.destroyed = !1, this.onStateChange = e.onStateChange;
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
  async fetchGiftList(e) {
    this.setLoading("giftList", !0), this.setError(null);
    try {
      const t = await C(e?.language);
      return this.giftList = t.gifts || [], this.giftCategoryList = t.categories || [], this.setLoading("giftList", !1), this.notifyStateChange(), {
        giftList: t.gifts || [],
        giftCategoryList: t.categories || []
      };
    } catch (t) {
      const i = t instanceof Error ? t : new Error(String(t));
      throw this.setLoading("giftList", !1), this.setError(i), i;
    }
  }
  async createGift(e) {
    this.setLoading("giftAction", !0), this.setError(null);
    try {
      const t = await G(e);
      return this.setLoading("giftAction", !1), s("gift_manage", "create", !0, e.id), t;
    } catch (t) {
      const i = t instanceof Error ? t : new Error(String(t));
      throw this.setLoading("giftAction", !1), this.setError(i), s("gift_manage", "create", !1), i;
    }
  }
  async updateGift(e) {
    this.setLoading("giftAction", !0), this.setError(null);
    try {
      await w(e), this.setLoading("giftAction", !1), s("gift_manage", "update", !0, e.giftId);
    } catch (t) {
      const i = t instanceof Error ? t : new Error(String(t));
      throw this.setLoading("giftAction", !1), this.setError(i), s("gift_manage", "update", !1, e.giftId), i;
    }
  }
  async deleteGift(e) {
    this.setLoading("giftAction", !0), this.setError(null);
    try {
      await E(e), this.giftList = this.giftList.filter((t) => t.id !== e), this.setLoading("giftAction", !1), this.notifyStateChange(), s("gift_manage", "delete", !0, e);
    } catch (t) {
      const i = t instanceof Error ? t : new Error(String(t));
      throw this.setLoading("giftAction", !1), this.setError(i), s("gift_manage", "delete", !1, e), i;
    }
  }
  // ========= 礼物分类操作 =========
  async createGiftCategory(e) {
    this.setLoading("categoryAction", !0), this.setError(null);
    try {
      await m(e), this.setLoading("categoryAction", !1), s("gift_manage", "create_category", !0, e.categoryId);
    } catch (t) {
      const i = t instanceof Error ? t : new Error(String(t));
      throw this.setLoading("categoryAction", !1), this.setError(i), s("gift_manage", "create_category", !1), i;
    }
  }
  async updateGiftCategory(e) {
    this.setLoading("categoryAction", !0), this.setError(null);
    try {
      await A(e), this.setLoading("categoryAction", !1), s("gift_manage", "update_category", !0, e.categoryId);
    } catch (t) {
      const i = t instanceof Error ? t : new Error(String(t));
      throw this.setLoading("categoryAction", !1), this.setError(i), s("gift_manage", "update_category", !1, e.categoryId), i;
    }
  }
  async deleteGiftCategory(e) {
    this.setLoading("categoryAction", !0), this.setError(null);
    try {
      await R(e), this.giftCategoryList = this.giftCategoryList.filter((t) => t.id !== e), this.setLoading("categoryAction", !1), this.notifyStateChange(), s("gift_manage", "delete_category", !0, e);
    } catch (t) {
      const i = t instanceof Error ? t : new Error(String(t));
      throw this.setLoading("categoryAction", !1), this.setError(i), s("gift_manage", "delete_category", !1, e), i;
    }
  }
  // ========= 礼物-分类关联操作 =========
  async addGiftCategoryRelations(e) {
    this.setLoading("giftCategory", !0), this.setError(null);
    try {
      const { giftId: t, categoryIds: i } = e;
      for (const r of i)
        await N(r, [t]);
      this.setLoading("giftCategory", !1), await this.fetchGiftList().catch(() => {
      });
    } catch (t) {
      const i = t instanceof Error ? t : new Error(String(t));
      throw this.setLoading("giftCategory", !1), this.setError(i), i;
    }
  }
  async deleteGiftCategoryRelations(e) {
    this.setLoading("giftCategory", !0), this.setError(null);
    try {
      const { giftId: t, categoryIds: i } = e;
      for (const r of i)
        await T(r, [t]);
      this.setLoading("giftCategory", !1), await this.fetchGiftList().catch(() => {
      });
    } catch (t) {
      const i = t instanceof Error ? t : new Error(String(t));
      throw this.setLoading("giftCategory", !1), this.setError(i), i;
    }
  }
  // ========= 礼物多语言操作 =========
  async getGiftLanguage(e) {
    this.setLoading("giftLanguage", !0), this.setError(null);
    try {
      const t = await I(e.giftId, e.language);
      return this.setLoading("giftLanguage", !1), t;
    } catch (t) {
      const i = t instanceof Error ? t : new Error(String(t));
      throw this.setLoading("giftLanguage", !1), this.setError(i), i;
    }
  }
  async setGiftLanguage(e) {
    this.setLoading("giftLanguage", !0), this.setError(null);
    try {
      await S(e.giftId, e.language, e.name, e.description), this.setLoading("giftLanguage", !1);
    } catch (t) {
      const i = t instanceof Error ? t : new Error(String(t));
      throw this.setLoading("giftLanguage", !1), this.setError(i), i;
    }
  }
  async deleteGiftLanguage(e) {
    this.setLoading("giftLanguage", !0), this.setError(null);
    try {
      await p(e.giftId, e.language), this.setLoading("giftLanguage", !1);
    } catch (t) {
      const i = t instanceof Error ? t : new Error(String(t));
      throw this.setLoading("giftLanguage", !1), this.setError(i), i;
    }
  }
  // ========= 礼物分类多语言操作 =========
  async getGiftCategoryLanguage(e, t) {
    this.setLoading("giftCategoryLanguage", !0), this.setError(null);
    try {
      const i = await _(e, t);
      return this.setLoading("giftCategoryLanguage", !1), i;
    } catch (i) {
      const r = i instanceof Error ? i : new Error(String(i));
      throw this.setLoading("giftCategoryLanguage", !1), this.setError(r), r;
    }
  }
  async setGiftCategoryLanguage(e, t, i, r) {
    this.setLoading("giftCategoryLanguage", !0), this.setError(null);
    try {
      await D(e, t, i, r), this.setLoading("giftCategoryLanguage", !1);
    } catch (n) {
      const c = n instanceof Error ? n : new Error(String(n));
      throw this.setLoading("giftCategoryLanguage", !1), this.setError(c), c;
    }
  }
  async deleteGiftCategoryLanguage(e, t) {
    this.setLoading("giftCategoryLanguage", !0), this.setError(null);
    try {
      await v(e, t), this.setLoading("giftCategoryLanguage", !1);
    } catch (i) {
      const r = i instanceof Error ? i : new Error(String(i));
      throw this.setLoading("giftCategoryLanguage", !1), this.setError(r), r;
    }
  }
}
export {
  b as G
};
