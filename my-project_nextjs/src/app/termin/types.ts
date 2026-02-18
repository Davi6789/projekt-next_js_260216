// app/types.ts
export interface TimeSlot {
  id: string;
  time: string;       // z.B. "09:00"
  isBooked: boolean;   // true = belegt, false = frei
}

export interface Booking {
  id: string;
  date: string;
  time: string;
  customerName: string;
  customerEmail: string;
}
