import "@/styles/globals.css";
import type { ReactNode } from "react";
import Link from "next/link";
import { ShieldCheck, LayoutDashboard, Users, FileBarChart2, LockKeyhole } from "lucide-react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-black border-r border-white/10 p-6 hidden md:flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold mb-6">🔐 NovaCore Admin</h2>
          <nav className="space-y-3 text-sm">
            <NavLink href="/crm/admin/dashboard" icon={<LayoutDashboard className="w-4 h-4" />}>Dashboard</NavLink>
            <NavLink href="/crm/admin/users" icon={<Users className="w-4 h-4" />}>Utilisateurs</NavLink>
            <NavLink href="/crm/admin/analytics" icon={<FileBarChart2 className="w-4 h-4" />}>Statistiques IA</NavLink>
            <NavLink href="/crm/admin/security" icon={<LockKeyhole className="w-4 h-4" />}>Sécurité</NavLink>
          </nav>
        </div>
        <p className="text-xs text-gray-400 mt-10">© Samuel OBAM - DL Solutions</p>
      </aside>

      {/* Contenu */}
      <main className="flex-1 bg-gradient-to-br from-gray-900 to-black p-4 md:p-10 overflow-auto">{children}</main>
    </div>
  );
}

function NavLink({ href, icon, children }: { href: string; icon: React.ReactNode; children: ReactNode }) {
  return (
    <Link href={href} className="flex items-center gap-2 text-gray-200 hover:text-white transition">
      {icon}
      {children}
    </Link>
  );
}
