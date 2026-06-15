import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { ANIMALS, EXHIBITS, STATUS_COLORS } from "@/lib/zoo-data";
import { ArrowLeft, MapPin, Sparkles } from "lucide-react";

export const Route = createFileRoute("/animals/$id")({
  loader: ({ params }) => {
    const animal = ANIMALS.find((a) => a.id === params.id);
    if (!animal) throw notFound();
    return { animal };
  },
  head: ({ loaderData }) => {
    const a = loaderData?.animal;
    return {
      meta: a
        ? [
            { title: `${a.commonName} — Wildlife Guide` },
            { name: "description", content: `${a.commonName} (${a.scientificName}): ${a.ecologicalRole}` },
            { property: "og:title", content: `${a.commonName} — Wildlife Guide` },
            { property: "og:description", content: a.ecologicalRole },
            { property: "og:image", content: a.image },
          ]
        : [{ title: "Animal — Wildlife Guide" }],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold">Animal not found</h1>
        <Link to="/animals" className="mt-4 inline-block text-primary font-semibold">
          ← Back to all animals
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold">Something went wrong</h1>
        <p className="mt-2 text-muted-foreground text-sm">{error.message}</p>
        <button onClick={reset} className="mt-4 text-primary font-semibold">Try again</button>
      </div>
    </div>
  ),
  component: AnimalDetail,
});

function AnimalDetail() {
  const { animal } = Route.useLoaderData();
  const exhibit = EXHIBITS.find((e) => e.id === animal.exhibitId);
  const related = animal.related
    .map((id) => ANIMALS.find((a) => a.id === id))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  const facts: { label: string; value: string }[] = [
    { label: "Classification", value: animal.classification },
    { label: "Habitat", value: animal.habitat },
    { label: "Diet", value: animal.diet },
    { label: "Lifespan", value: animal.lifespan },
    { label: "Geographic Range", value: animal.range },
    { label: "Population Trend", value: animal.populationTrend },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      {/* Hero */}
      <div className="relative">
        <div className="aspect-[16/7] max-h-[520px] w-full overflow-hidden bg-muted">
          <img src={animal.image} alt={animal.commonName} className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="max-w-6xl mx-auto px-4 pb-8">
            <Link
              to="/animals"
              className="inline-flex items-center gap-1 text-sm text-white/90 hover:text-white mb-3"
            >
              <ArrowLeft className="w-4 h-4" /> All animals
            </Link>
            <div className="flex items-center gap-3 flex-wrap">
              <span
                className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full text-white"
                style={{ background: STATUS_COLORS[animal.status] }}
              >
                {animal.status}
              </span>
              <span className="text-xs text-white/80">Population: {animal.populationTrend}</span>
            </div>
            <h1 className="mt-3 text-4xl md:text-6xl font-bold text-white tracking-tight">
              {animal.commonName}
            </h1>
            <p className="mt-1 text-lg italic text-white/85">{animal.scientificName}</p>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 py-12 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          <section>
            <h2 className="text-xl font-bold text-foreground">Ecological role</h2>
            <p className="mt-2 text-foreground/85 leading-relaxed">{animal.ecologicalRole}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">Species at a glance</h2>
            <dl className="mt-4 grid sm:grid-cols-2 gap-3">
              {facts.map((f) => (
                <div key={f.label} className="p-4 rounded-xl border border-border bg-card">
                  <dt className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">
                    {f.label}
                  </dt>
                  <dd className="mt-1 text-sm text-foreground">{f.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">Did you know?</h2>
            <ul className="mt-3 space-y-2">
              {animal.facts.map((f) => (
                <li
                  key={f}
                  className="flex gap-3 p-3 rounded-lg bg-accent/10 border border-accent/30 text-sm text-foreground"
                >
                  <Sparkles className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="space-y-6">
          {exhibit && (
            <div className="p-5 rounded-2xl border border-border bg-card">
              <div className="text-xs uppercase tracking-wider text-primary font-semibold">
                See this animal at
              </div>
              <div className="mt-2 flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl"
                  style={{ background: exhibit.color }}
                >
                  {exhibit.emoji}
                </div>
                <div>
                  <div className="font-bold text-foreground">{exhibit.name}</div>
                  <div className="text-xs text-muted-foreground">{exhibit.zone}</div>
                </div>
              </div>
              <Link
                to="/map"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
              >
                <MapPin className="w-4 h-4" /> View on map
              </Link>
            </div>
          )}

          <Link
            to="/chat"
            search={{ q: `Tell me more about the ${animal.commonName} at the Oklahoma City Zoo.` } as never}
            className="block p-5 rounded-2xl bg-primary text-primary-foreground"
          >
            <Sparkles className="w-5 h-5 text-accent" />
            <div className="mt-2 font-bold">Ask the AI Guide</div>
            <p className="mt-1 text-sm text-primary-foreground/80">
              Get tailored facts about the {animal.commonName} from Ranger Rusty.
            </p>
          </Link>

          {related.length > 0 && (
            <div>
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">
                Related species
              </h3>
              <div className="mt-3 space-y-2">
                {related.map((r) => (
                  <Link
                    key={r.id}
                    to="/animals/$id"
                    params={{ id: r.id }}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary transition-colors"
                  >
                    <img
                      src={r.image}
                      alt={r.commonName}
                      className="w-12 h-12 rounded-lg object-cover"
                      loading="lazy"
                    />
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-foreground truncate">
                        {r.commonName}
                      </div>
                      <div className="text-[11px] text-muted-foreground">{r.status}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </aside>
      </main>
    </div>
  );
}
