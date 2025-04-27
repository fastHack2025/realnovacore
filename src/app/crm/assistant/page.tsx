"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase";

export default function AssistantCRMPage() {
  const supabase = createClient();
  const [conversations, setConversations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchConversations() {
      const { data, error } = await supabase.from("chat_messages").select("*").order("created_at", { ascending: false });
      if (!error) {
        setConversations(data || []);
      }
      setLoading(false);
    }
    fetchConversations();
  }, [supabase]);

  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 p-8">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-2 animate-fadeInUp">🤖 Assistant IA NovaCore</h1>
        <p className="text-lg text-gray-600 animate-fadeInUp">Historique des conversations IA avec vos clients/patients.</p>
      </header>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="loader animate-bounce">Chargement...</div>
        </div>
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {conversations.map((conv) => (
            <div key={conv.id} className="p-6 rounded-lg shadow-md bg-white hover:shadow-2xl transition transform hover:scale-105 animate-zoomIn">
              <h2 className="text-xl font-semibold">🧠 {conv.prompt.slice(0, 40)}...</h2>
              <p className="text-gray-600">Réponse IA : {conv.reply.slice(0, 60)}...</p>
              <p className="text-gray-400 text-sm">⏱️ {new Date(conv.created_at).toLocaleString()}</p>
            </div>
          ))}
        </section>
      )}

      <footer className="mt-16 text-center text-gray-500 text-sm animate-fadeInUp">
        &copy; {new Date().getFullYear()} NovaCore CRM - Tous droits réservés.
      </footer>
    </main>
  );
}
