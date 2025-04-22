"use client"

import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa"

export default function ContactSection() {
  return (
    <section className="bg-white py-16 px-4 sm:px-8 md:px-20 text-gray-800">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Formulaire de contact */}
        <div className="bg-gray-50 p-8 rounded-2xl shadow-lg border">
          <h2 className="text-3xl font-bold mb-6">Contactez-nous</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Votre nom complet"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <input
              type="email"
              placeholder="Adresse email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <textarea
              rows={5}
              placeholder="Votre message"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition w-full font-semibold"
            >
              Envoyer
            </button>
          </form>
          <div className="mt-6 space-y-2 text-sm text-gray-600">
            <p><FaPhone className="inline-block mr-2" />+237 6 94 34 15 86</p>
            <p><FaEnvelope className="inline-block mr-2" />contact@dlsolutions.com</p>
            <p><FaMapMarkerAlt className="inline-block mr-2" />Bastos, Yaoundé - Cameroun</p>
          </div>
        </div>

        {/* Carte Google Maps */}
        <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-indigo-500">
          <iframe
            title="Localisation"
            src="https://maps.google.com/maps?q=yaounde%20bastos&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  )
}
