import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Icon } from "./Icon";

const links = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Docs", href: "#" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 px-4 pt-4">
      <nav
        aria-label="Primary"
        className="glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2.5 md:px-6"
      >
        <Link to="/" className="flex items-center gap-2">
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
        <div className="flex items-center gap-2">
          <Link
            to="/signin"
            className="hidden text-sm text-[color:var(--muted-foreground)] hover:text-[var(--arctic)] md:inline-block"
          >
            Sign in
          </Link>
          <a href="#pricing" className="btn-primary hidden text-sm sm:inline-flex">
            Get started
            <Icon name="chevron-right" className="h-3.5 w-3.5" />
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full bg-white/5 text-[var(--arctic)] transition-colors duration-150 hover:bg-white/10 md:hidden"
          >
            <Icon name={open ? "x-mark" : "chevron-down"} className="h-4 w-4" />
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass mx-auto mt-2 max-w-6xl rounded-2xl p-3 md:hidden">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-2.5 text-sm text-[var(--arctic)] hover:bg-white/5"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                to="/signin"
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-2.5 text-sm text-[var(--arctic)] hover:bg-white/5"
              >
                Sign in
              </Link>
            </li>
            <li className="px-1 pt-2">
              <a
                href="#pricing"
                onClick={() => setOpen(false)}
                className="btn-primary w-full text-sm"
              >
                Get started
                <Icon name="chevron-right" className="h-3.5 w-3.5" />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}