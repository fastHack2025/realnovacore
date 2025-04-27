'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Reset après 2 secondes (simulation de succès)
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsOpen(false);
      setSubmitted(false);
    }, 2000);
  };

  return (
    <>
      {/* Bouton flottant pour ouvrir le formulaire */}
      <div className="fixed bottom-24 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-primary hover:bg-indigo-700 p-4 rounded-full shadow-xl transition"
        >
          ✉️
        </button>
      </div>

      {/* Popup Formulaire */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-2xl w-full max-w-md"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 dark:hover:text-white"
              >
                ✖
              </button>

              {/* Form Content */}
              <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
                Contactez-nous
              </h2>

              {submitted ? (
                <div className="text-center text-green-500 font-semibold">
                  Merci pour votre message ! 🎉
                </div>
              ) : (
               
