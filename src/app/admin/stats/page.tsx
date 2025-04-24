// ✅ src/app/admin/stats/page.tsx

"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabaseClient";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

interface StatData {
  label: string;
  valeur: number;
}

export default function StatsPage() {
  const supabase = createClient();
  const [stats, setStats] = useState<StatData[]>([]);

  useEffect(() => {
    const fetchStats = async () => {
      // Données fictives — à remplacer par des requêtes réelles
      const fakeData = [
        { label: "IA activées", valeur: 12 },
        { label: "Rendez-vous", valeur: 30 },
        { label: "Inscriptions", valeur: 8 },
        { label: "Offres générées", valeur: 20 },
      ];
      setStats(fakeData);
    };
    fetchStats();
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">📊 Statistiques Générales</h1>

      <Card>
        <CardContent className="p-4">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={stats}>
              <XAxis dataKey="label" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="valeur" fill="#6366f1" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
