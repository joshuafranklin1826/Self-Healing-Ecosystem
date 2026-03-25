import { useState, useMemo } from "react";
import { useListEcosystems, useDeleteEcosystem, getListEcosystemsQueryKey } from "@workspace/api-client-react";
import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import {
  Leaf, Droplet, Wind, ArrowRight, Trash2, Activity, Globe, Snowflake,
  AlertTriangle, ShieldCheck, RefreshCw, Filter, SortAsc, Plus,
  TrendingUp, TrendingDown, Zap, Database, Clock, BarChart2
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useQueryClient } from "@tanstack/react-query";
import { format, formatDistanceToNow } from "date-fns";

type FilterType = "all" | "forest" | "river" | "grassland" | "polar";
type FilterStatus = "all" | "Healthy" | "Stressed" | "Collapsing";
type SortKey = "date_desc" | "date_asc" | "health_desc" | "health_asc" | "name";

const TYPE_CONFIG: Record<string, { icon: React.ElementType; color: string; bg: string; border: string }> = {
  forest:    { icon: Leaf,      color: "text-primary",   bg: "bg-primary/10",    border: "border-primary/30"   },
  river:     { icon: Droplet,   color: "text-secondary", bg: "bg-secondary/10",  border: "border-secondary/30" },
  grassland: { icon: Wind,      color: "text-accent",    bg: "bg-accent/10",     border: "border-accent/30"    },
  polar:     { icon: Snowflake, color: "text-blue-400",  bg: "bg-blue-400/10",   border: "border-blue-400/30"  },
};

const STATUS_CONFIG: Record<string, { color: string; bg: string; border: string; dot: string }> = {
  Healthy:    { color: "text-primary",   bg: "bg-primary/10",     border: "border-primary/30",     dot: "bg-primary"   },
  Stressed:   { color: "text-secondary", bg: "bg-secondary/10",   border: "border-secondary/30",   dot: "bg-secondary" },
  Collapsing: { color: "text-red-400",   bg: "bg-red-500/10",     border: "border-red-500/30",     dot: "bg-red-400"   },
};

