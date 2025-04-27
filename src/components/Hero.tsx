'use client';

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-black text-white">
      {/* Background Video */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/images/hero-placeholder.jpg"
          className="w-full h-full object-cover"
        >
          <source src="/videos/background.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la vidéo HTML5.
        </video>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80"></div>

      {/* Content */}
      <div className="relative z-10 px-6 text-center space-y-6 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight animate-fadeIn">
          Bienvenue chez <span className="text-indigo-400">DL Solutions</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 animate-fadeInUp">
          L'innovation au service de votre réussite digitale et humaine.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="/contact"
            className="btn-primary hover:glow"
          >
            Nous Contacter
          </a>
          <a
            href="/services"
            className="btn-secondary hover:glow"
          >
            Voir nos services
          </a>
        </div>
      </div>
    </section>
  );
}
