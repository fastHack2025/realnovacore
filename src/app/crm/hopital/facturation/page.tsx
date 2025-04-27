"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { PlusCircle } from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

type Facture = {
  id: number;
  patient: string;
  service: string;
  montant: number;
  statut: "Payée" | "Impayée";
  date: string;
};

const facturesMock: Facture[] = [
  { id: 1, patient: "MBOG Sandra", service: "Cardiologie", montant: 35000, statut: "Payée", date: "2025-04-22" },
  { id: 2, patient: "KAMGA Alain", service: "ORL", montant: 15000, statut: "Impayée", date: "2025-04-23" },
];

export default function FacturationPage() {
  const [factures, setFactures] = useState<Facture[]>(facturesMock);
  const [newFacture, setNewFacture] = useState<Partial<Facture>>({});

  const handleAddFacture = () => {
    if (!newFacture.patient || !newFacture.service || !newFacture.montant || !newFacture.statut || !newFacture.date) return;
    const id = factures.length + 1;
    setFactures([...factures, { id, ...newFacture } as Facture]);
    setNewFacture({});
  };

  return (
    <main className="p-8 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-indigo-800">💳 Facturation Hospitalière</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <PlusCircle className="w-5 h-5" /> Nouvelle Facture
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Enregistrer une facture</DialogTitle>
            </DialogHeader>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4 mt-4">
              <div className="flex flex-col gap-2">
                <Label>Nom du patient</Label>
                <Input value={newFacture.patient || ''} onChange={(e) => setNewFacture({ ...newFacture, patient: e.target.value })} />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Service concerné</Label>
                <Input value={newFacture.service || ''} onChange={(e) => setNewFacture({ ...newFacture, service: e.target.value })} />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Montant (FCFA)</Label>
                <Input type="number" value={newFacture.montant || ''} onChange={(e) => setNewFacture({ ...newFacture, montant: parseInt(e.target.value) })} />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Statut</Label>
                <select
                  className="p-2 border rounded-md"
                  value={newFacture.statut || ''}
                  onChange={(e) => setNewFacture({ ...newFacture, statut: e.target.value as "Payée" | "Impayée" })}
                >
                  <option value="">Choisir</option>
                  <option value="Payée">Payée</option>
                  <option value="Impayée">Impayée</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <Label>Date</Label>
                <Input type="date" value={newFacture.date || ''} onChange={(e) => setNewFacture({ ...newFacture, date: e.target.value })} />
              </div>
              <Button onClick={handleAddFacture} className="w-full mt-4">
                Enregistrer la facture
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Patient</TableHead>
            <TableHead>Service</TableHead>
            <TableHead>Montant</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Statut</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {factures.map((f) => (
            <TableRow key={f.id}>
              <TableCell>{f.patient}</TableCell>
              <TableCell>{f.service}</TableCell>
              <TableCell>{f.montant.toLocaleString()} FCFA</TableCell>
              <TableCell>{format(new Date(f.date), "dd MMM yyyy", { locale: fr })}</TableCell>
              <TableCell>
                <Badge variant={f.statut === "Payée" ? "default" : "destructive"}>{f.statut}</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
}
