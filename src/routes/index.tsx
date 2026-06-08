import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import hero from "@/assets/zoo-hero.jpg";
import mascot from "@/assets/zoo-mascot.png";
import { CONSERVATION_PROJECTS, EXHIBITS } from "@/lib/zoo-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Oklahoma City Zoo — AI Visitor Guide" },
      {
        name: "description",
        content:
          "Plan your visit to the Oklahoma City Zoo with an AI guide, interactive map, personalized tours, and scavenger hunts.",
      },
      { property: "og:title", content: "Oklahoma City Zoo — AI Visitor Guide" },
      {
        property: "og:description",
        content: "Chat with Ranger Rusty, explore exhibits, and build your own zoo adventure.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={hero}
          alt="Illustrated Oklahoma zoo landscape with giraffe, elephant, and lion at sunset"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-background" />
        <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-36">
          <div className="max-w-2xl text-white">
            <span className="inline-block px-3 py-1 rounded-full bg-white/15 backdrop-blur text-xs font-medium uppercase tracking-wider">
              Oklahoma City Zoo
            </span>
            <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-tight">
              Your wild day starts here.
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/90">
              Meet 1,900+ animals across 119 acres. Get instant answers, a map,
              and a tour tailored to you.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/chat"
                className="px-5 py-3 rounded-lg bg-accent text-accent-foreground font-semibold shadow-lg hover:scale-105 transition-transform"
              >
                Ask Ranger Rusty
              </Link>
              <Link
                to="/tours"
                className="px-5 py-3 rounded-lg bg-white/95 text-primary font-semibold hover:bg-white transition-colors"
              >
                Plan my tour
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-foreground">Explore the zoo your way</h2>
        <p className="mt-2 text-muted-foreground">Four tools to make every visit unforgettable.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <FeatureCard
            to="/chat"
            emoji="💬"
            title="AI Guide"
            desc="Ask anything — animal facts, conservation, what's nearby."
          />
          <FeatureCard
            to="/map"
            emoji="🗺️"
            title="Interactive Map"
            desc="Find exhibits, animals, and amenities at a glance."
          />
          <FeatureCard
            to="/tours"
            emoji="🎒"
            title="Personalized Tour"
            desc="Tell us your interests and time — get a custom route."
          />
          <FeatureCard
            to="/scavenger-hunt"
            emoji="🔍"
            title="Scavenger Hunt"
            desc="Educational challenges for kids and curious adults."
          />
        </div>
      </section>

      {/* Conservation */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Wildlife we protect</h2>
            <p className="mt-3 text-muted-foreground">
              Your visit supports field conservation across Oklahoma and around the world.
            </p>
            <ul className="mt-6 space-y-2">
              {CONSERVATION_PROJECTS.map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <span className="text-accent mt-1">●</span>
                  <span className="text-foreground/90">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-card p-8 shadow-[var(--shadow-warm)] flex items-center gap-6">
            <img
              src={mascot}
              alt="Ranger Rusty"
              width={120}
              height={120}
              className="w-28 h-28 object-contain shrink-0"
              loading="lazy"
            />
            <div>
              <div className="text-sm uppercase tracking-wider text-primary font-semibold">
                Meet your guide
              </div>
              <h3 className="text-2xl font-bold text-foreground mt-1">Ranger Rusty</h3>
              <p className="mt-2 text-muted-foreground text-sm">
                A red panda fan with answers about every exhibit, animal, and
                conservation effort at the zoo.
              </p>
              <Link
                to="/chat"
                className="mt-4 inline-block text-primary font-semibold hover:underline"
              >
                Start chatting →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Exhibit teaser */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-foreground">Today at the zoo</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {EXHIBITS.slice(0, 6).map((e) => (
            <div
              key={e.id}
              className="p-5 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors"
            >
              <div className="text-3xl">{e.emoji}</div>
              <h3 className="mt-2 font-bold text-foreground">{e.name}</h3>
              <div className="text-xs uppercase tracking-wide text-primary mt-1">
                {e.zone}
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{e.highlight}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        Made for visitors of the Oklahoma City Zoo and Botanical Garden.
      </footer>
    </div>
  );
}

function FeatureCard({
  to,
  emoji,
  title,
  desc,
}: {
  to: "/chat" | "/map" | "/tours" | "/scavenger-hunt";
  emoji: string;
  title: string;
  desc: string;
}) {
  return (
    <Link
      to={to}
      className="group p-6 rounded-2xl bg-card border border-border hover:border-primary transition-all hover:shadow-[var(--shadow-warm)] hover:-translate-y-1"
    >
      <div className="text-4xl">{emoji}</div>
      <h3 className="mt-3 font-bold text-lg text-foreground">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
      <span className="mt-4 inline-block text-sm font-semibold text-primary group-hover:translate-x-1 transition-transform">
        Open →
      </span>
    </Link>
  );
}
