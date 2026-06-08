import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/scavenger-hunt")({
  head: () => ({
    meta: [
      { title: "Scavenger Hunt — Oklahoma City Zoo" },
      {
        name: "description",
        content:
          "Educational scavenger hunt for kids and curious adults at the Oklahoma City Zoo.",
      },
      { property: "og:title", content: "Zoo Scavenger Hunt" },
      {
        property: "og:description",
        content: "Find, learn, and check off challenges across the OKC Zoo.",
      },
    ],
  }),
  component: HuntPage,
  ssr: false,
});

type Challenge = {
  id: string;
  task: string;
  fact: string;
  points: number;
};

const CHALLENGES: Challenge[] = [
  {
    id: "spots",
    task: "Find an animal with spots and count how many legs it has.",
    fact: "Every giraffe has a unique spot pattern — like a fingerprint!",
    points: 10,
  },
  {
    id: "redpanda",
    task: "Spot the red panda in the Asia habitat.",
    fact: "Red pandas have a 'false thumb' — an extended wrist bone — to grip bamboo.",
    points: 15,
  },
  {
    id: "bison",
    task: "Visit the American bison on Oklahoma Trails.",
    fact: "Bison are Oklahoma's state mammal and once numbered 30 million across the plains.",
    points: 10,
  },
  {
    id: "lion-roar",
    task: "Listen for the lion. Whose mane is bigger?",
    fact: "A male lion's roar can be heard up to 5 miles away.",
    points: 10,
  },
  {
    id: "elephant",
    task: "Watch an Asian elephant for 2 full minutes.",
    fact: "Asian elephants use their trunks to greet each other — entwining them like a handshake.",
    points: 15,
  },
  {
    id: "eagle",
    task: "Find the bald eagle. What direction is it facing?",
    fact: "Bald eagles can spot prey from over a mile away.",
    points: 10,
  },
  {
    id: "lorikeet",
    task: "Walk through the lorikeet aviary in the Children's Zoo.",
    fact: "Lorikeets have brush-tipped tongues for sipping nectar.",
    points: 10,
  },
  {
    id: "sealion",
    task: "Catch a California sea lion training session at Aquaticus.",
    fact: "Sea lions can dive up to 900 feet looking for fish.",
    points: 10,
  },
];

const STORAGE_KEY = "okc-zoo-hunt-v1";

function HuntPage() {
  const [done, setDone] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setDone(JSON.parse(raw));
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(done));
    } catch {
      /* ignore */
    }
  }, [done]);

  const toggle = (id: string) => setDone((d) => ({ ...d, [id]: !d[id] }));
  const reset = () => setDone({});

  const completedCount = Object.values(done).filter(Boolean).length;
  const totalPoints = CHALLENGES.filter((c) => done[c.id]).reduce(
    (sum, c) => sum + c.points,
    0,
  );
  const maxPoints = CHALLENGES.reduce((s, c) => s + c.points, 0);
  const pct = Math.round((totalPoints / maxPoints) * 100);

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main className="max-w-3xl mx-auto px-4 py-8">
        <div className="flex items-end justify-between flex-wrap gap-3">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Zoo Scavenger Hunt 🔍</h1>
            <p className="mt-1 text-muted-foreground">
              Check off challenges as you explore. Learn an animal fact with each one.
            </p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-primary">{totalPoints}</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wide">
              of {maxPoints} pts
            </div>
          </div>
        </div>

        <div className="mt-4 h-3 rounded-full bg-secondary overflow-hidden">
          <div
            className="h-full rounded-full transition-all"
            style={{
              width: `${pct}%`,
              background: "var(--gradient-sunset)",
            }}
          />
        </div>
        <div className="mt-1 text-xs text-muted-foreground">
          {completedCount} of {CHALLENGES.length} challenges complete
        </div>

        <ul className="mt-6 space-y-3">
          {CHALLENGES.map((c) => {
            const isDone = !!done[c.id];
            return (
              <li
                key={c.id}
                className={`p-4 rounded-xl border transition-colors ${
                  isDone
                    ? "bg-secondary border-primary/40"
                    : "bg-card border-border"
                }`}
              >
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isDone}
                    onChange={() => toggle(c.id)}
                    className="mt-1 w-5 h-5 accent-primary"
                  />
                  <div className="flex-1">
                    <div
                      className={`font-semibold text-foreground ${
                        isDone ? "line-through opacity-60" : ""
                      }`}
                    >
                      {c.task}
                    </div>
                    {isDone && (
                      <div className="mt-2 text-sm text-foreground/80 bg-card/60 rounded-lg p-2 border border-border">
                        <span className="font-semibold text-primary">Did you know?</span>{" "}
                        {c.fact}
                      </div>
                    )}
                  </div>
                  <span className="text-xs font-bold text-accent shrink-0">
                    +{c.points}
                  </span>
                </label>
              </li>
            );
          })}
        </ul>

        {completedCount === CHALLENGES.length && (
          <div className="mt-6 p-6 rounded-2xl text-center" style={{ background: "var(--gradient-sunset)" }}>
            <div className="text-4xl">🏆</div>
            <h2 className="mt-2 text-2xl font-bold text-accent-foreground">
              You're a Zoo Champion!
            </h2>
            <p className="mt-1 text-accent-foreground/80">
              Show this screen at Guest Services for a sticker.
            </p>
          </div>
        )}

        {completedCount > 0 && (
          <button
            onClick={reset}
            className="mt-6 text-sm text-muted-foreground hover:text-foreground"
          >
            Reset progress
          </button>
        )}
      </main>
    </div>
  );
}
