// ✅ src/app/crm/dashboard/page.tsx

"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabaseClient";
import { Card, CardContent } from "@/components/ui/card";

export default function CRMDashboard() {
  const supabase = createClient();
  const [counts, setCounts] = useState({
    clients: 0,
    rdv: 0,
    messages: 0,
  });

  useEffect(() => {
    const fetchCounts = async () => {
      const [{ count: clients }, { count: rdv }, { count: messages }] = await Promise.all([
        supabase.from("crm_clients").select("id", { count: "exact", head: true }),
        supabase.from("rdv").select("id", { count: "exact", head: true }),
        supabase.from("crm_messages").select("id", { count: "exact", head: true }),
      ]);
      setCounts({
        clients: clients || 0,
        rdv: rdv || 0,
        messages: messages || 0,
      });
    };
    fetchCounts();
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">📋 Dashboard CRM</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card><CardContent className="p-4">👥 Clients enregistrés : {counts.clients}</CardContent></Card>
        <Card><CardContent className="p-4">📅 RDV pris : {counts.rdv}</CardContent></Card>
        <Card><CardContent className="p-4">💬 Messages échangés : {counts.messages}</CardContent></Card>
      </div>
    </div>
  );
}
