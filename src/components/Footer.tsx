'use client';

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import LogoDL from "@/components/LogoDL";

export default function Footer() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      setRating(0);
      setHover(0);
      setComment('');
    }, 3000);
  };

  return (
    <>
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50"
          >
            <motion.div
              className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-8 rounded-2xl shadow-2xl text-center"
            >
              <h2 className="text-2xl font-bold mb-2">Merci 🙏🏼</h2>
              <p className="text-sm">Votre retour est précieux !</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bande de séparation */}
      <div className="h-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"></div>

      <footer className="bg-black text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* LogoDL + Branding */}
          <div className="flex flex-col gap-4">
            <LogoDL />
            <p className="text-gray-400 text-sm max-w-sm">
              DL Solutions SARL – Votre partenaire CRM, Communication Digitale & IA à Yaoundé 🇨🇲.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/">Accueil</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/realisations">Réalisations</Link></li>
              <li><Link href="/novacore">NovaCore</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Notation rapide */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Notez notre site</h3>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    size={22}
                    className={`cursor-pointer ${star <= (hover || rating) ? 'text-yellow-400' : 'text-gray-500'}`}
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(0)}
                    onClick={() => setRating(star)}
                  />
                ))}
              </div>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Votre commentaire..."
                rows={2}
                className="p-2 rounded-md bg-white text-black resize-none text-sm"
              />
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 rounded-md transition">
                Envoyer
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
          <div className="flex justify-center gap-6 mb-4">
            <Link href="https://facebook.com" target="_blank"><FaFacebookF /></Link>
            <Link href="https://twitter.com" target="_blank"><FaTwitter /></Link>
            <Link href="https://linkedin.com" target="_blank"><FaLinkedinIn /></Link>
            <Link href="https://instagram.com" target="_blank"><FaInstagram /></Link>
          </div>
          © {new Date().getFullYear()} DL Solutions SARL. Tous droits réservés.
        </div>
      </footer>
    </>
  );
}
