import { useEffect, useState } from "react";

interface IntentResult {
  intent: string;
  confidence: number;
}

export function useIntentDetector(message: string) {
  const [intent, setIntent] = useState<IntentResult | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!message || message.length < 2) return;

    const detect = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/train-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message }),
        });

        const text = await res.text();
        const data = text ? JSON.parse(text) : {};

        if (!res.ok || data.error) {
          throw new Error(data.error || "Erreur intent server");
        }

        setIntent({
          intent: data.intent || "unknown",
          confidence: data.confidence || 0,
        });
      } catch (err) {
        console.error("Erreur détection d’intention IA:", err);
        setIntent(null);
      } finally {
        setLoading(false);
      }
    };

    detect();
  }, [message]);

  return { intent, loading };
}
