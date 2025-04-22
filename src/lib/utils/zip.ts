import JSZip from "jszip";

export async function generateMonthlyZip(factures: any[]) {
  const zip = new JSZip();

  for (const f of factures) {
    const url = `https://your-supabase-url.storage.supabase.co/storage/v1/object/public/factures/facture-${f.id}.pdf`;
    const res = await fetch(url);
    const blob = await res.arrayBuffer();
    zip.file(`facture-${f.id}.pdf`, blob);
  }

  return await zip.generateAsync({ type: "uint8array" });
}
