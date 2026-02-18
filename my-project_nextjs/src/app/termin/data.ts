// app/data.ts
import { TimeSlot } from "./types";

// Generiert Zeitslots für einen Tag (09:00 - 17:00)
export function generateTimeSlots(): TimeSlot[] {
  const slots: TimeSlot[] = [];
  const bookedTimes = ["09:00", "12:00","13:00", "15:00"]; // Bereits belegte Zeiten

  for (let hour = 9; hour <= 16; hour++) {
    for (const minute of ["00", "30"]) {
      if (hour === 16 && minute === "30") continue;
      const time = `${hour.toString().padStart(2, "0")}:${minute}`;
      slots.push({
        id: `slot-${time}`,
        time,
        isBooked: bookedTimes.includes(time),
      });
    }
  }
  return slots;
}
