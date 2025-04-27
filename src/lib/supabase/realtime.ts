import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/types/supabase";

export const supabase = createBrowserSupabaseClient<Database>();

export function subscribeToPortfolio(onChange: () => void) {
  return supabase
    .channel("portfolio")
    .on("postgres_changes", { event: "*", schema: "public", table: "portfolio" }, () => {
      onChange();
    })
    .subscribe();
}

export function subscribeToRDV(onChange: () => void) {
  return supabase
    .channel("rdv")
    .on("postgres_changes", { event: "*", schema: "public", table: "rdv" }, () => {
      onChange();
    })
    .subscribe();
}

export function subscribeToPaiements(onChange: () => void) {
  return supabase
    .channel("paiements")
    .on("postgres_changes", { event: "*", schema: "public", table: "paiements" }, () => {
      onChange();
    })
    .subscribe();
}
