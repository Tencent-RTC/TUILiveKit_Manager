import { aA as o, aB as s, r as g } from "./en-US.BGpvCrvn.js";
const h = () => "gift_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9), y = (i, e, t) => {
  const a = i.Name || "", r = i.Desc || "", n = (i.LanguageList || []).map((f) => ({
    name: f.Name || "",
    description: f.Desc || "",
    language: f.Language || ""
  })), c = t.get(i.GiftId) || [];
  return {
    id: i.GiftId,
    name: a,
    iconUrl: i.IconUrl || "",
    price: i.Coins || 0,
    animationUrl: i.ResourceUrl || "",
    level: i.Level !== void 0 ? String(i.Level) : void 0,
    description: r,
    categoryIds: c,
    categories: e.get(i.GiftId) || [],
    createdAt: i.CreateTime !== void 0 ? String(i.CreateTime) : void 0,
    languageList: n
  };
}, u = (i) => {
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
function l(i) {
  const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  return (i || []).forEach((a) => {
    const r = a.CategoryName || "";
    (a.GiftIdList || []).forEach((n) => {
      e.has(n) || (e.set(n, []), t.set(n, [])), r && e.get(n).push(r), t.get(n).push(a.CategoryId);
    });
  }), { giftToCategories: e, giftToCategoryIds: t };
}
async function L(i) {
  const e = await o(s.getGiftList, {});
  if (e && e.ErrorCode === 0 && e.Response) {
    const t = e.Response.GiftList || [], a = e.Response.CategoryList || [], { giftToCategories: r, giftToCategoryIds: n } = l(a), c = t.map((d) => y(d, r, n)), f = a.map((d) => u(d));
    return {
      gifts: c,
      total: e.Response.TotalCount || c.length,
      categories: f
    };
  }
  return { gifts: [], total: 0 };
}
async function C(i) {
  const e = i.id || h();
  return await o(s.addGift, {
    Gift: {
      GiftId: e,
      Name: i.name || "",
      IconUrl: i.iconUrl || "",
      Coins: i.price || 0,
      ResourceUrl: i.animationUrl || "",
      Level: i.level ? parseInt(i.level) : 0,
      Desc: i.description || ""
    }
  }), e;
}
async function G(i) {
  await o(s.editGift, {
    Gift: {
      GiftId: i.giftId,
      Name: i.name || "",
      IconUrl: i.iconUrl || "",
      Coins: i.price || 0,
      ResourceUrl: i.animationUrl || "",
      Level: i.level ? parseInt(i.level) : 0,
      Desc: i.description || ""
    }
  });
}
async function w(i) {
  await o(s.delGift, { GiftId: i });
}
async function E(i, e) {
  const a = (await o(s.getGiftLanguage, { GiftId: i, Language: e }))?.Response?.Language;
  return {
    name: a?.Name || "",
    description: a?.Desc || ""
  };
}
async function I(i, e, t, a) {
  await o(s.setGiftLanguage, {
    GiftId: i,
    Language: e,
    Name: t,
    Desc: a || ""
  });
}
async function S(i, e) {
  await o(s.delGiftLanguage, { GiftId: i, Language: e });
}
async function p(i) {
  await o(s.addGiftCategory, {
    Category: {
      CategoryId: i.categoryId,
      CategoryName: i.name || i.defaultName || "",
      CategoryDesc: i.description || i.defaultDesc || ""
    }
  });
}
async function A(i) {
  await o(s.editGiftCategory, {
    Category: {
      CategoryId: i.categoryId,
      CategoryName: i.name || i.defaultName || "",
      CategoryDesc: i.description || i.defaultDesc || ""
    }
  });
}
async function _(i) {
  await o(s.delGiftCategory, { CategoryId: i });
}
async function R(i, e) {
  const a = (await o(s.getGiftCategoryLanguage, { CategoryId: i, Language: e }))?.Response?.Language;
  return {
    name: a?.CategoryName || "",
    description: a?.CategoryDesc || ""
  };
}
async function m(i, e, t, a) {
  await o(s.setGiftCategoryLanguage, {
    CategoryId: i,
    Language: e,
    CategoryName: t,
    CategoryDesc: a || ""
  });
}
async function D(i, e) {
  await o(s.delGiftCategoryLanguage, { CategoryId: i, Language: e });
}
async function N(i, e) {
  await o(s.addGiftCategoryRelations, { CategoryId: i, GiftIdList: e });
}
async function v(i, e) {
  await o(s.delGiftCategoryRelations, { CategoryId: i, GiftIdList: e });
}
class U {
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
      const t = await L(e?.language);
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
      const t = await C(e);
      return this.setLoading("giftAction", !1), g("gift_manage", "create", !0, e.id), t;
    } catch (t) {
      const a = t instanceof Error ? t : new Error(String(t));
      throw this.setLoading("giftAction", !1), this.setError(a), g("gift_manage", "create", !1), a;
    }
  }
  async updateGift(e) {
    this.setLoading("giftAction", !0), this.setError(null);
    try {
      await G(e), this.setLoading("giftAction", !1), g("gift_manage", "update", !0, e.giftId);
    } catch (t) {
      const a = t instanceof Error ? t : new Error(String(t));
      throw this.setLoading("giftAction", !1), this.setError(a), g("gift_manage", "update", !1, e.giftId), a;
    }
  }
  async deleteGift(e) {
    this.setLoading("giftAction", !0), this.setError(null);
    try {
      await w(e), this.giftList = this.giftList.filter((t) => t.id !== e), this.setLoading("giftAction", !1), this.notifyStateChange(), g("gift_manage", "delete", !0, e);
    } catch (t) {
      const a = t instanceof Error ? t : new Error(String(t));
      throw this.setLoading("giftAction", !1), this.setError(a), g("gift_manage", "delete", !1, e), a;
    }
  }
  // ========= 礼物分类操作 =========
  async createGiftCategory(e) {
    this.setLoading("categoryAction", !0), this.setError(null);
    try {
      await p(e), this.setLoading("categoryAction", !1), g("gift_manage", "create_category", !0, e.categoryId);
    } catch (t) {
      const a = t instanceof Error ? t : new Error(String(t));
      throw this.setLoading("categoryAction", !1), this.setError(a), g("gift_manage", "create_category", !1), a;
    }
  }
  async updateGiftCategory(e) {
    this.setLoading("categoryAction", !0), this.setError(null);
    try {
      await A(e), this.setLoading("categoryAction", !1), g("gift_manage", "update_category", !0, e.categoryId);
    } catch (t) {
      const a = t instanceof Error ? t : new Error(String(t));
      throw this.setLoading("categoryAction", !1), this.setError(a), g("gift_manage", "update_category", !1, e.categoryId), a;
    }
  }
  async deleteGiftCategory(e) {
    this.setLoading("categoryAction", !0), this.setError(null);
    try {
      await _(e), this.giftCategoryList = this.giftCategoryList.filter((t) => t.id !== e), this.setLoading("categoryAction", !1), this.notifyStateChange(), g("gift_manage", "delete_category", !0, e);
    } catch (t) {
      const a = t instanceof Error ? t : new Error(String(t));
      throw this.setLoading("categoryAction", !1), this.setError(a), g("gift_manage", "delete_category", !1, e), a;
    }
  }
  // ========= 礼物-分类关联操作 =========
  async addGiftCategoryRelations(e) {
    this.setLoading("giftCategory", !0), this.setError(null);
    try {
      const { giftId: t, categoryIds: a } = e;
      for (const r of a)
        await N(r, [t]);
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
        await v(r, [t]);
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
      const t = await E(e.giftId, e.language);
      return this.setLoading("giftLanguage", !1), t;
    } catch (t) {
      const a = t instanceof Error ? t : new Error(String(t));
      throw this.setLoading("giftLanguage", !1), this.setError(a), a;
    }
  }
  async setGiftLanguage(e) {
    this.setLoading("giftLanguage", !0), this.setError(null);
    try {
      await I(e.giftId, e.language, e.name, e.description), this.setLoading("giftLanguage", !1);
    } catch (t) {
      const a = t instanceof Error ? t : new Error(String(t));
      throw this.setLoading("giftLanguage", !1), this.setError(a), a;
    }
  }
  async deleteGiftLanguage(e) {
    this.setLoading("giftLanguage", !0), this.setError(null);
    try {
      await S(e.giftId, e.language), this.setLoading("giftLanguage", !1);
    } catch (t) {
      const a = t instanceof Error ? t : new Error(String(t));
      throw this.setLoading("giftLanguage", !1), this.setError(a), a;
    }
  }
  // ========= 礼物分类多语言操作 =========
  async getGiftCategoryLanguage(e, t) {
    this.setLoading("giftCategoryLanguage", !0), this.setError(null);
    try {
      const a = await R(e, t);
      return this.setLoading("giftCategoryLanguage", !1), a;
    } catch (a) {
      const r = a instanceof Error ? a : new Error(String(a));
      throw this.setLoading("giftCategoryLanguage", !1), this.setError(r), r;
    }
  }
  async setGiftCategoryLanguage(e, t, a, r) {
    this.setLoading("giftCategoryLanguage", !0), this.setError(null);
    try {
      await m(e, t, a, r), this.setLoading("giftCategoryLanguage", !1);
    } catch (n) {
      const c = n instanceof Error ? n : new Error(String(n));
      throw this.setLoading("giftCategoryLanguage", !1), this.setError(c), c;
    }
  }
  async deleteGiftCategoryLanguage(e, t) {
    this.setLoading("giftCategoryLanguage", !0), this.setError(null);
    try {
      await D(e, t), this.setLoading("giftCategoryLanguage", !1);
    } catch (a) {
      const r = a instanceof Error ? a : new Error(String(a));
      throw this.setLoading("giftCategoryLanguage", !1), this.setError(r), r;
    }
  }
}
export {
  U as G
};
