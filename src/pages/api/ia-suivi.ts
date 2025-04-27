import { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { patient } = req.body;

  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content:
          "Analyse le profil santé du patient et retourne une prédiction IA sur les alertes médicales potentielles dans les 30 prochains jours.",
      },
      {
        role: "user",
        content: JSON.stringify(patient),
      },
    ],
  });

  res.status(200).json({ prediction: response.choices[0]?.message?.content });
}
