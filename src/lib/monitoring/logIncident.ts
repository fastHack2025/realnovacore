import { supabase } from "@/lib/supabase";

/**
 * Log un incident dans Supabase
 * @param status "UP" | "DOWN" | "WARNING"
 * @param message Description libre
 */
export async function logIncident(status: string, message: string) {
  const { error } = await supabase.from("monitor_logs").insert({
    status,
    message,
  });

  if (error) {
    console.error("❌ Erreur log incident:", error);
  } else {
    console.log("✅ Incident loggé:", status, message);
  }
}
