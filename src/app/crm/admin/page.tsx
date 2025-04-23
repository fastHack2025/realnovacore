"use client";

import { LayoutDashboard, Users, ShieldCheck, FileBarChart2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AdminHomePage() {
  return (
    <main className="relative min-h-screen px-6 py-20 text-white bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8 flex justify-center items-center gap-3">
          <ShieldCheck className="w-8 h-8 text-green-400" />
          Tableau de Bord Administrateur
        </h1>
        <p className="text-gray-300 mb-12">
          Gérer les utilisateurs, consulter les performances IA, sécuriser la plateforme.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {[
            {
              title: "📊 Dashboard IA",
              desc: "Vue synthétique de l’ensemble de l'activité IA (CRM, posts, scoring)",
              icon: LayoutDashboard,
              href: "/crm/admin/dashboard",
            },
            {
              title: "🧑‍💼 Gestion utilisateurs",
              desc: "Voir, activer, suspendre des comptes, changer les rôles",
              icon: Users,
              href: "/crm/admin/users",
            },
            {
              title: "📈 Statistiques IA",
              desc: "Suivi global : posts générés, publications, feedback",
              icon: FileBarChart2,
              href: "/crm/admin/analytics",
            },
            {
              title: "🔐 Rôles & sécurité",
              desc: "Mécanismes Clerk / accès restreints / journal des actions",
              icon: ShieldCheck,
              href: "/crm/admin/security",
            },
          ].map(({ title, desc, icon: Icon, href }) => (
            <Link
              key={href}
              href={href}
              className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-6 hover:scale-105 transition shadow-xl"
            >
              <div className="flex items-center gap-3 mb-2 text-white">
                <Icon className="w-6 h-6 text-cyan-300" />
                <h2 className="text-lg font-semibold">{title}</h2>
              </div>
              <p className="text-sm text-gray-300">{desc}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-20 mt-20 max-w-4xl mx-auto text-center text-sm text-white opacity-80">
        <div className="flex flex-col items-center gap-3">
          <Image
            src="https://res.cloudinary.com/dko5sommz/image/upload/v1743895989/1_f3thi3.png"
            alt="Logo DL Solutions"
            width={70}
            height={70}
            className="rounded-full"
          />
          <p>© Dave & Luce Solutions — <strong>Samuel OBAM made this</strong></p>
          <p>📞 +237 694 34 15 86 — +237 620 21 62 17</p>
          <p>📧 samuelobaml@dlsolutions.com</p>
        </div>
      </footer>
    </main>
  );
}
