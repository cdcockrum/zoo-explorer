import { Link } from "@tanstack/react-router";
import mascot from "@/assets/zoo-mascot.png";

export function SiteNav() {
  const linkClass =
    "px-3 py-2 rounded-md text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-secondary transition-colors";
  const activeClass = "bg-secondary text-foreground";

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src={mascot}
            alt="Ranger Rusty mascot"
            width={36}
            height={36}
            className="w-9 h-9 object-contain"
          />
          <div className="leading-tight">
            <div className="text-sm font-bold text-primary">OKC Zoo</div>
            <div className="text-[10px] text-muted-foreground uppercase tracking-wide">
              Visitor Guide
            </div>
          </div>
        </Link>
        <div className="flex items-center gap-1">
          <Link to="/map" className={linkClass} activeProps={{ className: `${linkClass} ${activeClass}` }}>
            Map
          </Link>
          <Link to="/tours" className={linkClass} activeProps={{ className: `${linkClass} ${activeClass}` }}>
            Tours
          </Link>
          <Link
            to="/scavenger-hunt"
            className={linkClass}
            activeProps={{ className: `${linkClass} ${activeClass}` }}
          >
            Hunt
          </Link>
          <Link
            to="/chat"
            className="ml-2 px-4 py-2 rounded-md text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Ask Rusty
          </Link>
        </div>
      </nav>
    </header>
  );
}
