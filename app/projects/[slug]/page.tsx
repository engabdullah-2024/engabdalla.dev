"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion, type MotionProps } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { projects, type Project } from "../../data/projects";

const GRID_DATA_URL =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath d='M32 0H0v32' fill='none' stroke='%23cbd5e1' stroke-width='1'/%3E%3C/svg%3E\")";

const LINEAR_BEAMS =
  "linear-gradient(135deg, rgba(56,189,248,0.10), transparent 45%), linear-gradient(220deg, rgba(129,140,248,0.10), transparent 40%)";

const fadeInUp = (delay = 0): MotionProps => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut", delay },
});

// ✅ Rename this to avoid conflict with Next's generated PageProps
type ProjectDetailPageProps = {
  params: {
    slug: string;
  };
};

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = (projects as Project[]).find(
    (p) => p.slug === params.slug,
  );

  if (!project) {
    notFound();
  }

  const { title, description, tech, liveLink, githubLink, image } = project;

  return (
    <main className="relative isolate min-h-[100svh] overflow-hidden px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      {/* Background layers (same design) */}
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

      <div className="mx-auto w-full max-w-4xl space-y-8">
        {/* Back link */}
        <motion.div {...fadeInUp(0)}>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to projects
          </Link>
        </motion.div>

        {/* Header */}
        <motion.header
          {...fadeInUp(0.05)}
          className="space-y-3 text-left sm:space-y-4"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-brand shadow-[0_0_0_3px_rgba(59,130,246,0.35)]" />
            <span className="uppercase tracking-[0.18em] text-[0.7rem]">
              Project Detail
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="text-balance text-2xl font-extrabold tracking-tight text-neutral-950 dark:text-white sm:text-3xl">
              {title}
            </h1>
            <p className="max-w-2xl text-sm text-neutral-600 dark:text-white/70 sm:text-[0.95rem]">
              {description}
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3">
            {liveLink && (
              <Link
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-xs font-medium text-black dark:text-white shadow-sm hover:bg-brand/90"
              >
                View Live
                <ExternalLink className="h-3.5 w-3.5" />
              </Link>
            )}

            {githubLink && (
              <Link
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/90 px-4 py-2 text-xs font-medium text-neutral-900 hover:bg-neutral-900 hover:text-white dark:text-white"
              >
                View Code
                <Github className="h-3.5 w-3.5" />
              </Link>
            )}
          </div>
        </motion.header>

        {/* Content card */}
        <motion.section
          {...fadeInUp(0.1)}
          className="overflow-hidden rounded-xl border border-border/70 bg-background/90 shadow-sm backdrop-blur"
        >
          {/* Image */}
          <div className="relative h-56 w-full overflow-hidden sm:h-64">
            <Image
              src={image}
              alt={`${title} screenshot`}
              fill
              sizes="(max-width: 640px) 100vw, 768px"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/95 via-background/60 to-transparent" />
          </div>

          {/* Text content */}
          <div className="space-y-6 px-5 pb-6 pt-4 sm:px-6 sm:pb-7 sm:pt-5">
            {/* Tech stack */}
            <div className="space-y-2">
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Tech stack
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border/70 bg-background px-2.5 py-1 text-[0.7rem] font-medium text-neutral-700 dark:text-white/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* About / details */}
            <div className="space-y-2">
              <h2 className="text-sm font-semibold text-neutral-900 dark:text-white">
                About this project
              </h2>
              <p className="text-[0.85rem] leading-relaxed text-neutral-700 dark:text-white/80">
                {description}
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
