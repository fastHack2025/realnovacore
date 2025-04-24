// ✅ page.tsx — Vue admin des logs (filtrable, exportable, centralisée)

"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Card, CardContent } from "@/components/ui/card";

interface Log {
  id: string;
  action: string;
  created_at: string;
  user_email?: string;
  metadata?: any;
}

export default function AdminLogsPage() {
  const [logs, setLogs] = useState<Log[]>([]);
  const [filtered, setFiltered] = useState<Log[]>([]);
  const [searchEmail, setSearchEmail] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const fetchLogs = async () => {
      const { data } = await supabase.from("logs").select("*").order("created_at", { ascending: false });
      if (data) {
        setLogs(data);
        setFiltered(data);
      }
    };
    fetchLogs();
  }, []);

  useEffect(() => {
    let result = logs;
    if (searchEmail.trim()) {
      result = result.filter(log => log.user_email?.toLowerCase().includes(searchEmail.toLowerCase()));
    }
    if (date) {
      result = result.filter(log => log.created_at.startsWith(date));
    }
    setFiltered(result);
  }, [searchEmail, date, logs]);

  const exportCSV = () => {
    const csv = "Date,Email,Action\n" + filtered.map(log => `${log.created_at},${log.user_email || "-"},${log.action}`).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "logs_admin.csv";
    link.click();
  };

  return (
    <main className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">📑 Journal complet des actions (IA, CRM, Contact, etc.)</h1>
        <button
          onClick={exportCSV}
          className="bg-indigo-600 text-white text-sm px-4 py-2 rounded-md hover:bg-indigo-700"
        >📤 Exporter CSV</button>
      </div>

      <div className="flex gap-4 mb-6 flex-wrap">
        <input
          type="text"
          placeholder="🔍 Rechercher un email..."
          className="border p-2 rounded-md text-sm"
          value={searchEmail}
          onChange={(e) => setSearchEmail(e.target.value)}
        />
        <input
          type="date"
          className="border p-2 rounded-md text-sm"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <Card>
        <CardContent className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-4 py-2">Date</th>
                <th className="text-left px-4 py-2">Email</th>
                <th className="text-left px-4 py-2">Action</th>
                <th className="text-left px-4 py-2">Détail</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(log => (
                <tr key={log.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2 text-gray-600">{new Date(log.created_at).toLocaleString()}</td>
                  <td className="px-4 py-2">{log.user_email || "-"}</td>
                  <td className="px-4 py-2 text-indigo-700 font-semibold">{log.action}</td>
                  <td className="px-4 py-2 text-gray-700">{log.metadata ? JSON.stringify(log.metadata) : "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    <div className="mt-12 bg-white p-6 border rounded-xl">
  <h2 className="text-lg font-semibold mb-4">📊 Répartition des actions par type</h2>
  <ul className="text-sm space-y-1">
    {Object.entries(
      filtered.reduce((acc, log) => {
        acc[log.action] = (acc[log.action] || 0) + 1;
        return acc;
      }, {} as Record<string, number>)
    ).map(([action, count]) => (
      <li key={action} className="text-gray-700">🔹 {action} — {count} fois</li>
    ))}
  </ul>
</div>
</main>
  );
}
