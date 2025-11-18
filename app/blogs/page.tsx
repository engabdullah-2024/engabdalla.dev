// app/blogs/page.tsx
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { blogs } from "../data/blogs";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { Clock3, Search, User2 } from "lucide-react";

const GRID_DATA_URL =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath d='M32 0H0v32' fill='none' stroke='%23cbd5e1' stroke-width='1'/%3E%3C/svg%3E\")";

const LINEAR_BEAMS =
  "linear-gradient(115deg, rgba(56,189,248,0.08), transparent 45%), linear-gradient(245deg, rgba(99,102,241,0.08), transparent 40%)";

// Derive a simple category from the title
function getCategory(title: string): string {
  const t = title.toLowerCase();
  if (t.includes("html")) return "HTML & Markup";
  if (t.includes("css") || t.includes("tailwind")) return "CSS & UI";
  if (t.includes("javascript")) return "JavaScript";
  if (t.includes("react")) return "React";
  if (t.includes("next")) return "Next.js";
  if (t.includes("typescript")) return "TypeScript";
  if (t.includes("node")) return "Node.js";
  if (t.includes("express")) return "Express.js";
  if (t.includes("mongo") || t.includes("database")) return "Databases";
  if (t.includes("prisma")) return "Prisma";
  if (t.includes("python")) return "Python";
  return "Web Development";
}

export default function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [query, setQuery] = useState("");

  const categories = useMemo(() => {
    const set = new Set<string>();
    blogs.forEach((b) => set.add(getCategory(b.title)));
    return ["All", ...Array.from(set)];
  }, []);

  const filteredBlogs = useMemo(() => {
    const q = query.toLowerCase().trim();
    return blogs.filter((blog) => {
      const category = getCategory(blog.title);
      const matchesCategory =
        activeCategory === "All" || category === activeCategory;

      const matchesQuery =
        !q ||
        blog.title.toLowerCase().includes(q) ||
        blog.des.toLowerCase().includes(q);

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  return (
    <main
      className="
        relative isolate min-h-[100svh] overflow-hidden
        px-4 py-10 sm:px-6 lg:px-8 lg:py-14
        bg-gradient-to-b from-slate-50 via-white to-slate-100
        dark:from-slate-950 dark:via-slate-950 dark:to-slate-900
      "
    >
      {/* Background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-30 opacity-70 dark:opacity-80"
        style={{ backgroundImage: LINEAR_BEAMS }}
      />
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-0 -z-20 opacity-[0.28] dark:opacity-[0.22]
          [mask-image:radial-gradient(ellipse_110%_75%_at_50%_18%,black,transparent)]
          [-webkit-mask-image:radial-gradient(ellipse_110%_75%_at_50%_18%,black,transparent)]
        "
        style={{
          backgroundImage: GRID_DATA_URL,
          backgroundSize: "32px 32px",
          backgroundPosition: "center",
        }}
      />

      <div className="mx-auto w-full max-w-6xl">
        {/* Top intro text */}
        <header className="mb-8 text-center sm:mb-10">
          <p className="text-[0.8rem] text-muted-foreground sm:text-sm">
            Explore my latest insights, tutorials, and thoughts on modern
            web development, education, and online learning.
          </p>
        </header>

        {/* Search + main category chips */}
        <section className="mb-8 space-y-5">
          {/* Search bar */}
          <div className="mx-auto flex w-full max-w-2xl items-center gap-2 rounded-full border border-border/70 bg-background/80 px-3 py-2 shadow-sm backdrop-blur">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles..."
              className="h-8 border-none bg-transparent px-0 text-xs sm:text-sm focus-visible:ring-0"
            />
          </div>

          {/* Primary categories row (chips) */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`
                    rounded-full border px-3 py-1 text-[0.72rem] sm:text-[0.75rem]
                    transition-all
                    ${
                      isActive
                        ? "border-emerald-500 bg-emerald-500 text-white shadow-sm"
                        : "border-border/70 bg-background/70 text-muted-foreground hover:border-emerald-400 hover:text-foreground"
                    }
                  `}
                >
                  {cat === "All" ? "All" : cat}
                </button>
              );
            })}
          </div>

          {/* Secondary tags row (static like screenshot) */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-[0.68rem]">
            {[
              "#AI",
              "#Frontend",
              "#Backend",
              "#FullStack",
              "#TypeScript",
              "#React",
              "#Nextjs",
              "#Nodejs",
              "#MongoDB",
              "#Python",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border/60 bg-background/70 px-2 py-1 text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* Result count */}
        <div className="mb-4 flex items-center justify-between text-[0.72rem] text-muted-foreground">
          <span>
            Showing{" "}
            <strong className="font-medium text-foreground">
              {filteredBlogs.length}
            </strong>{" "}
            of {blogs.length} posts
          </span>
        </div>

        {/* Blogs grid */}
        <section
          aria-label="Blog posts"
          className="
            grid gap-5
            sm:grid-cols-2
            xl:grid-cols-3
          "
        >
          {filteredBlogs.map((blog) => {
            const category = getCategory(blog.title);
            return (
              <Link
                key={blog.slug}
                href={`/blogs/${blog.slug}`}
                className="group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-3xl"
              >
                <Card
                  className="
                    flex h-full flex-col overflow-hidden cursor-pointer
                    border border-border/70 bg-background/90
                    shadow-sm backdrop-blur-sm
                    transition-all group-hover:-translate-y-1 group-hover:border-emerald-500/70 group-hover:shadow-lg
                  "
                >
                  {/* Image + category chip */}
                  <div className="relative h-40 w-full overflow-hidden sm:h-44">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                      priority={false}
                    />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background via-background/40 to-transparent" />
                    <div className="absolute left-3 top-3">
                      <span className="rounded-full bg-emerald-500/90 px-2 py-0.5 text-[0.65rem] font-semibold text-white shadow">
                        {category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <CardHeader className="pb-2">
                    <h2 className="mt-1 line-clamp-2 text-sm font-semibold text-foreground">
                      {blog.title}
                    </h2>
                  </CardHeader>

                  <CardContent className="flex flex-1 flex-col pb-4 pt-0">
                    <p className="line-clamp-3 text-[0.8rem] text-muted-foreground">
                      {blog.des}
                    </p>

                    {/* Meta + CTA-style pill (visual only) */}
                    <div className="mt-4 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 text-[0.72rem] text-muted-foreground">
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300">
                          <User2 className="h-3.5 w-3.5" />
                        </span>
                        <span className="font-medium text-foreground">
                          {blog.author}
                        </span>
                        <span className="h-1 w-1 rounded-full bg-border" />
                        <span className="inline-flex items-center gap-1">
                          <Clock3 className="h-3 w-3" />
                          2–4 min read
                        </span>
                      </div>

                      <Button
                        size="sm"
                        className="
                          rounded-full px-3 text-[0.72rem]
                          bg-emerald-500 text-white hover:bg-emerald-600
                        "
                      >
                        Read article
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </section>
      </div>
    </main>
  );
}
