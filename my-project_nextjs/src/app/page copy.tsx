// src/app/page.tsx (client component)

"use client";

import { useState, useEffect } from "react";

type Task = {
  id: number;
  title: string;
  done: boolean;
};

export default function Homepage() {
  const [darkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("dark-mode");
      return saved ? JSON.parse(saved) : false;
    }
    return false;
  });
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<"all" | "open" | "done">("all");
  const [newTitle, setNewTitle] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      // HTML class setzen
      document.documentElement.classList.toggle("dark", darkMode);
      localStorage.setItem("dark-mode", JSON.stringify(darkMode));
    }
  }, [darkMode]);

  const visibleTasks = tasks.filter((task) => {
    if (filter === "open") return !task.done;
    if (filter === "done") return task.done;
    return true; // "all"
  });

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
        task.id === id ? { ...task, done: !task.done } : task,
      ),
    );
  }

  function removeTask(id: number) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto flex max-w-4xl justify-center px-6 py-8">
        <div className="w-full max-w-xl p-6">
          {/* Filter-Buttons */}
          <div className="mb-4 flex gap-2 text-sm">
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={`rounded px-3 py-1 border ${
                filter === "all"
                  ? "bg-emerald-600 border-emerald-600"
                  : "border-slate-700"
              }`}
            >
              Alle
            </button>
            <button
              type="button"
              onClick={() => setFilter("open")}
              className={`rounded px-3 py-1 border ${
                filter === "open"
                  ? "bg-emerald-600 border-emerald-600"
                  : "border-slate-700"
              }`}
            >
              Offen
            </button>
            <button
              type="button"
              onClick={() => setFilter("done")}
              className={`rounded px-3 py-1 border ${
                filter === "done"
                  ? "bg-emerald-600 border-emerald-600"
                  : "border-slate-700"
              }`}
            >
              Erledigt
            </button>
          </div>

          {/* Formular */}
          <form onSubmit={handleAddTask} className="flex gap-2 mb-4">
            <input
              className="flex-1 rounded border border-slate-700 bg-slate-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Neue Aufgabe..."
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <button
              type="submit"
              className="rounded bg-emerald-600 px-4 py-2 text-sm font-medium hover:bg-emerald-500"
            >
              Hinzufügen
            </button>
          </form>

          {/* Liste */}
          <ul className="space-y-2">
            {visibleTasks.map((task) => (
              <li
                key={task.id}
                className="flex items-center justify-between rounded border border-slate-800 bg-slate-900 px-3 py-2"
              >
                <button
                  type="button"
                  onClick={() => toggleDone(task.id)}
                  className="flex items-center gap-2"
                >
                  <span
                    className={`h-4 w-4 rounded border ${
                      task.done
                        ? "bg-emerald-500 border-emerald-500"
                        : "border-slate-500"
                    }`}
                  />
                  <span
                    className={
                      task.done
                        ? "line-through text-slate-400"
                        : "text-slate-100"
                    }
                  >
                    {task.title}
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => removeTask(task.id)}
                  className="text-xs text-red-400 hover:text-red-300"
                >
                  Löschen
                </button>
              </li>
            ))}

            {tasks.length === 0 && (
              <p className="text-sm text-slate-400">
                Noch keine Aufgaben – füge deine erste oben hinzu.
              </p>
            )}
          </ul>
        </div>
      </section>
    </main>
  );
}
