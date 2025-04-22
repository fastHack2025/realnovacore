import JSZip from "jszip";
import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function GET() {
  const zip = new JSZip();
  const now = new Date();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();

  const { data } = await supabase
    .from("paiements")
    .select("id, created_at")
    .eq("statut", "Validé");

  const facturesDuMois = data?.filter((f) => {
    const d = new Date(f.created_at);
    return d.getMonth() + 1 === month && d.getFullYear() === year;
  });

  for (const f of facturesDuMois || []) {
    const url = `https://your-supabase-url.storage.supabase.co/storage/v1/object/public/factures/facture-${f.id}.pdf`;
    const res = await fetch(url);
    const blob = await res.arrayBuffer();
    zip.file(`facture-${f.id}.pdf`, blob);
  }

  const zipBytes = await zip.generateAsync({ type: "uint8array" });
  return new NextResponse(zipBytes, {
    headers: {
      "Content-Type": "application/zip",
      "Content-Disposition": `attachment; filename=factures-${month}-${year}.zip`,
    },
  });
}
