"use client";

import { useUser } from "@clerk/nextjs";

export default function ButtonAdminOnly() {
  const { user } = useUser();

  if (user?.publicMetadata.role !== "admin") return null;

  return (
    <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">
      🛠️ Accès Panel Admin
    </button>
  );
}
