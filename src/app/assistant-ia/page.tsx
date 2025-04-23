"use client";

import Link from "next/link";
import { FaUserTie, FaTools } from "react-icons/fa";

export default function AssistantIA() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white px-4 py-20">
      {/* 🎥 Vidéo de fond */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://res.cloudinary.com/dko5sommz/video/upload/v1744416232/background_abzanh.mp4"
          type="video/mp4"
        />
        Votre navigateur ne supporte pas la vidéo.
      </video>

      {/* 🖤 Overlay sombre pour lisibilité */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10" />

      {/* Contenu centré avec effet vitrine */}
      <div className="relative z-20 max-w-4xl w-full text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-10 drop-shadow-lg">
          Choisissez votre Assistant IA
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Assistant Community Manager */}
          <Link
            href="/assistant-ia/community-manager"
            className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl p-8 text-white hover:scale-105 transition-all shadow-xl hover:shadow-2xl"
          >
            <div className="text-indigo-300 text-5xl mb-4 drop-shadow-sm">
              <FaUserTie />
            </div>
            <h2 className="text-xl font-semibold mb-2">Assistant Community Manager</h2>
            <p className="text-sm text-gray-100">
              Générez des posts, planifiez du contenu, gérez vos réseaux comme un pro.
            </p>
          </Link>

          {/* Assistant IT */}
          <Link
            href="/assistant-ia/it"
            className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl p-8 text-white hover:scale-105 transition-all shadow-xl hover:shadow-2xl"
          >
            <div className="text-emerald-300 text-5xl mb-4 drop-shadow-sm">
              <FaTools />
            </div>
            <h2 className="text-xl font-semibold mb-2">Assistant IT</h2>
            <p className="text-sm text-gray-100">
              Générez du code, résolvez des bugs, développez plus vite avec l’IA.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
