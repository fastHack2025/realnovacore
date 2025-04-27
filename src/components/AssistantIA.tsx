"use client";

import { useState } from "react";
import { FaTimes, FaComments } from "react-icons/fa";

export default function AssistantIA() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Bouton flottant d'ouverture */}
      {!open && (
        <button
          className="fixed bottom-6 right-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full p-4 shadow-lg animate-bounce z-50"
          onClick={() => setOpen(true)}
        >
          <FaComments size={24} />
        </button>
      )}

      {/* Fenêtre du chatbot */}
      {open && (
        <div className="fixed bottom-6 right-6 w-80 h-96 bg-white rounded-lg shadow-2xl z-50 overflow-hidden flex flex-col">
          {/* Header */}
          <div className="bg-indigo-600 text-white p-3 flex justify-between items-center">
            <span>Assistant Davy 🤖</span>
            <button onClick={() => setOpen(false)}>
              <FaTimes size={20} />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 p-4 overflow-auto">
            <p>Bonjour 👋! Je suis Davy, votre assistant IA.</p>
            <p className="mt-2 text-sm text-gray-600">
              Comment puis-je vous aider aujourd'hui ?
            </p>
            {/* Ici future zone de chat/messages */}
          </div>

          {/* Footer */}
          <div className="p-2 bg-gray-100 text-center text-xs">
            NovaCore © 2025
          </div>
        </div>
      )}
    </>
  );
}
