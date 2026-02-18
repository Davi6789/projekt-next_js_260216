// src/app/about/page.tsx

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-red-600 to-emerald-500 bg-clip-text text-transparent">
        Über dieses Projekt
      </h1>
      <p className="text-slate-500 dark:text-red-200/60 mb-10">DCI Kurs - 4 Tage Intensiv-Projekt</p>

      <div className="max-w-none">
        <h2 className="text-2xl font-semibold mb-6 dark:text-red-50">Was habe ich gebaut?</h2>
        
        {/* Haupt-Beschreibung */}
        <div className="p-6 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 mb-10">
          <p className="text-lg text-slate-700 dark:text-emerald-50">
            Eine moderne To-Do App mit <span className="font-bold text-emerald-500">Next.js</span>, 
            angetrieben durch die Geschwindigkeit von <span className="font-bold text-red-500">Bun</span>.
          </p>
        </div>

        {/* Die Karten-Sektion */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          
          {/* Karte 1: Features */}
          <div className="group p-6 rounded-2xl bg-white dark:bg-red-950/40 border border-slate-200 dark:border-red-800/50 hover:border-emerald-500 transition-all duration-300">
            <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4 text-emerald-500 font-bold">
              01
            </div>
            <h3 className="font-bold text-slate-900 dark:text-red-50 mb-3">Features</h3>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-red-100/70">
              <li className="flex items-center gap-2"><span>✔</span> Task Management</li>
              <li className="flex items-center gap-2"><span>✔</span> Smart Filtering</li>
              <li className="flex items-center gap-2"><span>✔</span> Dark Mode</li>
            </ul>
          </div>

          {/* Karte 2: Tech Stack */}
          <div className="group p-6 rounded-2xl bg-white dark:bg-red-950/40 border border-slate-200 dark:border-red-800/50 hover:border-emerald-500 transition-all duration-300">
            <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center mb-4 text-red-500 font-bold">
              02
            </div>
            <h3 className="font-bold text-slate-900 dark:text-red-50 mb-3">Tech Stack</h3>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-red-100/70">
              <li>• Next.js 15 (App)</li>
              <li>• Bun Runtime</li>
              <li>• Tailwind v4</li>
            </ul>
          </div>

          {/* Karte 3: Fokus */}
          <div className="group p-6 rounded-2xl bg-white dark:bg-red-950/40 border border-slate-200 dark:border-red-800/50 hover:border-emerald-500 transition-all duration-300">
            <div className="w-10 h-10 bg-slate-500/20 rounded-lg flex items-center justify-center mb-4 text-slate-500 font-bold">
              03
            </div>
            <h3 className="font-bold text-slate-900 dark:text-red-50 mb-3">Lernziele</h3>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-red-100/70">
              <li>• API Routes</li>
              <li>• Server Components</li>
              <li>• UX/UI Design</li>
            </ul>
          </div>

        </div>

        {/* GitHub Link als Button */}
        <div className="text-center">
          <a 
            href="https://github.com/Davi6789/projekt-next_js_260216" 
            target="_blank" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-red-600 text-white rounded-full hover:bg-emerald-500 dark:hover:bg-emerald-500 transition-all shadow-lg"
          >
            <span>Quellcode auf GitHub</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z"/></svg>
          </a>
        </div>
      </div>
    </div>
  );
}