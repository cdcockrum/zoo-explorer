import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { EXHIBITS, MAP_DECOR, type Exhibit } from "@/lib/zoo-data";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sparkles, Clock, Leaf, PawPrint, MapPin } from "lucide-react";

export const Route = createFileRoute("/map")({
  head: () => ({
    meta: [
      { title: "Interactive Zoo Map — Oklahoma City Zoo" },
      {
        name: "description",
        content:
          "Explore Oklahoma City Zoo with a stylized wayfinding map. Tap any exhibit for animals, feeding times, conservation, and an AI-guided tour.",
      },
      { property: "og:title", content: "Oklahoma City Zoo — Interactive Map" },
      {
        property: "og:description",
        content: "Stylized park map with feeding schedules and an AI guide.",
      },
    ],
  }),
  component: MapPage,
});

// Service amenities sprinkled around the park.
const AMENITIES: { x: number; y: number; label: string; icon: string }[] = [
  { x: 6, y: 50, label: "Entrance", icon: "🎟️" },
  { x: 30, y: 50, label: "Café", icon: "🥨" },
  { x: 50, y: 38, label: "Restrooms", icon: "🚻" },
  { x: 70, y: 56, label: "Carousel", icon: "🎠" },
  { x: 90, y: 48, label: "Gift Shop", icon: "🎁" },
];

function MapPage() {
  const [selected, setSelected] = useState<Exhibit | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-start justify-between flex-wrap gap-3">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Park Map</h1>
            <p className="mt-1 text-muted-foreground">
              Tap any region to open animal info, feeding times, conservation work,
              and an AI-guided experience.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground bg-card border border-border rounded-full px-3 py-1.5">
            <MapPin className="w-3.5 h-3.5" />
            119 acres · 7 zones
          </div>
        </div>

        {/* Stylized park map */}
        <div className="mt-6 rounded-3xl overflow-hidden border border-border shadow-[var(--shadow-warm)] bg-card">
          <div
            className="relative w-full"
            style={{ aspectRatio: "100 / 75" }}
          >
            <svg
              viewBox="0 0 100 75"
              preserveAspectRatio="xMidYMid meet"
              className="absolute inset-0 w-full h-full"
            >
              {/* Park base */}
              <defs>
                <pattern id="grass" width="2" height="2" patternUnits="userSpaceOnUse">
                  <rect width="2" height="2" fill="oklch(0.86 0.06 135)" />
                  <circle cx="1" cy="1" r="0.15" fill="oklch(0.78 0.08 135)" />
                </pattern>
                <radialGradient id="lake" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="oklch(0.82 0.08 220)" />
                  <stop offset="100%" stopColor="oklch(0.62 0.13 230)" />
                </radialGradient>
              </defs>

              <rect width="100" height="75" fill="url(#grass)" />

              {/* Pathways */}
              {MAP_DECOR.pathways.map((d, i) => (
                <path
                  key={i}
                  d={d}
                  fill="none"
                  stroke="oklch(0.94 0.03 85)"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeDasharray="0.8 1.4"
                />
              ))}

              {/* Lake */}
              <path d={MAP_DECOR.lake} fill="url(#lake)" stroke="oklch(0.55 0.10 230)" strokeWidth="0.2" />
              <text x="58" y="74" fontSize="2" fill="oklch(0.35 0.08 230)" fontStyle="italic">
                Sanctuary Lake
              </text>

              {/* Exhibit regions */}
              {EXHIBITS.map((e) => {
                const isActive = selected?.id === e.id;
                const isHover = hovered === e.id;
                return (
                  <g
                    key={e.id}
                    style={{ cursor: "pointer" }}
                    onClick={() => setSelected(e)}
                    onMouseEnter={() => setHovered(e.id)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <polygon
                      points={e.polygon}
                      fill={e.color}
                      stroke={isActive || isHover ? "oklch(1 0 0)" : "oklch(0.35 0.05 145)"}
                      strokeWidth={isActive || isHover ? "0.6" : "0.25"}
                      opacity={isActive || isHover ? 1 : 0.92}
                      style={{ transition: "all 0.2s" }}
                    />
                    {/* Region label */}
                    <text
                      x={e.x}
                      y={e.y - 2}
                      fontSize="2.2"
                      fontWeight="700"
                      textAnchor="middle"
                      fill="oklch(0.22 0.05 145)"
                      style={{ pointerEvents: "none" }}
                    >
                      {e.name}
                    </text>
                    <text
                      x={e.x}
                      y={e.y + 3.4}
                      fontSize="4.5"
                      textAnchor="middle"
                      style={{ pointerEvents: "none" }}
                    >
                      {e.emoji}
                    </text>
                  </g>
                );
              })}

              {/* Amenities */}
              {AMENITIES.map((a) => (
                <g key={a.label}>
                  <circle
                    cx={a.x}
                    cy={a.y}
                    r="1.6"
                    fill="oklch(1 0 0)"
                    stroke="oklch(0.45 0.08 145)"
                    strokeWidth="0.2"
                  />
                  <text
                    x={a.x}
                    y={a.y + 0.9}
                    fontSize="2"
                    textAnchor="middle"
                  >
                    {a.icon}
                  </text>
                  <text
                    x={a.x}
                    y={a.y + 4}
                    fontSize="1.6"
                    textAnchor="middle"
                    fill="oklch(0.35 0.05 145)"
                  >
                    {a.label}
                  </text>
                </g>
              ))}

              {/* Compass */}
              <g transform="translate(94, 6)">
                <circle r="3.4" fill="oklch(1 0 0)" stroke="oklch(0.45 0.08 145)" strokeWidth="0.2" />
                <polygon points="0,-2.4 0.8,0 0,2.4 -0.8,0" fill="oklch(0.55 0.18 30)" />
                <text y="-3.8" fontSize="1.4" textAnchor="middle" fill="oklch(0.35 0.05 145)" fontWeight="700">
                  N
                </text>
              </g>
            </svg>
          </div>

          {/* Legend */}
          <div className="border-t border-border bg-card px-4 py-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
            <span className="font-semibold text-foreground">Zones:</span>
            {EXHIBITS.map((e) => (
              <button
                key={e.id}
                onClick={() => setSelected(e)}
                className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
              >
                <span
                  className="w-3 h-3 rounded-sm border border-border"
                  style={{ background: e.color }}
                />
                {e.zone}
              </button>
            ))}
          </div>
        </div>

        {/* Quick exhibit cards */}
        <h2 className="mt-10 text-xl font-bold text-foreground">All exhibits</h2>
        <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {EXHIBITS.map((e) => (
            <button
              key={e.id}
              onClick={() => setSelected(e)}
              className="text-left p-4 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-sm transition-all"
            >
              <div className="flex items-center gap-3">
                <span
                  className="flex items-center justify-center w-11 h-11 rounded-lg text-2xl"
                  style={{ background: e.color }}
                >
                  {e.emoji}
                </span>
                <div>
                  <div className="font-semibold text-foreground">{e.name}</div>
                  <div className="text-xs text-muted-foreground">{e.zone}</div>
                </div>
              </div>
              <p className="mt-3 text-sm text-muted-foreground line-clamp-2">{e.highlight}</p>
            </button>
          ))}
        </div>
      </main>

      <ExhibitDialog exhibit={selected} onClose={() => setSelected(null)} />
    </div>
  );
}

