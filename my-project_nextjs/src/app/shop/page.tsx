// src/app/shop/page.tsx

"use client";

import { products } from "@/lib/products";
import Link from "next/link";
import { useState } from "react";

export default function ShopPage() {
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
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Entdecke unsere Produkte ({products.length} Artikel)
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group rounded-2xl border border-slate-200 dark:border-slate-800 
                         bg-white/50 dark:bg-slate-900/50 p-6 hover:shadow-2xl hover:-translate-y-2 
                         transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-48 mb-4 overflow-hidden rounded-xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="space-y-3">
                <div>
                  <h3 className="font-bold text-lg group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                    <Link href={`/shop/${product.id}`} className="hover:underline">
                      {product.name}
                    </Link>
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 capitalize">
                    {product.category}
                  </p>
                </div>

                

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-emerald-600">
                    €{product.price.toFixed(2)}
                  </span>
                  <Link
                    href={`/shop/${product.id}`}
                    className="px-4 py-2 bg-emerald-600 text-white text-sm font-medium 
                               rounded-lg hover:bg-emerald-700 transition-colors"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
