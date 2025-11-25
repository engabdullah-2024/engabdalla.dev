"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type MotionProps } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data/projects";
import type { Project } from "../data/projects"; // use shared type

const GRID_DATA_URL =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath d='M32 0H0v32' fill='none' stroke='%23cbd5e1' stroke-width='1'/%3E%3C/svg%3E\")";

const LINEAR_BEAMS =
  "linear-gradient(135deg, rgba(56,189,248,0.10), transparent 45%), linear-gradient(220deg, rgba(129,140,248,0.10), transparent 40%)";

const fadeInUp = (delay = 0): MotionProps => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut", delay },
});

export default function ProjectsPage() {
  const data = projects as Project[];

  return (
    <main className="relative isolate min-h-[100svh] overflow-hidden px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      {/* Background layers (subtle, fixed) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-30 opacity-70 dark:opacity-80"
        style={{ backgroundImage: LINEAR_BEAMS }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 opacity-[0.25] dark:opacity-[0.2] [mask-image:radial-gradient(ellipse_110%_75%_at_50%_15%,black,transparent)] [-webkit-mask-image:radial-gradient(ellipse_110%_75%_at_50%_15%,black,transparent)]"
        style={{
          backgroundImage: GRID_DATA_URL,
          backgroundSize: "32px 32px",
          backgroundPosition: "center",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-48 w-48 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-5rem] right-8 -z-10 h-56 w-56 rounded-full bg-indigo-500/20 blur-3xl"
      />

      <div className="mx-auto w-full max-w-5xl">
        {/* Header */}
        <motion.header
          {...fadeInUp(0)}
          className="mb-8 space-y-4 text-center sm:mb-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-brand shadow-[0_0_0_3px_rgba(59,130,246,0.35)]" />
            <span className="uppercase tracking-[0.18em] text-[0.7rem]">
              Selected Work
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="text-balance text-2xl font-extrabold tracking-tight text-neutral-950 dark:text-white sm:text-3xl lg:text-[1.9rem]">
              Production-ready projects
              <span className="block bg-gradient-to-r from-brand via-sky-500 to-emerald-400 bg-clip-text text-transparent">
                built with modern stacks
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-balance text-sm text-neutral-600 dark:text-white/70 sm:text-[0.95rem]">
              A curated set of apps focusing on clean architecture, performance,
              and real user value.
            </p>
          </div>
        </motion.header>

        {/* Projects Grid */}
        <section
          aria-label="Projects"
          className="
            grid gap-5
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {data.map(
            ({ slug, title, description, tech, liveLink, githubLink, image }) => (
              <motion.article
                key={slug}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="
                  group relative flex flex-col overflow-hidden
                  rounded-xl border border-border/70 bg-background/90
                  shadow-sm backdrop-blur
                  transition-shadow duration-200
                  hover:shadow-lg
                  focus-within:outline-none focus-within:ring-2 focus-within:ring-brand/50 focus-within:ring-offset-2 focus-within:ring-offset-background
                "
                tabIndex={-1}
              >
                {/* Image */}
                <Link href={`/projects/${slug}`} className="relative h-40 w-full overflow-hidden sm:h-44 lg:h-40">
                  <Image
                    src={image}
                    alt={`${title} screenshot`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    priority={false}
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
                </Link>

                {/* Content */}
                <div className="flex flex-1 flex-col px-4 pb-4 pt-3 sm:px-4 sm:pb-4 sm:pt-3">
                  <Link href={`/projects/${slug}`}>
                    <h2 className="line-clamp-2 text-sm font-semibold text-neutral-900 dark:text-white group-hover:underline">
                      {title}
                    </h2>
                  </Link>

                  <p className="mt-1 line-clamp-3 text-[0.78rem] text-neutral-600 dark:text-white/75">
                    {description}
                  </p>

                  {/* Tech badges */}
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {tech.slice(0, 3).map((t) => (
                      <span
                        key={`${slug}-${t}`}
                        className="
                          rounded-full border border-border/70 bg-background/80
                          px-2 py-0.5 text-[0.68rem] font-medium text-neutral-600
                          dark:text-white/75
                        "
                      >
                        {t}
                      </span>
                    ))}
                    {tech.length > 3 ? (
                      <span className="rounded-full bg-muted/70 px-2 py-0.5 text-[0.68rem] text-muted-foreground">
                        +{tech.length - 3}
                      </span>
                    ) : null}
                  </div>

                  {/* Actions */}
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Button
                      asChild
                      size="sm"
                      variant="default"
                      className="
                        gap-1 bg-brand text-[0.7rem] font-medium
                        hover:bg-brand/90
                      "
                    >
                      <Link href={`/projects/${slug}`}>Full info</Link>
                    </Button>

                    {liveLink ? (
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="
                          gap-1 border-border/80 bg-background/90 text-[0.7rem] font-medium
                          hover:border-brand/60 hover:bg-brand/10 hover:text-brand
                        "
                      >
                        <Link
                          href={liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live
                          <ExternalLink className="h-3.5 w-3.5" />
                        </Link>
                      </Button>
                    ) : null}

                    {githubLink ? (
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="
                          gap-1 border-border/80 bg-background/90 text-[0.7rem] font-medium
                          hover:border-neutral-500 hover:bg-neutral-900 hover:text-neutral-50
                          dark:hover:border-neutral-300
                        "
                      >
                        <Link
                          href={githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Code
                          <Github className="h-3.5 w-3.5" />
                        </Link>
                      </Button>
                    ) : null}
                  </div>
                </div>
              </motion.article>
            )
          )}
        </section>
      </div>
    </main>
  );
}
