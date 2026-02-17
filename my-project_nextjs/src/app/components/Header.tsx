// src/app/components/Header.tsx

"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const { setTheme, resolvedTheme } = useTheme();
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Theme hydration fix
  useEffect(() => {
    setMounted(true);
  }, []);

  // Scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!mounted || !resolvedTheme) return null; // ← !Tránh cấp nước

  const linkClass = (href: string) =>
    pathname === href
      ? "text-emerald-500 font-semibold"
      : "hover:text-emerald-400 transition-colors";

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/70 dark:bg-slate-900/70 backdrop-blur-md ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <nav className="mx-auto max-w-4xl px-4 py-3">
        {/* Top row */}
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Projekt: To-Do App
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/" className={linkClass("/")}>
              🏠Home
            </Link>
            <Link href="/about" className={linkClass("/about")}>
              Über
            </Link>
            <Link href="/tasks" className={linkClass("/tasks")}>
              Tasks
            </Link>

            {/* Dark Mode Toggle */}
            <button
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              className="rounded-lg border px-2"
            >
              {resolvedTheme === "dark" ? "☀️" : "🌙"}
            </button>
          </div>

          <p className="text-xs text-slate-400 hidden sm:block">
            Next.js 16 · Bun · TailwindCss V4
          </p>
          {/* Burger */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
            ☰
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="mt-4 flex flex-col gap-3 text-sm md:hidden">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className={linkClass("/")}
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className={linkClass("/about")}
            >
              Über
            </Link>

            <Link
              href="/tasks"
              onClick={() => setOpen(false)}
              className={linkClass("/tasks")}
            >
              Tasks
            </Link>

            <button
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              className="self-start rounded-lg border px-2"
            >
              {resolvedTheme === "dark" ? "☀️" : "🌙"}
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
