// ✅ src/app/admin/config/page.tsx

"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabaseClient";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

interface Config {
  id: string;
  cle: string;
  valeur: string;
}

export default function ConfigPage() {
  const supabase = createClient();
  const [configs, setConfigs] = useState<Config[]>([]);

  useEffect(() => {
    const fetchConfigs = async () => {
      const { data } = await supabase.from("configurations").select("*").order("cle", { ascending: true });
      if (data) setConfigs(data);
    };
    fetchConfigs();
  }, []);

  const handleUpdate = async (id: string, valeur: string) => {
    const { error } = await supabase.from("configurations").update({ valeur }).eq("id", id);
    if (!error) toast.success("Clé mise à jour");
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">⚙️ Configuration Système</h1>

      <Card>
        <CardContent className="space-y-4 p-4">
          {configs.map((config) => (
            <div key={config.id} className="flex flex-col md:flex-row items-center gap-4">
              <span className="font-medium w-full md:w-1/3">{config.cle}</span>
              <Input
                value={config.valeur}
                onChange={(e) => {
                  const updated = configs.map((c) => c.id === config.id ? { ...c, valeur: e.target.value } : c);
                  setConfigs(updated);
                }}
              />
              <Button onClick={() => handleUpdate(config.id, config.valeur)}>Mettre à jour</Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
