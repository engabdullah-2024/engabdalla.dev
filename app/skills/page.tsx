"use client";

import { motion } from "framer-motion";
import { skills } from "../data/skills";

// ---- Background assets (encoded / stable) ----
const GRID_DATA_URL =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath d='M32 0H0v32' fill='none' stroke='%23cbd5e1' stroke-width='1'/%3E%3C/svg%3E\")";

const LINEAR_BEAMS =
  "linear-gradient(115deg, rgba(56,189,248,0.08), transparent 45%), linear-gradient(245deg, rgba(99,102,241,0.08), transparent 40%)";

// ---- Motion variants ----
const headerIn = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
} as const;

const gridIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { delay: 0.15, duration: 0.5, ease: "easeOut" },
} as const;

export default function SkillsPage() {
  return (
    <main
      className="
        relative isolate min-h-[100svh] overflow-hidden
        px-4 py-12 sm:px-6 lg:px-8 lg:py-14
        bg-gradient-to-b from-slate-50 via-white to-slate-100
        dark:from-slate-950 dark:via-slate-950 dark:to-slate-900
      "
    >
      {/* LAYER 1: linear beams */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-30 opacity-70 dark:opacity-80"
        style={{ backgroundImage: LINEAR_BEAMS }}
      />

      {/* LAYER 2: SVG grid (masked center) */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 -z-20 opacity-[0.3] dark:opacity-[0.23]
          [mask-image:radial-gradient(ellipse_110%_75%_at_50%_18%,black,transparent)]
          [-webkit-mask-image:radial-gradient(ellipse_110%_75%_at_50%_18%,black,transparent)]
        "
        style={{
          backgroundImage: GRID_DATA_URL,
          backgroundSize: "32px 32px",
          backgroundPosition: "center",
        }}
      />

      {/* LAYER 3: blurred color orbs (kept inside view + overflow-hidden) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 left-1/2 -z-10 h-52 w-52 -translate-x-1/2 rounded-full bg-cyan-400/22 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-4rem] right-6 -z-10 h-56 w-56 rounded-full bg-indigo-500/22 blur-3xl"
      />

      <div className="mx-auto w-full max-w-5xl">
        {/* Header */}
        <motion.header
          initial={headerIn.initial}
          animate={headerIn.animate}
          transition={headerIn.transition}
          className="mb-8 text-center sm:mb-10"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-3 py-1 text-[0.7rem] text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-brand shadow-[0_0_0_3px_rgba(59,130,246,0.35)]" />
            <span className="uppercase tracking-[0.18em]">
              Stack &amp; Tooling
            </span>
          </span>

          <h1 className="mt-3 text-balance text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
            My Skills &amp; Tools
          </h1>
          <p className="mx-auto mt-2 max-w-2xl text-balance text-xs text-muted-foreground sm:text-sm">
            Technologies I use to build modern, scalable web applications — from
            frontend experience to backend systems.
          </p>
        </motion.header>

        {/* Skills Grid */}
        <motion.section
          initial={gridIn.initial}
          animate={gridIn.animate}
          transition={gridIn.transition}
          aria-label="Skills"
          className="
            grid gap-4
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-5
          "
        >
          {skills.map(({ name, Icon, color }) => (
            <div
              key={name}
              className="
                group flex flex-col items-center rounded-xl
                border border-border/70 bg-background/80 p-3.5 text-center
                shadow-sm backdrop-blur-sm
                transition-colors
                hover:border-brand/50 hover:bg-background
                focus-within:outline-none focus-within:ring-2 focus-within:ring-brand/50 focus-within:ring-offset-2 focus-within:ring-offset-background
              "
              tabIndex={0}
              aria-label={name}
            >
              {/* Icon wrapper for consistent sizing */}
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted/60">
                <Icon className={`h-7 w-7 ${color}`} aria-hidden="true" />
              </div>
              <span className="mt-2 text-[0.78rem] font-medium text-foreground">
                {name}
              </span>
            </div>
          ))}
        </motion.section>
      </div>
    </main>
  );
}
