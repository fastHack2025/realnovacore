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

type Hospitalisation = {
  id: number;
  patient: string;
  service: string;
  lit: string;
  medecin: string;
  entree: string;
  sortie?: string;
};

const hospitalisationsInitiales: Hospitalisation[] = [
  {
    id: 1,
    patient: "MBOG Sandra",
    service: "Cardiologie",
    lit: "B203",
    medecin: "Dr. Etoundi",
    entree: "2025-04-21",
  },
  {
    id: 2,
    patient: "KAMGA Alain",
    service: "Radiologie",
    lit: "A105",
    medecin: "Dr. Fabrice",
    entree: "2025-04-23",
  },
];

export default function HospitalisationsPage() {
  const [hospitalisations, setHospitalisations] = useState<Hospitalisation[]>(hospitalisationsInitiales);
  const [newEntry, setNewEntry] = useState<Partial<Hospitalisation>>({});

  const handleAddHospitalisation = () => {
    if (!newEntry.patient || !newEntry.service || !newEntry.lit || !newEntry.medecin || !newEntry.entree) return;
    const id = hospitalisations.length + 1;
    setHospitalisations([...hospitalisations, { id, ...newEntry } as Hospitalisation]);
    setNewEntry({});
  };

  return (
    <main className="p-8 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-indigo-800">🏨 Hospitalisations</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <PlusCircle className="w-5 h-5" /> Ajouter une hospitalisation
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Nouvel enregistrement</DialogTitle>
            </DialogHeader>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4 mt-4">
              <div className="flex flex-col gap-2">
                <Label>Nom du patient</Label>
                <Input value={newEntry.patient || ''} onChange={(e) => setNewEntry({ ...newEntry, patient: e.target.value })} />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Service</Label>
                <select
                  className="p-2 border rounded-md"
                  value={newEntry.service || ''}
                  onChange={(e) => setNewEntry({ ...newEntry, service: e.target.value })}
                >
                  <option value="">Choisir</option>
                  <option value="Cardiologie">Cardiologie</option>
                  <option value="Pédiatrie">Pédiatrie</option>
                  <option value="ORL">ORL</option>
                  <option value="Radiologie">Radiologie</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <Label>Lit attribué</Label>
                <Input value={newEntry.lit || ''} onChange={(e) => setNewEntry({ ...newEntry, lit: e.target.value })} />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Médecin</Label>
                <Input value={newEntry.medecin || ''} onChange={(e) => setNewEntry({ ...newEntry, medecin: e.target.value })} />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Date d'entrée</Label>
                <Input type="date" value={newEntry.entree || ''} onChange={(e) => setNewEntry({ ...newEntry, entree: e.target.value })} />
              </div>
              <Button onClick={handleAddHospitalisation} className="w-full mt-4">
                Enregistrer
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
            <TableHead>Lit</TableHead>
            <TableHead>Médecin</TableHead>
            <TableHead>Entrée</TableHead>
            <TableHead>Statut</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {hospitalisations.map((hosp) => (
            <TableRow key={hosp.id}>
              <TableCell>{hosp.patient}</TableCell>
              <TableCell>{hosp.service}</TableCell>
              <TableCell>{hosp.lit}</TableCell>
              <TableCell>{hosp.medecin}</TableCell>
              <TableCell>{format(new Date(hosp.entree), "dd MMM yyyy", { locale: fr })}</TableCell>
              <TableCell>
                <Badge variant="default">En cours</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
}
