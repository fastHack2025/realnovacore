"use client"

import { useRouter } from "next/navigation"

export default function CTASection() {
  const router = useRouter()

  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16 text-white text-center shadow-xl">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Votre transformation digitale commence ici.</h2>
        <p className="text-lg md:text-xl mb-6">
          Rejoignez des entreprises qui ont déjà amélioré leur expérience client grâce à nos solutions IA.
        </p>
        <button
          onClick={() => router.push("/connexion")}
          className="bg-white text-indigo-600 font-semibold px-8 py-3 rounded-full text-lg shadow-md hover:bg-gray-100 transition"
        >
          Commencer maintenant
        </button>
      </div>
    </section>
  )
}
