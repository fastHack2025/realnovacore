"use client"

import Link from "next/link"
import { FaUserTie, FaTools } from "react-icons/fa"

export default function AssistantIA() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-white text-gray-800 px-4 py-20">
      <h1 className="text-3xl font-bold text-center mb-8">Choisissez votre Assistant IA</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl w-full">
        {/* Assistant CM */}
        <Link
          href="/assistant-ia/community-manager"
          className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl hover:scale-105 transition-transform"
        >
          <div className="text-indigo-600 text-5xl mb-4">
            <FaUserTie />
          </div>
          <h2 className="text-xl font-semibold mb-2">Assistant Community Manager</h2>
          <p className="text-gray-600">Gérez les réseaux sociaux, planifiez du contenu, générez des posts optimisés.</p>
        </Link>

        {/* Assistant IT */}
        <Link
          href="/assistant-ia/it"
          className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl hover:scale-105 transition-transform"
        >
          <div className="text-emerald-600 text-5xl mb-4">
            <FaTools />
          </div>
          <h2 className="text-xl font-semibold mb-2">Assistant IT</h2>
          <p className="text-gray-600">Générez des scripts, fichiers techniques, et déboguez avec l’aide de l’IA.</p>
        </Link>
      </div>
    </div>
  )
}
