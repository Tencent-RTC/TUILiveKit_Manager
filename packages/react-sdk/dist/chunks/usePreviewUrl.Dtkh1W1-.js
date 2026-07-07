import { ref as i, onUnmounted as u } from "vue";
import { P as v } from "./PreviewUrlController.BsW8SI00.js";
function a() {
  const e = i(""), r = new v();
  function n(t) {
    const l = r.setPreview(t);
    e.value = l;
  }
  function o() {
    r.clearPreview(), e.value = "";
  }
  return u(() => {
    r.cleanup();
  }), {
    /** Current preview URL (empty string if none) */
    previewUrl: e,
    /** Set preview from File/Blob (or null to clear) */
    setPreview: n,
    /** Clear preview URL */
    clearPreview: o,
    /** Whether preview exists */
    get hasPreview() {
      return !!e.value;
    }
  };
}
export {
  a as u
};
