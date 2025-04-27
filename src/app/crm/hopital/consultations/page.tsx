"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Stethoscope } from "lucide-react";

const supabase = createClient();

export default function ConsultationsPage() {
  const [consultations, setConsultations] = useState<any[]>([]);

  useEffect(() => {
    const fetchConsultations = async () => {
      const { data } = await supabase.from("consultations").select("*, patients(nom)").order("date_consultation", { ascending: false });
      if (data) setConsultations(data);
    };
    fetchConsultations();
  }, []);

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-bold text-indigo-700">📋 Consultations Médicales</h2>
      {consultations.map((c) => (
        <Card key={c.id} className="border-l-4 border-indigo-600">
          <CardHeader>
            <CardTitle>
              🧑‍⚕️ {c.docteur} - {c.patients?.nom || "Patient inconnu"}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-zinc-600">
            📅 Date : {c.date_consultation}<br />
            📝 Notes : {c.notes}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
