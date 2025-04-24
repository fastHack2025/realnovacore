// ✅ src/app/admin/dashboard/page.tsx — Dashboard IA + CRM complet et définitif

"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Card, CardContent } from "@/components/ui/card";

interface Stat {
  label: string;
  value: number;
}

interface MonthlyData {
  label: string;
  value: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stat[]>([]);
  const [monthlyData, setMonthlyData] = useState<MonthlyData[]>([]);

  useEffect(() => {
    const loadStats = async () => {
      const [users, messages, rdv, clients, prompts] = await Promise.all([
        supabase.from("users").select("id", { count: "exact", head: true }),
        supabase.from("chat_messages").select("id", { count: "exact", head: true }),
        supabase.from("rdv").select("id", { count: "exact", head: true }),
        supabase.from("crm_clients").select("id", { count: "exact", head: true }),
        supabase.from("historique_ia").select("id", { count: "exact", head: true })
      ]);

      setStats([
        { label: "Utilisateurs", value: users.count || 0 },
        { label: "Messages IA", value: messages.count || 0 },
        { label: "RDV pris", value: rdv.count || 0 },
        { label: "Clients CRM", value: clients.count || 0 },
        { label: "Prompts IA", value: prompts.count || 0 }
      ]);
    };

    const loadMonthlyGraph = async () => {
      const { data: ia } = await supabase.from("historique_ia").select("created_at");
      const { data: crm } = await supabase.from("crm_clients").select("created_at");

      const formatMonth = (date: string) => new Date(date).toLocaleDateString("fr-FR", { month: "short", year: "numeric" });
      const combine = [...(ia || []), ...(crm || [])];
      const grouped: Record<string, number> = {};

      combine.forEach((d: any) => {
        const key = formatMonth(d.created_at);
        grouped[key] = (grouped[key] || 0) + 1;
      });

      const result: MonthlyData[] = Object.entries(grouped).map(([label, value]) => ({ label, value }));
      result.sort((a, b) => new Date(a.label).getTime() - new Date(b.label).getTime());
      setMonthlyData(result);
    };

    loadStats();
    loadMonthlyGraph();
  }, []);

  return (
    <main className="p-6" id="dashboardPrintZone">
  <script suppressHydrationWarning>
    {(() => {
      fetch("/api/logs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "admin_dashboard_viewed" })
      });
    })()}
  </script>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">📊 Dashboard Résumé NovaCore</h1>
        <button
          onClick={() => {
            const printContents = document.getElementById("dashboardPrintZone")?.innerHTML;
            const win = window.open("", "_blank");
            if (win && printContents) {
              win.document.write(`<html><head><title>Export Dashboard</title></head><body>${printContents}</body></html>`);
              win.document.close();
              fetch("/api/logs", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ action: "admin_dashboard_exported" })
              });
              win.print();
            }
          }}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-1 text-sm rounded-md"
        >
          🖨️ Exporter ce dashboard
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
        {stats.map((stat, idx) => (
          <Card key={idx} className="border">
            <CardContent className="p-5 text-center">
              <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-indigo-700">{stat.value.toLocaleString()}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 bg-white p-6 border rounded-xl">
        <h2 className="text-lg font-semibold mb-4">📈 Évolution mensuelle IA & CRM</h2>
        {monthlyData.length === 0 ? (
          <p className="text-sm text-gray-500">Chargement en cours...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm border">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 text-left">Mois</th>
                  <th className="px-4 py-2 text-left">Nombre d’entrées</th>
                </tr>
              </thead>
              <tbody>
                {monthlyData.map((item, idx) => (
                  <tr key={idx} className="border-t">
                    <td className="px-4 py-2">{item.label}</td>
                    <td className="px-4 py-2 font-semibold text-indigo-600">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    <div className="mt-12 bg-white p-6 border rounded-xl">
  <h2 className="text-lg font-semibold mb-4">📊 Répartition par module</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    <div className="p-4 border rounded-md bg-gray-50">
      <h3 className="text-sm font-semibold text-gray-600 mb-1">🧠 IA - Messages</h3>
      <p className="text-xl font-bold text-indigo-600">
        {stats.find(s => s.label === "Messages IA")?.value ?? 0}
      </p>
    </div>
    <div className="p-4 border rounded-md bg-gray-50">
      <h3 className="text-sm font-semibold text-gray-600 mb-1">📚 CRM - Clients</h3>
      <p className="text-xl font-bold text-indigo-600">
        {stats.find(s => s.label === "Clients CRM")?.value ?? 0}
      </p>
    </div>
    <div className="p-4 border rounded-md bg-gray-50">
      <h3 className="text-sm font-semibold text-gray-600 mb-1">📅 CRM - RDV</h3>
      <p className="text-xl font-bold text-indigo-600">
        {stats.find(s => s.label === "RDV pris")?.value ?? 0}
      </p>
    </div>
  </div>
</div>
</main>
  );
}
