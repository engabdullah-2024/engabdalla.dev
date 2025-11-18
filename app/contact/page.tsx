// app/contact/page.tsx
"use client";

import type { ChangeEvent, ComponentType, FormEvent } from "react";
import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Monitor,
  Code2,
  Palette,
  Server,
  CheckCircle2,
  XCircle,
} from "lucide-react";

// ---- Background assets (encoded / stable) ----
const GRID_DATA_URL =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath d='M32 0H0v32' fill='none' stroke='%23cbd5e1' stroke-width='1'/%3E%3C/svg%3E\")";

const LINEAR_BEAMS =
  "linear-gradient(115deg, rgba(56,189,248,0.08), transparent 45%), linear-gradient(245deg, rgba(99,102,241,0.08), transparent 40%)";

// ---- Motion variants (stable & subtle) ----
const headerIn = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
} as const;

const sectionIn = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, ease: "easeOut" },
} as const;

// ---- Form types ----
type ServiceKind = "Web Design" | "Web Development" | "Graphic Design" | "Web Hosting" | "";
type FormState = {
  name: string;
  email: string;
  service: ServiceKind;
  message: string;
  website?: string; // honeypot
};

type ApiOk = { ok: true; message: string };
type ApiErr = { ok: false; error: string };

// ---------- Safe helpers ----------
function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null;
}

function isApiOk(v: unknown): v is ApiOk {
  return isRecord(v) && v.ok === true && typeof v.message === "string";
}

function isApiErr(v: unknown): v is ApiErr {
  return isRecord(v) && v.ok === false && typeof v.error === "string";
}

async function parseResponse(res: Response): Promise<unknown> {
  const ct = res.headers.get("content-type") || "";
  if (ct.includes("application/json")) {
    try {
      return await res.json();
    } catch {
      // fall through to text if json fails
    }
  }
  try {
    const t = await res.text();
    return t;
  } catch {
    return null;
  }
}

