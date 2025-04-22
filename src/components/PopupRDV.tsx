"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function PopupRDV() {
  const [visible, setVisible] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true)
    }, 40000) // 40 secondes

    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center animate-fade-in">
      <div className="bg-white p-6 rounded-xl shadow-2xl max-w-md w-full text-center relative">
        <button
          onClick={() => setVisible(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-lg font-bold"
        >
          ✕
        </button>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Planifiez un rendez-vous 📅</h3>
        <p className="text-sm text-gray-600 mb-4">
          Notre équipe est prête à vous accompagner dans votre transformation digitale.
        </p>
        <button
          onClick={() => router.push("/rdv")}
          className="bg-violet-600 text-white px-4 py-2 rounded-full hover:bg-violet-700 transition"
        >
          Prendre RDV maintenant
        </button>
      </div>
    </div>
  )
}
