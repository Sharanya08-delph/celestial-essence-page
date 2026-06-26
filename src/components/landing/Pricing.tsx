import { memo, useState } from "react";
import { Icon } from "./Icon";
import { SectionHeader } from "./Features";

type Currency = "INR" | "USD" | "EUR";
type Cycle = "monthly" | "annual";

const pricingMatrix = {
  Starter: { monthly: { INR: 999, USD: 19, EUR: 18 } },
  Pro: { monthly: { INR: 2999, USD: 49, EUR: 46 } },
  Enterprise: { monthly: { INR: 9999, USD: 129, EUR: 119 } },
} as const;

type Plan = keyof typeof pricingMatrix;

const planMeta: Record<
  Plan,
  { tagline: string; features: string[]; cta: string; highlight?: boolean }
> = {
  Starter: {
    tagline: "For builders kicking the tires.",
    cta: "Start free",
    features: [
      "5 agents",
      "10k tasks / month",
      "Community support",
      "Basic analytics",
    ],
  },
  Pro: {
    tagline: "For teams shipping AI products.",
    cta: "Start Pro trial",
    highlight: true,
    features: [
      "Unlimited agents",
      "1M tasks / month",
      "Priority support",
      "Advanced analytics & evals",
      "Custom integrations",
    ],
  },
  Enterprise: {
    tagline: "Compliance, scale, and control.",
    cta: "Talk to sales",
    features: [
      "Unlimited everything",
      "SSO, SCIM, RBAC",
      "Dedicated SRE",
      "Regional data residency",
      "Custom SLAs",
    ],
  },
};

const currencySymbol: Record<Currency, string> = {
  INR: "₹",
  USD: "$",
  EUR: "€",
};

function computePrice(plan: Plan, currency: Currency, cycle: Cycle) {
  const base = pricingMatrix[plan].monthly[currency];
  if (cycle === "monthly") return base;
  // 20% discount, billed monthly equivalent for annual.
  return Math.round(base * 0.8);
}

export function Pricing() {
  const [currency, setCurrency] = useState<Currency>("USD");
  const [cycle, setCycle] = useState<Cycle>("monthly");

  return (
    <section id="pricing" className="relative px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Pricing"
          title="Simple pricing. Serious leverage."
          description="Switch currency and billing cycle — annual saves 20%."
        />

        <Controls
          currency={currency}
          cycle={cycle}
          onCurrency={setCurrency}
          onCycle={setCycle}
        />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {(Object.keys(pricingMatrix) as Plan[]).map((plan) => (
            <PlanCard
              key={plan}
              plan={plan}
              currency={currency}
              cycle={cycle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const Controls = memo(function Controls({
  currency,
  cycle,
  onCurrency,
  onCycle,
}: {
  currency: Currency;
  cycle: Cycle;
  onCurrency: (c: Currency) => void;
  onCycle: (c: Cycle) => void;
}) {
  return (
    <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
      <div className="glass inline-flex rounded-full p-1 text-sm">
        {(["monthly", "annual"] as Cycle[]).map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => onCycle(c)}
            aria-pressed={cycle === c}
            className={`rounded-full px-4 py-1.5 capitalize transition-colors duration-200 ${
              cycle === c
                ? "bg-[var(--forsythia)] text-[var(--noir)]"
                : "text-[color:var(--muted-foreground)] hover:text-[var(--arctic)]"
            }`}
          >
            {c}
            {c === "annual" && (
              <span className="ml-2 rounded-full bg-black/15 px-1.5 py-0.5 text-[10px] font-semibold">
                -20%
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="glass inline-flex rounded-full p-1 text-sm">
        {(["INR", "USD", "EUR"] as Currency[]).map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => onCurrency(c)}
            aria-pressed={currency === c}
            className={`rounded-full px-3 py-1.5 font-mono transition-colors duration-200 ${
              currency === c
                ? "bg-white/10 text-[var(--arctic)]"
                : "text-[color:var(--muted-foreground)] hover:text-[var(--arctic)]"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
});

const PlanCard = memo(function PlanCard({
  plan,
  currency,
  cycle,
}: {
  plan: Plan;
  currency: Currency;
  cycle: Cycle;
}) {
  const meta = planMeta[plan];
  const price = computePrice(plan, currency, cycle);
  const sym = currencySymbol[currency];

  return (
    <div
      className={`glass relative flex flex-col rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1 ${
        meta.highlight ? "ring-1 ring-[var(--forsythia)]/60" : ""
      }`}
    >
      {meta.highlight && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--forsythia)] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--noir)]">
          Most popular
        </span>
      )}
      <h3 className="font-mono text-xl font-bold">{plan}</h3>
      <p className="mt-1 text-sm text-[color:var(--muted-foreground)]">
        {meta.tagline}
      </p>
      <div className="mt-6 flex items-baseline gap-1">
        <span className="font-mono text-4xl font-extrabold">
          {sym}
          {price.toLocaleString()}
        </span>
        <span className="text-sm text-[color:var(--muted-foreground)]">/mo</span>
      </div>
      <p className="mt-1 text-xs text-[color:var(--muted-foreground)]">
        {cycle === "annual" ? "Billed annually" : "Billed monthly"}
      </p>

      <ul className="mt-6 flex-1 space-y-3">
        {meta.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm">
            <Icon
              name="chevron-right"
              className="mt-0.5 h-4 w-4 text-[var(--forsythia)]"
            />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <a
        href="#"
        className={`mt-7 ${meta.highlight ? "btn-primary" : "btn-ghost"} w-full`}
      >
        {meta.cta}
      </a>
    </div>
  );
});