export default function Home() {
  const { data: ecosystems, isLoading, dataUpdatedAt, refetch, isFetching } = useListEcosystems({
    query: { refetchInterval: 30000 }
  });
  const deleteMutation = useDeleteEcosystem();
  const queryClient = useQueryClient();

  const [filterType, setFilterType] = useState<FilterType>("all");
  const [filterStatus, setFilterStatus] = useState<FilterStatus>("all");
  const [sortKey, setSortKey] = useState<SortKey>("date_desc");
  const [showFilters, setShowFilters] = useState(false);

  const handleDelete = async (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (confirm("Permanently remove this ecosystem from the archive?")) {
      await deleteMutation.mutateAsync({ id });
      queryClient.invalidateQueries({ queryKey: getListEcosystemsQueryKey() });
    }
  };

  // System-wide statistics
  const stats = useMemo(() => {
    if (!ecosystems?.length) return { total: 0, healthy: 0, stressed: 0, collapsing: 0, avgHealth: 0, criticalCount: 0 };
    const healthy   = ecosystems.filter(e => e.predictions.healthStatus === "Healthy").length;
    const stressed  = ecosystems.filter(e => e.predictions.healthStatus === "Stressed").length;
    const collapsing = ecosystems.filter(e => e.predictions.healthStatus === "Collapsing").length;
    const avgHealth = Math.round(ecosystems.reduce((s, e) => s + e.predictions.healthScore, 0) / ecosystems.length);
    const criticalCount = ecosystems.filter(e => e.predictions.collapseRisk > 0.5).length;
    return { total: ecosystems.length, healthy, stressed, collapsing, avgHealth, criticalCount };
  }, [ecosystems]);

  // Filter and sort
  const filtered = useMemo(() => {
    if (!ecosystems) return [];
    let list = [...ecosystems];
    if (filterType !== "all") list = list.filter(e => e.type === filterType);
    if (filterStatus !== "all") list = list.filter(e => e.predictions.healthStatus === filterStatus);
    switch (sortKey) {
      case "date_desc":   list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()); break;
      case "date_asc":    list.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()); break;
      case "health_desc": list.sort((a, b) => b.predictions.healthScore - a.predictions.healthScore); break;
      case "health_asc":  list.sort((a, b) => a.predictions.healthScore - b.predictions.healthScore); break;
      case "name":        list.sort((a, b) => a.name.localeCompare(b.name)); break;
    }
    return list;
  }, [ecosystems, filterType, filterStatus, sortKey]);

  const collapsingEcosystems = ecosystems?.filter(e => e.predictions.healthStatus === "Collapsing") ?? [];

  return (
    <Layout>
      <div className="space-y-6">

        {/* Command Center Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">System Online — Auto-refresh active</span>
            </div>
            <h1 className="text-3xl font-display font-black text-white tracking-wider">
              ECOSYSTEM COMMAND CENTER
            </h1>
            <p className="text-muted-foreground text-sm mt-1">
              {dataUpdatedAt ? `Last synced: ${formatDistanceToNow(dataUpdatedAt, { addSuffix: true })}` : "Connecting to database…"}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => refetch()}
              disabled={isFetching}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 text-muted-foreground hover:text-white hover:bg-white/5 transition-all text-sm font-semibold ${isFetching ? "opacity-50" : ""}`}
            >
              <RefreshCw className={`w-4 h-4 ${isFetching ? "animate-spin" : ""}`} />
              SYNC
            </button>
            <Link href="/builder" className="flex items-center gap-2 px-5 py-2 bg-primary text-primary-foreground font-display font-bold rounded-lg hover:bg-primary/90 neon-glow transition-all text-sm">
              <Plus className="w-4 h-4" /> NEW ECOSYSTEM
            </Link>
          </div>
        </div>

        {/* System Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {[
            { label: "TOTAL MODELS", value: stats.total, icon: Database, color: "text-white", sub: "in archive" },
            { label: "HEALTHY", value: stats.healthy, icon: ShieldCheck, color: "text-primary", sub: "ecosystems" },
            { label: "STRESSED", value: stats.stressed, icon: Activity, color: "text-secondary", sub: "ecosystems" },
            { label: "COLLAPSING", value: stats.collapsing, icon: AlertTriangle, color: "text-red-400", sub: "critical" },
            { label: "AVG HEALTH", value: `${stats.avgHealth}`, icon: BarChart2, color: stats.avgHealth > 70 ? "text-primary" : stats.avgHealth > 40 ? "text-secondary" : "text-red-400", sub: "/ 100" },
            { label: "RISK ALERTS", value: stats.criticalCount, icon: Zap, color: stats.criticalCount > 0 ? "text-red-400" : "text-muted-foreground", sub: ">50% collapse risk" },
          ].map(({ label, value, icon: Icon, color, sub }) => (
            <div key={label} className="glass-panel p-4 rounded-xl text-center">
              <div className="flex justify-center mb-2">
                <Icon className={`w-5 h-5 ${color}`} />
              </div>
              <div className={`text-2xl font-display font-black ${color}`}>{value}</div>
              <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider font-semibold">{label}</div>
              <div className="text-xs text-muted-foreground/60 mt-0.5">{sub}</div>
            </div>
          ))}
        </div>

        {/* Critical Alerts */}
        <AnimatePresence>
          {collapsingEcosystems.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-red-950/60 border border-red-500/50 rounded-xl p-4 overflow-hidden"
            >
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5 animate-pulse" />
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-display font-bold text-red-400 uppercase tracking-wider mb-2">
                    CRITICAL ALERT — {collapsingEcosystems.length} ECOSYSTEM{collapsingEcosystems.length > 1 ? "S" : ""} COLLAPSING
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {collapsingEcosystems.map(eco => (
                      <Link
                        key={eco.id}
                        href={`/analysis/${eco.id}`}
                        className="flex items-center gap-1.5 px-3 py-1 bg-red-500/20 border border-red-500/40 rounded-lg text-xs text-red-300 hover:bg-red-500/30 transition-colors font-semibold"
                      >
                        <span>{eco.name}</span>
                        <span className="opacity-60">— {eco.predictions.healthScore.toFixed(0)}/100</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Filter & Sort Controls */}
        <div className="glass-panel rounded-xl p-4">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mr-2">Type:</span>
              {(["all", "forest", "river", "grassland", "polar"] as FilterType[]).map(t => (
                <button
                  key={t}
                  onClick={() => setFilterType(t)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                    filterType === t
                      ? "bg-white/20 text-white border border-white/30"
                      : "text-muted-foreground hover:text-white hover:bg-white/5"
                  }`}
                >
                  {t === "all" ? "ALL" : t}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Status:</span>
              {(["all", "Healthy", "Stressed", "Collapsing"] as FilterStatus[]).map(s => (
                <button
                  key={s}
                  onClick={() => setFilterStatus(s)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    filterStatus === s
                      ? s === "all" ? "bg-white/20 text-white border border-white/30"
                        : `${STATUS_CONFIG[s]?.bg} ${STATUS_CONFIG[s]?.color} ${STATUS_CONFIG[s]?.border} border`
                      : "text-muted-foreground hover:text-white hover:bg-white/5"
                  }`}
                >
                  {s}
                </button>
              ))}
              <div className="w-px h-4 bg-white/10" />
              <SortAsc className="w-4 h-4 text-muted-foreground" />
              <select
                value={sortKey}
                onChange={e => setSortKey(e.target.value as SortKey)}
                className="bg-black/50 border border-white/10 rounded-lg px-2 py-1 text-xs text-white outline-none focus:border-secondary"
              >
                <option value="date_desc">Newest First</option>
                <option value="date_asc">Oldest First</option>
                <option value="health_desc">Healthiest First</option>
                <option value="health_asc">Most Critical First</option>
                <option value="name">Name A–Z</option>
              </select>
            </div>
          </div>
        </div>

        {/* Ecosystem Archive */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-display font-bold text-white flex items-center gap-2">
              <Database className="w-5 h-5 text-secondary" />
              ECOSYSTEM ARCHIVE
              {filtered.length !== (ecosystems?.length ?? 0) && (
                <span className="text-xs text-muted-foreground font-normal ml-2">
                  ({filtered.length} of {ecosystems?.length} shown)
                </span>
              )}
            </h2>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Clock className="w-3.5 h-3.5" />
              <span>Auto-refresh every 30s</span>
            </div>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="h-72 rounded-2xl bg-white/5 animate-pulse border border-white/10" />
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20 glass-panel rounded-2xl">
              <Globe className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-30" />
              <h3 className="text-xl font-display text-white mb-2">
                {ecosystems?.length === 0 ? "ARCHIVE EMPTY" : "NO RESULTS"}
              </h3>
              <p className="text-muted-foreground mb-6">
                {ecosystems?.length === 0
                  ? "No ecosystem models in the database. Initialize a new model to begin."
                  : "No ecosystems match the current filter criteria."}
              </p>
              {ecosystems?.length === 0 && (
                <Link href="/builder" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-display font-bold rounded-xl hover:bg-primary/90 neon-glow transition-all">
                  INITIALIZE FIRST MODEL <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((eco, idx) => {
                const typeCfg = TYPE_CONFIG[eco.type] ?? TYPE_CONFIG.forest;
                const statusCfg = STATUS_CONFIG[eco.predictions.healthStatus] ?? STATUS_CONFIG.Healthy;
                const TypeIcon = typeCfg.icon;
                const isCollapsing = eco.predictions.healthStatus === "Collapsing";
                const isStressed = eco.predictions.healthStatus === "Stressed";

                return (
                  <motion.div
                    key={eco.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: Math.min(idx * 0.06, 0.5) }}
                  >
                    <Link
                      href={`/dashboard/${eco.id}`}
                      className={`block h-full glass-panel rounded-2xl p-5 transition-all duration-300 group hover:-translate-y-1 ${
                        isCollapsing ? "border-red-500/40 hover:border-red-500/60 shadow-[0_0_20px_rgba(239,68,68,0.1)]" :
                        isStressed ? "hover:border-secondary/50" : "hover:border-primary/40"
                      }`}
                    >
                      {/* Header row */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`p-2.5 ${typeCfg.bg} ${typeCfg.border} border rounded-xl`}>
                            <TypeIcon className={`w-5 h-5 ${typeCfg.color}`} />
                          </div>
                          <div>
                            <div className="text-xs font-bold tracking-widest text-muted-foreground uppercase">{eco.type}</div>
                            <div className="text-xs text-muted-foreground/60 font-mono">ID #{eco.id}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border ${statusCfg.bg} ${statusCfg.color} ${statusCfg.border}`}>
                            <div className={`w-1.5 h-1.5 rounded-full ${statusCfg.dot} ${isCollapsing ? 'animate-pulse' : ''}`} />
                            {eco.predictions.healthStatus.toUpperCase()}
                          </div>
                          <button
                            onClick={(e) => handleDelete(eco.id, e)}
                            className="p-1.5 text-muted-foreground hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                            disabled={deleteMutation.isPending}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Name */}
                      <h3 className={`text-lg font-display font-bold text-white mb-3 group-hover:${typeCfg.color} transition-colors leading-tight`}>
                        {eco.name}
                      </h3>

                      {/* Health bar */}
                      <div className="mb-4">
                        <div className="flex justify-between items-center mb-1.5">
                          <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">System Health</span>
                          <span className={`text-sm font-display font-bold ${statusCfg.color}`}>
                            {eco.predictions.healthScore.toFixed(0)}/100
                          </span>
                        </div>
                        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${eco.predictions.healthScore}%` }}
                            transition={{ duration: 0.8, delay: idx * 0.06 }}
                            className={`h-full rounded-full ${
                              eco.predictions.healthScore > 70 ? 'bg-primary shadow-[0_0_8px_rgba(0,255,136,0.5)]' :
                              eco.predictions.healthScore > 40 ? 'bg-secondary shadow-[0_0_8px_rgba(0,255,255,0.5)]' :
                              'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]'
                            }`}
                          />
                        </div>
                      </div>

                      {/* Metrics grid */}
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        <div className="bg-black/40 p-2.5 rounded-lg border border-white/5 text-center">
                          <div className="text-xs text-muted-foreground mb-0.5">Collapse Risk</div>
                          <div className={`text-sm font-mono font-bold ${eco.predictions.collapseRisk > 0.5 ? 'text-red-400' : eco.predictions.collapseRisk > 0.25 ? 'text-secondary' : 'text-primary'}`}>
                            {(eco.predictions.collapseRisk * 100).toFixed(0)}%
                          </div>
                        </div>
                        <div className="bg-black/40 p-2.5 rounded-lg border border-white/5 text-center">
                          <div className="text-xs text-muted-foreground mb-0.5">Stability</div>
                          <div className="text-sm font-mono font-bold text-white">
                            {(eco.predictions.stabilityIndex * 100).toFixed(0)}%
                          </div>
                        </div>
                        <div className="bg-black/40 p-2.5 rounded-lg border border-white/5 text-center">
                          <div className="text-xs text-muted-foreground mb-0.5">Species</div>
                          <div className="text-sm font-mono font-bold text-white">{eco.species.length}</div>
                        </div>
                      </div>

                      {/* Recovery time if stressed/collapsing */}
                      {eco.predictions.recoveryTimeWeeks > 0 && (
                        <div className={`flex items-center gap-2 text-xs mb-3 px-2.5 py-1.5 rounded-lg ${isCollapsing ? 'bg-red-500/10 text-red-300 border border-red-500/20' : 'bg-secondary/10 text-secondary border border-secondary/20'}`}>
                          <TrendingDown className="w-3 h-3 flex-shrink-0" />
                          Est. recovery: {eco.predictions.recoveryTimeWeeks} weeks with intervention
                        </div>
                      )}

                      {/* Footer */}
                      <div className="flex items-center justify-between text-xs text-muted-foreground pt-3 border-t border-white/10">
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3 h-3" />
                          <span>{format(new Date(eco.createdAt), 'dd MMM yyyy, HH:mm')}</span>
                        </div>
                        <span className={`flex items-center gap-1 font-semibold transition-colors group-hover:${typeCfg.color}`}>
                          OPEN <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>

        {/* Quick-access links */}
        {(ecosystems?.length ?? 0) > 0 && (
          <div className="glass-panel rounded-xl p-5">
            <h3 className="text-sm font-display font-semibold text-white mb-4 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-secondary" /> QUICK ACTIONS
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <Link href="/builder" className="flex items-center gap-2 px-4 py-3 bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 rounded-xl text-sm font-bold transition-all text-center justify-center">
                <Plus className="w-4 h-4" /> New Model
              </Link>
              {ecosystems?.[0] && (
                <>
                  <Link href={`/dashboard/${ecosystems[0].id}`} className="flex items-center gap-2 px-4 py-3 bg-secondary/10 border border-secondary/30 text-secondary hover:bg-secondary/20 rounded-xl text-sm font-bold transition-all justify-center">
                    <BarChart2 className="w-4 h-4" /> Latest Dashboard
                  </Link>
                  <Link href={`/simulation/${ecosystems[ecosystems.length - 1].id}`} className="flex items-center gap-2 px-4 py-3 bg-white/5 border border-white/10 text-white hover:bg-white/10 rounded-xl text-sm font-bold transition-all justify-center">
                    <Activity className="w-4 h-4" /> Run Simulation
                  </Link>
                  <Link href={`/analysis/${ecosystems[0].id}`} className="flex items-center gap-2 px-4 py-3 bg-accent/10 border border-accent/30 text-accent hover:bg-accent/20 rounded-xl text-sm font-bold transition-all justify-center">
                    <Zap className="w-4 h-4" /> View Analysis
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
