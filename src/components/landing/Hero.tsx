import { Icon } from "./Icon";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pt-16 pb-28 md:pt-24 md:pb-36">
      {/* Animated SVG background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg" />
        <svg
          className="absolute left-1/2 top-10 -z-10 h-[700px] w-[1100px] -translate-x-1/2 animate-spin-slow opacity-40"
          viewBox="0 0 600 600"
          aria-hidden
        >
          <defs>
            <radialGradient id="g1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFC801" stopOpacity="0.45" />
              <stop offset="60%" stopColor="#114C5A" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#114C5A" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="300" cy="300" r="260" fill="url(#g1)" />
          <g stroke="rgba(241,246,244,0.08)" fill="none">
            {Array.from({ length: 10 }).map((_, i) => (
              <circle key={i} cx="300" cy="300" r={40 + i * 24} />
            ))}
          </g>
        </svg>
      </div>

      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <span className="glass animate-rise inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs text-[color:var(--muted-foreground)]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--forsythia)] opacity-60" style={{ animation: "pulseRing 1.6s ease-out infinite" }} />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--forsythia)]" />
          </span>
          Nexara v2 — agents that ship
        </span>

        <h1 className="animate-rise delay-100 mt-6 max-w-4xl text-4xl font-extrabold leading-[1.05] sm:text-6xl md:text-7xl">
          The <span className="text-gradient">AI workspace</span>
          <br className="hidden sm:block" /> that thinks ahead.
        </h1>

        <p className="animate-rise delay-200 mt-6 max-w-2xl text-base text-[color:var(--muted-foreground)] sm:text-lg">
          Orchestrate agents, knowledge, and workflows in one premium surface. Build,
          deploy, and observe production AI — without the duct tape.
        </p>

        <div className="animate-rise delay-300 mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#pricing" className="btn-primary">
            Start building free
            <Icon name="chevron-right" className="h-4 w-4" />
          </a>
          <a href="#features" className="btn-ghost">
            <Icon name="chart-pie" className="h-4 w-4" />
            See it in action
          </a>
        </div>

        {/* Floating UI cards */}
        <div className="animate-rise delay-500 relative mt-20 w-full max-w-4xl">
          <div className="glass-strong relative mx-auto rounded-3xl p-3 sm:p-4">
            <div className="rounded-2xl bg-[var(--noir)]/80 p-5">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--saffron)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--forsythia)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--mint)]" />
                <span className="ml-3 font-mono text-xs text-[color:var(--muted-foreground)]">nexara › studio</span>
              </div>
              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  { label: "Active agents", value: "128", icon: "cube-16-solid" as const },
                  { label: "Tasks / min", value: "4.2k", icon: "arrow-trending-up" as const },
                  { label: "Success rate", value: "99.4%", icon: "chart-pie" as const },
                ].map((s) => (
                  <div key={s.label} className="glass rounded-2xl p-4 text-left">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[color:var(--muted-foreground)]">{s.label}</span>
                      <Icon name={s.icon} className="h-4 w-4 text-[var(--forsythia)]" />
                    </div>
                    <div className="mt-2 font-mono text-2xl font-bold">{s.value}</div>
                    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/5">
                      <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-[var(--forsythia)] to-[var(--saffron)]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="glass animate-floaty absolute -left-4 -top-6 hidden rounded-2xl p-3 sm:-left-12 md:block">
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-[var(--forsythia)] text-[var(--noir)]">
                <Icon name="arrow-trending-up" className="h-4 w-4" />
              </span>
              <div>
                <div className="font-mono text-xs">+38.2%</div>
                <div className="text-[10px] text-[color:var(--muted-foreground)]">throughput</div>
              </div>
            </div>
          </div>
          <div className="glass animate-drift absolute -right-4 -bottom-6 hidden rounded-2xl p-3 sm:-right-10 md:block">
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-[var(--nocturnal)] text-[var(--mint)]">
                <Icon name="cog-8-tooth" className="h-4 w-4" />
              </span>
              <div>
                <div className="font-mono text-xs">Auto-tuned</div>
                <div className="text-[10px] text-[color:var(--muted-foreground)]">4 pipelines</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}