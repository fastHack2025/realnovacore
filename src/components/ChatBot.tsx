// src/components/Chatbot.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Chatbot() {
  const [visible, setVisible] = useState(false);
  const [minimized, setMinimized] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 40000); // 40 secondes
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!minimized ? (
        <div className="w-80 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">Assistant Davy 🤖</h3>
            <button
              onClick={() => setMinimized(true)}
              className="text-gray-400 hover:text-primary transition"
            >
              ✖
            </button>
          </div>
          <div className="text-gray-600 dark:text-gray-300">
            Bonjour 👋🏼 ! Comment puis-je vous aider aujourd'hui ?
          </div>
          <div className="mt-4 flex justify-center">
            <button className="bg-primary hover:bg-secondary transition px-4 py-2 rounded-full text-white font-bold">
              Démarrer
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setMinimized(false)}
          className="flex items-center space-x-2 bg-primary hover:bg-secondary p-3 rounded-full shadow-xl"
        >
          <Image src="/icons/chatbot-gif.gif" alt="Chatbot" width={30} height={30} />
          <span className="text-white font-bold hidden md:block">Davy</span>
        </button>
      )}
    </div>
  );
}
