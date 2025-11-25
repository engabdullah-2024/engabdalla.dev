"use client";

import { motion } from "framer-motion";
import { skills } from "../data/skills";

// ---- Background assets ----
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
  const frontendSkills = skills.filter((s) => s.category === "frontend");
  const backendSkills = skills.filter((s) => s.category === "backend");

  return (
    <main
      className="
        relative isolate min-h-[100svh] overflow-hidden
        px-4 py-12 sm:px-6 lg:px-8 lg:py-14
        bg-gradient-to-b from-slate-50 via-white to-slate-100
        dark:from-slate-950 dark:via-slate-950 dark:to-slate-900
      "
    >
      {/* Background layers */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-30 opacity-70 dark:opacity-80"
        style={{ backgroundImage: LINEAR_BEAMS }}
      />

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

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 left-1/2 -z-10 h-52 w-52 -translate-x-1/2 rounded-full bg-cyan-400/22 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-4rem] right-6 -z-10 h-56 w-56 rounded-full bg-indigo-500/22 blur-3xl"
      />

      <div className="mx-auto w-full max-w-6xl">
        {/* Page Header */}
        <motion.header
          initial={headerIn.initial}
          animate={headerIn.animate}
          transition={headerIn.transition}
          className="mb-12 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-3 py-1 text-[0.7rem] text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-brand shadow-[0_0_0_3px_rgba(59,130,246,0.35)]" />
            <span className="uppercase tracking-[0.18em]">
              Skills Overview
            </span>
          </span>

          <h1 className="mt-3 text-balance text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
            Frontend & Backend Skills
          </h1>

          <p className="mx-auto mt-2 max-w-2xl text-balance text-xs sm:text-sm text-muted-foreground">
            A modern tech stack combining powerful frontend UI engineering with strong backend foundations.
          </p>
        </motion.header>

        {/* Two Column Layout + divider */}
        <div className="relative">
          {/* 🔥 Modern long neon line divider */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none hidden lg:block
              absolute inset-y-0 left-1/2 -translate-x-1/2
              w-[2px]
            "
          >
            {/* Long glowing gradient line */}
            <div className="
              h-full w-[2px]
              bg-gradient-to-b
              from-transparent
              via-cyan-400/80
              to-transparent
              shadow-[0_0_25px_rgba(56,189,248,0.45)]
            " />

            {/* Strong center glow */}
            <div className="
              absolute top-1/2 left-1/2
              h-5 w-5
              -translate-x-1/2 -translate-y-1/2
              rounded-full
              bg-cyan-400/70
              blur-xl
              opacity-90
              shadow-[0_0_45px_rgba(56,189,248,0.9)]
            " />

            {/* Sharp inner dot */}
            <div className="
              absolute top-1/2 left-1/2
              h-2 w-2
              -translate-x-1/2 -translate-y-1/2
              rounded-full
              bg-cyan-300
              shadow-[0_0_20px_rgba(56,189,248,0.9)]
            " />
          </div>

          <div
            className="
              grid grid-cols-1 lg:grid-cols-2 gap-10
              items-start
            "
          >
            {/* === FRONTEND === */}
            <motion.section
              initial={gridIn.initial}
              animate={gridIn.animate}
              transition={gridIn.transition}
            >
              <h2 className="mb-4 text-lg font-semibold text-foreground tracking-tight">
                🟦 Frontend Skills
              </h2>

              <div
                className="
                  grid gap-4
                  grid-cols-2 sm:grid-cols-3
                "
              >
                {frontendSkills.map(({ name, Icon, color }) => (
                  <div
                    key={name}
                    className="
                      group flex flex-col items-center rounded-xl
                      border border-border/70 bg-background/80 p-3.5 text-center
                      shadow-sm backdrop-blur-sm
                      transition-colors
                      hover:border-brand/50 hover:bg-background
                    "
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted/60">
                      <Icon className={`h-7 w-7 ${color}`} />
                    </div>
                    <span className="mt-2 text-[0.78rem] font-medium text-foreground">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* === BACKEND === */}
            <motion.section
              initial={gridIn.initial}
              animate={gridIn.animate}
              transition={gridIn.transition}
            >
              <h2 className="mb-4 text-lg font-semibold text-foreground tracking-tight">
                🟩 Backend Skills
              </h2>

              <div
                className="
                  grid gap-4
                  grid-cols-2 sm:grid-cols-3
                "
              >
                {backendSkills.map(({ name, Icon, color }) => (
                  <div
                    key={name}
                    className="
                      group flex flex-col items-center rounded-xl
                      border border-border/70 bg-background/80 p-3.5 text-center
                      shadow-sm backdrop-blur-sm
                      transition-colors
                      hover:border-brand/50 hover:bg-background
                    "
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted/60">
                      <Icon className={`h-7 w-7 ${color}`} />
                    </div>
                    <span className="mt-2 text-[0.78rem] font-medium text-foreground">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </main>
  );
}
