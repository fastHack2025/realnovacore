"use client"

import { Brain, Users, MessageCircle, CreditCard } from "lucide-react"

export default function ModulesNovaCore() {
  const modules = [
    {
      icon: <Brain className="w-10 h-10 text-indigo-500" />,
      title: "Studio IA",
      description: "Générez du contenu intelligent, des scripts ou prompts IA en un clic.",
    },
    {
      icon: <Users className="w-10 h-10 text-pink-500" />,
      title: "CRM Intelligent",
      description: "Gérez vos clients avec scoring IA, automatisations et rappels.",
    },
    {
      icon: <MessageCircle className="w-10 h-10 text-blue-500" />,
      title: "Réseaux Sociaux IA",
      description: "Programmez et créez vos publications grâce à l’intelligence artificielle.",
    },
    {
      icon: <CreditCard className="w-10 h-10 text-green-500" />,
      title: "Paiements intégrés",
      description: "Facturez vos clients avec Stripe ou CinetPay, en toute sécurité.",
    },
  ]

  return (
    <section className="bg-gray-100 py-16 px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Les modules puissants de NovaCore
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {modules.map((mod, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg p-6 transition-all duration-300 text-left"
            >
              <div className="mb-4">{mod.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {mod.title}
              </h3>
              <p className="text-gray-600 text-sm">{mod.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
