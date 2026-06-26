import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Icon } from "@/components/landing/Icon";

export const Route = createFileRoute("/signin")({
  head: () => ({
    meta: [
      { title: "Sign in — Nexara" },
      {
        name: "description",
        content: "Sign in to your Nexara workspace to orchestrate agents and ship AI faster.",
      },
    ],
  }),
  component: SignIn,
});

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    // Demo only — no backend wired up.
    setTimeout(() => setSubmitting(false), 800);
  }

  return (
    <main className="relative min-h-screen px-4 py-10 sm:py-16">
      <div className="pointer-events-none absolute inset-0 -z-10 grid-bg" />
      <div className="mx-auto flex max-w-md flex-col">
        <Link to="/" className="mb-8 inline-flex items-center gap-2 self-start">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-[var(--forsythia)] text-[var(--noir)]">
            <Icon name="cube-16-solid" className="h-4 w-4" />
          </span>
          <span className="font-mono text-sm font-bold tracking-tight">NEXARA</span>
        </Link>

        <div className="glass-strong animate-rise rounded-3xl p-6 sm:p-8">
          <h1 className="text-2xl font-bold sm:text-3xl">Welcome back</h1>
          <p className="mt-2 text-sm text-[color:var(--muted-foreground)]">
            Sign in to continue to your workspace.
          </p>

          <div className="mt-6 grid gap-2 sm:grid-cols-2">
            <button
              type="button"
              className="btn-ghost w-full text-sm"
              aria-label="Continue with Google"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
                <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.4 29.3 35.5 24 35.5c-6.4 0-11.5-5.1-11.5-11.5S17.6 12.5 24 12.5c2.9 0 5.6 1.1 7.6 2.9l5.7-5.7C33.6 6.2 29 4.5 24 4.5 13.2 4.5 4.5 13.2 4.5 24S13.2 43.5 24 43.5 43.5 34.8 43.5 24c0-1.2-.1-2.3-.4-3.5z" />
                <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16 19 13 24 13c2.9 0 5.6 1.1 7.6 2.9l5.7-5.7C33.6 6.7 29 5 24 5 16.3 5 9.7 9.3 6.3 14.7z" />
                <path fill="#4CAF50" d="M24 43c5 0 9.5-1.9 12.9-5l-6-4.9C29 34.7 26.6 35.5 24 35.5c-5.3 0-9.7-3-11.3-7.4l-6.5 5C9.6 38.7 16.2 43 24 43z" />
                <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.3 4-4.3 5.1l6 4.9c-.4.4 6.5-4.7 6.5-14 0-1.2-.1-2.3-.4-3.5z" />
              </svg>
              Google
            </button>
            <button
              type="button"
              className="btn-ghost w-full text-sm"
              aria-label="Continue with GitHub"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                <path d="M12 2C6.48 2 2 6.58 2 12.21c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.49v-1.7c-2.78.62-3.37-1.36-3.37-1.36-.46-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1.01.07 1.54 1.06 1.54 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.13-4.55-5.04 0-1.11.39-2.02 1.03-2.74-.1-.26-.45-1.3.1-2.72 0 0 .84-.27 2.75 1.05A9.34 9.34 0 0112 6.84c.85 0 1.71.12 2.51.34 1.91-1.32 2.75-1.05 2.75-1.05.55 1.42.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.74 0 3.92-2.33 4.78-4.56 5.03.36.32.68.94.68 1.9v2.82c0 .27.18.59.69.49A10.02 10.02 0 0022 12.21C22 6.58 17.52 2 12 2z" />
              </svg>
              GitHub
            </button>
          </div>

          <div className="my-6 flex items-center gap-3">
            <span className="h-px flex-1 bg-white/10" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--muted-foreground)]">
              or
            </span>
            <span className="h-px flex-1 bg-white/10" />
          </div>

          <form onSubmit={onSubmit} className="flex flex-col gap-4">
            <Field
              label="Email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={setEmail}
              placeholder="you@company.com"
            />
            <Field
              label="Password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={setPassword}
              placeholder="••••••••"
              rightSlot={
                <a href="#" className="text-xs text-[color:var(--muted-foreground)] hover:text-[var(--forsythia)]">
                  Forgot?
                </a>
              }
            />

            <label className="flex items-center gap-2 text-xs text-[color:var(--muted-foreground)]">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-white/20 bg-white/5 accent-[var(--forsythia)]"
              />
              Keep me signed in for 30 days
            </label>

            <button
              type="submit"
              disabled={submitting}
              className="btn-primary mt-2 w-full disabled:opacity-60"
            >
              {submitting ? "Signing in…" : "Sign in"}
              {!submitting && <Icon name="chevron-right" className="h-4 w-4" />}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-[color:var(--muted-foreground)]">
            New to Nexara?{" "}
            <Link to="/" className="text-[var(--forsythia)] hover:underline">
              Create an account
            </Link>
          </p>
        </div>

        <p className="mt-6 text-center text-xs text-[color:var(--muted-foreground)]">
          By signing in you agree to our Terms and Privacy Policy.
        </p>
      </div>
    </main>
  );
}

function Field({
  label,
  type,
  value,
  onChange,
  placeholder,
  autoComplete,
  required,
  rightSlot,
}: {
  label: string;
  type: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
  rightSlot?: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="flex items-center justify-between">
        <span className="font-mono text-xs uppercase tracking-[0.15em] text-[color:var(--muted-foreground)]">
          {label}
        </span>
        {rightSlot}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-[var(--arctic)] outline-none transition-colors duration-150 placeholder:text-white/30 focus:border-[var(--forsythia)]/60 focus:bg-white/10"
      />
    </label>
  );
}