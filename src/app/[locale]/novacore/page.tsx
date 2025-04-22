'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';

export default function NovaCoreHome() {
  const t = useTranslations();

  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex flex-col items-center justify-center text-center px-4">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover opacity-20"
          autoPlay
          loop
          muted
          playsInline
          src="https://res.cloudinary.com/dko5sommz/video/upload/v1744417105/assistant_IT_hwlbqq.mp4"
        />
        <div className="relative z-10 max-w-3xl">
          <Image
            src="https://res.cloudinary.com/dko5sommz/image/upload/v1744370550/logo-novacore_iqi2pd.png"
            alt="Logo NovaCore"
            width={140}
            height={60}
            className="mx-auto mb-6"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            NovaCore AI Platform
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Plateforme intelligente pour gérer vos clients, vos contenus, vos équipes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/login"
              className="bg-white text-black py-3 px-6 rounded-xl font-semibold hover:bg-gray-200 transition"
            >
              Connexion
            </Link>
            <Link
              href="/register"
              className="border border-white py-3 px-6 rounded-xl font-semibold hover:bg-white hover:text-black transition"
            >
              Inscription
            </Link>
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section className="py-20 px-4 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Modules disponibles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Assistant IA', description: 'Community Manager ou Support IT', href: '/assistant-ia' },
              { title: 'Suivi CRM', description: 'Suivi personnalisé de vos clients', href: '/crm' },
              { title: 'Formations Pro', description: 'Télévente, SAV, CX, etc.', href: '/formations' },
              { title: 'Prise de rendez-vous', description: 'Planifiez vos RDV facilement', href: '/rdv' },
              { title: 'Générateur de devis IA', description: 'Réponses automatiques à vos besoins', href: '/devis' },
              { title: 'Studio IA Dev', description: 'Coder avec un assistant IA', href: '/devstudio' }
            ].map((mod, index) => (
              <Link
                key={index}
                href={mod.href}
                className="border border-gray-200 p-6 rounded-xl hover:shadow-lg hover:border-black transition block"
              >
                <h3 className="text-xl font-semibold mb-2">{mod.title}</h3>
                <p className="text-sm text-gray-600">{mod.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-6 mt-12 text-center text-sm">
        <p>
          NovaCore © {new Date().getFullYear()} – Une solution de{' '}
          <a href="https://www.dlsolutions.com" className="underline">
            DL Solutions
          </a>
        </p>
      </footer>
    </main>
  );
}
