// src/app/page.tsx (client component)

"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

type Task = {
  id: number;
  title: string;
  done: boolean;
};

export default function Homepage() {
  // 1. States definieren (Initial leer, um Hydration-Fehler zu vermeiden)
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<"all" | "open" | "done">("all");
  const [newTitle, setNewTitle] = useState("");
  const [isLoaded, setIsLoaded] = useState(false); // Check, ob Client-seitig geladen

  // 2. Daten beim ersten Mounten vom localStorage laden
  useEffect(() => {
    const savedTasks = localStorage.getItem("todo-tasks");
    const savedFilter = localStorage.getItem("todo-filter");

    if (savedTasks) {
      try {
        setTasks(JSON.parse(savedTasks));
      } catch (e) {
        console.error("Fehler beim Laden der Tasks", e);
      }
    }
    
    if (savedFilter) {
      setFilter(savedFilter as "all" | "open" | "done");
    }
    
    setIsLoaded(true);
  }, []);

  // 3. Speichern, wenn sich Tasks oder Filter ändern
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("todo-tasks", JSON.stringify(tasks));
    }
  }, [tasks, isLoaded]);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("todo-filter", filter);
    }
  }, [filter, isLoaded]);

  // Handlers
  function handleAddTask(e: React.FormEvent) {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newTask: Task = {
      id: Date.now(),
      title: newTitle.trim(),
      done: false,
    };

    setTasks((prev) => [...prev, newTask]);
    setNewTitle("");
  }

  function toggleDone(id: number) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  }

  function removeTask(id: number) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  // Filter-Logik
  const visibleTasks = tasks.filter((task) => {
    if (filter === "open") return !task.done;
    if (filter === "done") return task.done;
    return true;
  });

  // Verhindert "Flackern" beim Laden
  if (!isLoaded) return null; 

  return (
    <section className="mx-auto flex max-w-4xl justify-center px-6 py-8 pt-24">
      <div className="w-full max-w-xl p-8 bg-slate-900/50 dark:bg-slate-800/70 
                      border border-slate-800/50 dark:border-slate-700/60 
                      backdrop-blur-xl rounded-3xl shadow-2xl">
        
        {/* Filter-Buttons */}
        <div className="mb-6 flex gap-2 text-sm">
          {(["all", "open", "done"] as const).map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`rounded-lg px-4 py-2 border font-medium transition-all flex-1
                ${filter === f
                  ? "bg-emerald-600/90 border-emerald-600 text-white shadow-md shadow-emerald-500/20"
                  : "bg-slate-800/50 dark:bg-slate-700/50 border-slate-700 dark:border-slate-600 hover:bg-slate-800/70"
                }`}
            >
              {f === "all" ? "Alle" : f === "open" ? "Offen" : "Erledigt"}
            </button>
          ))}
        </div>

        {/* Formular */}
        <form onSubmit={handleAddTask} className="flex gap-3 mb-6">
          <input
            className="flex-1 rounded-xl border border-slate-700 dark:border-slate-600 
                       bg-slate-900/70 dark:bg-slate-800/80 px-5 py-4 text-sm 
                       focus:outline-none focus:ring-2 focus:ring-emerald-500/50 
                       placeholder-slate-500 transition-all"
            placeholder="Neue Aufgabe hinzufügen..."
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <button
            type="submit"
            className="rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 
                       px-6 py-4 text-sm font-semibold text-white hover:from-emerald-500 
                       hover:to-emerald-400 shadow-lg transition-all active:scale-95"
          >
            Hinzufügen
          </button>
        </form>

        {/* Liste */}
        <ul className="space-y-3">
          {visibleTasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between rounded-xl border border-slate-800/50 
                         bg-slate-900/40 px-5 py-4 hover:border-slate-600 transition-all"
            >
              <button
                type="button"
                onClick={() => toggleDone(task.id)}
                className="flex items-center gap-3 group"
              >
                <div
                  className={`h-6 w-6 rounded-lg border-2 shrink-0 transition-all
                    ${task.done
                      ? "bg-emerald-500 border-emerald-500"
                      : "border-slate-600 group-hover:border-emerald-400"
                    }`}
                >
                  {task.done && (
                    <svg className="w-full h-full text-white p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <span className={`font-medium ${task.done ? "line-through text-slate-500" : "text-slate-100"}`}>
                  {task.title}
                </span>
              </button>
              <button
                type="button"
                onClick={() => removeTask(task.id)}
                className="text-xs text-red-400 hover:text-red-300 bg-red-500/10 
                           rounded-full px-3 py-1.5 transition-colors"
              >
                Löschen
              </button>
            </li>
          ))}

          {visibleTasks.length === 0 && (
            <li className="text-center py-12 text-slate-500 italic">
              Keine Aufgaben in dieser Kategorie gefunden.
            </li>
          )}
        </ul>
      </div>
    </section>
  );
}