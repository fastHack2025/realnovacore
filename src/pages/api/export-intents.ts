import { createClient } from "@/lib/supabase";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  const supabase = createClient();
  const { data, error } = await supabase.from("intent_logs").select("*");

  if (error) return res.status(500).json({ error });

  const csv = [
    "Message,Intent,Page,Date",
    ...data.map((log) =>
      `"${log.message.replace(/"/g, "'")}",${log.intent},${log.page},${log.created_at}`
    ),
  ].join("\n");

  res.setHeader("Content-Type", "text/csv");
  res.setHeader("Content-Disposition", "attachment; filename=intentions.csv");
  res.status(200).send(csv);
}
