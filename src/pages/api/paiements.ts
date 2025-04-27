import { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@/lib/supabase";

const supabase = createClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { amount, method, status, customer } = req.body;
    const { data, error } = await supabase.from("paiements").insert([{ amount, method, status, customer }]);
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ message: "Paiement enregistré", data });
  }
  res.status(405).json({ error: "Méthode non autorisée" });
}
