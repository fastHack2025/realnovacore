"use client";

import { useEffect, useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

export default function IntentTrainingPage() {
  const [samples, setSamples] = useState<any[]>([]);

  useEffect(() => {
    const fetchSamples = async () => {
      const res = await fetch("/api/intent-training");
      const data = await res.json();
      setSamples(data || []);
    };
    fetchSamples();
  }, []);

  return (
    <main className="p-8 space-y-6">
      <h1 className="text-2xl font-bold text-indigo-700">🧠 Données d'entraînement DAVY</h1>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        {samples.map((s, i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle>🎯 {s.detected_intent}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-2">🗣️ {s.user_input}</p>
              <p className="text-xs text-green-700">✅ Réponse idéale : {s.ideal_response}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
