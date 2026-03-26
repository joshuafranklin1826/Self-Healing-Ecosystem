export default function Slide6Live() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#03040e]">
      <div className="absolute inset-0" style={{background: "radial-gradient(ellipse at 50% 50%, rgba(0,255,136,0.06), transparent 65%)"}} />
      <div className="absolute top-0 left-0 w-full h-[0.3vh] bg-gradient-to-r from-transparent via-[#00ff88] to-transparent opacity-60" />

      <div className="relative h-full flex flex-col px-[7vw] py-[7vh]">
        <div className="flex items-center justify-between mb-[3.5vh]">
          <div className="flex items-center gap-[1vw]">
            <div className="w-[0.4vw] h-[3vh] bg-[#00ff88]" />
            <span className="font-display text-[1.1vw] tracking-[0.25em] text-[#00ff88] uppercase">Live System Status</span>
          </div>
          <div className="flex items-center gap-[0.8vw] bg-[#00ff88]/10 border border-[#00ff88]/30 rounded-full px-[1.5vw] py-[0.8vh]">
            <div className="w-[0.7vw] h-[0.7vw] rounded-full bg-[#00ff88]" />
            <span className="font-display text-[1vw] text-[#00ff88] tracking-wider">DEPLOYED AND LIVE</span>
          </div>
        </div>

        <h2 className="font-display font-bold text-[3.5vw] text-white tracking-tight mb-[4vh]">
          COMMAND CENTER <span className="text-[#00ff88]">OPERATIONAL</span>
        </h2>

        <div className="grid grid-cols-3 gap-[2vw] mb-[3vh]">
          <div className="bg-[#0d1117] border border-[#00ff88]/25 rounded-2xl p-[2vw]">
            <div className="font-body text-[1.1vw] text-white/50 uppercase tracking-wider mb-[1vh]">Total Ecosystem Models</div>
            <div className="font-display font-black text-[7vw] text-[#00ff88] leading-none">10</div>
            <div className="font-body text-[1.2vw] text-white/40 mt-[1vh]">persisted in PostgreSQL archive</div>
          </div>
          <div className="bg-[#0d1117] border border-[#00e5ff]/25 rounded-2xl p-[2vw]">
            <div className="font-body text-[1.1vw] text-white/50 uppercase tracking-wider mb-[1vh]">System Average Health</div>
            <div className="font-display font-black text-[7vw] text-[#00e5ff] leading-none">80</div>
            <div className="font-body text-[1.2vw] text-white/40 mt-[1vh]">out of 100 — performing well</div>
          </div>
          <div className="bg-[#0d1117] border border-white/15 rounded-2xl p-[2vw]">
            <div className="font-body text-[1.1vw] text-white/50 uppercase tracking-wider mb-[1vh]">Status Breakdown</div>
            <div className="flex flex-col gap-[1.2vh] mt-[1.5vh]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[0.8vw]">
                  <div className="w-[0.7vw] h-[0.7vw] rounded-full bg-[#00ff88]" />
                  <span className="font-body text-[1.3vw] text-white/80">Healthy</span>
                </div>
                <span className="font-display font-bold text-[1.8vw] text-[#00ff88]">7</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[0.8vw]">
                  <div className="w-[0.7vw] h-[0.7vw] rounded-full bg-[#00e5ff]" />
                  <span className="font-body text-[1.3vw] text-white/80">Stressed</span>
                </div>
                <span className="font-display font-bold text-[1.8vw] text-[#00e5ff]">2</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[0.8vw]">
                  <div className="w-[0.7vw] h-[0.7vw] rounded-full bg-[#ff4d6d]" />
                  <span className="font-body text-[1.3vw] text-white/80">Collapsing</span>
                </div>
                <span className="font-display font-bold text-[1.8vw] text-[#ff4d6d]">1</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-[1.5vw]">
          <div className="bg-[#0d1117] border border-white/10 rounded-xl px-[1.5vw] py-[1.5vh] flex items-center gap-[1vw]">
            <div className="w-[0.5vw] h-[0.5vw] rounded-full bg-[#00ff88]" />
            <div>
              <div className="font-display font-bold text-[1.2vw] text-white">Auto-Refresh</div>
              <div className="font-body text-[1vw] text-white/40">Every 30 seconds</div>
            </div>
          </div>
          <div className="bg-[#0d1117] border border-white/10 rounded-xl px-[1.5vw] py-[1.5vh] flex items-center gap-[1vw]">
            <div className="w-[0.5vw] h-[0.5vw] rounded-full bg-[#00e5ff]" />
            <div>
              <div className="font-display font-bold text-[1.2vw] text-white">Critical Alerts</div>
              <div className="font-body text-[1vw] text-white/40">Real-time red alerts</div>
            </div>
          </div>
          <div className="bg-[#0d1117] border border-white/10 rounded-xl px-[1.5vw] py-[1.5vh] flex items-center gap-[1vw]">
            <div className="w-[0.5vw] h-[0.5vw] rounded-full bg-[#fbbf24]" />
            <div>
              <div className="font-display font-bold text-[1.2vw] text-white">Filter + Sort</div>
              <div className="font-body text-[1vw] text-white/40">By type, status, health</div>
            </div>
          </div>
          <div className="bg-[#0d1117] border border-white/10 rounded-xl px-[1.5vw] py-[1.5vh] flex items-center gap-[1vw]">
            <div className="w-[0.5vw] h-[0.5vw] rounded-full bg-[#ff4d6d]" />
            <div>
              <div className="font-display font-bold text-[1.2vw] text-white">Shared Live URL</div>
              <div className="font-body text-[1vw] text-white/40">Anyone can access</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
