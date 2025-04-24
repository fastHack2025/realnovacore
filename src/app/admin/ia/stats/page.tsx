// ✅ src/app/admin/ia/stats/page.tsx

"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabaseClient";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

interface StatIA {
  date: string;
  prompts: number;
}

export default function IAStatsPage() {
  const supabase = createClient();
  const [data, setData] = useState<StatIA[]>([]);

  useEffect(() => {
    const fetchStats = async () => {
      const { data } = await supabase.rpc("stats_prompts_par_jour");
      if (data) setData(data);
    };
    fetchStats();
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">📈 Activité IA quotidienne</h1>

      <Card>
        <CardContent className="p-4">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="prompts" fill="#4f46e5" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
