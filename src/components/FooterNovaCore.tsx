"use client"

import Image from "next/image"

export default function FooterNovaCore() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Logo dans un cercle */}
        <div className="flex items-center space-x-3">
          <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg">
            <Image
              src="https://res.cloudinary.com/dko5sommz/image/upload/v1744370550/logo-novacore_iqi2pd.png"
              alt="Logo NovaCore"
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
          <p className="text-xl font-bold tracking-tight">NovaCore</p>
        </div>

        {/* Liens rapides */}
        <div className="text-sm text-gray-300 flex flex-wrap gap-4 justify-center md:justify-end">
          <a href="/novacore" className="hover:text-white">Accueil</a>
          <a href="/novacore#modules" className="hover:text-white">Modules</a>
          <a href="/contact" className="hover:text-white">Contact</a>
          <a href="/politique" className="hover:text-white">Confidentialité</a>
        </div>
      </div>

      <div className="mt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Dave & Luce Solutions. Tous droits réservés.
      </div>
    </footer>
  )
}
