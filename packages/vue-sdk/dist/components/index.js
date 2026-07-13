import { c as e } from "../chunks/logger.rNWqpx5t.js";
const n = e("index"), t = "1.0.0", i = "1.0.0", a = "1", s = ["room-list", "live-monitor", "room-control", "gift-config", "risk-control"];
async function l(o) {
  return n.warn("Live Manager", "mountLiveManager not fully implemented yet"), {
    unmount: () => {
      n.warn("Live Manager", "unmount called");
    }
  };
}
async function c(o) {
  return n.warn("Live Manager", "preloadLiveManager not fully implemented yet"), Promise.resolve();
}
export {
  a as compatibleCustomerExtensionVersion,
  s as modules,
  l as mountLiveManager,
  c as preloadLiveManager,
  i as publicApiVersion,
  t as version
};
