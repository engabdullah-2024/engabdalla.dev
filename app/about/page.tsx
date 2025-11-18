// app/about/page.tsx
"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type MotionProps } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiJavascript,
} from "react-icons/si";

type Tech = { icon: ReactNode; name: string };

// Reusable motion preset
const fadeUp = (delay = 0): MotionProps => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut", delay },
});

export default function AboutPage() {
  const techIcons: Tech[] = [
    { icon: <FaReact className="text-sky-500" />, name: "React" },
    { icon: <SiNextdotjs className="text-neutral-900 dark:text-white" />, name: "Next.js" },
    { icon: <SiTypescript className="text-blue-600" />, name: "TypeScript" },
    { icon: <SiJavascript className="text-yellow-500" />, name: "JavaScript" },
    { icon: <SiTailwindcss className="text-cyan-500" />, name: "Tailwind CSS" },
    { icon: <FaNodeJs className="text-green-600" />, name: "Node.js" },
    { icon: <SiExpress className="text-neutral-700 dark:text-neutral-300" />, name: "Express.js" },
    { icon: <SiMongodb className="text-emerald-500" />, name: "MongoDB" },
    { icon: <FaGithub className="text-neutral-900 dark:text-white" />, name: "GitHub" },
    { icon: <FaGitAlt className="text-red-500" />, name: "Git" },
    { icon: <FaHtml5 className="text-orange-600" />, name: "HTML5" },
    { icon: <FaCss3Alt className="text-blue-600" />, name: "CSS3" },
  ];

  return (
    <main
      className="
        relative isolate min-h-[100svh]
        px-4 py-10 sm:px-6 md:px-8 lg:px-10 md:py-14
        bg-gradient-to-b from-slate-50 via-white to-slate-100
        dark:from-slate-950 dark:via-slate-950 dark:to-slate-900
      "
    >
      {/* Soft background beams */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 opacity-70 dark:opacity-80"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(56,189,248,0.10), transparent 50%), linear-gradient(240deg, rgba(129,140,248,0.10), transparent 45%)",
        }}
      />
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-0 -z-10 opacity-[0.28] dark:opacity-[0.22]
          [mask-image:radial-gradient(ellipse_110%_75%_at_50%_18%,black,transparent)]
          [-webkit-mask-image:radial-gradient(ellipse_110%_75%_at_50%_18%,black,transparent)]
          bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.25),transparent_55%)]
        "
      />

      <div className="mx-auto w-full max-w-6xl space-y-10 md:space-y-12">
        {/* === HERO ABOUT CARD === */}
        <section
          className="
            rounded-3xl border border-border/70 bg-background/80
            shadow-[0_18px_70px_rgba(15,23,42,0.18)]
            backdrop-blur-xl
            px-5 py-6 sm:px-7 sm:py-8 md:px-10 md:py-10
          "
        >
          <div className="grid gap-8 md:gap-10 lg:gap-12 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.95fr)] items-center">
            {/* LEFT: Bio + CTA */}
            <motion.div
              {...fadeUp(0.05)}
              className="space-y-5 sm:space-y-6"
            >
              <div className="space-y-2">
                <motion.span
                  {...fadeUp(0.08)}
                  className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-muted-foreground"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand shadow-[0_0_0_4px_rgba(56,189,248,0.45)]" />
                  Eng Abdalla • Full-Stack Developer
                </motion.span>

                <motion.h1
                  {...fadeUp(0.14)}
                  className="
                    text-balance text-[2rem] sm:text-[2.3rem] md:text-[2.6rem] lg:text-[3rem]
                    font-extrabold tracking-tight text-foreground
                  "
                >
                  Building modern web products for real users.
                </motion.h1>
              </div>

              <motion.p
                {...fadeUp(0.2)}
                className="max-w-[60ch] text-sm sm:text-[0.95rem] md:text-[1rem] leading-relaxed text-muted-foreground"
              >
                I&apos;m <strong>Eng Abdalla</strong>, a product-minded full-stack engineer who
                enjoys shipping clean, reliable experiences using{" "}
                <strong>Next.js</strong>, <strong>TypeScript</strong>,{" "}
                <strong>Tailwind CSS</strong>, <strong>Node.js</strong>,{" "}
                <strong>Express</strong>, and <strong>MongoDB</strong>. I care about
                performance, DX, and UI that feels calm but powerful.
              </motion.p>

              {/* Mini stats row */}
              <motion.div
                {...fadeUp(0.26)}
                className="grid gap-3 text-xs sm:text-[0.8rem] text-muted-foreground sm:grid-cols-3"
              >
                <StatItem label="Focus" value="Full-stack TypeScript & Next.js" />
                <StatItem label="Style" value="Clean, minimal, Som-inspired" />
                <StatItem label="Goal" value="Ship useful tools for Somalia & beyond" />
              </motion.div>

              {/* CTAs */}
              <motion.div
                {...fadeUp(0.32)}
                className="flex flex-wrap items-center gap-3 pt-1"
              >
                <Button
                  asChild
                  size="sm"
                  className="rounded-xl px-5 sm:px-6 text-sm font-semibold bg-brand hover:bg-brand/90 text-black dark:text-white"
                >
                  <Link href="/projects">View Projects</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="rounded-xl border-border/80 text-xs sm:text-sm text-foreground hover:bg-muted/60"
                >
                  <Link href="/abdalla.pdf" target="_blank" rel="noreferrer">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* RIGHT: Portrait / profile card */}
            <motion.div
              {...fadeUp(0.16)}
              className="relative mx-auto w-full max-w-[360px] sm:max-w-[400px] md:max-w-[420px]"
            >
              <div
                aria-hidden
                className="
                  pointer-events-none absolute inset-0 -z-10
                  bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.45),transparent_65%)]
                  opacity-70
                  blur-2xl
                "
              />
              <div
                className="
                  overflow-hidden rounded-3xl border border-border/70 bg-background
                  shadow-[0_18px_70px_rgba(15,23,42,0.35)]
                "
              >
                <Image
                  src="/eng.jpg"
                  alt="Eng Abdalla"
                  width={640}
                  height={820}
                  priority
                  className="h-auto w-full object-cover md:aspect-[4/5]"
                  sizes="(min-width: 1024px) 420px, (min-width: 768px) 380px, 85vw"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* === TECH STACK GRID === */}
        <section className="mx-auto max-w-6xl">
          <motion.div
            {...fadeUp(0.05)}
            className="mb-5 flex flex-col items-center gap-2 text-center sm:mb-6"
          >
            <h2 className="text-lg sm:text-xl font-semibold text-foreground">
              Tech I use every day
            </h2>
            <p className="max-w-xl text-xs sm:text-sm text-muted-foreground">
              A lean, modern stack centered around TypeScript and React — optimised for building
              production-ready apps, not just tutorials.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp(0.1)}
            className="
              grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6
              gap-3 sm:gap-4 md:gap-5
            "
          >
            {techIcons.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.3, delay: i * 0.02 }}
                className="
                  flex flex-col items-center justify-center
                  rounded-xl border border-border/70 bg-background/80
                  p-3 sm:p-4 text-center shadow-sm
                  backdrop-blur
                  transition-colors
                  hover:border-brand/60
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60
                "
                tabIndex={0}
                aria-label={tech.name}
              >
                <div className="text-3xl sm:text-[2.2rem]">{tech.icon}</div>
                <span className="mt-1.5 text-[0.75rem] sm:text-xs text-muted-foreground">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </main>
  );
}

function StatItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border/60 bg-background/70 px-3 py-2">
      <p className="text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </p>
      <p className="mt-1 text-[0.8rem] font-medium text-foreground">{value}</p>
    </div>
  );
}
