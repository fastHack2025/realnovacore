"use client";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center text-center text-white">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
        src="/videos/background.mp4"
      />
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      <div className="relative z-10 px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-lg mb-4 animate-fade-in-down">
          DAVE & LUCE SOLUTIONS
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto animate-fade-in-up">
          L'innovation au service de votre succès
        </p>
      </div>
    </section>
  );
}
