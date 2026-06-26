import { useEffect, useState } from "react";

type IconName =
  | "arrow-path"
  | "arrow-trending-up"
  | "chart-pie"
  | "chevron-down"
  | "chevron-left"
  | "chevron-right"
  | "chevron-up"
  | "chevron-up-solid"
  | "cog-8-tooth"
  | "cube-16-solid"
  | "link"
  | "link-solid"
  | "search"
  | "x-mark";

const cache = new Map<string, string>();

export function Icon({
  name,
  className = "h-5 w-5",
  "aria-label": ariaLabel,
}: {
  name: IconName;
  className?: string;
  "aria-label"?: string;
}) {
  const [svg, setSvg] = useState<string | null>(cache.get(name) ?? null);
  useEffect(() => {
    if (cache.has(name)) return;
    let alive = true;
    fetch(`/svgs/${name}.svg`)
      .then((r) => r.text())
      .then((t) => {
        cache.set(name, t);
        if (alive) setSvg(t);
      })
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, [name]);
  return (
    <span
      role={ariaLabel ? "img" : undefined}
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : true}
      className={`inline-flex items-center justify-center [&_svg]:h-full [&_svg]:w-full ${className}`}
      dangerouslySetInnerHTML={svg ? { __html: svg } : undefined}
    />
  );
}