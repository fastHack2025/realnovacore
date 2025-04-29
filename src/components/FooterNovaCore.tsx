'use client';

import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import LogoDL from '@/components/LogoDL'; // On conserve le même logo tournant pour homogénéité

export default function FooterNovaCore() {
  return (
    <footer className="bg-zinc-900 text-gray-300 pt-12 pb-8 mt-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Branding NovaCore */}
        <div className="flex flex-col gap-4">
          <LogoDL />
          <p className="text-gray-400 text-sm max-w-sm">
            NovaCore CRM & ERP IA - La révolution CRM made in Africa 🌍.
          </p>
        </div>

        {/* Accès rapide NovaCore */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">NovaCore</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/novacore">Présentation</Link></li>
            <li><Link href="/abonnement">S'abonner</Link></li>
            <li><Link href="/contact">Support Client</Link></li>
            <li><Link href="/account">Mon Compte</Link></li>
          </ul>
        </div>

        {/* Réseaux sociaux */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Suivez NovaCore</h3>
          <div className="flex gap-4 mt-2">
            <Link href="https://facebook.com" target="_blank"><FaFacebookF /></Link>
            <Link href="https://twitter.com" target="_blank"><FaTwitter /></Link>
            <Link href="https://linkedin.com" target="_blank"><FaLinkedinIn /></Link>
            <Link href="https://instagram.com" target="_blank"><FaInstagram /></Link>
          </div>
        </div>

      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} NovaCore Platform - Powered by DL Solutions SARL.
      </div>
    </footer>
  );
}
