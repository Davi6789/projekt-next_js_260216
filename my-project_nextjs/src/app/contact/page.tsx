// src/app/contact/page.tsx

"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // ← DEINE EmailJS KEYS HIER EINFÜGEN!
  const SERVICE_ID = "dein_service_id";
  const TEMPLATE_ID = "dein_template_id";
  const PUBLIC_KEY = "dein_public_key";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError(""); // Error clearen
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY);
      setSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setError("Versand fehlgeschlagen. Bitte versuche es erneut.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-slate-950 dark:to-slate-900">
        <div className="mx-auto max-w-2xl px-6 py-24 text-center">
          <div className="w-24 h-24 mx-auto mb-8 bg-emerald-500 rounded-3xl flex items-center justify-center">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold mb-6 text-slate-900 dark:text-slate-100">
            Nachricht versendet!
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
            Vielen Dank {formData.name}! Ich melde mich bald bei dir.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-3 bg-emerald-600 text-white px-8 py-4 rounded-2xl 
                       font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Zurück zur Startseite
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <header className="border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 backdrop-blur">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-3">
          {/* <h1 className="text-xl font-semibold">
            <Link href="/" className="hover:text-emerald-400">← Zurück</Link>
          </h1> */}
        </div>
      </header>

      <section className="mx-auto max-w-2xl px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
            Lass uns reden!
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Hast du Fragen zu meinen Projekten oder eine Zusammenarbeit?
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
              Dein Name *
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-4 rounded-2xl border-2 border-slate-200 dark:border-slate-700 
                         bg-white/50 dark:bg-slate-900/30 backdrop-blur-sm 
                         focus:outline-none focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 
                         transition-all duration-300 text-lg placeholder-slate-500 dark:placeholder-slate-400"
              placeholder="Max Mustermann"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
              Deine Email *
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-4 rounded-2xl border-2 border-slate-200 dark:border-slate-700 
                         bg-white/50 dark:bg-slate-900/30 backdrop-blur-sm 
                         focus:outline-none focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 
                         transition-all duration-300 text-lg placeholder-slate-500 dark:placeholder-slate-400"
              placeholder="max@example.com"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
              Betreff 
            </label>
            <input
              type="text"
              name="subject"
              /* required */
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-4 rounded-2xl border-2 border-slate-200 dark:border-slate-700 
                         bg-white/50 dark:bg-slate-900/30 backdrop-blur-sm 
                         focus:outline-none focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 
                         transition-all duration-300 text-lg placeholder-slate-500 dark:placeholder-slate-400"
              placeholder="z.B. Projektanfrage"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
              Deine Nachricht *
            </label>
            <textarea
              name="message"
              rows={6}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-4 rounded-2xl border-2 border-slate-200 dark:border-slate-700 
                         bg-white/50 dark:bg-slate-900/30 backdrop-blur-sm resize-vertical 
                         focus:outline-none focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 
                         transition-all duration-300 text-lg placeholder-slate-500 dark:placeholder-slate-400"
              placeholder="Hi! Ich bin interessiert an..."
            />
          </div>

          {error && (
            <div className="p-4 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-2xl text-red-800 dark:text-red-200">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 
                       dark:from-emerald-600 dark:to-emerald-700 text-white py-6 px-8 rounded-3xl 
                       font-bold text-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 
                       transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="flex items-center gap-3">
                <svg className="w-6 h-6 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Sende...
              </span>
            ) : (
              "Nachricht senden →"
            )}
          </button>
        </form>
      </section>
    </main>
  );
}
