import { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@/lib/supabase";

const supabase = createClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { title, image_url, description } = req.body;
    const { data, error } = await supabase.from("portfolio").insert([{ title, image_url, description }]);
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ message: "Projet portfolio ajouté", data });
  }
  res.status(405).json({ error: "Méthode non autorisée" });
}
