import { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@/lib/supabase";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { message, feedback } = req.body;
  const supabase = createClient();

  await supabase.from("intent_training").insert([
    { message, feedback }
  ]);

  res.status(200).json({ status: "ok" });
}
