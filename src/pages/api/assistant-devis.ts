// /src/pages/api/assistant-devis.ts

import { NextApiRequest, NextApiResponse } from "next";
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!, // 🔐 Sécurisé via .env.local
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Méthode non autorisée" });
  }

  const { questions, answers, prompt } = req.body;

  let finalPrompt = "Tu es un assistant IA expert en relation client et en CRM. Sur la base des réponses d’un client, propose la meilleure offre parmi :\n\n" +
    "- Studio IA (création de contenus, scripts, prompts pour réseaux sociaux et web)\n" +
    "- CRM IA (gestion clients avec scoring, rappels automatiques, campagnes)\n" +
    "- Réseaux Sociaux IA (programmation, création et analyse de posts automatiquement)\n" +
    "- Paiements (facturation intégrée Stripe et CinetPay avec factures PDF automatiques)\n\n";

  if (prompt) {
    finalPrompt += `Client : ${prompt}\nAssistant :`;
  } else {
    finalPrompt += questions.map((q: string, i: number) => `Q: ${q}\nR: ${answers[i]}`).join("\n") + "\n\nAssistant :";
  }

  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: finalPrompt }],
      model: "gpt-4",
      temperature: 0.7,
      max_tokens: 500,
    });

    const result = completion.choices[0].message?.content || "Je n’ai pas compris la demande.";
    res.status(200).json({ result });
  } catch (error) {
    console.error("Erreur OpenAI:", error);
    res.status(500).json({ error: "Erreur de traitement IA" });
  }
}
