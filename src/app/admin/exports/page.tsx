// ✅ src/app/admin/exports/page.tsx

"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabaseClient";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export default function ExportPage() {
  const supabase = createClient();
  const [loading, setLoading] = useState(false);

  const exportTable = async (table: string) => {
    setLoading(true);
    const { data, error } = await supabase.from(table).select("*");
    if (error) return alert("Erreur export : " + error.message);

    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, table);
    const wbout = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const blob = new Blob([wbout], { type: "application/octet-stream" });
    saveAs(blob, `${table}_export.xlsx`);
    setLoading(false);
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">📤 Exporter les Données</h1>

      <Card>
        <CardContent className="space-y-4 p-4">
          <div className="flex flex-wrap gap-4">
            <Button disabled={loading} onClick={() => exportTable("rdv")}>Exporter RDV</Button>
            <Button disabled={loading} onClick={() => exportTable("inscriptions")}>Exporter Inscriptions</Button>
            <Button disabled={loading} onClick={() => exportTable("crm_clients")}>Exporter Clients CRM</Button>
            <Button disabled={loading} onClick={() => exportTable("notifications")}>Exporter Notifications</Button>
          </div>
          {loading && <p className="text-sm text-gray-500">Génération en cours...</p>}
        </CardContent>
      </Card>
    </div>
  );
}
