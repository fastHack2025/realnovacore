"use client";

import { useState } from "react";

export default function PopupRDV() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-20 right-6 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full shadow-xl z-50"
      >
        Planifier un appel
      </button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-md w-full space-y-4">
            <h3 className="text-xl font-bold text-indigo-700 mb-4">Prendre Rendez-vous</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Votre nom"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <textarea
                placeholder="Votre message"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold"
              >
                Envoyer
              </button>
            </form>
            <button onClick={() => setOpen(false)} className="text-gray-500 hover:text-gray-700 text-sm">
              Annuler
            </button>
          </div>
        </div>
      )}
    </>
  );
}
