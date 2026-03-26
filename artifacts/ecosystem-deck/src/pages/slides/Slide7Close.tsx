const base = import.meta.env.BASE_URL;

export default function Slide7Close() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#03040e]">
      <img
        src={`${base}hero.png`}
        crossOrigin="anonymous"
        alt="Cyberpunk ecosystem"
        className="absolute inset-0 w-full h-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#03040e] via-[#03040e]/80 to-[#03040e]/60" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-[10vw]">
        <div className="flex items-center gap-[1.5vw] mb-[5vh]">
          <div className="h-[0.15vh] w-[8vw] bg-gradient-to-r from-transparent to-[#00ff88]" />
          <span className="font-display text-[1.1vw] tracking-[0.4em] text-[#00ff88] uppercase">System Status</span>
          <div className="h-[0.15vh] w-[8vw] bg-gradient-to-l from-transparent to-[#00ff88]" />
        </div>

        <h2 className="font-display font-black text-[6vw] text-white tracking-tight leading-none mb-[3vh]">
          ECOSYSTEM COMMAND
          <span className="block" style={{color: "#00ff88", textShadow: "0 0 60px rgba(0,255,136,0.4)"}}>CENTER ONLINE</span>
        </h2>

        <p className="font-body text-[1.8vw] text-white/60 max-w-[55vw] leading-relaxed mb-[6vh]">
          Deployed. Live. Government-grade. The Self-Healing Ecosystem Model is protecting biodiversity intelligence at scale — available 24/7 to any authorized user.
        </p>

        <div className="grid grid-cols-3 gap-[3vw] mb-[6vh]">
          <div className="text-center">
            <div className="font-display font-black text-[3.5vw] text-[#00ff88]">5</div>
            <div className="font-body text-[1.2vw] text-white/50 mt-[0.5vh]">ML Models Active</div>
          </div>
          <div className="text-center">
            <div className="font-display font-black text-[3.5vw] text-[#00e5ff]">4</div>
            <div className="font-body text-[1.2vw] text-white/50 mt-[0.5vh]">Biome Types</div>
          </div>
          <div className="text-center">
            <div className="font-display font-black text-[3.5vw] text-white">36</div>
            <div className="font-body text-[1.2vw] text-white/50 mt-[0.5vh]">Species Catalogued</div>
          </div>
        </div>

        <div className="flex items-center gap-[1.5vw]">
          <div className="w-[0.8vw] h-[0.8vw] rounded-full bg-[#00ff88]" />
          <span className="font-display text-[1.3vw] text-[#00ff88] tracking-[0.2em] uppercase">All Systems Operational</span>
          <div className="w-[0.8vw] h-[0.8vw] rounded-full bg-[#00ff88]" />
        </div>
      </div>

      <div className="absolute bottom-[5vh] left-[7vw] right-[7vw] flex justify-between items-center">
        <span className="font-body text-[1.1vw] text-white/30 tracking-widest uppercase">Ecosystem Intelligence Division</span>
        <span className="font-display text-[1.1vw] text-white/25 tracking-wider">SELF-HEALING ECOSYSTEM MODEL v1.0.0</span>
      </div>
    </div>
  );
}
