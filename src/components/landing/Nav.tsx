import { Link } from "@tanstack/react-router";
import { Icon } from "./Icon";

const links = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Docs", href: "#" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 px-4 pt-4">
      <nav
        aria-label="Primary"
        className="glass mx-auto flex max-w-6xl items-center justify-between gap-2 rounded-full px-3 py-2 md:px-6 md:py-2.5"
      >
        <Link to="/" className="flex shrink-0 items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-[var(--forsythia)] text-[var(--noir)]">
            <Icon name="cube-16-solid" className="h-4 w-4" />
          </span>
          <span className="font-mono text-sm font-bold tracking-tight">NEXARA</span>
        </Link>
        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-sm text-[color:var(--muted-foreground)] transition-colors duration-150 hover:text-[var(--arctic)]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          <Link
            to="/signin"
            className="rounded-full px-3 py-1.5 text-sm text-[color:var(--muted-foreground)] transition-colors duration-150 hover:text-[var(--arctic)]"
          >
            Sign in
          </Link>
          <Link to="/signin" className="btn-primary !px-4 !py-2 text-sm">
            <span className="hidden sm:inline">Get started</span>
            <span className="sm:hidden">Start</span>
            <Icon name="chevron-right" className="h-3.5 w-3.5" />
          </Link>
        </div>
      </nav>
    </header>
  );
}