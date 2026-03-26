const base = import.meta.env.BASE_URL;

export default function Slide1Title() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#03040e]">
      <img
        src={`${base}hero.png`}
        crossOrigin="anonymous"
        alt="Cyberpunk ecosystem"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#03040e] via-[#03040e]/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#03040e] via-transparent to-transparent" />

      <div className="absolute inset-0 flex flex-col justify-between px-[7vw] py-[7vh]">
        <div className="flex items-center gap-[1vw]">
          <div className="w-[0.4vw] h-[3vh] bg-[#00ff88]" />
          <span className="font-display text-[1.2vw] tracking-[0.3em] text-[#00ff88] uppercase">ECOSYS // Government-Grade Platform</span>
        </div>

        <div>
          <div className="text-[1.3vw] tracking-[0.25em] text-[#00e5ff] uppercase font-body font-semibold mb-[2vh]">
            CLASSIFIED PROJECT BRIEFING
          </div>
          <h1 className="font-display font-black text-[6.5vw] leading-[0.9] tracking-tight text-white mb-[3vh]">
            SELF-HEALING
            <span className="block text-[#00ff88]" style={{textShadow: "0 0 40px rgba(0,255,136,0.5)"}}>
              ECOSYSTEM
            </span>
            MODEL
          </h1>
          <p className="font-body text-[1.8vw] text-white/70 max-w-[45vw] leading-relaxed">
            ML-powered ecosystem monitoring, collapse prevention, and intelligent recovery at scale.
          </p>
          <div className="flex items-center gap-[3vw] mt-[4vh]">
            <div className="flex items-center gap-[0.8vw]">
              <div className="w-[0.8vw] h-[0.8vw] rounded-full bg-[#00ff88] animate-pulse" />
              <span className="font-body text-[1.2vw] text-[#00ff88] font-semibold">SYSTEM ONLINE</span>
            </div>
            <div className="w-[0.06vw] h-[2.5vh] bg-white/20" />
            <span className="font-body text-[1.2vw] text-white/50">Full-Stack React + Express + PostgreSQL</span>
            <div className="w-[0.06vw] h-[2.5vh] bg-white/20" />
            <span className="font-body text-[1.2vw] text-white/50">5 ML Models Active</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="font-body text-[1.1vw] text-white/40 tracking-widest uppercase">Ecosystem Intelligence Division</span>
          <span className="font-display text-[1.1vw] text-white/30 tracking-wider">v1.0.0 // 2026</span>
        </div>
      </div>
    </div>
  );
}
