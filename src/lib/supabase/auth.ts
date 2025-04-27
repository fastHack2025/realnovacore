// ✅ src/lib/supabase/auth.ts
import { createClient } from "./client";

// Connexion utilisateur
export async function signInWithEmail(email: string, password: string) {
  const supabase = createClient();
  const { error, data } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw new Error(error.message);
  return data;
}

// Inscription utilisateur
export async function signUpWithEmail(email: string, password: string) {
  const supabase = createClient();
  const { error, data } = await supabase.auth.signUp({ email, password });
  if (error) throw new Error(error.message);
  return data;
}

// Déconnexion utilisateur
export async function signOut() {
  const supabase = createClient();
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}
