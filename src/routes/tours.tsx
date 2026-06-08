import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { EXHIBITS } from "@/lib/zoo-data";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/tours")({
  head: () => ({
    meta: [
      { title: "Personalized Tour Planner — Oklahoma City Zoo" },
      {
        name: "description",
        content:
          "Generate a custom Oklahoma City Zoo tour based on your interests and available time.",
      },
      { property: "og:title", content: "Personalized Zoo Tour Planner" },
      {
        property: "og:description",
        content: "Tell us what you love. We'll build your route through the zoo.",
      },
    ],
  }),
  component: ToursPage,
});

const INTERESTS = [
  { id: "Primates", label: "Primates", emoji: "🦍" },
  { id: "Big Cats", label: "Big Cats", emoji: "🐅" },
  { id: "Asia", label: "Asia / Elephants", emoji: "🐘" },
  { id: "Africa", label: "African Plains", emoji: "🦒" },
  { id: "Native Oklahoma", label: "Native Oklahoma", emoji: "🦅" },
  { id: "Aquatics", label: "Aquatics", emoji: "🦭" },
  { id: "Family", label: "Family / Kids", emoji: "🦜" },
];

function ToursPage() {
  const [selected, setSelected] = useState<string[]>(["Asia", "Africa"]);
  const [hours, setHours] = useState(3);
  const [generated, setGenerated] = useState(false);

  const tour = useMemo(() => {
    const matching = EXHIBITS.filter((e) => selected.includes(e.zone));
    const pool = matching.length ? matching : EXHIBITS;
    const stops = Math.max(2, Math.min(pool.length, Math.round(hours * 1.5)));
    return pool.slice(0, stops);
  }, [selected, hours]);

  const toggle = (id: string) =>
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id],
    );

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-foreground">Plan your visit</h1>
        <p className="mt-1 text-muted-foreground">
          Pick what excites you. We'll route you through the zoo.
        </p>

        <section className="mt-8 p-6 rounded-2xl bg-card border border-border">
          <h2 className="font-semibold text-foreground">What are you interested in?</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {INTERESTS.map((i) => {
              const active = selected.includes(i.id);
              return (
                <button
                  key={i.id}
                  onClick={() => toggle(i.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                    active
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-secondary text-secondary-foreground border-border hover:border-primary/40"
                  }`}
                >
                  <span className="mr-1.5">{i.emoji}</span>
                  {i.label}
                </button>
              );
            })}
          </div>

          <div className="mt-6">
            <label className="font-semibold text-foreground">
              How much time do you have?{" "}
              <span className="text-primary">{hours} hours</span>
            </label>
            <input
              type="range"
              min={1}
              max={6}
              value={hours}
              onChange={(e) => setHours(Number(e.target.value))}
              className="mt-3 w-full accent-primary"
            />
          </div>

          <button
            onClick={() => setGenerated(true)}
            className="mt-6 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            Generate my tour
          </button>
        </section>

        {generated && (
          <section className="mt-8">
            <h2 className="text-xl font-bold text-foreground">
              Your {hours}-hour zoo route
            </h2>
            <ol className="mt-4 relative border-l-2 border-primary/30 ml-3 space-y-4">
              {tour.map((stop, i) => (
                <li key={stop.id} className="pl-6 relative">
                  <span className="absolute -left-[14px] top-1 flex items-center justify-center w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                    {i + 1}
                  </span>
                  <div className="p-4 rounded-xl bg-card border border-border">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{stop.emoji}</span>
                      <div>
                        <div className="font-bold text-foreground">{stop.name}</div>
                        <div className="text-xs text-primary uppercase tracking-wide">
                          {stop.zone}
                        </div>
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{stop.highlight}</p>
                    <div className="mt-2 text-xs text-muted-foreground">
                      See: {stop.animals.join(" • ")}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        )}
      </main>
    </div>
  );
}
