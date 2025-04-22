'use client';

import { useEffect, useRef, useState } from "react";
import { supabase } from "@/lib/supabase";
import { SendHorizonal, MessageCircle } from "lucide-react";

export default function ChatbotDavy() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<string[]>(["Bonjour je suis Davy, puis-je t'aider ?"]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 20000); // Apparaît après 20s
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    const updatedMessages = [...messages, `👤 ${userMessage}`];
    setMessages(updatedMessages);
    setInput('');

    // ✅ Enregistrer le message utilisateur
    await supabase.from("davy_messages").insert({
      user_id: null, // Plus tard avec Clerk auth
      role: "user",
      content: userMessage,
    });

    // ✅ Réponse automatique de l'IA simulée
    setTimeout(async () => {
      const aiResponse = "🤖 Davy : Je suis encore en apprentissage mais je vais t'aider au mieux.";
      const finalMessages = [...updatedMessages, aiResponse];
      setMessages(finalMessages);

      // ✅ Enregistrer la réponse IA
      await supabase.from("davy_messages").insert({
        user_id: null,
        role: "assistant",
        content: aiResponse,
      });
    }, 1000);
  };

  return visible ? (
    <div className="fixed bottom-6 right-6 z-50 text-sm">
      {expanded ? (
        <div className="w-80 h-96 bg-white border border-gray-300 rounded-xl shadow-lg flex flex-col">
          <div className="bg-indigo-600 text-white p-3 rounded-t-xl font-semibold flex justify-between items-center">
            <span>Davy – Assistant IA</span>
            <button onClick={() => setExpanded(false)} className="text-white text-lg">×</button>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-2 text-gray-800">
            {messages.map((msg, idx) => (
              <div key={idx} className="whitespace-pre-line">{msg}</div>
            ))}
            <div ref={bottomRef} />
          </div>

          <div className="p-2 border-t flex gap-2">
            <input
              className="flex-1 border border-gray-300 px-3 py-2 rounded-md focus:outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Écris ici..."
            />
            <button
              className="bg-indigo-600 text-white px-3 py-2 rounded-md hover:bg-indigo-700"
              onClick={sendMessage}
            >
              <SendHorizonal size={16} />
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setExpanded(true)}
          className="w-14 h-14 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-lg flex items-center justify-center animate-bounce"
          title="Davy – Chatbot IA"
        >
          <MessageCircle size={24} />
        </button>
      )}
    </div>
  ) : null;
}
