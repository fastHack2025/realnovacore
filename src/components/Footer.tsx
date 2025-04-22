"use client"

import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 shadow-inner mt-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        {/* Logo central */}
        <div className="flex flex-col items-center md:items-start">
          <Image
            src="https://res.cloudinary.com/dko5sommz/image/upload/v1743895989/1_f3thi3.png"
            alt="Logo DL Solutions"
            width={80}
            height={80}
            className="rounded-full mb-4 border border-white shadow-md"
          />
          <p className="text-center md:text-left text-gray-400">
            DL Solutions SARL - Innovation et performance client à Yaoundé.
          </p>
        </div>

        {/* Liens utiles */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-3 text-white">Navigation</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/" className="hover:text-white">Accueil</a></li>
            <li><a href="/services" className="hover:text-white">Services</a></li>
            <li><a href="/formations" className="hover:text-white">Formations</a></li>
            <li><a href="/connexion" className="hover:text-white">Connexion</a></li>
            <li><a href="/inscription" className="hover:text-white">S’inscrire</a></li>
          </ul>
        </div>

        {/* Contact / Réseaux */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-3 text-white">Contact</h3>
          <p className="text-gray-400">Bastos, Yaoundé - Cameroun</p>
          <p className="text-gray-400">Email : contact@dlsolutions.com</p>
          <p className="text-gray-400">Tel : +237 694 34 15 86</p>

          <div className="flex justify-center md:justify-start mt-4 space-x-4">
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-8 text-xs">
        &copy; {new Date().getFullYear()} DL Solutions. Tous droits réservés.
      </div>
    </footer>
  )
}
