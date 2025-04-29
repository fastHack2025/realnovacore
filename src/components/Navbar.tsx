'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import LogoDL from "@/components/LogoDL";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 ${isScrolled ? 'bg-black/50 backdrop-blur-md shadow-md' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">

        {/* Logo animé */}
        <Link href="/">
          <LogoDL />
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex gap-8 items-center text-sm font-semibold text-white">
          <Link href="/">Accueil</Link>
          <Link href="/services">Services</Link>
          <Link href="/realisations">Réalisations</Link>
          <Link href="/novacore">NovaCore</Link>
          <Link href="/contact">Contact</Link>

          {/* Gestion Connexion */}
          <SignedOut>
            <Link
              href="/sign-in"
              className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-full transition"
            >
              Connexion
            </Link>
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </nav>

        {/* Burger Mobile */}
        <div className="md:hidden">
          {/* 👉🏻 À compléter plus tard avec un menu mobile si besoin */}
        </div>

      </div>
    </motion.header>
  );
}
