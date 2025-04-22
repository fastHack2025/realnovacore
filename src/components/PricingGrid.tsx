"use client"

import ServiceCard from "@/components/ServiceCard"

export default function PricingGrid() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Nos Tarifs</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            title="Formation Télévente"
            description="Parcours de 2 mois intensif pour maîtriser la télévente moderne."
            price="300 000 FCFA"
            href="/formations/televente"
          />

          <ServiceCard
            title="NovaCore Starter"
            description="Accès aux modules IA essentiels de la plateforme."
            price="70 000 FCFA / mois"
            href="/connexion"
          />

          <ServiceCard
            title="Développement Application"
            description="Développement web ou mobile sur mesure après analyse des besoins."
            price="Tarif sur consultation"
            href="/devis"
          />
        </div>
      </div>
    </section>
  )
}
