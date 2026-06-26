import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Icon } from "@/components/landing/Icon";

export const Route = createFileRoute("/signin")({
  head: () => ({
    meta: [
      { title: "Sign in — Nexara" },
      { name: "description", content: "Sign in to your Nexara workspace." },
    ],
  }),
  component: SignIn,
});

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    // UI-only demo flow.
    setTimeout(() => setSubmitting(false), 900);
  }

  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-10 sm:py-16">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(600px 320px at 50% -10%, rgba(255,200,1,0.18), transparent 60%), radial-gradient(500px 400px at 50% 110%, rgba(17,76,90,0.45), transparent 60%)",
          }}
        />
      </div>

      <div className="mx-auto flex max-w-md flex-col">
        <Link to="/" className="mb-8 inline-flex items-center gap-2 self-start">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-[var(--forsythia)] text-[var(--noir)]">
            <Icon name="cube-16-solid" className="h-4 w-4" />
          </span>
          <span className="font-mono text-sm font-bold tracking-tight">NEXARA</span>
        </Link>

        <div className="glass-strong animate-rise rounded-3xl p-6 sm:p-8">
          <h1 className="text-2xl font-bold sm:text-3xl">
            Welcome <span className="text-gradient">back</span>
          </h1>
          <p className="mt-2 text-sm text-[color:var(--muted-foreground)]">
            Sign in to continue to your workspace.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
            <button type="button" className="btn-ghost w-full text-sm">
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
                <path fill="#EA4335" d="M12 10.2v3.9h5.5c-.2 1.4-1.6 4.1-5.5 4.1-3.3 0-6-2.7-6-6.1s2.7-6.1 6-6.1c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.8 3.5 14.6 2.5 12 2.5 6.8 2.5 2.6 6.7 2.6 12s4.2 9.5 9.4 9.5c5.4 0 9-3.8 9-9.2 0-.6-.1-1.1-.2-1.6H12z" />
              </svg>
              Google
            </button>
            <button type="button" className="btn-ghost w-full text-sm">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                <path d="M16.4 1.5c0 1-.4 2-1.1 2.7-.7.8-1.9 1.4-2.8 1.3-.1-1 .4-2 1-2.6.8-.8 2-1.4 2.9-1.4zM20 17.3c-.5 1.2-.8 1.7-1.5 2.7-1 1.4-2.4 3.1-4.1 3.1-1.6 0-2-1-4.1-1-2.1 0-2.5 1-4.1 1-1.7 0-3-1.6-4-3-2.8-3.9-3.1-8.4-1.4-10.8C2 7.5 4 6.4 5.9 6.4c1.9 0 3.1 1 4.7 1 1.5 0 2.4-1 4.6-1 1.7 0 3.4.9 4.7 2.5-4 2.2-3.4 8 .1 8.4z" />
              </svg>
              Apple
            </button>
          </div>

          <div className="my-6 flex items-center gap-3">
            <span className="h-px flex-1 bg-white/10" />
            <span className="text-xs text-[color:var(--muted-foreground)]">or with email</span>
            <span className="h-px flex-1 bg-white/10" />
          </div>

          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="font-mono text-xs uppercase tracking-[0.15em] text-[color:var(--muted-foreground)]">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-[var(--arctic)] placeholder:text-[color:var(--muted-foreground)] outline-none transition-colors duration-150 focus:border-[var(--forsythia)]/60 focus:bg-white/[0.06]"
              />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="font-mono text-xs uppercase tracking-[0.15em] text-[color:var(--muted-foreground)]">
                  Password
                </label>
                <a href="#" className="text-xs text-[var(--forsythia)] hover:underline">
                  Forgot?
                </a>
              </div>
              <input
                id="password"
                type="password"
                required
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-[var(--arctic)] placeholder:text-[color:var(--muted-foreground)] outline-none transition-colors duration-150 focus:border-[var(--forsythia)]/60 focus:bg-white/[0.06]"
              />
            </div>

            <button type="submit" disabled={submitting} className="btn-primary w-full disabled:opacity-70">
              {submitting ? "Signing in…" : "Sign in"}
              <Icon name="chevron-right" className="h-4 w-4" />
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-[color:var(--muted-foreground)]">
            New to Nexara?{" "}
            <a href="#" className="text-[var(--arctic)] hover:text-[var(--forsythia)]">
              Create an account
            </a>
          </p>
        </div>

        <p className="mt-6 text-center text-xs text-[color:var(--muted-foreground)]">
          By signing in you agree to our{" "}
          <a href="#" className="underline-offset-2 hover:underline">Terms</a> and{" "}
          <a href="#" className="underline-offset-2 hover:underline">Privacy Policy</a>.
        </p>
      </div>
    </main>
  );
}