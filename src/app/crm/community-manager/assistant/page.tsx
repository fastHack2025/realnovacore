"use client";

import { BotMessageSquare } from "lucide-react";
import IAModeSwitcher from "@/components/IAModeSwitcher";

export default function AssistantAICM() {
  return (
    <main className="relative min-h-screen px-6 py-20 text-white">
      <video className="absolute inset-0 w-full h-full object-cover z-0" autoPlay loop muted playsInline>
        <source src="https://res.cloudinary.com/dko5sommz/video/upload/v1745413001/13510815_3840_2160_30fps_ilwhfm.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/70 z-10" />

      <div className="relative z-20 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold flex items-center gap-3 mb-6">
          <BotMessageSquare className="w-8 h-8 text-cyan-300" /> Assistant IA – Messages privés
        </h1>

        <IAModeSwitcher>
          <form className="space-y-4">
            <label className="block text-sm font-medium">Texte automatique de réponse :</label>
            <textarea rows={4} placeholder="Merci pour votre message..." className="w-full bg-white/10 border border-white/20 rounded p-2 text-white" />
            <button className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded text-white">Déclencher la réponse manuelle</button>
          </form>
        </IAModeSwitcher>
      </div>
    </main>
  );
}