function getErrorMessage(err: unknown): string {
  if (err instanceof Error) return err.message;
  try {
    return String(err);
  } catch {
    return "Unknown error";
  }
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    service: "",
    message: "",
    website: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<null | { ok: boolean; msg: string }>(null);
  const [loading, setLoading] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  // validation
  const validate = useCallback(() => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email.trim())
    ) {
      newErrors.email = "Invalid email address";
    }
    if (!form.service) newErrors.service = "Please select a service";
    if (!form.message.trim()) newErrors.message = "Message cannot be empty";
    if (form.website && form.website.trim().length > 0)
      newErrors.website = "Spam detected";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [form.email, form.message, form.name, form.service, form.website]);

  const handleChange = useCallback(
    (
      e: ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      const { name, value } = e.target;
      setForm((prev) => ({ ...prev, [name]: value }));
    },
    [],
  );

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setStatus(null);
      if (!validate()) return;
      setLoading(true);

      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            service: form.service,
            message: form.message,
            website: form.website, // honeypot
          }),
        });

        const body = await parseResponse(res);

        if (res.ok && isApiOk(body)) {
          setStatus({ ok: true, msg: body.message });
          setForm({
            name: "",
            email: "",
            service: "",
            message: "",
            website: "",
          });
          formRef.current?.reset();
          return;
        }

        if (isApiErr(body)) {
          throw new Error(body.error);
        }

        if (typeof body === "string" && body.trim().length > 0) {
          throw new Error(`HTTP ${res.status}: ${body.slice(0, 200)}`);
        }

        throw new Error(`HTTP ${res.status}`);
      } catch (err: unknown) {
        setStatus({
          ok: false,
          msg:
            getErrorMessage(err) ||
            "Something went wrong sending your message. Please try again.",
        });
      } finally {
        setLoading(false);
      }
    },
    [
      form.email,
      form.message,
      form.name,
      form.service,
      form.website,
      validate,
    ],
  );

  // Wrapper to satisfy `no-misused-promises`
  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      void handleSubmit(e);
    },
    [handleSubmit],
  );

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
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-30 opacity-70 dark:opacity-80"
        style={{ backgroundImage: LINEAR_BEAMS }}
      />
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-0 -z-20 opacity-[0.3] dark:opacity-[0.24]
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
        aria-hidden
        className="pointer-events-none absolute -top-16 left-1/2 -z-10 h-52 w-52 -translate-x-1/2 rounded-full bg-cyan-400/22 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-4rem] right-6 -z-10 h-56 w-56 rounded-full bg-indigo-500/22 blur-3xl"
      />

      <div className="mx-auto w-full max-w-5xl lg:max-w-6xl">
        {/* Header */}
        <motion.div
          initial={headerIn.initial}
          animate={headerIn.animate}
          transition={headerIn.transition}
          className="mb-8 flex flex-col gap-3 text-center sm:mb-10 lg:mb-12 lg:max-w-3xl lg:text-left"
        >
          <span className="inline-flex items-center gap-2 self-center rounded-full border border-border/60 bg-background/70 px-3 py-1 text-[0.7rem] text-muted-foreground backdrop-blur lg:self-start">
            <span className="h-1.5 w-1.5 rounded-full bg-brand shadow-[0_0_0_3px_rgba(59,130,246,0.35)]" />
            <span className="uppercase tracking-[0.18em]">
              Let&apos;s Work Together
            </span>
          </span>

          <h1 className="text-balance text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
            Share your idea, I&apos;ll handle the engineering.
          </h1>
          <p className="text-balance text-xs text-muted-foreground sm:text-sm">
            Whether it&apos;s a SaaS product, a student platform, or a portfolio,
            I focus on clean architecture, great performance, and a smooth UX.
            Tell me what you have in mind.
          </p>
        </motion.div>

        {/* Main content: Info + Form */}
        <motion.section
          initial={sectionIn.initial}
          animate={sectionIn.animate}
          transition={sectionIn.transition}
          className="
            grid gap-8
            lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.15fr)]
            items-start
          "
        >
          {/* LEFT: Info, services, socials */}
          <aside className="space-y-5">
            {/* Contact info card */}
            <div
              className="
                rounded-2xl border border-border/70 bg-background/80 p-4 text-sm
                shadow-sm backdrop-blur-sm sm:p-5
              "
            >
              <h2 className="mb-2 text-sm font-semibold text-foreground">
                How I like to work
              </h2>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li>• Clear requirements, realistic timeline, and open communication.</li>
                <li>• Modern stack: Next.js, TypeScript, Tailwind, Prisma, MongoDB.</li>
                <li>• Focus on shipping stable, maintainable features — not just UI.</li>
              </ul>

              <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                <div className="rounded-xl border border-border/70 bg-background/80 p-2.5">
                  <p className="text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
                    Typical projects
                  </p>
                  <p className="mt-1 font-semibold text-foreground">
                    SaaS · Dashboards · Platforms
                  </p>
                </div>
                <div className="rounded-xl border border-border/70 bg-background/80 p-2.5">
                  <p className="text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
                    Response time
                  </p>
                  <p className="mt-1 font-semibold text-foreground">Within 24–48h</p>
                </div>
              </div>
            </div>

            {/* Services */}
            <div
              className="
                rounded-2xl border border-border/70 bg-background/80 p-4 shadow-sm backdrop-blur-sm sm:p-5
              "
            >
              <h2 className="mb-3 text-sm font-semibold text-foreground">
                Services I offer
              </h2>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                <ServiceCard
                  Icon={Monitor}
                  title="Web Design"
                  desc="Clean, responsive UI with focus on clarity and accessibility."
                />
                <ServiceCard
                  Icon={Code2}
                  title="Web Development"
                  desc="Production-ready Next.js / TypeScript with solid backend."
                />
                <ServiceCard
                  Icon={Palette}
                  title="Graphic Design"
                  desc="Logos and visuals that fit your brand and product."
                />
                <ServiceCard
                  Icon={Server}
                  title="Web Hosting"
                  desc="Fast, reliable deployment and basic monitoring setup."
                />
              </div>
            </div>

            {/* Socials */}
            <div className="rounded-2xl border border-border/70 bg-background/80 p-4 shadow-sm backdrop-blur-sm sm:p-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Connect
              </p>
              <div className="flex flex-wrap items-center gap-5 sm:gap-6">
                <a
                  href="mailto:your.email@example.com"
                  aria-label="Send Email"
                  className="flex items-center gap-1.5 text-xs text-muted-foreground transition hover:text-blue-600"
                >
                  <Mail size={20} />
                  <span>Email</span>
                </a>
                <a
                  href="https://github.com/engabdullah-2024"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="flex items-center gap-1.5 text-xs text-muted-foreground transition hover:text-foreground"
                >
                  <Github size={20} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/engabdalla"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="flex items-center gap-1.5 text-xs text-muted-foreground transition hover:text-blue-700"
                >
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://twitter.com/engabdalla"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter Profile"
                  className="flex items-center gap-1.5 text-xs text-muted-foreground transition hover:text-sky-500"
                >
                  <Twitter size={20} />
                  <span>Twitter</span>
                </a>
              </div>
            </div>
          </aside>

          {/* RIGHT: Contact form */}
          <section
            aria-label="Contact form"
            className="
              rounded-2xl border border-border/70 bg-background/90 p-4 shadow-sm
              backdrop-blur-sm sm:p-5 lg:p-6
            "
          >
            <h2 className="mb-3 text-sm font-semibold text-foreground">
              Start a project or say hi
            </h2>

            <form ref={formRef} onSubmit={onSubmit} className="space-y-4" noValidate>
              {/* name + email */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1 block text-xs font-semibold">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    required
                  />
                  {errors.name ? (
                    <p id="name-error" className="mt-1 text-[0.75rem] text-red-600">
                      {errors.name}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="email" className="mb-1 block text-xs font-semibold">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    required
                  />
                  {errors.email ? (
                    <p id="email-error" className="mt-1 text-[0.75rem] text-red-600">
                      {errors.email}
                    </p>
                  ) : null}
                </div>
              </div>

              {/* service */}
              <div>
                <label htmlFor="service" className="mb-1 block text-xs font-semibold">
                  Service
                </label>
                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="
                    w-full rounded-md border border-input bg-background px-3 py-2 text-xs
                    ring-offset-background
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
                  "
                  aria-invalid={Boolean(errors.service)}
                  aria-describedby={errors.service ? "service-error" : undefined}
                  required
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="Web Design">Web Design</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Graphic Design">Graphic Design</option>
                  <option value="Web Hosting">Web Hosting</option>
                </select>
                {errors.service ? (
                  <p id="service-error" className="mt-1 text-[0.75rem] text-red-600">
                    {errors.service}
                  </p>
                ) : null}
              </div>

              {/* message */}
              <div>
                <label htmlFor="message" className="mb-1 block text-xs font-semibold">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, goals, and timeline..."
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  rows={6}
                  required
                />
                {errors.message ? (
                  <p id="message-error" className="mt-1 text-[0.75rem] text-red-600">
                    {errors.message}
                  </p>
                ) : null}
              </div>

              {/* honeypot */}
              <div className="hidden" aria-hidden>
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  name="website"
                  value={form.website}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
                {errors.website ? (
                  <p className="mt-1 text-sm text-red-600">{errors.website}</p>
                ) : null}
              </div>

              {/* submit */}
              <Button type="submit" size="sm" className="w-full" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </Button>

              {/* live region */}
              {status ? (
                <div
                  className={`mt-2 flex items-center gap-2 rounded-md border px-3 py-2 text-xs ${
                    status.ok
                      ? "border-green-200 text-green-700"
                      : "border-red-200 text-red-700"
                  }`}
                  role="status"
                  aria-live="polite"
                >
                  {status.ok ? <CheckCircle2 size={16} /> : <XCircle size={16} />}
                  <span>{status.msg}</span>
                </div>
              ) : null}
            </form>
          </section>
        </motion.section>
      </div>
    </main>
  );
}

// Reusable service card (design only, no movement)
function ServiceCard({
  Icon,
  title,
  desc,
}: {
  Icon: ComponentType<{ size?: number; className?: string }>;
  title: string;
  desc: string;
}) {
  return (
    <article
      className="
        flex gap-3 rounded-xl border border-border/70 bg-background/80 p-3 text-xs
        shadow-sm backdrop-blur-sm
        transition-colors
        hover:border-brand/60 hover:bg-background
      "
    >
      <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-lg border border-border/70 bg-background/80">
        <Icon size={18} className="text-muted-foreground" />
      </span>
      <div className="space-y-1">
        <h3 className="text-[0.8rem] font-semibold text-foreground">{title}</h3>
        <p className="text-[0.75rem] text-muted-foreground">{desc}</p>
      </div>
    </article>
  );
}
