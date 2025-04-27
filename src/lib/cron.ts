// lib/cron.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    console.log("CRON JOB Triggered at:", new Date().toISOString());
    // Exécute ici ton code programmé : backup, notifications, etc.

    res.status(200).json({ message: "CRON executed successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
