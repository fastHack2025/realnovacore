// src/components/Header.tsx
"use client";

import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from '@/components/ThemeToggle';
import logo from '@/public/icons/logo-dlsolutions.png';

export default function Header() {
  return (
    <header className="flex items-center justify-between py-4 px-6 bg-white dark:bg-gray-900 shadow-md">
      {/* Logo */}
      <Link href="/">
        <Image 
          src={logo} 
          alt="DL Solutions Logo" 
          width={60} 
          height={60} 
          className="rounded-full hover:scale-110 transition-transform duration-300" 
        />
      </Link>

      {/* Menu */}
      <nav className="flex space-x-8">
        <Link href="/" className="hover:text-primary transition-colors">Accueil</Link>
        <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
        <Link href="/projects" className="hover:text-primary transition-colors">Projets</Link>
        <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
        <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
      </nav>

      {/* Theme Switcher */}
      <div className="ml-4">
        <ThemeToggle />
      </div>
    </header>
  );
}
