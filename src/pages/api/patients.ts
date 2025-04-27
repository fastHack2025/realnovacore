import { createClient } from "@/lib/supabase";
import { NextApiRequest, NextApiResponse } from "next";

const supabase = createClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { nom, date_naissance, etat } = req.body;
    const { data, error } = await supabase.from("patients").insert([{ nom, date_naissance, etat }]);

    if (error) return res.status(500).json({ error });
    return res.status(200).json({ data });
  }

  if (req.method === "GET") {
    const { data, error } = await supabase.from("patients").select("*").order("created_at", { ascending: false });

    if (error) return res.status(500).json({ error });
    return res.status(200).json({ data });
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
