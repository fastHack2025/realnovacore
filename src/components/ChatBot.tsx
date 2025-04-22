"use client"

import { useState, useEffect } from "react"

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [showBubble, setShowBubble] = useState(false)

  const handleToggle = () => {
    setOpen(!open)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBubble(true)
    }, 20000) // 20s

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {showBubble && !open && (
        <div className="fixed bottom-24 right-6 z-50 bg-white border border-gray-300 rounded-lg shadow-lg px-4 py-2 text-sm text-gray-800 animate-fade-in max-w-xs">
          Bonjour je suis <strong>Davy</strong>, comment puis-je t’assister ?
        </div>
      )}

      <button
        onClick={handleToggle}
        className="fixed bottom-6 right-6 z-50 rounded-full p-2 bg-white shadow-xl border border-gray-200 hover:shadow-2xl transition"
      >
        <img
          src="https://res.cloudinary.com/dko5sommz/image/upload/v1745209518/original-be7870269cb8092d7eb6f9e3435eda7c_hglam0.gif"
          alt="Chatbot Davy"
          className="w-12 h-12 object-contain"
        />
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 h-96 bg-white border border-gray-300 rounded-lg shadow-xl p-4 animate-fade-in flex flex-col">
          <h3 className="text-sm font-semibold mb-2 text-violet-600">Chat avec Davy</h3>
          <div className="flex-1 bg-gray-50 rounded-md p-2 text-sm text-gray-700 overflow-auto">
            <p className="mb-2">👋 Bonjour, comment puis-je t’aider aujourd’hui ?</p>
            <p className="text-xs text-gray-400 italic">Réponses automatiques alimentées par IA</p>
          </div>
          <input
            type="text"
            placeholder="Posez une question..."
            className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>
      )}
    </>
  )
}
