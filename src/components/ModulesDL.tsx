"use client"

import Link from "next/link"
import { FaRobot, FaCalendarCheck, FaUserGraduate, FaChartBar, FaFileSignature } from "react-icons/fa"

const modules = [
  {
    icon: <FaRobot className="text-white text-3xl" />,
    title: "Assistant IA",
    description: "Répondez aux questions clients en temps réel avec intelligence.",
    href: "/assistant-ia",
    color: "from-purple-600 to-indigo-600"
  },
  {
    icon: <FaCalendarCheck className="text-white text-3xl" />,
    title: "Prise de rendez-vous",
    description: "Réservation rapide et intuitive avec notifications.",
    href: "/rdv",
    color: "from-blue-600 to-sky-500"
  },
  {
    icon: <FaUserGraduate className="text-white text-3xl" />,
    title: "Formations Pro",
    description: "Parcours certifiants orientés digital.",
    href: "/formations",
    color: "from-emerald-600 to-green-500"
  },
  {
    icon: <FaChartBar className="text-white text-3xl" />,
    title: "Suivi client CRM",
    description: "Centralisez les données et améliorez l’expérience client.",
    href: "/crm",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: <FaFileSignature className="text-white text-3xl" />,
    title: "Offres & Devis",
    description: "Générez des propositions professionnelles en un clic.",
    href: "/devis",
    color: "from-pink-600 to-red-500"
  }
]

export default function ModulesDL() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Nos Modules Principaux</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {modules.map((mod, index) => (
            <Link href={mod.href} key={index} className="group">
              <div className={`bg-gradient-to-r ${mod.color} rounded-2xl shadow-lg p-6 text-white h-full hover:scale-105 transition-transform`}>
                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 mx-auto shadow">
                  {mod.icon}
                </div>
                <h3 className="text-lg font-semibold text-center">{mod.title}</h3>
                <p className="text-sm mt-2 text-center text-white/90">{mod.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
