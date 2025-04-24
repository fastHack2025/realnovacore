// ✅ src/app/admin/superadmin/page.tsx — Intégration CRM Location dans le dashboard SuperAdmin

"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard, BarChart2, Cog, Users, Bell, FileText,
  Settings2, Trash2, Home
} from "lucide-react";

const links = [
  { href: "/admin/dashboard", label: "Dashboard Résumé", icon: LayoutDashboard },
  { href: "/admin/ia/stats", label: "Stats IA", icon: BarChart2 },
  { href: "/admin/config", label: "Configurations", icon: Cog },
  { href: "/admin/user", label: "Utilisateurs", icon: Users },
  { href: "/admin/notifs", label: "Notifications", icon: Bell },
  { href: "/admin/exports", label: "Exports", icon: FileText },
  { href: "/admin/roles", label: "Rôles", icon: Settings2 },
  { href: "/admin/cleaner", label: "Nettoyage IA", icon: Trash2 },
  { href: "/crm/location", label: "CRM Location", icon: Home },
];

export default function SuperAdminPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">🧠 Vue SuperAdmin</h1>
      <p className="text-gray-500 mb-6">Accédez rapidement à tous les modules de gestion avancée NovaCore.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {links.map(({ href, label, icon: Icon }) => (
          <Card key={href} className="hover:shadow-lg transition duration-200">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-4">
                <Icon className="w-6 h-6 text-indigo-600" />
                <span className="text-lg font-medium">{label}</span>
              </div>
              <Link href={href} className="block">
                <Button variant="secondary">Accéder</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
