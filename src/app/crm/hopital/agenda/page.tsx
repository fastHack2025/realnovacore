"use client";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export default function AgendaHopitalPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-indigo-700 mb-4">📆 Agenda Médical</h2>
      <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border shadow" />
      <p className="mt-4 text-sm text-gray-600">Date sélectionnée : {date?.toLocaleDateString("fr-FR")}</p>
    </div>
  );
}
