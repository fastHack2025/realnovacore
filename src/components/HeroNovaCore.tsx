"use client"

import React from "react"

export default function HeroNovaCore() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Vidéo en arrière-plan */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://res.cloudinary.com/dko5sommz/video/upload/v1744416795/page1_cfuzxw.mp4"
          type="video/mp4"
        />
        Votre navigateur ne prend pas en charge les vidéos HTML5.
      </video>

      {/* Filtre sombre */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Contenu centré */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
        <div className="max-w-3xl mx-auto text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
            NovaCore : La puissance de l’IA au service de votre entreprise
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-300">
            Automatisation. Performance. Intelligence. Découvrez notre suite SaaS complète.
          </p>
          <a
            href="/inscription"
            className="bg-white text-black font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-gray-200 transition duration-300"
          >
            Commencer maintenant
          </a>
        </div>
      </div>
    </section>
  )
}
