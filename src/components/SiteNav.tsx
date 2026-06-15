import { Link } from "@tanstack/react-router";
import mascot from "@/assets/zoo-mascot.png";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { to: "/map", label: "Map" },
  { to: "/animals", label: "Animals" },
  { to: "/conservation", label: "Conservation" },
  { to: "/tours", label: "Tours" },
  { to: "/scavenger-hunt", label: "Hunt" },
  { to: "/dashboard", label: "Impact" },
  { to: "/about", label: "About" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const linkClass =
    "px-3 py-2 rounded-md text-sm font-medium text-foreground/75 hover:text-foreground hover:bg-secondary transition-colors";
  const activeClass = "bg-secondary text-foreground";

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/85 border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <img
            src={mascot}
            alt="Wildlife Guide"
            width={36}
            height={36}
            className="w-9 h-9 object-contain"
          />
          <div className="leading-tight">
            <div className="text-sm font-bold text-primary tracking-tight">Wildlife Guide</div>
            <div className="text-[10px] text-muted-foreground uppercase tracking-wider">
              Oklahoma City Zoo
            </div>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-0.5">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={linkClass}
              activeProps={{ className: `${linkClass} ${activeClass}` }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/chat"
            className="ml-3 px-4 py-2 rounded-md text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Ask AI
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 -mr-2 rounded-md hover:bg-secondary"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="px-4 py-3 flex flex-col gap-1">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className={linkClass}
                activeProps={{ className: `${linkClass} ${activeClass}` }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/chat"
              onClick={() => setOpen(false)}
              className="mt-2 px-4 py-2 rounded-md text-sm font-semibold bg-primary text-primary-foreground text-center"
            >
              Ask AI
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
