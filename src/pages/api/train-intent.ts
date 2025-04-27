import { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@/lib/supabaseClient";

const supabase = createClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const { user_input, detected_intent, ideal_response } = req.body;

  const { error } = await supabase.from("intent_training").insert({
    user_input,
    detected_intent,
    ideal_response,
  });

  if (error) return res.status(500).json({ error });
  res.status(200).json({ message: "✅ Entraînement ajouté avec succès" });
}
