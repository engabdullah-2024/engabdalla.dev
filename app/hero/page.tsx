// app/hero/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type MotionProps } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Sparkles,
  Code2,
  TerminalSquare,
  Globe2,
  BadgeCheck,
  Star,
} from "lucide-react";

// typed helper for Framer Motion props
const fadeUp = (delay = 0): MotionProps => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut", delay },
});

export default function HeroPage() {
  return (
    <TooltipProvider>
      <section className="relative px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        {/* Background layer */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-x-0 -top-40 mx-auto h-72 max-w-4xl rounded-full bg-gradient-to-br from-brand/35 via-emerald-500/10 to-sky-500/20 blur-3xl opacity-70 dark:opacity-80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.3),_transparent_55%)] dark:bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.6),_transparent_55%)]" />
        </div>

        <div className="mx-auto flex max-w-6xl flex-col gap-10 md:gap-12">
          {/* MAIN CARD */}
          <Card className="relative border-border/70 bg-white/90 backdrop-blur-xl dark:bg-slate-900/70 shadow-[0_24px_90px_rgba(15,23,42,0.35)]">
            <CardContent className="p-6 sm:p-8 md:p-10">
              <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:gap-12">
                {/* LEFT: TEXT + ACTIONS */}
                <motion.div
                  initial={{ opacity: 0, x: -26 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="space-y-6"
                >
                  {/* Top meta row */}
                  <motion.div
                    {...fadeUp(0.05)}
                    className="flex flex-wrap items-center gap-3"
                  >
                    <Badge
                      variant="outline"
                      className="gap-2 border-brand/30 bg-brand/5 text-xs font-semibold tracking-[0.18em] uppercase text-brand dark:border-brand/40 dark:bg-brand/10"
                    >
                      <Sparkles className="h-3 w-3" />
                      Eng Abdalla
                    </Badge>

                    <Badge
                      variant="secondary"
                      className="gap-1.5 rounded-full bg-slate-900 text-[0.7rem] font-medium text-slate-100 dark:bg-slate-100 dark:text-slate-900"
                    >
                      <BadgeCheck className="h-3 w-3" />
                      Full-Stack Software Engineer
                    </Badge>
                  </motion.div>

                  {/* Headline */}
                  <motion.h1
                    {...fadeUp(0.15)}
                    className="font-display text-[clamp(2.25rem,3.6vw,3.4rem)] font-extrabold leading-[1.03] tracking-tight text-slate-900 dark:text-slate-50"
                  >
                    Building world-class products
                    <br />
                    for{" "}
                    <span className="bg-gradient-to-r from-brand to-emerald-500 bg-clip-text text-transparent">
                      ambitious teams
                    </span>
                    .
                  </motion.h1>

                  {/* Sub copy */}
                  <motion.p
                    {...fadeUp(0.25)}
                    className="max-w-[56ch] text-[0.98rem] leading-relaxed text-slate-600 dark:text-slate-300"
                  >
                    I&apos;m Eng Abdalla, a detail-oriented full-stack engineer
                    crafting production-grade web apps with{" "}
                    <span className="font-semibold">Next.js, TypeScript</span>,
                    and modern backend stacks. I care deeply about clean
                    architecture, performance, and shipping features that real
                    users love.
                  </motion.p>

                  {/* CTA + Social row */}
                  <motion.div
                    {...fadeUp(0.35)}
                    className="flex flex-wrap items-center gap-4 pt-1"
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <Button
                        asChild
                        size="lg"
                        className="group rounded-xl bg-brand px-6 text-sm font-semibold text-slate-950 shadow-md shadow-brand/40 transition hover:bg-brand/90 dark:text-slate-950"
                      >
                        <Link href="/projects">
                          View selected work
                          <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        </Link>
                      </Button>

                      <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="rounded-xl border-slate-200 bg-white/60 text-sm font-medium text-slate-900 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:bg-slate-800"
                      >
                        <Link href="/contact">Book a collaboration call</Link>
                      </Button>
                    </div>

                    <Separator
                      orientation="vertical"
                      className="hidden h-8 md:inline-flex"
                    />

                    {/* Social icons */}
                    <div className="flex items-center gap-2 md:gap-3">
                      <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                        Social
                      </span>

                      <div className="flex items-center gap-1.5">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Link
                              href="https://github.com/engabdullah-2024"
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:bg-slate-800"
                              aria-label="Open GitHub profile"
                            >
                              <Github className="h-4 w-4" />
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent side="top">
                            <p>GitHub — engineering in public</p>
                          </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Link
                              href="https://www.linkedin.com"
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:bg-slate-800"
                              aria-label="Open LinkedIn profile"
                            >
                              <Linkedin className="h-4 w-4" />
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent side="top">
                            <p>LinkedIn — professional profile</p>
                          </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Link
                              href="/contact"
                              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:bg-slate-800"
                              aria-label="Contact via email"
                            >
                              <Mail className="h-4 w-4" />
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent side="top">
                            <p>Let&apos;s talk about your next build</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </div>
                  </motion.div>

                  {/* Trusted-by row (now honest & generic) */}
                  <motion.div
                    {...fadeUp(0.45)}
                    className="mt-3 flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400"
                  >
                    <span className="flex items-center gap-1.5">
                      <Star className="h-3.5 w-3.5 text-amber-400" />
                      <span className="font-medium">
                        Shipping real projects for students & local teams
                      </span>
                    </span>
                    <span className="hidden h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-600 sm:inline-block" />
                    <span className="flex flex-wrap items-center gap-1 sm:gap-2">
                      <span>Focused on</span>
                      <span className="font-semibold text-slate-700 dark:text-slate-200">
                        modern web apps
                      </span>
                      <span>and</span>
                      <span className="font-semibold text-slate-700 dark:text-slate-200">
                        clean engineering practices
                      </span>
                    </span>
                  </motion.div>
                </motion.div>

                {/* RIGHT: SNAPSHOT / STACK CARD + PORTRAIT */}
                <motion.div
                  initial={{ opacity: 0, x: 26 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
                  className="relative flex flex-col gap-4 md:gap-5"
                >
                  {/* Portrait */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.25 }}
                    className="relative w-full overflow-hidden rounded-2xl border border-slate-200/70 bg-gradient-to-br from-slate-50 via-white to-slate-100 shadow-[0_18px_60px_rgba(15,23,42,0.25)] dark:border-slate-700/70 dark:from-slate-900 dark:via-slate-900/80 dark:to-slate-900"
                  >
                    <div className="pointer-events-none absolute inset-x-10 top-6 z-0 h-32 rounded-3xl bg-gradient-to-br from-brand/40 via-emerald-500/25 to-sky-500/15 blur-2xl opacity-70" />
                    <Image
                      src="/eng.jpg"
                      alt="Eng Abdalla — Full-Stack Software Engineer"
                      width={640}
                      height={820}
                      priority
                      className="relative z-10 h-auto w-full object-cover md:aspect-[4/5]"
                      sizes="(min-width: 1024px) 420px, (min-width: 768px) 380px, 90vw"
                    />
                  </motion.div>

                  {/* Snapshot / Tabs card */}
                  <Card className="border-slate-200/70 bg-slate-50/80 shadow-sm dark:border-slate-700/70 dark:bg-slate-900/80">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <CardTitle className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-slate-100">
                            <Code2 className="h-4 w-4 text-brand" />
                            Developer snapshot
                          </CardTitle>
                          <CardDescription className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                            A quick look at how I work and what I ship.
                          </CardDescription>
                        </div>

                        <Badge
                          variant="outline"
                          className="flex items-center gap-1 rounded-full border-emerald-400/60 bg-emerald-50 text-[0.65rem] font-semibold text-emerald-700 dark:border-emerald-500/70 dark:bg-emerald-500/10 dark:text-emerald-300"
                        >
                          <TerminalSquare className="h-3 w-3" />
                          In build mode
                        </Badge>
                      </div>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <Tabs defaultValue="stack" className="mt-1">
                        <TabsList className="grid grid-cols-3 rounded-xl bg-slate-100/80 p-0.5 text-[0.72rem] dark:bg-slate-900/70">
                          <TabsTrigger
                            value="stack"
                            className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-slate-900 dark:data-[state=active]:bg-slate-800 dark:data-[state=active]:text-slate-50"
                          >
                            Stack
                          </TabsTrigger>
                          <TabsTrigger
                            value="impact"
                            className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-slate-900 dark:data-[state=active]:bg-slate-800 dark:data-[state=active]:text-slate-50"
                          >
                            Impact
                          </TabsTrigger>
                          <TabsTrigger
                            value="focus"
                            className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-slate-900 dark:data-[state=active]:bg-slate-800 dark:data-[state=active]:text-slate-50"
                          >
                            Focus
                          </TabsTrigger>
                        </TabsList>

                        {/* Stack tab */}
                        <TabsContent value="stack" className="mt-3 space-y-3">
                          <div className="flex flex-wrap gap-1.5">
                            {[
                              "Next.js 15",
                              "TypeScript",
                              "Tailwind CSS",
                              "Prisma ORM",
                              "MongoDB",
                              "Node.js",
                            ].map((item) => (
                              <Badge
                                key={item}
                                variant="outline"
                                className="rounded-full border-slate-200 bg-white/80 px-2.5 py-0.5 text-[0.68rem] font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                              >
                                {item}
                              </Badge>
                            ))}
                          </div>
                          <p className="text-[0.76rem] leading-relaxed text-slate-500 dark:text-slate-400">
                            I design systems with clean boundaries, sensible
                            domain layers, and DX-friendly tooling, following
                            modern engineering best practices used in serious
                            production apps.
                          </p>
                        </TabsContent>

                        {/* Impact tab */}
                        <TabsContent value="impact" className="mt-3 space-y-3">
                          <div className="grid grid-cols-3 gap-2 text-center text-[0.72rem]">
                            <div className="rounded-lg border border-emerald-100 bg-emerald-50/80 p-2 dark:border-emerald-500/40 dark:bg-emerald-500/10">
                              <div className="text-[0.65rem] uppercase tracking-[0.16em] text-emerald-600 dark:text-emerald-300">
                                Projects
                              </div>
                              <div className="text-base font-semibold text-emerald-800 dark:text-emerald-200">
                                10+
                              </div>
                            </div>
                            <div className="rounded-lg border border-slate-200 bg-white/80 p-2 dark:border-slate-600 dark:bg-slate-900">
                              <div className="text-[0.65rem] uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                                Uptime
                              </div>
                              <div className="text-base font-semibold text-slate-900 dark:text-slate-100">
                                99.9%
                              </div>
                            </div>
                            <div className="rounded-lg border border-slate-200 bg-white/80 p-2 dark:border-slate-600 dark:bg-slate-900">
                              <div className="text-[0.65rem] uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                                Perf score
                              </div>
                              <div className="text-base font-semibold text-slate-900 dark:text-slate-100">
                                90+
                              </div>
                            </div>
                          </div>
                          <p className="text-[0.76rem] leading-relaxed text-slate-500 dark:text-slate-400">
                            From internal tools to student platforms, I focus on
                            reliability, clarity, and measurable outcomes — not
                            just fancy UIs.
                          </p>
                        </TabsContent>

                        {/* Focus tab */}
                        <TabsContent value="focus" className="mt-3 space-y-3">
                          <ul className="space-y-1.5 text-[0.76rem] text-slate-600 dark:text-slate-300">
                            <li className="flex items-start gap-2">
                              <Globe2 className="mt-0.5 h-3.5 w-3.5 text-brand" />
                              <span>
                                Building SaaS products for education & local
                                businesses in{" "}
                                <span className="font-semibold">
                                  Somalia & Africa
                                </span>
                                .
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Code2 className="mt-0.5 h-3.5 w-3.5 text-brand" />
                              <span>
                                Investing in clean, maintainable codebases that
                                future teams can extend confidently.
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Sparkles className="mt-0.5 h-3.5 w-3.5 text-brand" />
                              <span>
                                Learning in public and sharing knowledge with
                                other developers.
                              </span>
                            </li>
                          </ul>
                        </TabsContent>
                      </Tabs>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </CardContent>
          </Card>

          {/* BOTTOM STRIP: quick stats / availability */}
          <motion.div
            {...fadeUp(0.55)}
            className="mx-auto flex w-full max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between"
          >
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 dark:text-slate-300">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-[0.7rem] font-medium shadow-sm dark:border-slate-700 dark:bg-slate-900/80">
                <TerminalSquare className="h-3.5 w-3.5 text-brand" />
                Open to{" "}
                <span className="font-semibold">
                  remote & hybrid opportunities
                </span>
              </span>
              <span className="hidden h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-600 md:inline-block" />
              <span>
                Ideal roles:{" "}
                <span className="font-semibold">
                  Full-Stack · Frontend · Backend Engineer
                </span>
              </span>
            </div>

            <div className="flex items-center gap-2 text-[0.72rem] text-slate-500 dark:text-slate-400">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_6px_rgba(52,211,153,0.35)]" />
              <span>Currently building education & SaaS tools in Somalia.</span>
            </div>
          </motion.div>
        </div>

        {/* anchor for scroll-to-bottom behavior */}
        <div id="end" className="mt-12" />
      </section>
    </TooltipProvider>
  );
}
