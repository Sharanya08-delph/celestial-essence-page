import { SectionHeader } from "./Features";

const testimonials = [
  {
    quote:
      "Nexara replaced four internal tools. Our agents went from prototype to production in a single sprint.",
    name: "Aarav Mehta",
    role: "Head of AI, Helix Labs",
    rating: 5,
    company: "HELIX",
  },
  {
    quote:
      "The observability is unreal — we finally know what every token costs and why.",
    name: "Sofia Müller",
    role: "Platform Lead, Orbit",
    rating: 5,
    company: "ORBIT",
  },
  {
    quote:
      "Built for teams that take AI seriously. The UI alone is worth the switch.",
    name: "Daniel Park",
    role: "CTO, Lumen",
    rating: 4,
    company: "LUMEN",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`h-4 w-4 ${i < rating ? "text-[var(--forsythia)]" : "text-white/15"}`}
          fill="currentColor"
          aria-hidden
        >
          <path d="M10 1.5l2.7 5.47 6.04.88-4.37 4.26 1.03 6.01L10 15.27l-5.4 2.85 1.03-6.01L1.26 7.85l6.04-.88L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="relative px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Testimonials"
          title="Loved by teams shipping real AI."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="glass flex flex-col justify-between rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <div>
                <Stars rating={t.rating} />
                <blockquote className="mt-4 text-[15px] leading-relaxed text-[var(--arctic)]">
                  “{t.quote}”
                </blockquote>
              </div>
              <figcaption className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                <div>
                  <div className="font-mono text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-[color:var(--muted-foreground)]">
                    {t.role}
                  </div>
                </div>
                <span
                  aria-label={`${t.company} logo`}
                  className="rounded-md border border-white/10 px-2.5 py-1 font-mono text-[10px] font-bold tracking-[0.2em] text-[var(--mint)]"
                >
                  {t.company}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}