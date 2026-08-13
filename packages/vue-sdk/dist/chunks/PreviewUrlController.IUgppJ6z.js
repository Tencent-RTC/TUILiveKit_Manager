import { b2 as i, m as c } from "./shared-state.2k2VlnY1.js";
import { bw as l, bB as u } from "./main-layout.B_9sQtkU.js";
async function d() {
  return (await i({
    method: "GET",
    url: "/upload/config"
  })).data;
}
async function h() {
  try {
    return !!(await d()).enabled;
  } catch {
    return !1;
  }
}
async function m(e, t = "cover", r) {
  const n = new FormData();
  n.append("file", e), n.append("type", t);
  const a = await i({
    method: "POST",
    url: "/upload/image",
    data: n,
    headers: { "Content-Type": "multipart/form-data" },
    timeout: 6e4,
    onUploadProgress: (o) => {
      if (r && o.total) {
        const s = Math.round(o.loaded * 100 / o.total);
        r(s);
      }
    }
  });
  if (a.code !== 0)
    throw new c(a.message || "", a.code, void 0, "uploadImage");
  return a.data;
}
class w {
  constructor() {
    this.currentUrl = "";
  }
  /**
   * Set preview from File/Blob (or null to clear)
   * Automatically revokes old URL if exists
   * 
   * @param file - File/Blob to create preview from, or null to clear
   * @returns Preview URL (empty string if null)
   */
  setPreview(t) {
    if (!t)
      return this.clearPreview(), "";
    const r = l(this.currentUrl || void 0, t);
    return this.currentUrl = r, r;
  }
  /**
   * Clear current preview URL
   * Revokes ObjectURL to free memory
   */
  clearPreview() {
    this.currentUrl && (u(this.currentUrl), this.currentUrl = "");
  }
  /**
   * Cleanup all resources
   * Should be called on component unmount
   */
  cleanup() {
    this.clearPreview();
  }
  /**
   * Get current preview URL
   * @returns Current URL (empty string if none)
   */
  getCurrentUrl() {
    return this.currentUrl;
  }
  /**
   * Check if preview exists
   */
  hasPreview() {
    return !!this.currentUrl;
  }
}
export {
  w as P,
  d as a,
  h as g,
  m as u
};
