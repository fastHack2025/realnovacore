"use client";

import { ShieldCheck } from "lucide-react";

export default function AdminSecurity() {
  return (
    <main className="min-h-screen px-6 py-20 text-white bg-gradient-to-br from-gray-800 to-black">
      <h1 className="text-4xl font-bold mb-10 flex items-center gap-3">
        <ShieldCheck className="w-8 h-8 text-red-400" /> Sécurité & Permissions
      </h1>
      <div className="bg-white/10 border border-white/20 rounded-lg p-6 backdrop-blur text-gray-300 text-center">
        🔐 Cette section permet de restreindre les accès selon les rôles. Middleware Clerk intégré.
      </div>
    </main>
  );
}
