"use client";

import { useUser } from "@clerk/nextjs";
import Link from "next/link";

export default function AdminBar() {
  const { user } = useUser();

  if (user?.publicMetadata?.role !== "admin" && user?.publicMetadata?.role !== "superadmin") return null;

  return (
    <div className="w-full bg-indigo-900 text-white text-sm py-2 px-4 flex justify-between items-center z-50">
      <span>🛠️ Admin Mode — Accès spécial</span>
      <Link href="/admin/dashboard" className="underline hover:text-indigo-300">
        Aller au Dashboard
      </Link>
    </div>
  );
}
