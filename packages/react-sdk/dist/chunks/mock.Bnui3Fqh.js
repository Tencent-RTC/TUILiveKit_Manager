function r() {
  return (t) => ({
    id: `mock-player-${t}`,
    on: () => {
    },
    off: () => {
    },
    play: async (e) => {
      const n = typeof e == "string" ? document.getElementById(e) : e;
      n && (n.innerHTML = '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,.78);font-size:14px;background:linear-gradient(135deg,rgba(15,52,96,.72),rgba(26,26,46,.72));">Mock Live</div>');
    },
    stop: async () => {
    },
    muteAudio: async () => {
    },
    destroy: async () => {
    },
    getPlayerInfo: () => ({ liveId: t, state: "PLAYING" })
  });
}
export {
  r as c
};
