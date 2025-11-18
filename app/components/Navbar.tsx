"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentType } from "react";
import { Home, User, FolderOpen, Cpu, Mail } from "lucide-react";
import { ModeToggle } from "../components/ModeToggle";

type NavItem = {
  label: string;
  href: string;
  Icon: ComponentType<{ className?: string }>;
};

const NAV_LINKS: NavItem[] = [
  { label: "Home", href: "/", Icon: Home },
  { label: "About", href: "/about", Icon: User },
  { label: "Projects", href: "/projects", Icon: FolderOpen },
  { label: "Skills", href: "/skills", Icon: Cpu },
  { label: "Blogs", href: "/blogs", Icon: Cpu },
  { label: "Contact", href: "/contact", Icon: Mail },
];

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <>
      {/* Skip link for keyboard users */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>

      {/* ===== Desktop Header (sticky) ===== */}
      <header
        className="
          sticky top-0 z-50 w-full
          border-b border-border/60 bg-background/70 backdrop-blur-xl
        "
        role="banner"
      >
        {/* Top accent line */}
        <div
          aria-hidden="true"
          className="pointer-events-none h-0.5 w-full bg-gradient-to-r from-sky-500/40 via-primary/40 to-emerald-400/40"
        />

        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
          {/* Brand */}
          <Link
            href="/"
            aria-label="Go to home"
            prefetch
            className="group flex items-center gap-2 select-none"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10 text-primary shadow-sm shadow-primary/20">
              <span className="text-xs font-bold tracking-tight">EA</span>
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-sm font-semibold tracking-tight">
                Eng <span className="text-primary">Abdalla</span>
              </span>
              <span className="text-[0.7rem] text-muted-foreground">
                Full-Stack Software Engineer
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            className="
              hidden md:flex
              items-center justify-between gap-6
              rounded-full border border-border/60 bg-background/80 px-3 py-1.5
              shadow-[0_10px_40px_rgba(15,23,42,0.12)]
            "
            aria-label="Primary"
          >
            <ul className="flex items-center gap-1.5">
              {NAV_LINKS.map(({ label, href }) => {
                const active = isActive(href);
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      prefetch
                      aria-current={active ? "page" : undefined}
                      className={`
                        relative inline-flex items-center gap-1 rounded-full px-3.5 py-1.5 text-xs font-medium
                        transition
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2
                        ${
                          active
                            ? "text-primary bg-primary/10 shadow-sm shadow-primary/20"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                        }
                      `}
                    >
                      {label}
                      {active && (
                        <span
                          aria-hidden="true"
                          className="absolute inset-0 -z-10 rounded-full bg-primary/10"
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Right controls */}
            <div className="flex items-center gap-2 pl-2">
              <ModeToggle />
            </div>
          </nav>

          {/* Right side on small screens (only theme toggle) */}
          <div className="flex items-center gap-2 md:hidden">
            <ModeToggle />
          </div>
        </div>
      </header>

      {/* ===== Mobile Dock (bottom) ===== */}
      <nav
        className="
          fixed inset-x-0 bottom-0 z-50 md:hidden
          flex items-center justify-center
          pb-[calc(env(safe-area-inset-bottom,0)+0.6rem)]
        "
        aria-label="Primary mobile"
        role="navigation"
      >
        <div
          className="
            mx-auto flex max-w-md flex-1 items-center justify-between gap-1
            rounded-2xl border border-border/70 bg-background/90 px-2.5 py-1.5
            shadow-[0_18px_60px_rgba(15,23,42,0.35)] backdrop-blur-xl
          "
        >
          {NAV_LINKS.map(({ label, href, Icon }) => {
            const active = isActive(href);
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={`
                  group flex flex-1 flex-col items-center justify-center gap-0.5
                  py-0.5 text-[0.7rem] font-medium
                  ${
                    active
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }
                `}
              >
                <span
                  className={`
                    inline-flex h-9 w-9 items-center justify-center rounded-xl border text-[0.75rem]
                    transition
                    ${
                      active
                        ? "border-primary/50 bg-primary/10 shadow-sm shadow-primary/40"
                        : "border-transparent bg-background/60 group-hover:border-border"
                    }
                  `}
                >
                  <Icon className="h-4.5 w-4.5" />
                </span>
                <span className="truncate">{label}</span>
              </Link>
            );
          })}

          {/* Theme toggle – thumb reachable on the right */}
          <div className="ml-1 flex items-center">
            <ModeToggle />
          </div>
        </div>
      </nav>
    </>
  );
}
