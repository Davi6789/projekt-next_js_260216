// src/app/shop/[id]/page.tsx

"use client";

import { products } from "@/lib/products";
import Link from "next/link";
import Image from "next/image";

export default function ProductPage({ params }: { params: { id: string } }) {
  const productId = parseInt(params.id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex items-center justify-center">
        <div className="text-center p-12">
          <h1 className="text-3xl font-bold mb-4">Produkt nicht gefunden</h1>
          <Link href="/shop" className="text-emerald-600 hover:underline inline-flex items-center gap-2">
            ← Zur Shop‑Übersicht
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <header className="border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <h1 className="text-xl font-semibold">
            <Link href="/shop" className="hover:text-emerald-400">← Shop</Link>
          </h1>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bild */}
          <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <span className="inline-block bg-emerald-100 dark:bg-emerald-900/50 
                               text-emerald-800 dark:text-emerald-200 px-4 py-2 rounded-full 
                               text-sm font-semibold mb-4">
                {product.category}
              </span>
              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
              <p className="text-3xl font-bold text-emerald-600 mb-6">
                €{product.price.toFixed(2)}
              </p>
            </div>

            <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              {product.description}
            </p>

            <div className="flex gap-4 pt-8 border-t border-slate-200 dark:border-slate-800">
              <Link
                href="/shop"
                className="flex-1 bg-emerald-600 text-white py-4 px-8 text-lg font-semibold 
                           rounded-2xl hover:bg-emerald-700 text-center transition-all"
              >
                In den Warenkorb
              </Link>
              <Link
                href="/shop"
                className="px-8 py-4 border border-slate-300 dark:border-slate-700 
                           rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
              >
                Zurück zum Shop
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
