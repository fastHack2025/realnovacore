"use client";

export default function HeroDL() {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
        src="https://res.cloudinary.com/dko5sommz/video/upload/v1745467451/8466300-uhd_3840_2160_25fps_tcmaba.mp4"
      />
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-xl animate-fade-in-up">
          Bienvenue sur <span className="text-indigo-400">NovaCore</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl animate-slide-in">
          Une plateforme IA tout-en-un pour transformer votre activité. 
          CRM, contenus intelligents, automatisation… Le futur est là.
        </p>
        <div className="mt-8">
          <a href="#modules" className="bg-indigo-600 hover:bg-indigo-700 transition px-6 py-3 rounded-xl shadow-lg text-white font-semibold animate-zoom-in">
            Découvrir les modules
          </a>
        </div>
      </div>
    </section>
  );
}
