import { useEffect, useState } from "react";
import { Icon } from "./Icon";

type IconName = React.ComponentProps<typeof Icon>["name"];

const features: Array<{
  id: number;
  title: string;
  description: string;
  icon: IconName;
  span: string;
}> = [
  {
    id: 1,
    title: "Agent Orchestration",
    description:
      "Compose multi-step agents with memory, tools, and guardrails — visually or in code.",
    icon: "cube-16-solid",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    title: "Realtime Analytics",
    description: "Latency, cost, and quality observed per token.",
    icon: "chart-pie",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: 3,
    title: "Self-Tuning Pipelines",
    description: "Continuous evals close the loop automatically.",
    icon: "arrow-path",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: 4,
    title: "Native Integrations",
    description:
      "One-click connectors for your stack — warehouses, vector DBs, SaaS apps.",
    icon: "link-solid",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    id: 5,
    title: "Smart Search",
    description: "Semantic + lexical over every doc your team owns.",
    icon: "search",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: 6,
    title: "Enterprise Controls",
    description: "SSO, RBAC, audit trails, and regional residency.",
    icon: "cog-8-tooth",
    span: "md:col-span-1 md:row-span-1",
  },
];

/** Single source of truth for the active feature; preserved across breakpoints. */
export function Features() {
  const [activeId, setActiveId] = useState<number>(1);

  // No layout-thrashing: same `activeId` drives both bento + accordion.
  // Resizing between desktop and mobile keeps the same item open.

  return (
    <section id="features" className="relative px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Features"
          title="Everything your team needs to ship AI."
          description="A unified surface for building, deploying, observing, and improving AI products."
        />

        {/* DESKTOP BENTO */}
        <div className="mt-12 hidden grid-cols-1 gap-4 md:grid md:grid-cols-3 md:auto-rows-[180px]">
          {features.map((f) => (
            <BentoCard
              key={f.id}
              feature={f}
              active={activeId === f.id}
              onActivate={() => setActiveId(f.id)}
            />
          ))}
        </div>

        {/* MOBILE ACCORDION */}
        <div className="mt-10 flex flex-col gap-3 md:hidden">
          {features.map((f) => (
            <AccordionItem
              key={f.id}
              feature={f}
              open={activeId === f.id}
              onToggle={() =>
                setActiveId((cur) => (cur === f.id ? -1 : f.id))
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function BentoCard({
  feature,
  active,
  onActivate,
}: {
  feature: (typeof features)[number];
  active: boolean;
  onActivate: () => void;
}) {
  return (
    <button
      type="button"
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      className={`glass group relative overflow-hidden rounded-3xl p-6 text-left transition-all duration-300 ease-out ${feature.span} ${
        active
          ? "ring-1 ring-[var(--forsythia)]/60 -translate-y-1"
          : "hover:-translate-y-0.5"
      }`}
      aria-pressed={active}
    >
      <div className="flex items-center gap-3">
        <span
          className={`grid h-10 w-10 place-items-center rounded-xl transition-colors duration-300 ${
            active
              ? "bg-[var(--forsythia)] text-[var(--noir)]"
              : "bg-white/5 text-[var(--mint)]"
          }`}
        >
          <Icon name={feature.icon} className="h-5 w-5" />
        </span>
        <h3 className="font-mono text-lg font-semibold">{feature.title}</h3>
      </div>
      <p className="mt-3 max-w-md text-sm text-[color:var(--muted-foreground)]">
        {feature.description}
      </p>
      <div
        className={`pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 ${
          active ? "opacity-100" : "group-hover:opacity-60"
        }`}
        style={{
          background:
            "radial-gradient(400px 200px at 80% 0%, rgba(255,200,1,0.18), transparent 60%)",
        }}
      />
    </button>
  );
}

function AccordionItem({
  feature,
  open,
  onToggle,
}: {
  feature: (typeof features)[number];
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className={`glass overflow-hidden rounded-2xl transition-all duration-300 ${open ? "ring-1 ring-[var(--forsythia)]/50" : ""}`}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left"
      >
        <span className="flex items-center gap-3 min-w-0">
          <span
            className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl transition-colors duration-200 ${
              open ? "bg-[var(--forsythia)] text-[var(--noir)]" : "bg-white/5 text-[var(--mint)]"
            }`}
          >
            <Icon name={feature.icon} className="h-4 w-4" />
          </span>
          <span className="truncate font-mono text-base font-semibold">
            {feature.title}
          </span>
        </span>
        <Icon
          name="chevron-down"
          className={`h-4 w-4 shrink-0 text-[color:var(--muted-foreground)] transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-400 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="px-4 pb-4 text-sm text-[color:var(--muted-foreground)]">
            {feature.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--forsythia)]">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">{title}</h2>
      {description && (
        <p className="mt-4 text-base text-[color:var(--muted-foreground)]">
          {description}
        </p>
      )}
    </div>
  );
}

// Silence unused-import warnings for environments that strip React import.
export const __keepEffect = useEffect;