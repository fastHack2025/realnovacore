"use client"

import { useEffect, useState } from "react"

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent")
    if (!consent) setVisible(true)
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie_consent", "accepted")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 bg-white border shadow-lg rounded-xl p-4 md:max-w-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
      <span className="text-sm text-gray-700">
        Ce site utilise des cookies pour améliorer votre expérience.
      </span>
      <button
        onClick={acceptCookies}
        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition text-sm"
      >
        J’accepte
      </button>
    </div>
  )
}
