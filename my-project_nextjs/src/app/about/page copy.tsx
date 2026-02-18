// src/app/about/page.tsx

export default function AboutPage() {
  return (
    // Wir entfernen die festen Hintergrundfarben, da diese aus dem Layout kommen
    <div className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">Über dieses Projekt</h1>

      <div className="max-w-none">
        <h2 className="text-2xl font-semibold mb-4">Was habe ich gebaut?</h2>
        <p className="mb-6 text-lg text-slate-600 dark:text-slate-300">
          Eine moderne To-Do App mit Next.js (App Router), Bun als Package Manager und Tailwind CSS v4.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-slate-100 dark:bg-slate-900/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-800">
            <h3 className="font-semibold text-emerald-500 mb-2">Features</h3>
            <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-300">
              <li>• Hinzufügen / Löschen</li>
              <li>• Erledigt markieren</li>
              <li>• Filter-Funktionen</li>
            </ul>
          </div>

          <div className="bg-slate-100 dark:bg-slate-900/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-800">
            <h3 className="font-semibold text-emerald-500 mb-2">Tech Stack</h3>
            <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-300">
              <li>• Next.js App Router</li>
              <li>• Bun Runtime</li>
              <li>• Tailwind CSS v4</li>
              <li>• TypeScript</li>
            </ul>
          </div>

          <div className="bg-slate-200 dark:bg-slate-900/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-800">
            <h3 className="font-semibold text-emerald-500 mb-2">Lernziele</h3>
            <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-300">
              <li>• Client vs Server</li>
              <li>• State Management</li>
              <li>• Routing Basics</li>
            </ul>
          </div>
        </div>

        <p className="mb-6 dark:text-slate-400">
          Mein DCI-Projekt in 4 Tagen. Code auf GitHub: 
          <a 
            href="https://github.com/Davi6789/projekt-next_js_260216" 
            target="_blank" 
            className="text-emerald-500 hover:underline ml-1"
          >
            projekt-next_js_260216
          </a>
        </p>
      </div>
    </div>
  );
}