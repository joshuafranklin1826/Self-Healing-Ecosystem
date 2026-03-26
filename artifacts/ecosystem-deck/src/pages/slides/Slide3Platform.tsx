export default function Slide3Platform() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#03040e]">
      <div className="absolute inset-0" style={{background: "radial-gradient(ellipse at 15% 50%, rgba(0,255,136,0.07), transparent 55%)"}} />
      <div className="absolute top-0 left-0 w-full h-[0.3vh] bg-gradient-to-r from-transparent via-[#00ff88] to-transparent opacity-60" />

      <div className="relative h-full flex px-[7vw] py-[7vh] gap-[5vw]">
        <div className="w-[42%] flex flex-col justify-center">
          <div className="flex items-center gap-[1vw] mb-[3vh]">
            <div className="w-[0.4vw] h-[3vh] bg-[#00ff88]" />
            <span className="font-display text-[1.1vw] tracking-[0.25em] text-[#00ff88] uppercase">The Solution</span>
          </div>
          <h2 className="font-display font-bold text-[3.8vw] text-white tracking-tight leading-tight mb-[3vh]">
            ONE PLATFORM.<br />
            <span className="text-[#00ff88]">FOUR BIOMES.</span><br />
            INFINITE INSIGHT.
          </h2>
          <p className="font-body text-[1.6vw] text-white/60 leading-relaxed mb-[4vh]">
            Build, simulate, and monitor any ecosystem type with full ML-powered analysis. From arctic tundra to tropical rainforests — all in real time.
          </p>
          <div className="flex flex-col gap-[1.5vh]">
            <div className="flex items-center gap-[1.2vw]">
              <div className="w-[0.5vw] h-[0.5vw] rounded-full bg-[#00ff88]" />
              <span className="font-body text-[1.4vw] text-white/80">3-step ecosystem builder wizard</span>
            </div>
            <div className="flex items-center gap-[1.2vw]">
              <div className="w-[0.5vw] h-[0.5vw] rounded-full bg-[#00ff88]" />
              <span className="font-body text-[1.4vw] text-white/80">Apply interventions and track outcomes</span>
            </div>
            <div className="flex items-center gap-[1.2vw]">
              <div className="w-[0.5vw] h-[0.5vw] rounded-full bg-[#00ff88]" />
              <span className="font-body text-[1.4vw] text-white/80">Population simulation up to 500 weeks</span>
            </div>
            <div className="flex items-center gap-[1.2vw]">
              <div className="w-[0.5vw] h-[0.5vw] rounded-full bg-[#00ff88]" />
              <span className="font-body text-[1.4vw] text-white/80">Persistent archive with live auto-refresh</span>
            </div>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-2 gap-[1.5vw] content-center">
          <div className="bg-[#0d1117] border border-[#00ff88]/25 rounded-2xl p-[2vw] flex flex-col gap-[1vh]">
            <div className="text-[2.5vw] font-body">🌲</div>
            <div className="font-display font-bold text-[1.5vw] text-[#00ff88] tracking-wider">FOREST</div>
            <div className="font-body text-[1.2vw] text-white/50">Dense canopy — 9 species including apex predators and primary producers</div>
          </div>
          <div className="bg-[#0d1117] border border-[#00e5ff]/25 rounded-2xl p-[2vw] flex flex-col gap-[1vh]">
            <div className="text-[2.5vw] font-body">💧</div>
            <div className="font-display font-bold text-[1.5vw] text-[#00e5ff] tracking-wider">RIVER</div>
            <div className="font-body text-[1.2vw] text-white/50">Aquatic ecosystem — water-dependent species and riparian biodiversity</div>
          </div>
          <div className="bg-[#0d1117] border border-white/15 rounded-2xl p-[2vw] flex flex-col gap-[1vh]">
            <div className="text-[2.5vw] font-body">🌾</div>
            <div className="font-display font-bold text-[1.5vw] text-white tracking-wider">GRASSLAND</div>
            <div className="font-body text-[1.2vw] text-white/50">Open plains — grazing species, savanna herbivores, and predator chains</div>
          </div>
          <div className="bg-[#0d1117] border border-[#60a5fa]/25 rounded-2xl p-[2vw] flex flex-col gap-[1vh]">
            <div className="text-[2.5vw] font-body">❄️</div>
            <div className="font-display font-bold text-[1.5vw] text-[#60a5fa] tracking-wider">POLAR</div>
            <div className="font-body text-[1.2vw] text-white/50">Arctic tundra — cold-adapted species with temperature-sensitive ML optima</div>
          </div>
        </div>
      </div>
    </div>
  );
}
