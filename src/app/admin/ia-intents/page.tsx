"use client";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase";

export default function IAIntentDashboard() {
  const [logs, setLogs] = useState<any[]>([]);

  useEffect(() => {
    const supabase = createClient();
    supabase.from("intent_logs").select("*").order("created_at", { ascending: false })
      .then(({ data }) => setLogs(data || []));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-indigo-700 mb-4">📊 Requêtes IA / Intentions</h1>
      <div className="grid grid-cols-1 gap-4">
        {logs.map((log, idx) => (
          <div key={idx} className="p-4 rounded shadow border border-indigo-200">
            <p><strong>Message:</strong> {log.message}</p>
            <p><strong>Intention:</strong> {log.intent}</p>
            <p className="text-xs text-zinc-500">📅 {new Date(log.created_at).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
