import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { ANIMALS, STATUS_COLORS, type ConservationStatus } from "@/lib/zoo-data";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";

export const Route = createFileRoute("/animals")({
  head: () => ({
    meta: [
      { title: "Animal Explorer — Wildlife Guide" },
      {
        name: "description",
        content:
          "Browse detailed profiles of animals at the Oklahoma City Zoo — habitat, diet, conservation status, and ecological role.",
      },
      { property: "og:title", content: "Animal Explorer — Wildlife Guide" },
      {
        property: "og:description",
        content: "Detailed species profiles with conservation status and habitat data.",
      },
    ],
  }),
  component: AnimalsPage,
});

const STATUS_FILTERS: (ConservationStatus | "All")[] = [
  "All",
  "Least Concern",
  "Near Threatened",
  "Vulnerable",
  "Endangered",
  "Critically Endangered",
];

function AnimalsPage() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<(typeof STATUS_FILTERS)[number]>("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ANIMALS.filter((a) => {
      if (status !== "All" && a.status !== status) return false;
      if (!q) return true;
      return (
        a.commonName.toLowerCase().includes(q) ||
        a.scientificName.toLowerCase().includes(q) ||
        a.range.toLowerCase().includes(q)
      );
    });
  }, [query, status]);

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main className="max-w-7xl mx-auto px-4 py-10">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-wider text-primary font-semibold">
            Animal Explorer
          </div>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Every species has a story.
          </h1>
          <p className="mt-3 text-muted-foreground">
            Detailed profiles of featured residents — their habitats, conservation status,
            and the role they play in their ecosystems.
          </p>
        </div>

        {/* Controls */}
        <div className="mt-8 flex flex-wrap gap-3 items-center">
          <div className="relative flex-1 min-w-[200px] max-w-sm">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search animals, regions…"
              className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-border bg-card text-sm outline-none focus:border-primary"
            />
          </div>
          <div className="flex flex-wrap gap-1.5">
            {STATUS_FILTERS.map((s) => (
              <button
                key={s}
                onClick={() => setStatus(s)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                  status === s
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-muted-foreground border-border hover:text-foreground"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((a) => (
            <Link
              key={a.id}
              to="/animals/$id"
              params={{ id: a.id }}
              className="group block rounded-2xl overflow-hidden bg-card border border-border hover:shadow-[var(--shadow-warm)] hover:-translate-y-0.5 transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={a.image}
                  alt={a.commonName}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-bold text-foreground">{a.commonName}</h3>
                  <span
                    className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full"
                    style={{
                      background: STATUS_COLORS[a.status] + "33",
                      color: STATUS_COLORS[a.status],
                    }}
                  >
                    {a.status}
                  </span>
                </div>
                <p className="text-xs italic text-muted-foreground mt-0.5">{a.scientificName}</p>
                <p className="mt-3 text-sm text-foreground/80 line-clamp-2">
                  {a.ecologicalRole}
                </p>
                <div className="mt-3 text-[11px] uppercase tracking-wider text-muted-foreground">
                  {a.range}
                </div>
              </div>
            </Link>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full text-center py-20 text-muted-foreground">
              No animals match your search.
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
