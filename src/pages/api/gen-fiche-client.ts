import { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { message } = req.body;

  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      { role: "system", content: "Génère un profil client résumé dans un format clair (nom, besoin, secteur, niveau urgence, offre recommandée)." },
      { role: "user", content: message }
    ]
  });

  res.status(200).json({ fiche: response.choices[0]?.message?.content });
}
