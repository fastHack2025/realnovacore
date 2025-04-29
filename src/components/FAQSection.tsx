'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: "Qu'est-ce que NovaCore exactement ?",
    answer: "NovaCore est une plateforme SaaS tout-en-un qui combine CRM, ERP, Intelligence Artificielle, et automatisation pour booster la croissance des entreprises.",
  },
  {
    question: "Puis-je personnaliser NovaCore selon mes besoins ?",
    answer: "Oui ! NovaCore propose des modules personnalisables adaptés aux secteurs d'activité spécifiques : hôtellerie, restauration, services, etc.",
  },
  {
    question: "Quels sont les avantages de DL Solutions par rapport aux concurrents ?",
    answer: "Nous proposons des solutions haut de gamme, localisées pour le marché africain, à des tarifs abordables, avec un accompagnement personnalisé.",
  },
  {
    question: "Est-ce que je peux annuler mon abonnement à tout moment ?",
    answer: "Bien sûr. Nos formules sont sans engagement, vous êtes libre de suspendre votre abonnement depuis votre compte client.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.section
      id="faq"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="py-20 bg-black text-white text-center"
    >
      <h2 className="text-4xl font-bold mb-12">Questions fréquentes</h2>

      <div className="max-w-4xl mx-auto space-y-6 px-6">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="bg-gray-800 rounded-2xl p-6 text-left cursor-pointer shadow hover:shadow-lg transition"
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="text-xl font-bold flex justify-between items-center">
              {faq.question}
              <span>{openIndex === index ? '−' : '+'}</span>
            </h3>
            {openIndex === index && (
              <p className="mt-4 text-gray-300">{faq.answer}</p>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
