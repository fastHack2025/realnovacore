'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

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
      {/* Popup Merci */}
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
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <h2 className="text-2xl font-bold mb-2">Merci beaucoup 🙏🏼</h2>
              <p className="text-sm">Votre retour nous aide à nous améliorer !</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-[#0f172a] text-white pt-12 pb-8 mt-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Branding */}
          <div>
            <h2 className="text-2xl font-bold mb-4">DL Solutions</h2>
            <p className="text-gray-400 text-sm">
              Propulsez votre succès grâce à la transformation digitale et l'innovation CX/IA.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl font-bold mb-4">Navigation</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link href="/" className="hover:text-indigo-400 transition">Accueil</Link></li>
              <li><Link href="/services" className="hover:text-indigo-400 transition">Services</Link></li>
              <li><Link href="/projects" className="hover:text-indigo-400 transition">Projets</Link></li>
              <li><Link href="/contact" className="hover:text-indigo-400 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Bloc Noter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Notez notre site</h3>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
              {/* Étoiles */}
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    size={24}
                    className={`cursor-pointer transition ${star <= (hover || rating) ? 'text-yellow-400' : 'text-gray-500'}`}
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(0)}
                    onClick={() => setRating(star)}
                  />
                ))}
              </div>

              {/* Commentaire */}
              <textarea
                value={comment}
                onChange={handleCommentChange}
                placeholder="Votre commentaire..."
                rows={2}
                className="p-2 rounded-md bg-white text-gray-900 resize-none focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                required
              />

              <button
                type="submit"
                className="bg-primary hover:bg-indigo-700 text-white font-bold py-2 rounded-md transition"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>

        {/* Bas de Footer */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-xs">
          <div className="flex justify-center space-x-4 mb-4">
            <Link href="https://facebook.com" target="_blank" className="hover:text-indigo-400 transition"><FaFacebookF /></Link>
            <Link href="https://twitter.com" target="_blank" className="hover:text-indigo-400 transition"><FaTwitter /></Link>
            <Link href="https://linkedin.com" target="_blank" className="hover:text-indigo-400 transition"><FaLinkedinIn /></Link>
            <Link href="https://instagram.com" target="_blank" className="hover:text-indigo-400 transition"><FaInstagram /></Link>
          </div>
          © {new Date().getFullYear()} DL Solutions. Tous droits réservés.
        </div>
      </footer>
    </>
  );
}
