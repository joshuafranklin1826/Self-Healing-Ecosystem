export default function Slide5Architecture() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#03040e]">
      <div className="absolute inset-0" style={{background: "radial-gradient(ellipse at 100% 50%, rgba(0,255,136,0.06), transparent 55%)"}} />
      <div className="absolute top-0 left-0 w-full h-[0.3vh] bg-gradient-to-r from-transparent via-[#00ff88] to-transparent opacity-50" />

      <div className="relative h-full flex flex-col px-[7vw] py-[7vh]">
        <div className="flex items-center gap-[1vw] mb-[3vh]">
          <div className="w-[0.4vw] h-[3vh] bg-[#00ff88]" />
          <span className="font-display text-[1.1vw] tracking-[0.25em] text-[#00ff88] uppercase">System Architecture</span>
        </div>
        <h2 className="font-display font-bold text-[3.5vw] text-white tracking-tight mb-[4vh]">
          FULL-STACK. <span className="text-[#00ff88]">PRODUCTION-GRADE.</span>
        </h2>

        <div className="flex-1 flex items-center gap-[3vw]">
          <div className="flex flex-col gap-[2vh] w-[28%]">
            <div className="font-display text-[1vw] tracking-[0.2em] text-[#00e5ff] uppercase mb-[1vh]">Frontend Layer</div>
            <div className="bg-[#0d1117] border border-[#00e5ff]/30 rounded-xl px-[1.5vw] py-[1.5vh]">
              <div className="font-display font-bold text-[1.3vw] text-[#00e5ff] mb-[0.5vh]">React + Vite</div>
              <div className="font-body text-[1.1vw] text-white/50">SPA with Wouter routing, TanStack Query, Framer Motion, Tailwind CSS</div>
            </div>
            <div className="bg-[#0d1117] border border-[#00e5ff]/20 rounded-xl px-[1.5vw] py-[1.5vh]">
              <div className="font-display font-bold text-[1.3vw] text-[#00e5ff] mb-[0.5vh]">React Query Hooks</div>
              <div className="font-body text-[1.1vw] text-white/50">Auto-generated from OpenAPI spec via Orval codegen. Type-safe, auto-refresh every 30s.</div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-[1vh]">
            <div className="w-[4vw] h-[0.15vw] bg-gradient-to-r from-[#00e5ff] to-[#00ff88]" />
            <span className="font-body text-[0.9vw] text-white/30">REST/JSON</span>
            <div className="w-[4vw] h-[0.15vw] bg-gradient-to-r from-[#00e5ff] to-[#00ff88]" />
          </div>

          <div className="flex flex-col gap-[2vh] w-[28%]">
            <div className="font-display text-[1vw] tracking-[0.2em] text-[#00ff88] uppercase mb-[1vh]">API Layer</div>
            <div className="bg-[#0d1117] border border-[#00ff88]/30 rounded-xl px-[1.5vw] py-[1.5vh]">
              <div className="font-display font-bold text-[1.3vw] text-[#00ff88] mb-[0.5vh]">Express + Node.js</div>
              <div className="font-body text-[1.1vw] text-white/50">RESTful API with pino-http logging, Zod validation, OpenAPI spec-first design</div>
            </div>
            <div className="bg-[#0d1117] border border-[#00ff88]/20 rounded-xl px-[1.5vw] py-[1.5vh]">
              <div className="font-display font-bold text-[1.3vw] text-[#00ff88] mb-[0.5vh]">ML Engine (TypeScript)</div>
              <div className="font-body text-[1.1vw] text-white/50">All 5 models run server-side. Per-biome optima, Lotka-Volterra ODE solver, recommender logic.</div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-[1vh]">
            <div className="w-[4vw] h-[0.15vw] bg-gradient-to-r from-[#00ff88] to-[#fbbf24]" />
            <span className="font-body text-[0.9vw] text-white/30">Drizzle ORM</span>
            <div className="w-[4vw] h-[0.15vw] bg-gradient-to-r from-[#00ff88] to-[#fbbf24]" />
          </div>

          <div className="flex flex-col gap-[2vh] w-[28%]">
            <div className="font-display text-[1vw] tracking-[0.2em] text-[#fbbf24] uppercase mb-[1vh]">Data Layer</div>
            <div className="bg-[#0d1117] border border-[#fbbf24]/30 rounded-xl px-[1.5vw] py-[1.5vh]">
              <div className="font-display font-bold text-[1.3vw] text-[#fbbf24] mb-[0.5vh]">PostgreSQL</div>
              <div className="font-body text-[1.1vw] text-white/50">Replit managed DB. Ecosystems + simulations tables. CASCADE deletes. Always-on, zero config.</div>
            </div>
            <div className="bg-[#0d1117] border border-[#fbbf24]/20 rounded-xl px-[1.5vw] py-[1.5vh]">
              <div className="font-display font-bold text-[1.3vw] text-[#fbbf24] mb-[0.5vh]">Drizzle ORM</div>
              <div className="font-body text-[1.1vw] text-white/50">Type-safe schema, connection pool, schema push. No migrations needed — instant deployment.</div>
            </div>
          </div>
        </div>

        <div className="mt-[3vh] pt-[2vh] border-t border-white/10 flex items-center gap-[4vw]">
          <div className="flex items-center gap-[0.8vw]">
            <div className="w-[0.5vw] h-[0.5vw] rounded-full bg-[#00ff88]" />
            <span className="font-body text-[1.2vw] text-white/50">OpenAPI-first development</span>
          </div>
          <div className="flex items-center gap-[0.8vw]">
            <div className="w-[0.5vw] h-[0.5vw] rounded-full bg-[#00e5ff]" />
            <span className="font-body text-[1.2vw] text-white/50">pnpm monorepo with shared packages</span>
          </div>
          <div className="flex items-center gap-[0.8vw]">
            <div className="w-[0.5vw] h-[0.5vw] rounded-full bg-[#fbbf24]" />
            <span className="font-body text-[1.2vw] text-white/50">Health-checked production deployment</span>
          </div>
        </div>
      </div>
    </div>
  );
}
