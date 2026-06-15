import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import hero from "@/assets/zoo-hero.jpg";
import { ANIMALS, CONSERVATION_STORIES, EXHIBITS, STATUS_COLORS } from "@/lib/zoo-data";
import { ArrowRight, Compass, Sparkles, Leaf, MapPin, Calendar } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wildlife Guide — Explore Wildlife. Inspire Conservation." },
      {
        name: "description",
        content:
          "An AI-powered visitor platform for the Oklahoma City Zoo. Discover animals, navigate exhibits, and learn how conservation protects species worldwide.",
      },
      { property: "og:title", content: "Wildlife Guide — Oklahoma City Zoo" },
      {
        property: "og:description",
        content:
          "Discover animals, navigate the zoo, and learn how conservation efforts are helping protect species around the world.",
      },
    ],
  }),
  component: Index,
});

const STATS = [
  { value: "1,900+", label: "Animals" },
  { value: "500+", label: "Species" },
  { value: "119", label: "Acres" },
  { value: "12", label: "Conservation programs" },
];

function Index() {
  const featured = ANIMALS.slice(0, 4);
  const stories = CONSERVATION_STORIES.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={hero}
          alt="Wildlife at the Oklahoma City Zoo"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-background" />
        <div className="relative max-w-7xl mx-auto px-4 py-28 md:py-40">
          <div className="max-w-3xl text-white">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur text-xs font-medium uppercase tracking-wider">
              <Leaf className="w-3 h-3" /> Oklahoma City Zoo · Conservation Platform
            </span>
            <h1 className="mt-5 text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
              Explore Wildlife.
              <br />
              <span className="text-accent">Inspire Conservation.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl">
              Discover animals, navigate the zoo, and learn how conservation efforts
              are helping protect species around the world.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/map"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-accent text-accent-foreground font-semibold shadow-xl hover:scale-[1.02] transition-transform"
              >
                <Compass className="w-4 h-4" />
                Open the Map
              </Link>
              <Link
                to="/chat"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white/95 text-primary font-semibold hover:bg-white transition-colors"
              >
                <Sparkles className="w-4 h-4" />
                Ask the AI Guide
              </Link>
            </div>
          </div>

          {/* Stats strip */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/20 rounded-2xl overflow-hidden backdrop-blur-sm max-w-3xl">
            {STATS.map((s) => (
              <div key={s.label} className="bg-black/30 px-5 py-4">
                <div className="text-2xl md:text-3xl font-bold text-white">{s.value}</div>
                <div className="text-[11px] uppercase tracking-wider text-white/70 mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick access */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              Plan your visit
            </h2>
            <p className="mt-2 text-muted-foreground">
              Four tools that make every visit deeper, smarter, and more meaningful.
            </p>
          </div>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <FeatureCard
            to="/map"
            icon="🗺️"
            title="Interactive Map"
            desc="Wayfinding for exhibits, dining, and animal encounters."
          />
          <FeatureCard
            to="/animals"
            icon="🐾"
            title="Animal Explorer"
            desc="Profiles, habitats, conservation status, and ecological roles."
          />
          <FeatureCard
            to="/chat"
            icon="💬"
            title="AI Wildlife Assistant"
            desc="Ask anything — recommendations, facts, conservation."
          />
          <FeatureCard
            to="/scavenger-hunt"
            icon="🔍"
            title="Scavenger Hunts"
            desc="Family challenges and junior conservationist badges."
          />
        </div>
      </section>

      {/* Featured Animals */}
      <section className="bg-secondary/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <div className="text-xs uppercase tracking-wider text-primary font-semibold">
                Featured Wildlife
              </div>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                Meet today's animals
              </h2>
            </div>
            <Link
              to="/animals"
              className="inline-flex items-center gap-1 text-primary font-semibold hover:gap-2 transition-all"
            >
              Browse all species <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featured.map((a) => (
              <Link
                key={a.id}
                to="/animals/$id"
                params={{ id: a.id }}
                className="group block rounded-2xl overflow-hidden bg-card border border-border hover:shadow-[var(--shadow-warm)] transition-shadow"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={a.image}
                    alt={a.commonName}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2">
                    <span
                      className="inline-block w-2 h-2 rounded-full"
                      style={{ background: STATUS_COLORS[a.status] }}
                    />
                    <span className="text-[11px] uppercase tracking-wider text-muted-foreground">
                      {a.status}
                    </span>
                  </div>
                  <h3 className="mt-1.5 font-bold text-foreground">{a.commonName}</h3>
                  <p className="text-xs italic text-muted-foreground">{a.scientificName}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Today's experiences */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <div className="text-xs uppercase tracking-wider text-primary font-semibold">
              Today at the zoo
            </div>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              Upcoming experiences
            </h2>
          </div>
          <Link
            to="/map"
            className="inline-flex items-center gap-1 text-primary font-semibold hover:gap-2 transition-all"
          >
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {EXHIBITS.slice(0, 6).flatMap((e) =>
            e.feeding.slice(0, 1).map((f) => (
              <div
                key={e.id + f.title}
                className="p-5 rounded-2xl bg-card border border-border flex gap-4"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl shrink-0"
                  style={{ background: e.color }}
                >
                  {e.emoji}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 text-xs text-primary font-semibold">
                    <Calendar className="w-3.5 h-3.5" />
                    {f.time}
                  </div>
                  <h3 className="mt-1 font-bold text-foreground truncate">{f.title}</h3>
                  <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="w-3 h-3" /> {e.name}
                  </div>
                </div>
              </div>
            )),
          )}
        </div>
      </section>

      {/* Conservation stories */}
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid md:grid-cols-3 gap-10 md:gap-16">
            <div className="md:col-span-1">
              <div className="text-xs uppercase tracking-wider text-accent font-semibold">
                Conservation in action
              </div>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">
                Every visit protects a species.
              </h2>
              <p className="mt-4 text-primary-foreground/80">
                A portion of every admission funds field conservation across Oklahoma
                and around the world. Here's what your support makes possible.
              </p>
              <Link
                to="/conservation"
                className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:scale-[1.02] transition-transform"
              >
                Explore Conservation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="md:col-span-2 grid gap-4">
              {stories.map((s) => (
                <div
                  key={s.id}
                  className="grid grid-cols-3 gap-4 rounded-2xl overflow-hidden bg-primary-foreground/5 border border-primary-foreground/10"
                >
                  <div className="aspect-square sm:aspect-auto overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="col-span-2 p-5">
                    <div className="text-[11px] uppercase tracking-wider text-accent font-semibold">
                      {s.category}
                    </div>
                    <h3 className="mt-1 font-bold text-lg">{s.title}</h3>
                    <p className="mt-1.5 text-sm text-primary-foreground/75 line-clamp-2">
                      {s.summary}
                    </p>
                    <div className="mt-2 text-xs text-accent font-semibold">{s.impact}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-10 text-center text-sm text-muted-foreground">
        <p>Wildlife Guide · A conservation technology demo for the Oklahoma City Zoo.</p>
        <div className="mt-2 flex items-center justify-center gap-4">
          <Link to="/about" className="hover:text-foreground">About the project</Link>
          <span>·</span>
          <Link to="/conservation" className="hover:text-foreground">Conservation</Link>
          <span>·</span>
          <Link to="/dashboard" className="hover:text-foreground">Impact dashboard</Link>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  to,
  icon,
  title,
  desc,
}: {
  to: "/chat" | "/map" | "/animals" | "/scavenger-hunt";
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <Link
      to={to}
      className="group p-6 rounded-2xl bg-card border border-border hover:border-primary transition-all hover:shadow-[var(--shadow-warm)] hover:-translate-y-1"
    >
      <div className="text-4xl">{icon}</div>
      <h3 className="mt-3 font-bold text-lg text-foreground">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
        Open <ArrowRight className="w-3.5 h-3.5" />
      </span>
    </Link>
  );
}
