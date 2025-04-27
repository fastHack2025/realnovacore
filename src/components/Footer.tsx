"use client";

export default function Footer() {
  return (
    <footer className="bg-black py-8 text-center text-white text-sm border-t border-white/20">
      © {new Date().getFullYear()} Dave & Luce Solutions - Tous droits réservés.
    </footer>
  );
}
