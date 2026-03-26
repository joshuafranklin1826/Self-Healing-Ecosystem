export default function Slide4ML() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#03040e]">
      <div className="absolute inset-0" style={{background: "radial-gradient(ellipse at 50% 0%, rgba(0,229,255,0.08), transparent 60%)"}} />
      <div className="absolute top-0 left-0 w-full h-[0.3vh] bg-gradient-to-r from-transparent via-[#00e5ff] to-transparent opacity-60" />

      <div className="relative h-full flex flex-col px-[7vw] py-[7vh]">
        <div className="flex items-center gap-[1vw] mb-[3vh]">
          <div className="w-[0.4vw] h-[3vh] bg-[#00e5ff]" />
          <span className="font-display text-[1.1vw] tracking-[0.25em] text-[#00e5ff] uppercase">Intelligence Engine</span>
        </div>
        <h2 className="font-display font-bold text-[3.5vw] text-white tracking-tight mb-[4vh]">
          5 ML MODELS. <span className="text-[#00e5ff]">ONE UNIFIED ENGINE.</span>
        </h2>

        <div className="grid grid-cols-5 gap-[1.5vw] flex-1">
          <div className="bg-[#0d1117] border border-[#00ff88]/30 rounded-2xl p-[1.5vw] flex flex-col">
            <div className="font-display font-bold text-[1vw] text-[#00ff88] tracking-widest uppercase mb-[1.5vh]">01 // Health Classifier</div>
            <div className="font-display font-black text-[3vw] text-[#00ff88] mb-[1.5vh]">H/S/C</div>
            <div className="font-body text-[1.1vw] text-white/55 leading-relaxed flex-1">Scores ecosystems 0-100. Classifies as Healthy, Stressed, or Collapsing based on biome-specific environmental optima.</div>
            <div className="mt-[2vh] pt-[1.5vh] border-t border-white/10">
              <span className="font-body text-[1vw] text-[#00ff88]/70">Threshold: 70 / 40</span>
            </div>
          </div>

          <div className="bg-[#0d1117] border border-[#00e5ff]/30 rounded-2xl p-[1.5vw] flex flex-col">
            <div className="font-display font-bold text-[1vw] text-[#00e5ff] tracking-widest uppercase mb-[1.5vh]">02 // Recovery Predictor</div>
            <div className="font-display font-black text-[3vw] text-[#00e5ff] mb-[1.5vh]">Wks</div>
            <div className="font-body text-[1.1vw] text-white/55 leading-relaxed flex-1">Estimates recovery time in weeks based on current health deficit, pollution level, and deforestation rate.</div>
            <div className="mt-[2vh] pt-[1.5vh] border-t border-white/10">
              <span className="font-body text-[1vw] text-[#00e5ff]/70">Output: 0-500 weeks</span>
            </div>
          </div>

          <div className="bg-[#0d1117] border border-[#ff4d6d]/30 rounded-2xl p-[1.5vw] flex flex-col">
            <div className="font-display font-bold text-[1vw] text-[#ff4d6d] tracking-widest uppercase mb-[1.5vh]">03 // Collapse Risk SVM</div>
            <div className="font-display font-black text-[3vw] text-[#ff4d6d] mb-[1.5vh]">%</div>
            <div className="font-body text-[1.1vw] text-white/55 leading-relaxed flex-1">Computes collapse probability 0-1 from temperature stress, pollution excess, deforestation, and biodiversity deficit.</div>
            <div className="mt-[2vh] pt-[1.5vh] border-t border-white/10">
              <span className="font-body text-[1vw] text-[#ff4d6d]/70">Alert threshold: 50%</span>
            </div>
          </div>

          <div className="bg-[#0d1117] border border-white/20 rounded-2xl p-[1.5vw] flex flex-col">
            <div className="font-display font-bold text-[1vw] text-white/70 tracking-widest uppercase mb-[1.5vh]">04 // Lotka-Volterra</div>
            <div className="font-display font-black text-[3vw] text-white mb-[1.5vh]">Sim</div>
            <div className="font-body text-[1.1vw] text-white/55 leading-relaxed flex-1">Simulates plant, herbivore, and predator population dynamics over time with environmental stress modifiers.</div>
            <div className="mt-[2vh] pt-[1.5vh] border-t border-white/10">
              <span className="font-body text-[1vw] text-white/40">Up to 500 weeks</span>
            </div>
          </div>

          <div className="bg-[#0d1117] border border-[#fbbf24]/30 rounded-2xl p-[1.5vw] flex flex-col">
            <div className="font-display font-bold text-[1vw] text-[#fbbf24] tracking-widest uppercase mb-[1.5vh]">05 // Recommender</div>
            <div className="font-display font-black text-[3vw] text-[#fbbf24] mb-[1.5vh]">Rec</div>
            <div className="font-body text-[1.1vw] text-white/55 leading-relaxed flex-1">Generates prioritized intervention recommendations: CRITICAL, HIGH, MEDIUM, LOW — with timeline and impact forecasts.</div>
            <div className="mt-[2vh] pt-[1.5vh] border-t border-white/10">
              <span className="font-body text-[1vw] text-[#fbbf24]/70">4 priority levels</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
