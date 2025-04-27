"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function AjouterPatientPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    nom: "",
    date_naissance: "",
    etat: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await fetch("/api/patients", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    router.push("/crm/hopital/patients");
  };

  return (
    <main className="max-w-xl mx-auto p-8">
      <h1 className="text-2xl font-bold text-indigo-700 mb-6">➕ Ajouter un Patient</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label>Nom</Label>
          <Input value={form.nom} onChange={(e) => setForm({ ...form, nom: e.target.value })} required />
        </div>
        <div>
          <Label>Date de naissance</Label>
          <Input type="date" value={form.date_naissance} onChange={(e) => setForm({ ...form, date_naissance: e.target.value })} required />
        </div>
        <div>
          <Label>État de santé</Label>
          <Input value={form.etat} onChange={(e) => setForm({ ...form, etat: e.target.value })} required />
        </div>
        <Button type="submit">Enregistrer</Button>
      </form>
    </main>
  );
}
