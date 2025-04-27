"use client";

import Link from "next/link";

export default function MegaMenu() {
  return (
    <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
      <Link href="/" className="hover:text-primary transition">Accueil</Link>
      <Link href="/portfolio" className="hover:text-primary transition">Portfolio</Link>
      <Link href="/crm" className="hover:text-primary transition">CRM</Link>
      <Link href="/paiements" className="hover:text-primary transition">Paiements</Link>
      <Link href="/rdv" className="hover:text-primary transition">RDV</Link>
      <Link href="/contact" className="hover:text-primary transition">Contact</Link>
    </div>
  );
}
