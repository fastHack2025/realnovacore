"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

interface PromptItem {
  id: string;
  prompt: string;
  response: string;
  created_at: string;
  category?: string;
  favorite: boolean;
  user_id: string;
}

export default function StudioPage() {
  const { user } = useUser();
  const router = useRouter();

  const [prompts, setPrompts] = useState<PromptItem[]>([]);
  const [input, setInput] = useState("");
  const [category, setCategory] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState<PromptItem[]>([]);

  useEffect(() => {
    if (user && !user.id) router.push("/");
  }, [user]);

  useEffect(() => {
    if (user?.id) fetchPrompts();
  }, [user]);

  useEffect(() => {
    const lower = search.toLowerCase();
    setFiltered(
      prompts.filter(
        (p) =>
          p.prompt.toLowerCase().includes(lower) ||
          p.response.toLowerCase().includes(lower) ||
          p.category?.toLowerCase().includes(lower)
      )
    );
  }, [search, prompts]);

  const fetchPrompts = async () => {
    const { data, error } = await supabase
      .from("studio_prompts")
      .select("*")
      .eq("user_id", user?.id)
      .order("created_at", { ascending: false });

    if (data) setPrompts(data);
    if (error) toast.error("Erreur lors du chargement");
  };

  const handleSubmit = async () => {
    if (!input.trim()) return toast.error("Prompt vide");
    setLoading(true);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: input }),
      });

      const json = await res.json();
      const aiResponse = json?.result || "Aucune réponse générée.";

      const newPrompt: PromptItem = {
        id: uuidv4(),
        prompt: input,
        response: aiResponse,
        category: category || "Général",
        created_at: new Date().toISOString(),
        favorite: false,
        user_id: user!.id,
      };

      await supabase.from("studio_prompts").insert([newPrompt]);

      setPrompts((prev) => [newPrompt, ...prev]);
      setInput("");
      setCategory("");
      setResponse(aiResponse);
    } catch (err) {
      toast.error("Erreur IA");
    }

    setLoading(false);
  };

  const toggleFavorite = async (id: string) => {
    const updated = prompts.map((p) =>
      p.id === id ? { ...p, favorite: !p.favorite } : p
    );
    setPrompts(updated);

    const target = updated.find((p) => p.id === id);
    if (target) {
      await supabase
        .from("studio_prompts")
        .update({ favorite: target.favorite })
        .eq("id", id);
    }
  };

  const deletePrompt = async (id: string) => {
    await supabase.from("studio_prompts").delete().eq("id", id);
    setPrompts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">🧠 Studio IA</h1>

      <div className="mb-6 flex gap-4 flex-col md:flex-row">
        <input
          className="w-full p-2 border rounded"
          placeholder="Tape ton prompt..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <input
          className="w-full p-2 border rounded"
          placeholder="Catégorie (ex: SEO, Vidéo...)"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "⏳..." : "Générer"}
        </button>
      </div>

      {response && (
        <div className="mb-6 bg-gray-100 p-4 rounded border">
          <h2 className="font-semibold">🧾 Résultat :</h2>
          <p>{response}</p>
        </div>
      )}

      <div className="mb-4">
        <input
          className="w-full p-2 border rounded"
          placeholder="🔍 Rechercher un prompt, une réponse ou une catégorie..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid gap-4">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="border p-4 rounded bg-white shadow-sm relative"
          >
            <div className="absolute top-2 right-2 flex gap-2">
              <button onClick={() => toggleFavorite(item.id)}>
                {item.favorite ? "⭐" : "☆"}
              </button>
              <button onClick={() => deletePrompt(item.id)}>🗑️</button>
            </div>
            <p className="text-sm text-gray-500">
              {new Date(item.created_at).toLocaleString()} •{" "}
              <span className="italic">{item.category}</span>
            </p>
            <h3 className="font-semibold">🗣️ {item.prompt}</h3>
            <p className="mt-2 whitespace-pre-wrap">{item.response}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
