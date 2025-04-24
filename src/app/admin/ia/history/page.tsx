// ✅ src/app/admin/ia/history/page.tsx

"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabaseClient";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface MessageIA {
  id: string;
  user_id: string;
  role: "user" | "assistant";
  content: string;
  created_at: string;
}

export default function IAHistoryPage() {
  const supabase = createClient();
  const [messages, setMessages] = useState<MessageIA[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await supabase.from("historique_ia").select("*").order("created_at", { ascending: false }).limit(100);
      if (data) setMessages(data);
    };
    fetch();
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">🧠 Historique Assistant IA</h1>

      <Card>
        <CardContent className="overflow-x-auto p-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Utilisateur</TableHead>
                <TableHead>Rôle</TableHead>
                <TableHead>Message</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {messages.map((m) => (
                <TableRow key={m.id}>
                  <TableCell>{m.user_id}</TableCell>
                  <TableCell className="capitalize text-blue-600">{m.role}</TableCell>
                  <TableCell>{m.content.slice(0, 60)}...</TableCell>
                  <TableCell>{new Date(m.created_at).toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
