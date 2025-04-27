'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setIsVisible(true);
      else setIsVisible(false);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.2 }}
      className="fixed bottom-8 right-8 bg-primary text-white p-3 rounded-full shadow-lg z-50"
    >
      <FaArrowUp size={24} />
    </motion.button>
  );
}
