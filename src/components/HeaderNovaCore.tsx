"use client"

import Link from "next/link"
import Image from "next/image"

export default function HeaderNovaCore() {
  return (
    <header className="bg-black text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo dans cercle blanc */}
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
            <Image
              src="https://res.cloudinary.com/dko5sommz/image/upload/v1744370550/logo-novacore_iqi2pd.png"
              alt="Logo NovaCore"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <span className="text-xl font-semibold tracking-tight">NovaCore</span>
        </div>

        {/* Menu simple */}
        <nav className="space-x-6 text-sm">
          <Link href="/novacore">Accueil</Link>
          <Link href="/connexion" className="hover:text-purple-400 transition">Connexion</Link>
          <Link href="/inscription" className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-full text-white text-sm font-medium shadow-md transition">
            S’inscrire
          </Link>
        </nav>
      </div>
    </header>
  )
}
