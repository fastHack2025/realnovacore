"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

const supabase = createClient();

export default function AlertesPage() {
  const [alertes, setAlertes] = useState<any[]>([]);

  useEffect(() => {
    const fetchAlertes = async () => {
      const { data } = await supabase.from("alertes").select("*, patients(nom)").order("created_at", { ascending: false });
      if (data) setAlertes(data);
    };
    fetchAlertes();
  }, []);

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-bold text-red-600">🚨 Alertes IA Médicales</h2>
      {alertes.map((a) => (
        <Card key={a.id} className="border-l-4 border-red-600 bg-red-50">
          <CardHeader>
            <CardTitle>{a.titre}</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-zinc-700">
            🧬 Patient : {a.patients?.nom || "Inconnu"}<br />
            🧠 Urgence : {a.niveau_urgence}<br />
            📝 Message : {a.message}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
