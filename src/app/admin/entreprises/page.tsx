"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabaseClient";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

interface Entreprise {
  id: string;
  nom: string;
  secteur: string;
  created_at: string;
}

export default function EntreprisesPage() {
  const supabase = createClient();
  const [entreprises, setEntreprises] = useState<Entreprise[]>([]);
  const [nom, setNom] = useState("");
  const [secteur, setSecteur] = useState("");

  useEffect(() => {
    const fetch = async () => {
      const { data } = await supabase.from("entreprises").select("*").order("created_at", { ascending: false });
      if (data) setEntreprises(data);
    };
    fetch();
  }, []);

  const addEntreprise = async () => {
    if (!nom || !secteur) return;
    const { data, error } = await supabase.from("entreprises").insert({ nom, secteur });
    if (!error && data) {
      setEntreprises([...data, ...entreprises]);
      setNom("");
      setSecteur("");
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">🏢 Entreprises enregistrées</h1>

      <div className="flex flex-col md:flex-row items-center gap-4">
        <Input placeholder="Nom de l'entreprise" value={nom} onChange={(e) => setNom(e.target.value)} />
        <Input placeholder="Secteur d'activité" value={secteur} onChange={(e) => setSecteur(e.target.value)} />
        <Button onClick={addEntreprise} variant="default">
          <PlusCircle className="w-4 h-4 mr-2" /> Ajouter
        </Button>
      </div>

      <Card>
        <CardContent className="overflow-x-auto p-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nom</TableHead>
                <TableHead>Secteur</TableHead>
                <TableHead>Créé le</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {entreprises.map((e) => (
                <TableRow key={e.id}>
                  <TableCell>{e.nom}</TableCell>
                  <TableCell>{e.secteur}</TableCell>
                  <TableCell>{new Date(e.created_at).toLocaleDateString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
