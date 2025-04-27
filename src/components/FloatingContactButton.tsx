'use client';

import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';

export default function FloatingContactButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2">

      {/* Boutons secondaires visibles quand ouvert */}
      {open && (
        <>
          <a
            href="tel:+33612345678"
            className="flex items-center space-x-2 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition"
          >
            <FaPhoneAlt size={20} />
            <span className="hidden md:inline font-semibold">Appeler</span>
          </a>

          <a
            href="https://wa.me/33612345678"
            target="_blank"
            className="flex items-center space-x-2 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition"
          >
            <FaWhatsapp size={20} />
            <span className="hidden md:inline font-semibold">WhatsApp</span>
          </a>

          <a
            href="mailto:contact@dlsolutions.com"
            className="flex items-center space-x-2 bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition"
          >
            <FaEnvelope size={20} />
            <span className="hidden md:inline font-semibold">Email</span>
          </a>
        </>
      )}

      {/* Bouton principal flottant */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-primary hover:bg-indigo-700 p-4 rounded-full shadow-2xl transition flex items-center justify-center"
      >
        {open ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
          </svg>
        )}
      </button>

    </div>
  );
}
