import { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { dataSet } = req.body;

  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      { role: "system", content: "Tu es DAVY, assistant médical IA. Étudie ce dataset pour mieux répondre aux besoins hospitaliers." },
      { role: "user", content: JSON.stringify(dataSet) }
    ]
  });

  res.status(200).json({ status: "trained", response: response.choices[0].message.content });
}
