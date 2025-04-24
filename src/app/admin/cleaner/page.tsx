// ✅ src/app/admin/cleaner/page.tsx

"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabaseClient";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "react-hot-toast";

export default function CleanerPage() {
  const supabase = createClient();
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleClean = async () => {
    setLoading(true);
    const { error } = await supabase.rpc("clean_old_logs_ia");
    setLoading(false);
    if (!error) {
      toast.success("🧹 Logs IA archivés (30+ jours)");
      setDone(true);
    } else {
      toast.error("Erreur : " + error.message);
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">🧹 Nettoyage automatique IA</h1>
      <p>Ce module déclenche l'archivage des logs IA datant de plus de 30 jours via une fonction Supabase RPC.</p>

      <Card>
        <CardContent className="p-4 flex flex-col gap-4">
          <Button onClick={handleClean} disabled={loading || done}>
            {loading ? "Archivage en cours..." : done ? "✅ Terminé" : "Lancer l’archivage"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
