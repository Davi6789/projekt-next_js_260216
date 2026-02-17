// src/app/components/Header.tsx

"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Header() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !resolvedTheme) return null;   // ← !Tránh cấp nước

  return (
    <header className="border-b border-slate-900/50 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md supports-[backdrop-filter:blur(20px)]:bg-white/80 supports-[backdrop-filter:blur(20px)]:dark:bg-slate-900/80">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-2xl font-bold bg-linear-to-r from-gray-900 to-slate-700 bg-clip-text text-transparent dark:from-slate-100 dark:to-slate-300 hover:scale-105 transition-all duration-300"
        >
          Projekt: To-Do App
        </Link>

        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link
            href="/"
            className="hover:text-emerald-500 transition-colors"
          >
            🏠 Home
          </Link>
          <Link
            href="/about"
            className="hover:text-emerald-400 transition-colors"
          >
            Über
          </Link>
          <Link
            href="/tasks"
            className="hover:text-emerald-400 transition-colors"
          >
            Tasks
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="p-1.5 rounded-lg ring-1 ring-slate-700/20 hover:ring-emerald-500/50 transition-all"
            title="Dark/Light Mode"
          >
            {resolvedTheme === "dark" ? "☀️" : "🌙"}
          </button>

          <p className="text-xs text-slate-400 hidden sm:block">
            Next.js 16 · Bun · TailwindCss V4
          </p>
        </div>
      </div>
    </header>
  );
}
