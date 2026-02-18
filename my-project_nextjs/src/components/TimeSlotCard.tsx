// app/components/TimeSlotCard.tsx
"use client";

import { TimeSlot } from "../types";

interface TimeSlotCardProps {
  slot: TimeSlot;
  isSelected: boolean;
  onSelect: (slot: TimeSlot) => void;
}

export default function TimeSlotCard({ slot, isSelected, onSelect }: TimeSlotCardProps) {
  if (slot.isBooked) {
    // BELEGT – nicht klickbar, ausgegraut
    return (
      <div
        className="
          relative p-4 rounded-xl cursor-not-allowed
          bg-gradient-to-br from-red-500/20 to-red-600/30
          border border-red-300/50
          opacity-60
        "
      >
        <span className="text-lg font-semibold text-red-400">{slot.time}</span>
        <span className="block text-xs text-red-300 mt-1">Belegt</span>
      </div>
    );
  }

  // FREI – klickbar mit Hover-Effekt & Farbverlauf
  return (
    <button
      onClick={() => onSelect(slot)}
      className={`
        relative p-4 rounded-xl w-full text-left
        transition-all duration-300 ease-in-out
        border-2
        ${
          isSelected
            ? "bg-gradient-to-br from-primary to-secondary border-primary text-white scale-105 shadow-lg shadow-primary/30"
            : "bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 text-white hover:from-indigo-600 hover:to-purple-600 hover:border-indigo-400 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25"
        }
      `}
    >
      <span className="text-lg font-semibold">{slot.time}</span>
      <span className="block text-xs mt-1 opacity-75">
        {isSelected ? "✓ Ausgewählt" : "Verfügbar"}
      </span>
    </button>
  );
}
