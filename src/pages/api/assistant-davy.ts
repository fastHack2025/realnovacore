import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";
import { supabase } from "@/lib/supabase-admin";
import { auth } from "@clerk/nextjs/server"; // Clerk 💳

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Méthode non autorisée" });

  const { message, session_id } = req.body;
  const { userId } = auth(); // 👤 récupération Clerk

  if (!message || !session_id || !userId)
    return res.status(400).json({ error: "Message, session_id ou utilisateur requis" });

  await supabase.from("chat_messages").insert({
    role: "user",
    content: message,
    session_id,
    user_id: userId,
  });

  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: message }],
      model: "gpt-4",
    });

    const response = completion.choices[0]?.message?.content || "Réponse IA indisponible.";

    await supabase.from("chat_messages").insert({
      role: "assistant",
      content: response,
      session_id,
      user_id: userId,
    });

    return res.status(200).json({ response });
  } catch (err: any) {
    console.error("Erreur OpenAI:", err);
    return res.status(500).json({ error: "Erreur serveur IA" });
  }
}
