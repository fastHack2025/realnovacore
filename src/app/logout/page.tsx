"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { toast } from "react-hot-toast";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    const logout = async () => {
      const { error } = await supabase.auth.signOut();
      if (error) {
        toast.error("Erreur à la déconnexion 😢");
      } else {
        toast.success("Déconnexion réussie 👋🏼");
      }
      router.push("/login");
    };

    logout();
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>Déconnexion en cours...</p>
    </div>
  );
}
