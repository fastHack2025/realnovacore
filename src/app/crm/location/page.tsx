// ✅ src/app/crm/location/page.tsx — Version finale complète CRM Location

"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download } from "lucide-react";
import * as XLSX from "xlsx";

interface LocationEntry {
  id: string;
  nom: string;
  type: "meublé" | "non meublé" | "véhicule";
  statut: "actif" | "en attente" | "terminé";
  montant: number;
  date_debut: string;
  date_fin: string;
}

export default function CRMLocationPage() {
  const supabase = createClient();
  const [locations, setLocations] = useState<LocationEntry[]>([]);
  const [form, setForm] = useState({
    nom: "",
    type: "meublé",
    statut: "actif",
    montant: "",
    date_debut: "",
    date_fin: ""
  });

  useEffect(() => {
    fetchLocations();
  }, []);

  const fetchLocations = async () => {
    const { data } = await supabase.from("locations").select("*").order("date_debut", { ascending: false });
    if (data) setLocations(data);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const { error } = await supabase.from("locations").insert([{ ...form, montant: Number(form.montant) }]);
    if (!error) {
      setForm({ nom: "", type: "meublé", statut: "actif", montant: "", date_debut: "", date_fin: "" });
      fetchLocations();
    }
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(locations);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Locations");
    XLSX.writeFile(workbook, "locations_novacore.xlsx");
  };

  return (
    <main className="p-6 min-h-screen bg-white text-gray-900">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-amber-600">📋 Gestion des Locations</h1>
        <Button onClick={exportToExcel} variant="outline" className="flex gap-2 items-center">
          <Download size={18} /> Exporter Excel
        </Button>
      </div>

      <div className="bg-white border rounded-lg p-6 mb-10 shadow-md">
        <h2 className="text-lg font-semibold mb-4">➕ Nouvelle location</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <input type="text" name="nom" value={form.nom} onChange={handleChange} placeholder="Nom du locataire" className="border p-2 rounded-md" />
          <select name="type" value={form.type} onChange={handleChange} className="border p-2 rounded-md">
            <option value="meublé">Meublé</option>
            <option value="non meublé">Non meublé</option>
            <option value="véhicule">Véhicule</option>
          </select>
          <select name="statut" value={form.statut} onChange={handleChange} className="border p-2 rounded-md">
            <option value="actif">Actif</option>
            <option value="en attente">En attente</option>
            <option value="terminé">Terminé</option>
          </select>
          <input type="number" name="montant" value={form.montant} onChange={handleChange} placeholder="Montant (FCFA)" className="border p-2 rounded-md" />
          <input type="date" name="date_debut" value={form.date_debut} onChange={handleChange} className="border p-2 rounded-md" />
          <input type="date" name="date_fin" value={form.date_fin} onChange={handleChange} className="border p-2 rounded-md" />
        </div>
        <Button onClick={handleSubmit} className="mt-4">💾 Enregistrer</Button>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nom du locataire</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead>Montant</TableHead>
              <TableHead>Début</TableHead>
              <TableHead>Fin</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {locations.map((loc) => (
              <TableRow key={loc.id}>
                <TableCell>{loc.nom}</TableCell>
                <TableCell className="capitalize">{loc.type}</TableCell>
                <TableCell className="capitalize text-sm text-green-600">{loc.statut}</TableCell>
                <TableCell>{loc.montant.toLocaleString()} FCFA</TableCell>
                <TableCell>{new Date(loc.date_debut).toLocaleDateString()}</TableCell>
                <TableCell>{new Date(loc.date_fin).toLocaleDateString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </main>
  );
}
