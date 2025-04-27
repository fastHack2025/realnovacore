"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Eye, FileEdit } from "lucide-react";

type Dossier = {
  id: number;
  patient: string;
  diagnostic: string;
  traitement: string;
  noteIA: string;
};

const dossiersMock: Dossier[] = [
  {
    id: 1,
    patient: "MBOG Sandra",
    diagnostic: "Hypertension sévère",
    traitement: "Bétabloquants, contrôle régulier",
    noteIA: "Risque élevé selon antécédents familiaux.",
  },
  {
    id: 2,
    patient: "KAMGA Alain",
    diagnostic: "Infection ORL",
    traitement: "Antibiotiques pendant 7 jours",
    noteIA: "Préconiser test allergie à la pénicilline.",
  },
];

export default function DossiersPage() {
  const [dossiers, setDossiers] = useState<Dossier[]>(dossiersMock);
  const [selectedDossier, setSelectedDossier] = useState<Dossier | null>(null);

  const [newNoteIA, setNewNoteIA] = useState("");

  const handleEditNoteIA = () => {
    if (!selectedDossier) return;
    setDossiers(dossiers.map((d) =>
      d.id === selectedDossier.id ? { ...d, noteIA: newNoteIA } : d
    ));
    setSelectedDossier(null);
    setNewNoteIA("");
  };

  return (
    <main className="p-8 space-y-8">
      <h1 className="text-3xl font-bold text-indigo-800">📁 Dossiers Médicaux</h1>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Patient</TableHead>
            <TableHead>Diagnostic</TableHead>
            <TableHead>Traitement</TableHead>
            <TableHead>IA</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dossiers.map((dossier) => (
            <TableRow key={dossier.id}>
              <TableCell>{dossier.patient}</TableCell>
              <TableCell>{dossier.diagnostic}</TableCell>
              <TableCell>{dossier.traitement}</TableCell>
              <TableCell>
                <Badge variant="outline">{dossier.noteIA.slice(0, 24)}...</Badge>
              </TableCell>
              <TableCell className="flex gap-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        setSelectedDossier(dossier);
                        setNewNoteIA(dossier.noteIA);
                      }}
                    >
                      <FileEdit className="w-4 h-4" /> Modifier
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Note IA – {dossier.patient}</DialogTitle>
                    </DialogHeader>
                    <Textarea
                      rows={4}
                      className="mt-4"
                      value={newNoteIA}
                      onChange={(e) => setNewNoteIA(e.target.value)}
                    />
                    <Button onClick={handleEditNoteIA} className="mt-4 w-full">
                      Sauvegarder la note IA
                    </Button>
                  </DialogContent>
                </Dialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
}
