// ✅ FloatingChat.tsx — avec insertion Supabase automatique des messages IA

"use client";

import { useState, useEffect, useRef } from "react";
import { MessageCircle, X } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function FloatingChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "ia", text: "💬 Bonjour ! Posez-moi une question sur nos services." }
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    const value = inputRef.current?.value;
    if (!value?.trim()) return;

    const userMessage = { from: "user", text: value };
    setMessages((prev) => [...prev, userMessage]);
    if (inputRef.current) inputRef.current.value = "";

    await supabase.from("chat_messages").insert([{ role: "user", content: value }]);

    const res = await fetch("/api/openai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: value })
    });

    const data = await res.json();
    const aiText = data.result || "Merci pour votre message.";
    const aiMessage = { from: "ia", text: `🤖 ${aiText}` };
    setMessages((prev) => [...prev, aiMessage]);

    await supabase.from("chat_messages").insert([{ role: "assistant", content: aiText }]);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700"
        >
          <MessageCircle size={20} />
        </button>
      ) : (
        <div className="w-80 bg-white border border-gray-200 rounded-xl shadow-xl flex flex-col">
          <div className="flex items-center justify-between bg-indigo-600 text-white p-3 rounded-t-xl">
            <span className="font-semibold text-sm">Assistant NovaCore IA</span>
            <button onClick={() => setOpen(false)}><X size={18} /></button>
          </div>

          <div
            className="flex-1 overflow-y-auto p-3 text-sm space-y-2 text-gray-800 h-64"
            ref={scrollRef}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-md max-w-xs ${msg.from === "user" ? "bg-gray-100 self-end ml-auto" : "bg-indigo-50 text-indigo-700"}`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <form onSubmit={sendMessage} className="p-3 border-t">
            <input
              ref={inputRef}
              type="text"
              placeholder="Votre question..."
              className="w-full border px-3 py-2 text-sm rounded-md focus:outline-none focus:ring"
            />
          </form>
        </div>
      )}
    </div>
  );
}
