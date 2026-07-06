import { useState as i, useRef as w, useCallback as l, useEffect as a } from "react";
import { P as v } from "./PreviewUrlController.C50RaE42.js";
function p() {
  const [t, n] = i(""), r = w(null);
  r.current || (r.current = new v());
  const e = r.current, o = l((s) => {
    const u = e.setPreview(s);
    n(u);
  }, [e]), c = l(() => {
    e.clearPreview(), n("");
  }, [e]);
  return a(() => () => {
    e.cleanup();
  }, [e]), {
    /** Current preview URL (empty string if none) */
    previewUrl: t,
    /** Set preview from File/Blob (or null to clear) */
    setPreview: o,
    /** Clear preview URL */
    clearPreview: c,
    /** Whether preview exists */
    hasPreview: !!t
  };
}
export {
  p as u
};
