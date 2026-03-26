export default function Slide2Problem() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#03040e]">
      <div className="absolute inset-0" style={{background: "radial-gradient(ellipse at 80% 50%, rgba(255,77,109,0.08), transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(0,229,255,0.05), transparent 50%)"}} />
      <div className="absolute top-0 left-0 w-full h-[0.3vh] bg-gradient-to-r from-transparent via-[#ff4d6d] to-transparent opacity-60" />

      <div className="relative h-full flex flex-col px-[7vw] py-[7vh]">
        <div className="flex items-center gap-[1vw] mb-[5vh]">
          <div className="w-[0.4vw] h-[3vh] bg-[#ff4d6d]" />
          <span className="font-display text-[1.1vw] tracking-[0.25em] text-[#ff4d6d] uppercase">The Challenge</span>
        </div>

        <h2 className="font-display font-bold text-[3.8vw] text-white tracking-tight leading-tight mb-[4vh]">
          ECOSYSTEMS ARE COLLAPSING<br />
          <span className="text-[#ff4d6d]">WITHOUT WARNING</span>
        </h2>

        <div className="grid grid-cols-3 gap-[2.5vw] flex-1">
          <div className="bg-[#0d1117] border border-[#ff4d6d]/20 rounded-2xl p-[2.5vw] flex flex-col">
            <div className="font-display font-black text-[8vw] text-[#ff4d6d] leading-none mb-[2vh]">68%</div>
            <div className="font-body font-semibold text-[1.5vw] text-white mb-[1vh]">Wildlife Populations Lost</div>
            <div className="font-body text-[1.3vw] text-white/50 leading-relaxed">Global vertebrate populations have declined by 68% since 1970 — an accelerating crisis.</div>
          </div>

          <div className="bg-[#0d1117] border border-[#00e5ff]/20 rounded-2xl p-[2.5vw] flex flex-col">
            <div className="font-display font-black text-[8vw] text-[#00e5ff] leading-none mb-[2vh]">1M+</div>
            <div className="font-body font-semibold text-[1.5vw] text-white mb-[1vh]">Species at Risk</div>
            <div className="font-body text-[1.3vw] text-white/50 leading-relaxed">Over 1 million species face extinction. Traditional monitoring cannot keep pace with the rate of loss.</div>
          </div>

          <div className="bg-[#0d1117] border border-[#00ff88]/20 rounded-2xl p-[2.5vw] flex flex-col">
            <div className="font-display font-black text-[8vw] text-[#00ff88] leading-none mb-[2vh]">0</div>
            <div className="font-body font-semibold text-[1.5vw] text-white mb-[1vh]">Real-Time Systems</div>
            <div className="font-body text-[1.3vw] text-white/50 leading-relaxed">No government-grade ML platform exists to predict, monitor, and prevent ecosystem collapse in real time.</div>
          </div>
        </div>

        <div className="mt-[3vh] pt-[2vh] border-t border-white/10">
          <p className="font-body text-[1.3vw] text-white/50 tracking-wider">
            Source: WWF Living Planet Report 2022 — IUCN Red List 2023
          </p>
        </div>
      </div>
    </div>
  );
}
