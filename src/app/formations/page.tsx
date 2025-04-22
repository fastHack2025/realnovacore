"use client"

import { GraduationCap, Headset, Users, Handshake } from "lucide-react"
import Link from "next/link"

const formations = [
  {
    titre: "Formation Télévente",
    description: "Maîtrisez l'art de la vente à distance et boostez vos performances commerciales.",
    icone: <Headset className="w-10 h-10 text-indigo-600" />,
    href: "/formations/televente",
  },
  {
    titre: "Service Après-Vente (SAV)",
    description: "Fidélisez vos clients grâce à un SAV efficace et une gestion des réclamations professionnelle.",
    icone: <Users className="w-10 h-10 text-green-600" />,
    href: "/formations/sav",
  },
  {
    titre: "Expérience Client (CX)",
    description: "Offrez une expérience mémorable à chaque étape du parcours client.",
    icone: <GraduationCap className="w-10 h-10 text-yellow-500" />,
    href: "/formations/cx",
  },
  {
    titre: "Stratégie de Vente & Négociation",
    description: "Apprenez à structurer vos offres et convaincre avec des techniques éprouvées.",
    icone: <Handshake className="w-10 h-10 text-pink-500" />,
    href: "/formations/strategie",
  },
]

export default function FormationsPage() {
  return (
    <div className="min-h-screen bg-white py-20 px-4 sm:px-10 text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6 text-indigo-700">Formations Professionnelles</h1>
        <p className="text-center text-gray-500 mb-12">
          Accédez à nos parcours en ligne conçus pour booster votre carrière et vos compétences commerciales.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {formations.map((formation, index) => (
            <Link key={index} href={formation.href} className="block bg-gray-50 hover:bg-gray-100 shadow-lg p-6 rounded-2xl transition-all border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white p-3 rounded-full shadow-inner">
                  {formation.icone}
                </div>
                <h2 className="text-xl font-semibold text-gray-800">{formation.titre}</h2>
              </div>
              <p className="text-sm text-gray-600">{formation.description}</p>
              <div className="text-right mt-4">
                <span className="text-indigo-500 font-medium">Voir la formation →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
