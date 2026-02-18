// src/app/about/page.tsx (Server Component)

export default function AboutPage() {
  return (
    <main className="min-h-screenbg-whitebg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-4xl font-bold mb-6">Über dieses Projekt</h1>

        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-semibold mb-4">Was habe ich gebaut?</h2>
          <p className="mb-6 text-lg">
            Eine moderne To-Do App mit Next.js (App Router), Bun als Package Manager und Tailwind CSS v4.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-800">
              <h3 className="font-semibold text-emerald-400 mb-2">Features</h3>
              <ul className="space-y-1 text-sm text-slate-300">
                <li>• Hinzufügen / Löschen von Tasks</li>
                <li>• Erledigt markieren</li>
                <li>• Filter: Alle, Offen, Erledigt</li>
              </ul>
            </div>

            <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-800">
              <h3 className="font-semibold text-emerald-400 mb-2">Tech Stack</h3>
              <ul className="space-y-1 text-sm text-slate-300">
                <li>• Next.js App Router</li>
                <li>• Bun (schneller als npm)</li>
                <li>• Tailwind CSS v4</li>
                <li>• TypeScript</li>
              </ul>
            </div>

            <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-800">
              <h3 className="font-semibold text-emerald-400 mb-2">Lernziele</h3>
              <ul className="space-y-1 text-sm text-slate-300">
                <li>• Client vs Server Components</li>
                <li>• useState & Event Handler</li>
                <li>• Routing im App Router</li>
              </ul>
            </div>
          </div>

          <p className="mb-6">
            Mein DCI-Projekt in 4 Tagen. Code auf GitHub: [https://github.com/Davi6789/projekt-next_js_260216].
          </p>
        </div>
      </div>
    </main>
  );
}
