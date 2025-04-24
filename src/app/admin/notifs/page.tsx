// ✅ src/app/admin/notifs/page.tsx

"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabaseClient";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Loader2, MailCheck, Bell, AlertCircle } from "lucide-react";

interface Notif {
  id: string;
  type: "email" | "sms" | "alert";
  destinataire: string;
  message: string;
  statut: "envoyé" | "échec";
  created_at: string;
}

export default function NotifsPage() {
  const supabase = createClient();
  const [notifs, setNotifs] = useState<Notif[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotifs = async () => {
      const { data } = await supabase.from("notifications").select("*").order("created_at", { ascending: false });
      if (data) setNotifs(data);
      setLoading(false);
    };
    fetchNotifs();
  }, []);

  const icon = (type: string) => {
    switch (type) {
      case "email": return <MailCheck className="w-4 h-4 mr-1 text-indigo-600" />;
      case "sms": return <Bell className="w-4 h-4 mr-1 text-green-600" />;
      default: return <AlertCircle className="w-4 h-4 mr-1 text-yellow-600" />;
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">🔔 Notifications Envoyées</h1>

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
                  <TableHead>Destinataire</TableHead>
                  <TableHead>Message</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {notifs.map((n) => (
                  <TableRow key={n.id}>
                    <TableCell className="capitalize flex items-center">{icon(n.type)} {n.type}</TableCell>
                    <TableCell>{n.destinataire}</TableCell>
                    <TableCell>{n.message}</TableCell>
                    <TableCell className={n.statut === "envoyé" ? "text-green-600" : "text-red-600"}>{n.statut}</TableCell>
                    <TableCell>{new Date(n.created_at).toLocaleString()}</TableCell>
                  </TableRow>
                ))}
                {notifs.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center text-gray-400 py-4">
                      Aucune notification envoyée pour le moment.
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
