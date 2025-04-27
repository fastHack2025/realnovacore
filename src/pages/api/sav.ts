import { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";
import { createClient } from "@/lib/supabaseClient";

const supabase = createClient();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") return res.status(405).end();

  const { data, error } = await supabase.from("sav").select("*");
  if (error) return res.status(500).json({ error });

  // Génère une réponse IA si besoin
  for (const sav of data) {
    if (!sav.reponse) {
      const result = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          { role: "system", content: "Tu es un assistant SAV qui résout des problèmes clients avec courtoisie." },
          { role: "user", content: sav.message },
        ],
      });

      await supabase.from("sav").update({
        reponse: result.choices[0]?.message?.content,
      }).eq("id", sav.id);
    }
  }

  res.status(200).json(data);
}
