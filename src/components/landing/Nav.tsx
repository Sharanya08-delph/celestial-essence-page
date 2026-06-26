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
        className="glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2.5 md:px-6"
      >
        <a href="#" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-[var(--forsythia)] text-[var(--noir)]">
            <Icon name="cube-16-solid" className="h-4 w-4" />
          </span>
          <span className="font-mono text-sm font-bold tracking-tight">NEXARA</span>
        </a>
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
        <div className="flex items-center gap-2">
          <a href="#" className="hidden text-sm text-[color:var(--muted-foreground)] hover:text-[var(--arctic)] md:inline-block">
            Sign in
          </a>
          <a href="#pricing" className="btn-primary text-sm">
            Get started
            <Icon name="chevron-right" className="h-3.5 w-3.5" />
          </a>
        </div>
      </nav>
    </header>
  );
}