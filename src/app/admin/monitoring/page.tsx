// ✅ src/app/admin/monitoring/page.tsx

"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabaseClient";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Loader2, CheckCircle2, AlertTriangle } from "lucide-react";

interface MonitorLog {
  id: string;
  type: string; // "cron" | "api" | "uptime"
  message: string;
  status: "ok" | "error";
  created_at: string;
}

export default function MonitoringPage() {
  const supabase = createClient();
  const [logs, setLogs] = useState<MonitorLog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLogs = async () => {
      const { data } = await supabase.from("monitor_logs").select("*").order("created_at", { ascending: false });
      if (data) setLogs(data);
      setLoading(false);
    };
    fetchLogs();
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">🧪 Monitoring Système</h1>

      <Card>
        <CardContent className="overflow-x-auto p-4">
          {loading ? (
            <div className="flex justify-center items-center h-40">
              <Loader2 className="animate-spin w-8 h-8 text-gray-500" />
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Type</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead>Message</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {logs.map((log) => (
                  <TableRow key={log.id}>
                    <TableCell className="capitalize">{log.type}</TableCell>
                    <TableCell>
                      {log.status === "ok" ? (
                        <span className="text-green-600 inline-flex items-center"><CheckCircle2 className="w-4 h-4 mr-1" /> OK</span>
                      ) : (
                        <span className="text-red-600 inline-flex items-center"><AlertTriangle className="w-4 h-4 mr-1" /> Erreur</span>
                      )}
                    </TableCell>
                    <TableCell>{log.message}</TableCell>
                    <TableCell>{new Date(log.created_at).toLocaleString()}</TableCell>
                  </TableRow>
                ))}
                {logs.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center text-gray-400 py-4">
                      Aucun événement système enregistré.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
