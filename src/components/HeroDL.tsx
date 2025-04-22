'use client';

import React from "react";

export default function HeroDL() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* Vidéo de fond (correcte) */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://res.cloudinary.com/dko5sommz/video/upload/v1744416795/page1_cfuzxw.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la vidéo.
      </video>

      {/* Overlay sombre */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 z-10" />

      {/* Contenu texte */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full px-4 text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-4xl">
          L’IA au service de votre relation client
        </h1>
        <p className="text-lg md:text-xl max-w-2xl text-gray-300">
          Automatisez. Optimisez. Gagnez en impact. Avec NovaCore, transformez votre entreprise grâce à l’IA.
        </p>
        <a
          href="/novacore"
          className="px-8 py-4 bg-white text-black text-lg font-semibold rounded-xl hover:bg-gray-200 transition"
        >
          Découvrir NovaCore →
        </a>
      </div>
    </section>
  );
}
