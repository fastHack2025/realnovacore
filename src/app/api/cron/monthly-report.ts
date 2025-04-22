import { Resend } from "resend";
import { supabase } from "@/lib/supabase";
import { generateMonthlyZip } from "@/lib/utils/zip";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY!);

export const runtime = "edge";

export async function GET() {
  const now = new Date();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();

  const { data } = await supabase
    .from("paiements")
    .select("id, user:auth.users(email), created_at")
    .eq("statut", "Validé");

  const duMois = data?.filter((f) => {
    const d = new Date(f.created_at);
    return d.getMonth() + 1 === month && d.getFullYear() === year;
  });

  if (!duMois?.length) return NextResponse.json({ msg: "Aucune facture" });

  const zipBuffer = await generateMonthlyZip(duMois);

  await resend.emails.send({
    from: "NovaCore <admin@novacore.com>",
    to: "compta@novacore.com",
    subject: `📊 Rapport Factures ${month}/${year}`,
    html: `<p>Voici le .zip des factures validées ce mois-ci.</p>`,
    attachments: [
      {
        filename: `factures-${month}-${year}.zip`,
        content: Buffer.from(zipBuffer).toString("base64"),
        type: "application/zip",
      },
    ],
  });

  return NextResponse.json({ success: true });
}
