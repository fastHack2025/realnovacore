// src/components/FooterDL.tsx
import Link from "next/link";

export default function FooterDL() {
  return (
    <footer className="bg-gray-900 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">NovaCore</h2>
          <p className="text-gray-400">
            Votre passerelle vers l'intelligence artificielle au service des entreprises.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:text-indigo-400 hover:glow">À propos</Link></li>
            <li><Link href="/services" className="hover:text-indigo-400 hover:glow">Services</Link></li>
            <li><Link href="/contact" className="hover:text-indigo-400 hover:glow">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
          <div className="flex space-x-4">
            <Link href="https://facebook.com" target="_blank">
              <img src="/icons/facebook.svg" alt="Facebook" className="h-8 w-8 hover:glow" />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <img src="/icons/instagram.svg" alt="Instagram" className="h-8 w-8 hover:glow" />
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <img src="/icons/twitter.svg" alt="Twitter" className="h-8 w-8 hover:glow" />
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <img src="/icons/linkedin.svg" alt="LinkedIn" className="h-8 w-8 hover:glow" />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} NovaCore. Tous droits réservés.
      </div>
    </footer>
  );
}
