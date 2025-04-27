'use client';

import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const reviews = [
  { name: "Claire Dupont", comment: "Service haut de gamme, accompagnement exceptionnel.", rating: 5 },
  { name: "Jean Morel", comment: "NovaCore a boosté notre business, au-delà de nos attentes.", rating: 5 },
];

export default function ReviewsSection() {
  return (
    <section className="py-20 bg-gray-950 text-white">
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center text-4xl font-bold mb-12"
      >
        💬 Témoignages Clients
      </motion.h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {reviews.map((review, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-8 rounded-xl shadow-lg space-y-4"
          >
            <div className="flex gap-1 justify-center">
              {Array.from({ length: review.rating }).map((_, i) => (
                <FaStar key={i} className="text-yellow-400" />
              ))}
            </div>
            <p className="text-lg">"{review.comment}"</p>
            <p className="font-bold text-primary">- {review.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
