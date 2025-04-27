// 📁 src/pages/api/assistant-devis.ts
import { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end("Méthode non autorisée");

  try {
    const { message } = req.body;

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content:
            "Tu es un assistant IA qui aide à proposer des devis personnalisés selon le besoin exprimé.",
        },
        { role: "user", content: message },
      ],
    });

    const output = response.choices[0]?.message?.content;
    res.status(200).json({ response: output });
  } catch (err: any) {
    console.error("OpenAI error:", err);
    res.status(500).json({ error: "Erreur de traitement IA." });
  }
}
