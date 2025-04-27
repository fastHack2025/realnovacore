"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const stats = [
  { label: "Patients à risque élevé", value: 4 },
  { label: "Nouveaux patients cette semaine", value: 12 },
  { label: "Alertes IA", value: "⚠️ 3 anomalies détectées" },
];

export default function DashboardSanteIA() {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {stats.map((s, i) => (
        <Card key={i}>
          <CardHeader>
            <CardTitle>{s.label}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-indigo-600">{s.value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
