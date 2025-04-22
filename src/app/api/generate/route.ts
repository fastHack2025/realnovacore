import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const runtime = "edge"; // Peut aussi être "nodejs" si tu préfères

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const prompt = body.prompt?.trim();

    if (!prompt || prompt.length < 5) {
      return NextResponse.json({ error: "Prompt trop court ou invalide" }, { status: 400 });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "Tu es un assistant créatif, concis, et utile.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 800,
    });

    const result = completion.choices[0]?.message?.content || "Pas de réponse générée.";
    return NextResponse.json({ result });
  } catch (error: any) {
    console.error("Erreur GPT:", error.message);
    return NextResponse.json({ error: "Erreur serveur IA" }, { status: 500 });
  }
}
