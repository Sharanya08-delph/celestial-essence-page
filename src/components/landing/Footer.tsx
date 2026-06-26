import { Icon } from "./Icon";

const groups = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Changelog", "Roadmap"],
  },
  {
    title: "Company",
    links: ["About", "Customers", "Careers", "Contact"],
  },
  {
    title: "Resources",
    links: ["Docs", "Guides", "API", "Status"],
  },
];

export function Footer() {
  return (
    <footer className="px-4 pb-10 pt-16">
      <div className="mx-auto max-w-6xl">
        <div className="glass rounded-3xl p-8 md:p-10">
          <div className="grid gap-10 md:grid-cols-5">
            <div className="md:col-span-2">
              <a href="#" className="flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-[var(--forsythia)] text-[var(--noir)]">
                  <Icon name="cube-16-solid" className="h-4 w-4" />
                </span>
                <span className="font-mono text-sm font-bold tracking-tight">
                  NEXARA
                </span>
              </a>
              <p className="mt-4 max-w-sm text-sm text-[color:var(--muted-foreground)]">
                The premium AI workspace for teams building serious products.
              </p>
              <div className="mt-5 flex items-center gap-2">
                {[
                  { label: "Twitter", path: "M18.244 2H21l-6.52 7.45L22 22h-6.83l-4.79-6.27L4.8 22H2l7-8L1.6 2h7l4.32 5.79L18.24 2z" },
                  { label: "GitHub", path: "M12 2C6.48 2 2 6.58 2 12.21c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.49v-1.7c-2.78.62-3.37-1.36-3.37-1.36-.46-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1.01.07 1.54 1.06 1.54 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.13-4.55-5.04 0-1.11.39-2.02 1.03-2.74-.1-.26-.45-1.3.1-2.72 0 0 .84-.27 2.75 1.05A9.34 9.34 0 0 1 12 6.84c.85 0 1.71.12 2.51.34 1.91-1.32 2.75-1.05 2.75-1.05.55 1.42.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.74 0 3.92-2.33 4.78-4.56 5.03.36.32.68.94.68 1.9v2.82c0 .27.18.59.69.49A10.02 10.02 0 0 0 22 12.21C22 6.58 17.52 2 12 2z" },
                  { label: "LinkedIn", path: "M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.5 0h4.37v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 7v7.44h-4.56v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.49V22H7.72V8z" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    aria-label={s.label}
                    className="grid h-9 w-9 place-items-center rounded-full bg-white/5 text-[var(--mint)] transition-colors duration-150 hover:bg-white/10 hover:text-[var(--forsythia)]"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                      <path d={s.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
            {groups.map((g) => (
              <div key={g.title}>
                <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--muted-foreground)]">
                  {g.title}
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {g.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-sm text-[var(--arctic)]/80 transition-colors duration-150 hover:text-[var(--forsythia)]"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
            <p className="text-xs text-[color:var(--muted-foreground)]">
              © {new Date().getFullYear()} Nexara Labs, Inc. All rights reserved.
            </p>
            <p className="text-xs text-[color:var(--muted-foreground)]">
              Crafted with care. Built on the open web.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}