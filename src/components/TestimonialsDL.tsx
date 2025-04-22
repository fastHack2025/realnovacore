"use client"

import Image from "next/image"
import { FaQuoteLeft } from "react-icons/fa"

const testimonials = [
  {
    name: "Stéphan M.",
    title: "CEO – AfriLead Digital",
    image: "https://res.cloudinary.com/dko5sommz/image/upload/v1745199162/stephan_w4uqem.jpg",
    text: "DL Solutions a transformé notre service client en 2 semaines. Réactivité, outils modernes, et équipe à l’écoute.",
  },
  {
    name: "Daoudou S.",
    title: "Coach – Digital Boost",
    image: "https://res.cloudinary.com/dko5sommz/image/upload/v1745199162/daoudou_dnszh3.jpg",
    text: "Un vrai partenaire de croissance ! CRM personnalisé, tunnel client automatisé, c’est top.",
  },
  {
    name: "Francis K.",
    title: "Manager – Connect Pro",
    image: "https://res.cloudinary.com/dko5sommz/image/upload/v1745199162/francis_u7jdde.jpg",
    text: "Ils nous ont aidés à structurer toute notre communication digitale. Résultats immédiats.",
  },
  {
    name: "M. Mboussa R.",
    title: "Fondateur – Mboussa Digital Agency",
    image: "https://res.cloudinary.com/dko5sommz/image/upload/v1745199162/mboussa_dsczhp.jpg",
    text: "DL Solutions nous a accompagnés dans l’optimisation de notre expérience client avec un CRM adapté et des actions concrètes.",
  },
]

export default function TestimonialsDL() {
  return (
    <section className="bg-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-2">
          <FaQuoteLeft className="text-blue-600" /> Avis de nos clients
        </h2>
        <p className="text-gray-600 mb-12">
          Découvrez ce que nos partenaires disent de notre expertise.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex justify-center mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="rounded-full border-4 border-white shadow-md"
                />
              </div>
              <p className="text-gray-700 italic text-sm mb-4">“{testimonial.text}”</p>
              <h4 className="text-blue-700 font-semibold">{testimonial.name}</h4>
              <p className="text-gray-500 text-sm">{testimonial.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
