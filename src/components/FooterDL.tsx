import Link from "next/link";

export default function FooterDL() {
  return (
    <footer className="bg-black text-white py-10 px-6 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-lg font-semibold mb-4">DL Solutions</h2>
          <p className="text-sm text-gray-400">
            Agence spécialisée en relation client, CRM, IA & transformation digitale.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Navigation</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/novacore" className="hover:underline">NovaCore</Link></li>
            <li><Link href="/crm" className="hover:underline">Suivi client CRM</Link></li>
            <li><Link href="/rdv" className="hover:underline">Prise de rendez-vous</Link></li>
            <li><Link href="/formations" className="hover:underline">Formations Pro</Link></li>
            <li><Link href="/offres" className="hover:underline">Offres & Devis</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} DL Solutions. Tous droits réservés. |
        <Link href="https://www.dlsolutions.com" className="ml-1 underline hover:text-white">www.dlsolutions.com</Link>
      </div>
    </footer>
  );
}
