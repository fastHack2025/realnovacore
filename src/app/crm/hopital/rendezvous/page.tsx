"use client";

import { Table, TableBody, TableHead, TableHeader, TableRow, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const rdvs = [
  { patient: "Jean Dupont", date: "2025-04-26", heure: "14h30" },
  { patient: "Marie Lemoine", date: "2025-04-26", heure: "15h00" },
];

export default function RendezVousPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold text-indigo-700 mb-4">📅 Rendez-vous</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Patient</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Heure</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rdvs.map((r, i) => (
            <TableRow key={i}>
              <TableCell>{r.patient}</TableCell>
              <TableCell>{r.date}</TableCell>
              <TableCell>{r.heure}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm">Voir</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
}
