'use client';

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full px-6 py-4 bg-black bg-opacity-95 backdrop-blur-sm text-white flex justify-between items-center shadow-md">
      <Link href="/" className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-white p-1">
          <Image
            src="https://res.cloudinary.com/dko5sommz/image/upload/v1743945163/dl_cpdzem.png"
            alt="DL Solutions"
            width={100}
            height={100}
            className="rounded-full object-cover w-full h-full"
          />
        </div>
        <span className="text-xl font-semibold tracking-wide">DL Solutions</span>
      </Link>

      <nav className="flex gap-6 items-center text-sm font-semibold">
        <Link href="/novacore" className="hover:underline">NovaCore</Link>
        <Link href="/rdv" className="hover:underline">Prendre RDV</Link>
        <Link href="/formations" className="hover:underline">Formations</Link>
        <Link href="/crm" className="hover:underline">CRM</Link>
        <Link href="/offres" className="hover:underline">Offres & Devis</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
      </nav>
    </header>
  );
}
