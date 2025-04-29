'use client';

import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import LogoDL from '@/components/LogoDL'; // 🌀 Logo animé DL Solutions

export default function FooterDL() {
  return (
    <footer className="bg-black text-white pt-16 pb-8 mt-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Branding + Logo */}
        <div className="flex flex-col gap-4">
          <LogoDL />
          <p className="text-gray-400 text-sm max-w-sm">
            DL Solutions SARL – Communication Digitale, CRM et IA pour booster votre succès 🚀.
          </p>
        </div>

        {/* Navigation rapide */}
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

        {/* Réseaux sociaux */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Suivez-nous</h3>
          <div className="flex gap-4 mt-2">
            <Link href="https://facebook.com" target="_blank"><FaFacebookF /></Link>
            <Link href="https://twitter.com" target="_blank"><FaTwitter /></Link>
            <Link href="https://linkedin.com" target="_blank"><FaLinkedinIn /></Link>
            <Link href="https://instagram.com" target="_blank"><FaInstagram /></Link>
          </div>
        </div>

      </div>

      <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} DL Solutions SARL - Tous droits réservés.
      </div>
    </footer>
  );
}
