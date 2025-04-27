import { createClient } from "@/lib/supabase";

export async function logIntent({
  user_id,
  message,
  intent,
  page,
}: {
  user_id?: string;
  message: string;
  intent: string;
  page: string;
}) {
  const supabase = createClient();
  await supabase.from("intent_logs").insert([
    { user_id, message, intent, page },
  ]);
}
