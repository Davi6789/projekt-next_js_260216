// app/page.tsx
"use client";

import { useState, useMemo } from "react";
import { TimeSlot } from "../termin/types";
import { generateTimeSlots } from "../termin/data";
import TimeSlotCard from "../../components/TimeSlotCard";
import BookingForm from "../../components/BookingForm";

export default function Home() {
  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split("T")[0]; // "2026-02-18"
  });

  const [slots, setSlots] = useState<TimeSlot[]>(generateTimeSlots());
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [confirmation, setConfirmation] = useState<string | null>(null);

  // Nur freie Slots zählen
  const freeSlots = useMemo(() => slots.filter((s) => !s.isBooked).length, [slots]);

  const handleSelectSlot = (slot: TimeSlot) => {
    setSelectedSlot(slot);
    setShowForm(true);
  };

  const handleBook = (name: string) => {
    if (!selectedSlot) return;

    // Slot als gebucht markieren
    setSlots((prev) =>
      prev.map((s) =>
        s.id === selectedSlot.id ? { ...s, isBooked: true } : s
      )
    );

    setConfirmation(
      `✅ Termin bestätigt! ${name}, dein Termin am ${selectedDate} um ${selectedSlot.time} Uhr wurde gebucht.`
    );
    setShowForm(false);
    setSelectedSlot(null);

    // Bestätigung nach 5 Sekunden ausblenden
    setTimeout(() => setConfirmation(null), 5000);
  };

  return (
    <main className="min-h-screen bg-linear-to-br from-gray-950 via-gray-900 to-gray-950 px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Terminbuchung
          </h1>
          <p className="text-gray-400 mt-2 text-sm sm:text-base">
            Wähle einen freien Termin aus
          </p>
        </div>

        {/* Datum-Auswahl */}
        <div className="flex justify-center mb-6">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="
              px-4 py-2 rounded-lg
              bg-gray-800 border border-gray-700
              text-white
              focus:outline-none focus:border-primary
              transition-all duration-200
            "
          />
        </div>

        {/* Status-Leiste */}
        <div className="flex justify-center gap-6 mb-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-linear-to-br from-indigo-600 to-purple-600" />
            <span className="text-gray-300">Verfügbar ({freeSlots})</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-linear-to-br from-red-500 to-red-600" />
            <span className="text-gray-300">Belegt ({slots.length - freeSlots})</span>
          </div>
        </div>

        {/* Bestätigung */}
        {confirmation && (
          <div className="mb-6 p-4 rounded-xl bg-linear-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-300 text-center text-sm animate-pulse">
            {confirmation}
          </div>
        )}

        {/* Zeitslot-Grid – responsive! */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {slots.map((slot) => (
            <TimeSlotCard
              key={slot.id}
              slot={slot}
              isSelected={selectedSlot?.id === slot.id}
              onSelect={handleSelectSlot}
            />
          ))}
        </div>
      </div>

      {/* Buchungsformular (Modal) */}
      {showForm && selectedSlot && (
        <BookingForm
          selectedSlot={selectedSlot}
          selectedDate={selectedDate}
          onBook={handleBook}
          onCancel={() => {
            setShowForm(false);
            setSelectedSlot(null);
          }}
        />
      )}
    </main>
  );
}
