"use client";

import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-indigo-600 text-white py-20 text-center px-4 md:px-10">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Prêt à passer à l’IA pour transformer votre entreprise ?
      </h2>
      <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
        NovaCore est conçu pour automatiser, simplifier et propulser vos opérations métier. Testez dès maintenant.
      </p>
      <Link
        href="/inscription"
        className="bg-white text-indigo-700 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-indigo-100 transition duration-300 animate-zoom-in"
      >
        Demander une démo gratuite
      </Link>
    </section>
  );
}
