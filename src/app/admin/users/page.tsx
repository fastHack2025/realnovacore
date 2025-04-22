"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import toast from "react-hot-toast";

interface User {
  id: string;
  email: string;
  username: string;
  role: string;
  created_at: string;
}

export default function AdminUsersPage() {
  const { user } = useUser();
  const router = useRouter();
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (user && user.publicMetadata?.role !== "admin") router.push("/");
  }, [user]);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await supabase.from("users").select("id, email, username, role, created_at");
      if (data) setUsers(data);
    };
    fetch();
  }, []);

  const filteredUsers = users.filter(
    (u) =>
      u.email.toLowerCase().includes(search.toLowerCase()) ||
      u.username?.toLowerCase().includes(search.toLowerCase())
  );

  const updateRole = async (id: string, role: string) => {
    const { error } = await supabase.from("users").update({ role }).eq("id", id);
    if (!error) {
      toast.success("Rôle mis à jour");
      setUsers(users.map((u) => (u.id === id ? { ...u, role } : u)));
    }
  };

  return (
    <main className="min-h-screen bg-white py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-indigo-700 mb-6">👥 Utilisateurs</h1>

        <input
          type="text"
          placeholder="🔍 Rechercher par email ou pseudo..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-4 px-4 py-2 border rounded-md shadow-sm w-full max-w-md"
        />

        <div className="overflow-x-auto rounded-xl shadow border">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr className="text-left">
                <th className="p-3">Email</th>
                <th className="p-3">Pseudo</th>
                <th className="p-3">Rôle</th>
                <th className="p-3">Créé le</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((u) => (
                <tr key={u.id} className="border-t hover:bg-gray-50">
                  <td className="p-3">{u.email}</td>
                  <td className="p-3">{u.username}</td>
                  <td className="p-3 capitalize text-indigo-600 font-medium">{u.role}</td>
                  <td className="p-3">{new Date(u.created_at).toLocaleDateString()}</td>
                  <td className="p-3">
                    <select
                      value={u.role}
                      onChange={(e) => updateRole(u.id, e.target.value)}
                      className="px-2 py-1 border rounded"
                    >
                      <option value="client">Client</option>
                      <option value="admin">Admin</option>
                    </select>
                  </td>
                </tr>
              ))}
              {filteredUsers.length === 0 && (
                <tr>
                  <td colSpan={5} className="p-4 text-center text-gray-400">
                    Aucun utilisateur trouvé.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
