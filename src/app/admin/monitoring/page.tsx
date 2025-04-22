"use client";

import StatusBadge from "@/app/components/StatusBadge";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function MonitoringPage() {
  const [logs, setLogs] = useState<any[]>([]);

  useEffect(() => {
    supabase
      .from("monitor_logs")
      .select("*")
      .order("created_at", { ascending: false })
      .then(({ data }) => setLogs(data || []));
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">📡 Monitoring NovaCore</h1>
        <StatusBadge />
      </div>

      <div className="rounded overflow-hidden shadow border mb-8">
        <iframe
          src="https://status-novacore.uptimerobot.com"
          width="100%"
          height="450"
          style={{ border: "none" }}
          title="NovaCore Status Page"
        />
      </div>

      <h2 className="text-xl font-semibold mb-2">📜 Logs des incidents</h2>
      <ul className="space-y-2 text-sm">
        {logs.map((log) => (
          <li key={log.id} className="border p-2 rounded bg-white shadow-sm">
            <span className="font-semibold">{log.status}</span> —{" "}
            {log.message} <span className="text-gray-400 text-xs">({new Date(log.created_at).toLocaleString()})</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
