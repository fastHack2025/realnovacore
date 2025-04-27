"use client";

import { useEffect, useRef, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ChatbotDavy() {
  const [visible, setVisible] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 20000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (visible) {
      setMessages(["🤖 Davy : Bonjour je suis Davy, puis-je t'aider ?"]);
    }
  }, [visible]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    const newMessages = [...messages, `👤 ${userMessage}`];
    setMessages(newMessages);
    setInput("");

    await supabase.from("chat_messages").insert({
      user_id: null,
      role: "user",
      message: userMessage,
    });

    setTimeout(async () => {
      const aiResponse = "🤖 Davy : Je suis encore en apprentissage mais je vais t'aider au mieux.";
      setMessages([...newMessages, aiResponse]);

      await supabase.from("chat_messages").insert({
        user_id: null,
        role: "assistant",
        message: aiResponse,
      });
    }, 1000);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-40 w-80 max-w-[90vw] bg-white rounded-xl shadow-lg border border-gray-200 animate-fade-in">
      <div className="flex items-center gap-2 px-4 py-2 border-b bg-indigo-50 rounded-t-xl">
        <img
          src="https://res.cloudinary.com/dko5sommz/image/upload/v1744744139/chatbot_la13t1.gif"
          alt="Davy Bot"
          className="w-10 h-10 rounded-full"
        />
        <p className="font-semibold text-indigo-700">Davy</p>
      </div>
      <div ref={chatRef} className="max-h-64 overflow-y-auto px-4 py-2 text-sm space-y-2">
        {messages.map((msg, idx) => (
          <p key={idx}>{msg}</p>
        ))}
      </div>
      <div className="flex items-center border-t px-4 py-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Écris un message..."
          className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-full focus:outline-none"
        />
        <button
          onClick={sendMessage}
          className="ml-2 px-3 py-1 bg-indigo-600 text-white rounded-full text-sm hover:bg-indigo-700"
        >
          Envoyer
        </button>
      </div>
    </div>
  );
}
