"use client";

import { CalendarCheck } from "lucide-react";
import IAModeSwitcher from "@/components/IAModeSwitcher";

export default function CommunityCalendarPage() {
  return (
    <main className="relative min-h-screen px-6 py-20 text-white">
      <video className="absolute inset-0 w-full h-full object-cover z-0" autoPlay loop muted playsInline>
        <source src="https://res.cloudinary.com/dko5sommz/video/upload/v1745413001/13510815_3840_2160_30fps_ilwhfm.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/70 z-10" />

      <div className="relative z-20 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold flex items-center gap-3 mb-6">
          <CalendarCheck className="w-8 h-8 text-blue-300" /> Calendrier IA des Publications
        </h1>

        <IAModeSwitcher>
          <form className="space-y-4">
            <label className="block text-sm font-medium">Planifiez votre publication manuellement :</label>
            <input type="datetime-local" className="w-full bg-white/10 border border-white/20 rounded p-2 text-white" />
            <textarea rows={3} placeholder="Contenu..." className="w-full bg-white/10 border border-white/20 rounded p-2 text-white" />
            <button className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded text-white">Enregistrer</button>
          </form>
        </IAModeSwitcher>
      </div>
    </main>
  );
}
