import { bb as t, bf as i } from "./main-layout.zkqp5e6A.js";
class n {
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
  setPreview(r) {
    if (!r)
      return this.clearPreview(), "";
    const e = t(this.currentUrl || void 0, r);
    return this.currentUrl = e, e;
  }
  /**
   * Clear current preview URL
   * Revokes ObjectURL to free memory
   */
  clearPreview() {
    this.currentUrl && (i(this.currentUrl), this.currentUrl = "");
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
  n as P
};
