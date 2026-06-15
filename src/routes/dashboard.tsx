import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { EXHIBITS } from "@/lib/zoo-data";
import { TrendingUp, Users, Eye, Sprout, Activity } from "lucide-react";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Impact Dashboard — Wildlife Guide" },
      {
        name: "description",
        content:
          "Demonstration analytics for conservation teams: species observations, visitor engagement, and educational impact.",
      },
    ],
  }),
  component: DashboardPage,
});

const KPIS = [
  { label: "Visitors today", value: "8,412", delta: "+12.4%", icon: Users },
  { label: "App engagements", value: "23,907", delta: "+18.1%", icon: Activity },
  { label: "Species observed", value: "182", delta: "+4", icon: Eye },
  { label: "Conservation actions", value: "1,204", delta: "+27%", icon: Sprout },
];

const EXHIBIT_TRAFFIC = [
  { id: "africa", visits: 4280 },
  { id: "elephant-habitat", visits: 3950 },
  { id: "cat-forest", visits: 3610 },
  { id: "great-escape", visits: 3220 },
  { id: "aquaticus", visits: 2880 },
  { id: "oklahoma-trails", visits: 2410 },
  { id: "childrens-zoo", visits: 2150 },
];

// 14-day visitor trend (mock)
const TREND = [3200, 3450, 3380, 3700, 4100, 5200, 6100, 4800, 4200, 4350, 4600, 5400, 6300, 5900];

const ENGAGEMENTS = [
  { label: "AI Guide questions", value: 412, color: "oklch(0.55 0.15 155)" },
  { label: "Tours generated", value: 287, color: "oklch(0.7 0.15 65)" },
  { label: "Scavenger hunts completed", value: 198, color: "oklch(0.55 0.12 220)" },
  { label: "Animal profiles viewed", value: 1342, color: "oklch(0.65 0.18 30)" },
];

function DashboardPage() {
  const maxTraffic = Math.max(...EXHIBIT_TRAFFIC.map((e) => e.visits));
  const maxTrend = Math.max(...TREND);
  const maxEngage = Math.max(...ENGAGEMENTS.map((e) => e.value));

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex items-end justify-between flex-wrap gap-3">
          <div>
            <div className="text-xs uppercase tracking-wider text-primary font-semibold">
              Conservation Analytics
            </div>
            <h1 className="mt-2 text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              Impact Dashboard
            </h1>
            <p className="mt-2 text-muted-foreground max-w-2xl">
              How visitor engagement translates into educational reach and conservation
              participation. A view of the platform conservation teams could use.
            </p>
          </div>
          <span className="text-[11px] px-2.5 py-1 rounded-full bg-accent/20 text-accent-foreground border border-accent/30 font-semibold">
            Demonstration data
          </span>
        </div>

        {/* KPIs */}
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {KPIS.map((k) => (
            <div key={k.label} className="p-5 rounded-2xl border border-border bg-card">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                  {k.label}
                </span>
                <k.icon className="w-4 h-4 text-primary" />
              </div>
              <div className="mt-2 text-3xl font-bold text-foreground">{k.value}</div>
              <div className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                <TrendingUp className="w-3 h-3" /> {k.delta} vs last week
              </div>
            </div>
          ))}
        </div>

        {/* Charts row */}
        <div className="mt-6 grid lg:grid-cols-3 gap-6">
          {/* Visitor trend */}
          <div className="lg:col-span-2 p-6 rounded-2xl border border-border bg-card">
            <div className="flex items-end justify-between">
              <div>
                <h2 className="font-bold text-foreground">Visitor trend</h2>
                <p className="text-xs text-muted-foreground">Last 14 days</p>
              </div>
              <span className="text-xs text-muted-foreground">Daily attendance</span>
            </div>
            <svg viewBox="0 0 280 100" className="mt-5 w-full h-40">
              <defs>
                <linearGradient id="trendFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="oklch(0.55 0.15 155)" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="oklch(0.55 0.15 155)" stopOpacity="0" />
                </linearGradient>
              </defs>
              {(() => {
                const points = TREND.map((v, i) => {
                  const x = (i / (TREND.length - 1)) * 280;
                  const y = 95 - (v / maxTrend) * 85;
                  return [x, y] as const;
                });
                const path = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p[0]} ${p[1]}`).join(" ");
                const fillPath = `${path} L 280 100 L 0 100 Z`;
                return (
                  <>
                    <path d={fillPath} fill="url(#trendFill)" />
                    <path d={path} fill="none" stroke="oklch(0.42 0.09 155)" strokeWidth="1.5" />
                    {points.map((p, i) => (
                      <circle key={i} cx={p[0]} cy={p[1]} r="1.8" fill="oklch(0.42 0.09 155)" />
                    ))}
                  </>
                );
              })()}
            </svg>
          </div>

          {/* Engagement breakdown */}
          <div className="p-6 rounded-2xl border border-border bg-card">
            <h2 className="font-bold text-foreground">Engagement breakdown</h2>
            <p className="text-xs text-muted-foreground">Today</p>
            <div className="mt-5 space-y-4">
              {ENGAGEMENTS.map((e) => (
                <div key={e.label}>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-foreground font-medium">{e.label}</span>
                    <span className="text-muted-foreground">{e.value}</span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{
                        width: `${(e.value / maxEngage) * 100}%`,
                        background: e.color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Exhibit traffic */}
        <div className="mt-6 p-6 rounded-2xl border border-border bg-card">
          <h2 className="font-bold text-foreground">Most-visited exhibits</h2>
          <p className="text-xs text-muted-foreground">Foot traffic today</p>
          <div className="mt-5 space-y-3">
            {EXHIBIT_TRAFFIC.map((t) => {
              const exhibit = EXHIBITS.find((e) => e.id === t.id);
              if (!exhibit) return null;
              const pct = (t.visits / maxTraffic) * 100;
              return (
                <div key={t.id} className="flex items-center gap-4">
                  <div className="w-44 shrink-0 flex items-center gap-2">
                    <span className="text-lg">{exhibit.emoji}</span>
                    <span className="text-sm font-medium text-foreground truncate">
                      {exhibit.name}
                    </span>
                  </div>
                  <div className="flex-1 h-7 rounded-md bg-secondary overflow-hidden">
                    <div
                      className="h-full rounded-md flex items-center justify-end px-2 text-[11px] font-semibold text-white"
                      style={{ width: `${pct}%`, background: exhibit.color }}
                    >
                      {t.visits.toLocaleString()}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Educational impact */}
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {[
            { label: "Students reached this year", value: "42,300", sub: "From 218 partner schools" },
            { label: "Junior Conservationist badges", value: "3,180", sub: "Awarded year-to-date" },
            { label: "Citizen science observations", value: "9,640", sub: "Pollinator + bird logs submitted" },
          ].map((c) => (
            <div key={c.label} className="p-6 rounded-2xl border border-border bg-card">
              <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                {c.label}
              </div>
              <div className="mt-2 text-3xl font-bold text-foreground">{c.value}</div>
              <div className="mt-1 text-xs text-muted-foreground">{c.sub}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
