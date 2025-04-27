"use client";

import Link from "next/link";

export default function RealisationsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center overflow-x-hidden">
      
      {/* Hero Section Portfolio */}
      <section className="relative w-full h-[80vh] flex items-center justify-center bg-black overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-[-1]"
          src="https://res.cloudinary.com/dko5sommz/video/upload/v1745331051/mon_site_web_aqda4c.mkv"
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-xl">Nos Réalisations</h1>
          <p className="mt-4 text-lg md:text-2xl max-w-2xl mx-auto drop-shadow-lg">
            Découvrez nos projets haut de gamme dans le digital et l'IA.
          </p>
        </div>
      </section>

      {/* Logo Davy AI Assistant */}
      <div className="mt-10">
        <img
          src="https://res.cloudinary.com/dko5sommz/image/upload/v1745432395/helpdesk_owpjxn.gif"
          alt="Davy AI Assistant"
          className="w-24 h-24 rounded-full shadow-xl animate-bounce"
        />
      </div>

      {/* Section Médias / Projets */}
      <section className="max-w-7xl w-full px-6 py-20 flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bold text-indigo-700 mb-12 text-center">Découvrez nos univers</h2>

        {/* Grid des images */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <img
            src="https://res.cloudinary.com/dko5sommz/image/upload/v1745431190/twiter_mzyujj.jpg"
            alt="Twitter X"
            className="rounded-full w-24 h-24 mx-auto hover:scale-110 transition-transform shadow-md"
          />
          <img
            src="https://res.cloudinary.com/dko5sommz/image/upload/v1745431188/instagram_ixnsiq.jpg"
            alt="Instagram"
            className="rounded-full w-24 h-24 mx-auto hover:scale-110 transition-transform shadow-md"
          />
          <img
            src="https://res.cloudinary.com/dko5sommz/image/upload/v1745431187/whatsapp_pixhht.jpg"
            alt="WhatsApp"
            className="rounded-full w-24 h-24 mx-auto hover:scale-110 transition-transform shadow-md"
          />
          <img
            src="https://res.cloudinary.com/dko5sommz/image/upload/v1745431183/tiktok_tqe6vk.jpg"
            alt="TikTok"
            className="rounded-full w-24 h-24 mx-auto hover:scale-110 transition-transform shadow-md"
          />
          <img
            src="https://res.cloudinary.com/dko5sommz/image/upload/v1745431179/facebook_vlin9i.jpg"
            alt="Facebook"
            className="rounded-full w-24 h-24 mx-auto hover:scale-110 transition-transform shadow-md"
          />
          <img
            src="https://res.cloudinary.com/dko5sommz/image/upload/v1745424905/0f86075d899c9069b235c23b792d70ef_tg1wku.jpg"
            alt="Carte Bancaire"
            className="rounded-full w-24 h-24 mx-auto hover:scale-110 transition-transform shadow-md"
          />
          <img
            src="https://res.cloudinary.com/dko5sommz/image/upload/v1745424901/paypal_kecrcr.jpg"
            alt="Paypal"
            className="rounded-full w-24 h-24 mx-auto hover:scale-110 transition-transform shadow-md"
          />
          <img
            src="https://res.cloudinary.com/dko5sommz/image/upload/v1745424899/mobile_money_k7d2rg.jpg"
            alt="Mobile Money"
            className="rounded-full w-24 h-24 mx-auto hover:scale-110 transition-transform shadow-md"
          />
          <img
            src="https://res.cloudinary.com/dko5sommz/image/upload/v1745424893/orange_money_gwziqy.jpg"
            alt="Orange Money"
            className="rounded-full w-24 h-24 mx-auto hover:scale-110 transition-transform shadow-md"
          />
        </div>

        {/* Retour Accueil */}
        <div className="mt-16">
          <Link href="/">
            <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-full shadow-lg transition-all">
              Retour à l'accueil
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
