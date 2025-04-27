'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from '@/components/ThemeToggle';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        
        {/* Logo animé Cercle */}
        <Link href="/" className="flex items-center space-x-3">
          <motion.div
            className="w-16 h-16 rounded-full overflow-hidden border-4 border-indigo-500 shadow-md hover:shadow-indigo-400 transition-all duration-500"
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            <Image
              src="/icons/logo-dlsolutions.png"
              alt="DL Solutions"
              width={64}
              height={64}
              className="object-cover"
              unoptimized
            />
          </motion.div>
          <span className="font-extrabold text-2xl text-gray-900 dark:text-white tracking-tight">
            DL Solutions
          </span>
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 dark:text-gray-200 font-semibold">
          <Link href="/">Accueil</Link>
          <Link href="/services">Services</Link>
          <Link href="/projects">Projets</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">Équipe</Link>
          <Link href="/novacore">NovaCore</Link>
          <Link href="/realisations">Réalisations</Link>
          <ThemeToggle />
        </nav>

        {/* Bouton Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu" className="text-gray-800 dark:text-gray-200">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-6 pb-6 flex flex-col gap-4 text-gray-700 dark:text-gray-200 font-semibold shadow-lg">
          <Link href="/">Accueil</Link>
          <Link href="/services">Services</Link>
          <Link href="/projects">Projets</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">Équipe</Link>
          <Link href="/novacore">NovaCore</Link>
          <Link href="/realisations">Réalisations</Link>
          <ThemeToggle />
        </div>
      )}
    </header>
  );
}
