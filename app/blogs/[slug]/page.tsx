// app/blogs/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Clock3,
  User2,
  Github,
  Linkedin,
  Globe,
  Twitter,
} from "lucide-react";
import { blogs } from "../../data/blogs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

type BlogPageProps = {
  // ✅ Next 15: params is a Promise
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  const topicLabel = blog.title.split(":")[0] ?? "Web Dev";

  const tags: string[] = ["Programming", topicLabel.trim(), "Full-Stack"];

  // Normalize blog.content into an array of blocks
  const contentBlocks: string[] = Array.isArray(blog.content)
    ? blog.content
    : blog.content
    ? [blog.content]
    : [blog.des]; // fallback to description

  return (
    <main
      className="
        relative isolate min-h-[100svh] overflow-hidden
        px-4 py-10 sm:px-6 lg:px-8 lg:py-16
        bg-gradient-to-b from-slate-50 via-white to-slate-100
        dark:from-slate-950 dark:via-slate-950 dark:to-slate-900
      "
    >
      {/* Background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),transparent_55%),radial-gradient(circle_at_bottom,_rgba(129,140,248,0.12),transparent_55%)]"
      />

      <div className="mx-auto w-full max-w-4xl">
        {/* Back link */}
        <div className="mb-6">
          <Link
            href="/blogs"
            className="
              inline-flex items-center gap-2 rounded-full border border-border/60
              bg-background/70 px-3 py-1 text-[0.75rem] text-muted-foreground
              backdrop-blur transition hover:border-foreground/40 hover:text-foreground
            "
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to all articles
          </Link>
        </div>

        {/* Article shell */}
        <article
          className="
            overflow-hidden rounded-3xl border border-border/70 bg-background/95
            shadow-[0_22px_70px_rgba(15,23,42,0.35)] backdrop-blur
          "
        >
          {/* Cover image */}
          <div className="relative h-56 w-full sm:h-72">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
          </div>

          {/* Content */}
          <div className="px-4 pb-8 pt-5 sm:px-6 sm:pb-10 sm:pt-6 lg:px-9 lg:pb-12 lg:pt-7">
            {/* Meta + title block */}
            <header className="space-y-4">
              {/* Top chips row (category + tags) */}
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="rounded-full bg-emerald-500/10 text-[0.7rem] font-semibold text-emerald-700 dark:text-emerald-300">
                  Programming Languages
                </Badge>

                {tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="rounded-full border-border/70 bg-muted/60 text-[0.68rem]"
                  >
                    #{tag.replace(/\s+/g, "")}
                  </Badge>
                ))}
              </div>

              <h1 className="text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                {blog.title}
              </h1>

              <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
                {blog.des}
              </p>

              {/* meta row */}
              <div className="flex flex-wrap items-center gap-3 text-[0.8rem] text-muted-foreground">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-muted/60 px-2.5 py-1">
                  <User2 className="h-3.5 w-3.5" />
                  {blog.author}
                </span>
                <span className="hidden h-1 w-1 rounded-full bg-border sm:inline-block" />
                <span className="inline-flex items-center gap-1.5 rounded-full bg-muted/60 px-2.5 py-1">
                  <Clock3 className="h-3.5 w-3.5" />
                  ~5–8 min read
                </span>
              </div>
            </header>

            <Separator className="my-6" />

            {/* Body – only from data/blogs.ts */}
            <section className="prose prose-sm prose-slate dark:prose-invert max-w-none">
              {contentBlocks.map((block, idx) => (
                <p key={idx}>{block}</p>
              ))}
            </section>

            {/* Author card – same modern style */}
            <Separator className="my-8" />

            <section
              aria-label="About the author"
              className="
                mt-6 grid items-center gap-4 rounded-2xl border border-border/70
                bg-muted/40 px-4 py-4 sm:px-5 sm:py-5 md:grid-cols-[auto,1fr]
              "
            >
              <div className="flex items-center justify-center">
                <div className="relative h-20 w-20 overflow-hidden rounded-2xl border border-border/70 bg-background">
                  <Image
                    src="/eng.jpg"
                    alt="Eng Abdalla"
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-base font-semibold text-foreground">
                    Eng Abdalla
                  </p>
                  <span className="rounded-full bg-emerald-500/10 px-2 py-[2px] text-[0.65rem] font-medium text-emerald-700 dark:text-emerald-300">
                    Full-Stack Developer
                  </span>
                </div>
                <p className="text-xs sm:text-[0.8rem] text-muted-foreground">
                  “I love building calm, modern web experiences for Somali
                  students, developers, and businesses — focusing on clean
                  TypeScript, Next.js, and products that actually solve
                  problems.”
                </p>

                <div className="mt-2 flex flex-wrap items-center gap-3 text-[0.8rem] text-muted-foreground">
                  <span>40+ articles • Multiple SaaS side projects</span>
                </div>

                <div className="mt-2 flex flex-wrap items-center gap-3 text-muted-foreground">
                  <Link
                    href="https://github.com/engabdullah-2024"
                    target="_blank"
                    className="inline-flex items-center gap-1 text-xs hover:text-foreground"
                  >
                    <Github className="h-3.5 w-3.5" />
                    GitHub
                  </Link>
                  <Link
                    href="https://linkedin.com/in/engabdalla"
                    target="_blank"
                    className="inline-flex items-center gap-1 text-xs hover:text-foreground"
                  >
                    <Linkedin className="h-3.5 w-3.5" />
                    LinkedIn
                  </Link>
                  <Link
                    href="https://twitter.com/engabdalla"
                    target="_blank"
                    className="inline-flex items-center gap-1 text-xs hover:text-foreground"
                  >
                    <Twitter className="h-3.5 w-3.5" />
                    Twitter
                  </Link>
                  <Link
                    href="https://eng-abdalla-portfolio.vercel.app/"
                    className="inline-flex items-center gap-1 text-xs hover:text-foreground"
                  >
                    <Globe className="h-3.5 w-3.5" />
                    Portfolio
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}
