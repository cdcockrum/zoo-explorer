import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { EXHIBITS, type Exhibit } from "@/lib/zoo-data";
import { useState } from "react";

export const Route = createFileRoute("/map")({
  head: () => ({
    meta: [
      { title: "Interactive Map — Oklahoma City Zoo" },
      {
        name: "description",
        content: "Explore Oklahoma City Zoo exhibits on an interactive map.",
      },
      { property: "og:title", content: "Interactive Zoo Map" },
      { property: "og:description", content: "Find exhibits and animals at the OKC Zoo." },
    ],
  }),
  component: MapPage,
});

function MapPage() {
  const [selected, setSelected] = useState<Exhibit | null>(EXHIBITS[0]);

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-foreground">Zoo Map</h1>
        <p className="mt-1 text-muted-foreground">
          Tap a pin to learn about that exhibit and its animals.
        </p>

        <div className="mt-6 grid lg:grid-cols-[1fr_320px] gap-6">
          {/* Map */}
          <div
            className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-warm)]"
            style={{
              background:
                "radial-gradient(circle at 30% 70%, oklch(0.72 0.08 155) 0%, oklch(0.58 0.09 150) 50%, oklch(0.45 0.08 155) 100%)",
            }}
          >
            {/* Decorative paths */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 75" preserveAspectRatio="none">
              <path
                d="M10,40 Q30,20 50,30 T90,50"
                stroke="oklch(0.92 0.04 85)"
                strokeWidth="1.2"
                fill="none"
                strokeDasharray="2 2"
                opacity="0.7"
              />
              <path
                d="M20,70 Q45,55 70,65 T95,40"
                stroke="oklch(0.92 0.04 85)"
                strokeWidth="1.2"
                fill="none"
                strokeDasharray="2 2"
                opacity="0.7"
              />
            </svg>

            {EXHIBITS.map((e) => {
              const isActive = selected?.id === e.id;
              return (
                <button
                  key={e.id}
                  onClick={() => setSelected(e)}
                  aria-label={e.name}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 transition-all ${
                    isActive ? "scale-125 z-10" : "hover:scale-110"
                  }`}
                  style={{ left: `${e.x}%`, top: `${e.y}%` }}
                >
                  <span
                    className={`flex items-center justify-center w-11 h-11 rounded-full text-xl shadow-lg ring-2 ${
                      isActive
                        ? "bg-accent ring-white"
                        : "bg-white/95 ring-white/70"
                    }`}
                  >
                    {e.emoji}
                  </span>
                </button>
              );
            })}

            <div className="absolute bottom-3 left-3 bg-background/90 backdrop-blur px-3 py-1.5 rounded-lg text-xs text-muted-foreground">
              OKC Zoo — 119 acres
            </div>
          </div>

          {/* Detail panel */}
          <aside className="rounded-2xl bg-card border border-border p-6">
            {selected ? (
              <>
                <div className="text-5xl">{selected.emoji}</div>
                <div className="text-xs uppercase tracking-wider text-primary font-semibold mt-2">
                  {selected.zone}
                </div>
                <h2 className="text-2xl font-bold text-foreground mt-1">{selected.name}</h2>
                <p className="mt-3 text-sm text-muted-foreground">{selected.highlight}</p>
                <div className="mt-5">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-2">
                    Resident animals
                  </div>
                  <ul className="space-y-1">
                    {selected.animals.map((a) => (
                      <li
                        key={a}
                        className="px-3 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm"
                      >
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            ) : (
              <p className="text-muted-foreground">Select an exhibit to learn more.</p>
            )}
          </aside>
        </div>

        {/* List for accessibility */}
        <div className="mt-10">
          <h2 className="text-xl font-bold text-foreground">All exhibits</h2>
          <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {EXHIBITS.map((e) => (
              <button
                key={e.id}
                onClick={() => setSelected(e)}
                className={`text-left p-4 rounded-xl border transition-colors ${
                  selected?.id === e.id
                    ? "border-primary bg-secondary"
                    : "border-border bg-card hover:border-primary/40"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{e.emoji}</span>
                  <div>
                    <div className="font-semibold text-foreground">{e.name}</div>
                    <div className="text-xs text-muted-foreground">{e.zone}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
