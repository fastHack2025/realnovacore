import fs from "fs";
import { createClient } from "@/lib/supabaseClient";

(async () => {
  const supabase = createClient();

  const { data, error } = await supabase.from("intent_training").select("*");
  if (error) throw new Error(error.message);

  const lines = data.map((item) => {
    return JSON.stringify({
      messages: [
        {
          role: "system",
          content: "Analyse ce message et retourne une intention métier.",
        },
        {
          role: "user",
          content: item.user_input,
        },
        {
          role: "assistant",
          content: item.detected_intent || "inconnue",
        },
      ],
    });
  });

  fs.writeFileSync("dataset-intent-training.jsonl", lines.join("\n"));
  console.log("✅ Export JSONL terminé.");
})();
