"use client";

import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { redirect } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Users2, Building2, ActivitySquare } from "lucide-react";

export default function AdminDashboardPage() {
  const { user } = useUser();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const checkAccess = async () => {
      if (!user) return;
      const { data } = await supabase.from("superadmin").select("id").eq("id", user.id);
      if (data && data.length > 0) {
        setAuthorized(true);
      } else {
        redirect("/");
      }
    };
    checkAccess();
  }, [user]);

  if (!authorized) return null;

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">🧠 Admin HQ — NovaCore</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <DashboardCard icon={<Users2 className="w-8 h-8 text-indigo-300" />} title="Utilisateurs" subtitle="Voir tous les comptes" href="/admin/utilisateurs" />
        <DashboardCard icon={<Building2 className="w-8 h-8 text-pink-300" />} title="Entreprises" subtitle="Clients & partenaires" href="/admin/entreprises" />
        <DashboardCard icon={<ActivitySquare className="w-8 h-8 text-green-300" />} title="Logs" subtitle="Actions & historique" href="/admin/logs" />
        <DashboardCard icon={<BarChart3 className="w-8 h-8 text-orange-300" />} title="Statistiques" subtitle="Activité & IA" href="/admin/stats" />
      </div>

      <div className="bg-white/10 rounded-xl p-6 text-sm text-gray-300 border border-white/10">
        En tant que Superadmin, vous pouvez superviser l'ensemble des modules de NovaCore,
        configurer les accès, consulter les paiements et gérer toutes les entreprises connectées à la plateforme.
      </div>
    </main>
  );
}

function DashboardCard({ icon, title, subtitle, href }: any) {
  return (
    <a
      href={href}
      className="bg-white/10 border border-white/10 rounded-xl p-6 transition hover:bg-white/20 hover:scale-[1.02]"
    >
      <div className="flex items-center gap-4 mb-4">
        {icon}
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      <p className="text-sm text-white/80">{subtitle}</p>
    </a>
  );
}
