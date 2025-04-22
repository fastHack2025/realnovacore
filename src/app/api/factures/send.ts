import { Resend } from "resend";
import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  const { paiement_id } = await req.json();

  const { data, error } = await supabase
    .from("paiements")
    .select("*, user:auth.users(email)")
    .eq("id", paiement_id)
    .single();

  if (!data || !data.user?.email) {
    return NextResponse.json({ error: "Introuvable" }, { status: 404 });
  }

  const url = `https://your-supabase-url.storage.supabase.co/storage/v1/object/public/factures/facture-${data.id}.pdf`;

  await resend.emails.send({
    from: "NovaCore <factures@novacore.com>",
    to: data.user.email,
    subject: "Rappel - Votre facture NovaCore",
    html: `<p>Bonjour,<br/>Voici votre facture : <a href="${url}">📄 Télécharger</a></p>`,
  });

  return NextResponse.json({ success: true });
}
