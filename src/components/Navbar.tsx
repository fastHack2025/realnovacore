"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo NovaCore */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="https://res.cloudinary.com/dko5sommz/image/upload/v1744370550/logo-novacore_iqi2pd.png"
            alt="NovaCore Logo"
            className="w-12 h-12 rounded-full bg-white shadow-lg p-1 animate-bounce"
          />
          <span className="text-2xl font-extrabold text-indigo-700 tracking-wide hover:scale-105 transition-transform">
            NovaCore
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-10 items-center text-gray-700 font-semibold text-lg">
          <Link href="/" className="hover:text-indigo-600 transition">Accueil</Link>
          <Link href="/offres" className="hover:text-indigo-600 transition">Offres</Link>
          <Link href="/rdv" className="hover:text-indigo-600 transition">Prendre RDV</Link>
          <Link href="/crm/hopital/patients" className="hover:text-indigo-600 transition">CRM</Link>
          <Link href="/realisations" className="hover:text-indigo-600 transition">Réalisations</Link>
        </nav>

        {/* Mobile Burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Mobile Menu Panel */}
        {menuOpen && (
          <div className="absolute top-full right-6 mt-2 w-48 bg-white rounded-lg shadow-lg flex flex-col text-gray-700 text-lg font-semibold md:hidden animate-fadeInUp">
            <Link href="/" className="px-6 py-3 hover:bg-indigo-50" onClick={() => setMenuOpen(false)}>Accueil</Link>
            <Link href="/offres" className="px-6 py-3 hover:bg-indigo-50" onClick={() => setMenuOpen(false)}>Offres</Link>
            <Link href="/rdv" className="px-6 py-3 hover:bg-indigo-50" onClick={() => setMenuOpen(false)}>Prendre RDV</Link>
            <Link href="/crm/hopital/patients" className="px-6 py-3 hover:bg-indigo-50" onClick={() => setMenuOpen(false)}>CRM</Link>
            <Link href="/realisations" className="px-6 py-3 hover:bg-indigo-50" onClick={() => setMenuOpen(false)}>Réalisations</Link>
          </div>
        )}
      </div>
    </header>
  );
}
