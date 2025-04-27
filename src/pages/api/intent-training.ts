import { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@/lib/supabaseClient";

const supabase = createClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { data, error } = await supabase.from("intent_training").select("*").order("created_at", { ascending: false });
  if (error) return res.status(500).json({ error });
  res.status(200).json(data);
}
