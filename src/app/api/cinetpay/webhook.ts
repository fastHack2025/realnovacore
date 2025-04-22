import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  const payload = await req.json();

  const { transaction_id, amount, payment_method, status, user_id } = payload;

  if (status === "ACCEPTED") {
    await supabase.from("paiements").insert([
      {
        montant: amount * 100,
        moyen: payment_method,
        statut: "Validé",
        user_id,
      },
    ]);
  }

  return NextResponse.json({ ok: true });
}
