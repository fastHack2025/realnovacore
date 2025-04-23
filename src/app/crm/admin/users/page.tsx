"use client";

import { Users } from "lucide-react";

export default function AdminUsersPage() {
  return (
    <main className="min-h-screen px-6 py-20 text-white bg-gradient-to-br from-black to-gray-800">
      <h1 className="text-4xl font-bold mb-10 flex items-center gap-2">
        <Users className="w-8 h-8 text-white" /> Gestion des utilisateurs
      </h1>
      <div className="bg-white/10 border border-white/20 backdrop-blur p-6 rounded-lg shadow-xl">
        <p className="text-gray-300 text-center">
          🔐 Connexion à Clerk en cours d’intégration.
        </p>
      </div>
    </main>
  );
}
