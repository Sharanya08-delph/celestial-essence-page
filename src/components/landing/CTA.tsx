import { Icon } from "./Icon";

export function CTA() {
  return (
    <section className="px-4 py-24 md:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="glass-strong relative overflow-hidden rounded-3xl p-10 text-center sm:p-14">
          <div
            className="pointer-events-none absolute inset-0 -z-10 opacity-70"
            style={{
              background:
                "radial-gradient(600px 300px at 50% 0%, rgba(255,200,1,0.22), transparent 60%), radial-gradient(500px 300px at 50% 100%, rgba(17,76,90,0.4), transparent 60%)",
            }}
          />
          <h2 className="text-3xl font-bold sm:text-5xl">
            Ship the AI <span className="text-gradient">your roadmap</span> promised.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-[color:var(--muted-foreground)]">
            Start free. Scale when you're ready. No credit card needed for the
            first 14 days.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="#pricing" className="btn-primary">
              Get started
              <Icon name="chevron-right" className="h-4 w-4" />
            </a>
            <a href="#" className="btn-ghost">
              Book a demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}