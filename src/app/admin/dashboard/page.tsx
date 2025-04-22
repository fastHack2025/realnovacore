"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function AdminDashboard() {
  const { user } = useUser();
  const router = useRouter();
  const [stats, setStats] = useState({ users: 0, rdv: 0, devis: 0, modules: 0, support: 0 });

  useEffect(() => {
    if (user && user.publicMetadata?.role !== "admin") router.push("/");
  }, [user]);

  useEffect(() => {
    const fetchStats = async () => {
      const [users, rdv, devis, modules, support] = await Promise.all([
        supabase.from("users").select("id"),
        supabase.from("rdv").select("id"),
        supabase.from("devis_ia").select("id"),
        supabase.from("modules_clients").select("id"),
        supabase.from("support_tickets").select("id"),
      ]);
      setStats({
        users: users.data?.length || 0,
        rdv: rdv.data?.length || 0,
        devis: devis.data?.length || 0,
        modules: modules.data?.length || 0,
        support: support.data?.length || 0,
      });
    };
    fetchStats();
  }, []);

  const data = [
    { name: "Utilisateurs", value: stats.users },
    { name: "RDV", value: stats.rdv },
    { name: "Devis IA", value: stats.devis },
    { name: "Modules IA", value: stats.modules },
    { name: "Support", value: stats.support },
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-indigo-700 mb-6">📊 Tableau de bord administrateur</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          <Card title="Utilisateurs inscrits" value={stats.users} color="indigo" />
          <Card title="Rendez-vous pris" value={stats.rdv} color="blue" />
          <Card title="Devis IA générés" value={stats.devis} color="green" />
          <Card title="Modules activés" value={stats.modules} color="purple" />
          <Card title="Demandes support" value={stats.support} color="pink" />
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">📈 Vue graphique globale</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#6366f1" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </main>
  );
}

function Card({ title, value, color }: { title: string; value: number; color: string }) {
  return (
    <div className={`bg-${color}-100 text-${color}-800 p-6 rounded-xl shadow-md`}>
      <p className="text-sm font-medium mb-1">{title}</p>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
}
