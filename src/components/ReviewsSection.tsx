'use client';

import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const reviews = [
  {
    id: 1,
    name: "Clémentine E.",
    comment: "Grâce à NovaCore, notre gestion client a été transformée. Nous avons gagné un temps précieux et amélioré notre taux de satisfaction.",
    rating: 5,
  },
  {
    id: 2,
    name: "Jean-Marc D.",
    comment: "DL Solutions nous a accompagné dans la digitalisation de notre service après-vente, c'est une vraie révolution pour nous !",
    rating: 5,
  },
  {
    id: 3,
    name: "Fatima O.",
    comment: "La prise de rendez-vous automatique avec rappel SMS est tout simplement géniale. Merci à toute l'équipe NovaCore !",
    rating: 5,
  },
];

export default function ReviewsSection() {
  return (
    <motion.section
      id="avis"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="py-20 bg-black text-white text-center"
    >
      <h2 className="text-4xl font-bold mb-12">Ils nous font confiance</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
        {reviews.map((review) => (
          <motion.div
            key={review.id}
            whileHover={{ scale: 1.03 }}
            className="bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <div className="flex justify-center mb-4">
              {Array(review.rating).fill(null).map((_, idx) => (
                <FaStar key={idx} className="text-yellow-400 text-xl" />
              ))}
            </div>
            <p className="text-gray-300 mb-6">&quot;{review.comment}&quot;</p>
            <h3 className="text-lg font-bold">{review.name}</h3>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
