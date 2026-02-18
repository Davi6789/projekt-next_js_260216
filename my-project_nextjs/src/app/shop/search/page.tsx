// src/app/shop/page.tsx

"use client";

import { products } from "@/lib/products";
import Link from "next/link";
import { useState } from "react";


export default function ShopPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [sortBy, setSortBy] = useState("name"); // "name", "price-low", "price-high"

  // Alle Kategorien extrahieren
  const categories = ["all", ...new Set(products.map((p) => p.category))];

  // Filter + Search + Sort
  const filteredProducts = products
    .filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        categoryFilter === "all" || product.category === categoryFilter;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      return a.name.localeCompare(b.name);
    });

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <header className="border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <h1 className="text-xl font-semibold">
            <Link href="/" className="hover:text-emerald-400">← Home</Link>
          </h1>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Shop</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
            {filteredProducts.length} von {products.length} Produkten
          </p>

          {/* Filter‑Toolbar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 p-6 bg-slate-50/50 dark:bg-slate-900/30 rounded-2xl border border-slate-200/50 dark:border-slate-800/50">
            {/* Search */}
            <div className="relative">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Produkte suchen..."
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 
                           bg-white/80 dark:bg-slate-900/50 backdrop-blur-sm 
                           focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent 
                           transition-all duration-200"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 
                         bg-white/80 dark:bg-slate-900/50 backdrop-blur-sm 
                         focus:outline-none focus:ring-2 focus:ring-emerald-500 
                         text-sm font-medium"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === "all" ? "Alle Kategorien" : cat}
                </option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 
                         bg-white/80 dark:bg-slate-900/50 backdrop-blur-sm 
                         focus:outline-none focus:ring-2 focus:ring-emerald-500 
                         text-sm font-medium"
            >
              <option value="name">A-Z sortieren</option>
              <option value="price-low">Preis ↑</option>
              <option value="price-high">Preis ↓</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <svg className="w-16 h-16 mx-auto mb-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <h3 className="text-2xl font-bold mb-2 text-slate-600 dark:text-slate-400">Keine Produkte gefunden</h3>
            <p className="text-slate-500 dark:text-slate-500">Versuche andere Suchbegriffe oder Filter</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group ..."> {/* dein bisheriger Card‑Code */}
                {/* ... Card wie vorher */}
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
