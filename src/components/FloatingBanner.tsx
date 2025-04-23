"use client";

export default function FloatingBanner() {
  return (
    <div className="w-full bg-indigo-600 text-white py-2 px-4 shadow-lg text-sm sm:text-base font-medium overflow-hidden relative z-50">
      <div className="animate-marquee whitespace-nowrap">
        🎯 Nous créons des logiciels CRM personnalisés pour optimiser l'expérience client, gérons vos réseaux sociaux pour sublimer votre image, et formons vos équipes aux meilleures pratiques du service client. 💼✨
      </div>
      <style jsx>{`
        .animate-marquee {
          display: inline-block;
          animation: marquee 30s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
}
