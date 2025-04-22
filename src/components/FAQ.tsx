"use client"

import { useState } from "react"

const faqData = [
  {
    question: "Quels services sont inclus dans l’offre Essentiel ?",
    answer:
      "L’offre Essentiel comprend la gestion de vos réseaux sociaux, un CRM simple, et une session de suivi personnalisée avec notre équipe.",
  },
  {
    question: "Comment fonctionne la plateforme NovaCore ?",
    answer:
      "NovaCore est notre plateforme SaaS complète. Elle intègre un CRM intelligent, des assistants IA, un module de prise de RDV et un outil de gestion de contenu social automatisé.",
  },
  {
    question: "Peut-on suivre les formations à distance ?",
    answer:
      "Oui, toutes nos formations sont disponibles en ligne, avec des supports PDF, vidéos, et sessions Zoom en direct chaque semaine.",
  },
  {
    question: "Quels moyens de paiement acceptez-vous ?",
    answer:
      "Nous acceptons les paiements via Stripe, Mobile Money, PayPal, CinetPay, et même par virement bancaire sur demande.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-white py-20 px-6 sm:px-12 lg:px-32 border-t border-gray-200">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
        Foire Aux Questions
      </h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-6 py-4 bg-purple-50 hover:bg-purple-100 transition font-medium text-purple-800"
            >
              {item.question}
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 bg-white text-gray-700 border-t border-gray-100">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
