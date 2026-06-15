import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { CONSERVATION_STORIES } from "@/lib/zoo-data";
import { ArrowRight, Globe, Leaf, Microscope, Users, HeartHandshake, Sprout } from "lucide-react";

export const Route = createFileRoute("/conservation")({
  head: () => ({
    meta: [
      { title: "Conservation Center — Wildlife Guide" },
      {
        name: "description",
        content:
          "Species recovery, habitat protection, breeding programs, and research initiatives supported by the Oklahoma City Zoo.",
      },
      { property: "og:title", content: "Conservation Center" },
      {
        property: "og:description",
        content: "How the Oklahoma City Zoo protects wildlife around the world.",
      },
    ],
  }),
  component: ConservationPage,
});

const PILLARS = [
  { icon: Sprout, title: "Species Recovery", desc: "Captive breeding, headstart releases, and population monitoring." },
  { icon: Globe, title: "Habitat Protection", desc: "Funding community-led reserves across 14 countries." },
  { icon: HeartHandshake, title: "Wildlife Rehabilitation", desc: "Triage, medical care, and lifelong homes for rescued animals." },
  { icon: Leaf, title: "Breeding Programs", desc: "Genetically managed populations as insurance against extinction." },
  { icon: Users, title: "Community Conservation", desc: "Partnerships that put local people at the center of solutions." },
  { icon: Microscope, title: "Research Initiatives", desc: "Field studies, veterinary research, and behavioral science." },
];

function ConservationPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-wider text-accent font-semibold">
              Conservation Center
            </div>
            <h1 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight">
              Protecting wildlife is the whole point.
            </h1>
            <p className="mt-5 text-lg text-primary-foreground/85 max-w-2xl">
              Every exhibit, encounter, and admission supports a global network of
              scientists, rangers, and communities working to save species. Here's
              how the Oklahoma City Zoo turns curiosity into action.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-primary-foreground/15 rounded-2xl overflow-hidden">
            {[
              { v: "$2.4M", l: "Annual conservation spend" },
              { v: "14", l: "Countries" },
              { v: "8,000+", l: "Beetles released" },
              { v: "60+", l: "Field partners" },
            ].map((s) => (
              <div key={s.l} className="bg-primary px-5 py-5">
                <div className="text-2xl md:text-3xl font-bold text-accent">{s.v}</div>
                <div className="text-[11px] uppercase tracking-wider text-primary-foreground/70 mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
          Six pillars of conservation
        </h2>
        <p className="mt-2 text-muted-foreground max-w-2xl">
          From Oklahoma prairies to Himalayan mountains, our work spans the full
          spectrum of modern wildlife conservation.
        </p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PILLARS.map((p) => (
            <div
              key={p.title}
              className="p-6 rounded-2xl border border-border bg-card"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <p.icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 font-bold text-foreground">{p.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stories */}
      <section className="bg-secondary/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <div className="text-xs uppercase tracking-wider text-primary font-semibold">
                Success stories
              </div>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                Conservation in the field
              </h2>
            </div>
          </div>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {CONSERVATION_STORIES.map((s) => (
              <article
                key={s.id}
                className="group rounded-2xl overflow-hidden bg-card border border-border hover:shadow-[var(--shadow-warm)] transition-shadow"
              >
                <div className="aspect-[16/9] overflow-hidden bg-muted">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-semibold">
                      {s.category}
                    </span>
                    <span className="text-muted-foreground">· {s.region}</span>
                  </div>
                  <h3 className="mt-3 text-xl font-bold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm text-foreground/80 leading-relaxed">{s.summary}</p>
                  <div className="mt-4 p-3 rounded-lg bg-accent/10 border border-accent/30 text-sm">
                    <span className="font-semibold text-foreground">Impact:</span>{" "}
                    <span className="text-foreground/80">{s.impact}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
          Be part of the solution.
        </h2>
        <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
          Ask the AI guide how you can help — at home, in your community, or right
          here in the park.
        </p>
        <Link
          to="/chat"
          search={{ q: "How can my family help conservation efforts at home?" } as never}
          className="mt-6 inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
        >
          Ask the AI Guide <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
