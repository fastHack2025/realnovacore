"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { utils, writeFile } from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { FileText } from "lucide-react";

export default function AdminInscriptionsPage() {
  const [inscrits, setInscrits] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase.from("inscriptions").select("*").order("created_at", { ascending: false });
      setInscrits(data || []);
    };
    fetchData();
  }, []);

  const exportExcel = () => {
    const sheet = utils.json_to_sheet(inscrits);
    const book = utils.book_new();
    utils.book_append_sheet(book, sheet, "Inscriptions");
    writeFile(book, "inscriptions.xlsx");
  };

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text("Liste des Inscriptions - DL Solutions", 14, 16);
    (doc as any).autoTable({
      startY: 20,
      head: [["Nom", "Email", "Téléphone", "Formation", "Paiement"]],
      body: inscrits.map((i) => [i.nom, i.email, i.tel, i.formation, i.moyen_paiement]),
    });
    doc.save("inscriptions.pdf");
  };

  return (
    <main className="min-h-screen px-6 py-12 bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <FileText className="w-6 h-6 text-blue-400" /> Inscriptions aux Formations
        </h1>

        <div className="flex gap-4 mb-6">
          <button
            onClick={exportPDF}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-sm"
          >
            📄 Export PDF
          </button>
          <button
            onClick={exportExcel}
            className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-sm"
          >
            📊 Export Excel
          </button>
        </div>

        <div className="overflow-x-auto rounded-lg border border-white/10">
          <table className="w-full text-sm text-white">
            <thead className="bg-white/10">
              <tr>
                <th className="p-2 text-left">Nom</th>
                <th className="p-2 text-left">Email</th>
                <th className="p-2 text-left">Téléphone</th>
                <th className="p-2 text-left">Formation</th>
                <th className="p-2 text-left">Paiement</th>
              </tr>
            </thead>
            <tbody>
              {inscrits.map((i, index) => (
                <tr key={index} className="odd:bg-white/5 even:bg-white/0">
                  <td className="p-2">{i.nom}</td>
                  <td className="p-2">{i.email}</td>
                  <td className="p-2">{i.tel}</td>
                  <td className="p-2">{i.formation}</td>
                  <td className="p-2">{i.moyen_paiement}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <footer className="mt-10 text-center text-sm text-white/70">
          <p>© Dave & Luce Solutions | Samuel OBAM made this</p>
          <p>📞 +237 694 34 15 86 — +237 620 21 62 17</p>
          <p>📧 samuelobaml@dlsolutions.com</p>
        </footer>
      </div>
    </main>
  );
}