function ExhibitDialog({
  exhibit,
  onClose,
}: {
  exhibit: Exhibit | null;
  onClose: () => void;
}) {
  return (
    <Dialog open={!!exhibit} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-2xl p-0 overflow-hidden gap-0">
        {exhibit && (
          <>
            <div
              className="px-6 py-5 text-foreground"
              style={{ background: exhibit.color }}
            >
              <DialogHeader>
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{exhibit.emoji}</span>
                  <div>
                    <div className="text-xs uppercase tracking-wider font-bold opacity-80">
                      {exhibit.zone}
                    </div>
                    <DialogTitle className="text-2xl">{exhibit.name}</DialogTitle>
                  </div>
                </div>
                <DialogDescription className="text-foreground/80 pt-2">
                  {exhibit.description}
                </DialogDescription>
              </DialogHeader>
            </div>

            <Tabs defaultValue="animals" className="px-6 py-4">
              <TabsList className="grid grid-cols-4 w-full">
                <TabsTrigger value="animals" className="gap-1.5">
                  <PawPrint className="w-3.5 h-3.5" /> Animals
                </TabsTrigger>
                <TabsTrigger value="feeding" className="gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> Feeding
                </TabsTrigger>
                <TabsTrigger value="conservation" className="gap-1.5">
                  <Leaf className="w-3.5 h-3.5" /> Conserve
                </TabsTrigger>
                <TabsTrigger value="ai" className="gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Ask AI
                </TabsTrigger>
              </TabsList>

              <TabsContent value="animals" className="pt-4">
                <ul className="grid sm:grid-cols-2 gap-2">
                  {exhibit.animals.map((a) => (
                    <li
                      key={a}
                      className="px-3 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm"
                    >
                      {a}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 p-3 rounded-lg bg-accent/15 border border-accent/30 text-sm">
                  <span className="font-semibold text-foreground">Did you know?</span>{" "}
                  <span className="text-muted-foreground">{exhibit.didYouKnow}</span>
                </div>
              </TabsContent>

              <TabsContent value="feeding" className="pt-4">
                <p className="text-xs text-muted-foreground mb-3">
                  Today's keeper talks & feeding times
                </p>
                <ul className="space-y-2">
                  {exhibit.feeding.map((f) => (
                    <li
                      key={f.title}
                      className="flex items-center gap-3 p-3 rounded-lg border border-border bg-card"
                    >
                      <div className="w-20 shrink-0 text-sm font-bold text-primary">
                        {f.time}
                      </div>
                      <div className="text-sm text-foreground">{f.title}</div>
                    </li>
                  ))}
                </ul>
              </TabsContent>

              <TabsContent value="conservation" className="pt-4">
                <p className="text-sm text-muted-foreground">{exhibit.conservation}</p>
                <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                  <Leaf className="w-3.5 h-3.5 text-primary" />
                  Your visit helps fund this work.
                </div>
              </TabsContent>

              <TabsContent value="ai" className="pt-4">
                <p className="text-sm text-muted-foreground mb-3">
                  Get an AI-guided tour of {exhibit.name} from Ranger Rusty.
                </p>
                <div className="grid gap-2">
                  {[
                    `Give me a 2-minute kid-friendly tour of ${exhibit.name}.`,
                    `What should I look for when I visit ${exhibit.name}?`,
                    `Tell me about the ${exhibit.animals[0]} at the Oklahoma City Zoo.`,
                  ].map((q) => (
                    <Link
                      key={q}
                      to="/chat"
                      search={{ q } as never}
                      onClick={onClose}
                      className="text-left p-3 rounded-lg border border-border bg-card hover:border-primary/50 hover:bg-secondary/50 transition-colors text-sm text-foreground flex items-start gap-2"
                    >
                      <Sparkles className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{q}</span>
                    </Link>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
