"use client";

import { Activity, UserCheck, Brain, FileText } from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    { title: "Utilisateurs actifs", value: 1280, icon: UserCheck },
    { title: "CRM actifs", value: 56, icon: FileText },
    { title: "Posts générés par l’IA", value: 4320, icon: Brain },
    { title: "Sessions en cours", value: 23, icon: Activity },
  ];

  return (
    <main className="min-h-screen px-6 py-20 text-white bg-gradient-to-br from-black to-gray-900">
      <h1 className="text-4xl font-bold mb-10">📊 Dashboard Administrateur</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map(({ title, value, icon: Icon }) => (
          <div
            key={title}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6 flex flex-col items-center text-center shadow-xl"
          >
            <Icon className="w-8 h-8 text-cyan-400 mb-2" />
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-2xl font-bold mt-2">{value}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
