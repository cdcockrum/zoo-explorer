import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { Bot, Map, BarChart3, GraduationCap, Leaf, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About the Project — Wildlife Guide" },
      {
        name: "description",
        content:
          "Wildlife Guide demonstrates how AI, conservation education, visitor engagement, and analytics can work together to support modern zoos.",
      },
    ],
  }),
  component: AboutPage,
});

const CAPABILITIES = [
  { icon: Bot, title: "AI Visitor Assistant", desc: "A grounded chat experience trained on a curated zoo knowledge base — animal facts, exhibits, schedules, and conservation work." },
  { icon: Map, title: "Wayfinding & Discovery", desc: "Stylized interactive maps, exhibit deep-links, feeding schedules, and contextual encounter recommendations." },
  { icon: GraduationCap, title: "Education & Engagement", desc: "Scavenger hunts, junior conservationist badges, animal trivia, and curriculum hooks for school groups." },
  { icon: Leaf, title: "Conservation Storytelling", desc: "Field stories tie every species back to the protection work the zoo funds and partners on." },
  { icon: BarChart3, title: "Analytics for Conservation Teams", desc: "Visitor engagement, exhibit traffic, and educational reach in one operational dashboard." },
  { icon: Users, title: "Citizen Science Hooks", desc: "Pollinator logs, bird observations, and community challenges turn visitors into contributors." },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      <section className="max-w-5xl mx-auto px-4 py-16 md:py-24">
        <div className="text-xs uppercase tracking-wider text-primary font-semibold">
          About the Project
        </div>
        <h1 className="mt-3 text-4xl md:text-6xl font-bold text-foreground tracking-tight max-w-3xl">
          A conservation technology platform for modern zoos.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Wildlife Guide demonstrates how artificial intelligence, conservation
          education, visitor engagement, and data analytics can work together to
          support zoos and wildlife organizations. The platform is built around the
          Oklahoma City Zoo as a reference experience, and is designed to be
          adaptable to any zoo, aquarium, or environmental institution.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-4">
          {CAPABILITIES.map((c) => (
            <div key={c.title} className="p-6 rounded-2xl border border-border bg-card">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <c.icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 font-bold text-foreground">{c.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>

        <section className="mt-16 p-8 md:p-12 rounded-3xl bg-primary text-primary-foreground">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Why this matters
          </h2>
          <p className="mt-4 text-primary-foreground/85 max-w-2xl leading-relaxed">
            Zoos reach more people each year than all major sports leagues combined.
            That audience is one of conservation's most powerful tools — but only if
            the visit translates into understanding and action. Wildlife Guide is a
            blueprint for turning a great day at the zoo into lasting support for the
            species it serves.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/"
              className="px-5 py-3 rounded-lg bg-accent text-accent-foreground font-semibold"
            >
              Explore the platform
            </Link>
            <Link
              to="/dashboard"
              className="px-5 py-3 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors font-semibold"
            >
              See the impact dashboard
            </Link>
          </div>
        </section>

        <p className="mt-12 text-xs text-muted-foreground text-center">
          Animal photography courtesy of Unsplash contributors. Conservation
          program details and analytics shown throughout the platform are
          illustrative demonstration content.
        </p>
      </section>
    </div>
  );
}
