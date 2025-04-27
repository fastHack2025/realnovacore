import { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@/lib/supabase"; // Assure-toi que Supabase est configuré !

const supabase = createClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, email, phone, notes } = req.body;
    const { data, error } = await supabase.from("crm_clients").insert([{ name, email, phone, notes }]);
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ message: "Client ajouté avec succès", data });
  }
  res.status(405).json({ error: "Méthode non autorisée" });
}
