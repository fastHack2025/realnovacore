"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function FloatingChat() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    if (open) {
      setHistory(["🤖 Davy : Salut 👋 Que puis-je faire pour toi aujourd’hui ?"]);
    }
  }, [open]);

  const sendMessage = async () => {
    if (!message.trim()) return;
    const userMessage = message.trim();
    setHistory((prev) => [...prev, `🧑 ${userMessage}`]);
    setMessage("");

    try {
      await supabase.from("chat_messages").insert({
        message: userMessage,
        role: "user",
        user_id: null,
      });

      // simulate AI response
      setTimeout(async () => {
        const reply = "🤖 Davy : Merci pour ton message ! Je reviendrai vers toi.";
        setHistory((prev) => [...prev, reply]);

        await supabase.from("chat_messages").insert({
          message: reply,
          role: "assistant",
          user_id: null,
        });
      }, 1000);
    } catch (error) {
      console.error("Erreur Supabase:", error);
      setHistory((prev) => [...prev, "⚠️ Erreur de communication avec Davy."]);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 bg-indigo-600 text-white rounded-full p-4 shadow-lg hover:bg-indigo-700 transition"
      >
        💬
      </button>

      {open && (
        <div className="fixed bottom-20 right-6 bg-white shadow-lg rounded-xl w-80 max-w-full z-40 border">
          <div className="p-4 border-b font-bold text-indigo-600">Davy IA</div>
          <div className="p-4 space-y-2 max-h-64 overflow-y-auto text-sm">
            {history.map((msg, idx) => (
              <p key={idx}>{msg}</p>
            ))}
          </div>
          <div className="flex items-center border-t p-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-full text-sm"
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage} className="ml-2 text-sm px-3 py-2 bg-indigo-500 text-white rounded-full">
              Envoyer
            </button>
          </div>
        </div>
      )}
    </>
  );
}
