'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroDL() {
  const [showLogo, setShowLogo] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowLogo(true), 300);
    const timer2 = setTimeout(() => setShowText(true), 900);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* 🎥 Vidéo de fond */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://res.cloudinary.com/dko5sommz/video/upload/v1744416795/page1_cfuzxw.mp4"
          type="video/mp4"
        />
        Votre navigateur ne supporte pas la vidéo.
      </video>

      {/* 🖤 Overlay foncé */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 z-10" />

      {/* 👑 Logo qui tombe */}
      <div
        className={`relative z-20 flex justify-center transition-all duration-1000 ease-out transform ${
          showLogo ? "translate-y-0 opacity-100" : "-translate-y-16 opacity-0"
        }`}
      >
        <Image
          src="https://res.cloudinary.com/dko5sommz/image/upload/v1744370550/logo-novacore_iqi2pd.png"
          alt="Logo NovaCore"
          width={100}
          height={100}
          className="drop-shadow-xl"
        />
      </div>

      {/* 🧠 Texte animé */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full px-4 text-center space-y-6 mt-[-50px]">
        <h1
          className={`text-4xl md:text-6xl font-extrabold leading-tight max-w-4xl transition-opacity duration-1000 ${
            showText ? "opacity-100" : "opacity-0"
          }`}
        >
          L’IA au service de votre relation client
        </h1>
        <p
          className={`text-lg md:text-xl max-w-2xl text-gray-300 transition-opacity duration-1000 delay-200 ${
            showText ? "opacity-100" : "opacity-0"
          }`}
        >
          Automatisez. Optimisez. Gagnez en impact. Avec NovaCore, transformez votre entreprise grâce à l’IA.
        </p>
        <a
          href="/novacore"
          className={`px-8 py-4 bg-white text-black text-lg font-semibold rounded-xl hover:bg-gray-200 transition duration-300 ${
            showText ? "opacity-100" : "opacity-0"
          }`}
        >
          Découvrir NovaCore →
        </a>
      </div>
    </section>
  );
}
