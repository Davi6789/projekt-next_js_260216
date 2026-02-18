// app/components/BookingForm.tsx
"use client";

import { useState } from "react";
import { TimeSlot } from "../app/termin/types";

interface BookingFormProps {
  selectedSlot: TimeSlot;
  selectedDate: string;
  onBook: (name: string, email: string) => void;
  onCancel: () => void;
}

export default function BookingForm({ selectedSlot, selectedDate, onBook, onCancel }: BookingFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    onBook(name, email);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <form
        onSubmit={handleSubmit}
        className="
          w-full max-w-md p-6 rounded-2xl
          bg-linear-to-br from-gray-800 to-gray-900
          border border-gray-700 shadow-2xl
          space-y-4
        "
      >
        <h2 className="text-xl font-bold text-white">
          Termin buchen
        </h2>
        <p className="text-sm text-gray-400">
          📅 {selectedDate} um 🕐 {selectedSlot.time} Uhr
        </p>

        <div>
          <label className="block text-sm text-gray-300 mb-1">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Dein vollständiger Name"
            required
            className="
              w-full px-4 py-2.5 rounded-lg
              bg-gray-700 border border-gray-600
              text-white placeholder:text-gray-400
              focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30
              transition-all duration-200
            "
          />
        </div>

        <div>
          <label className="block text-sm text-gray-300 mb-1">E-Mail</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="deine@email.de"
            required
            className="
              w-full px-4 py-2.5 rounded-lg
              bg-gray-700 border border-gray-600
              text-white placeholder:text-gray-400
              focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30
              transition-all duration-200
            "
          />
        </div>

        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            className="
              flex-1 py-2.5 rounded-lg font-semibold
              bg-linear-to-r from-primary to-secondary
              text-white
              hover:from-primary-dark hover:to-purple-700
              hover:shadow-lg hover:shadow-primary/30
              transition-all duration-300
              active:scale-95
            "
          >
            Jetzt buchen ✓
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="
              px-4 py-2.5 rounded-lg font-semibold
              bg-gray-700 text-gray-300
              hover:bg-gray-600
              transition-all duration-200
            "
          >
            Abbrechen
          </button>
        </div>
      </form>
    </div>
  );
}
