// ✅ src/app/admin/roles/page.tsx

"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabaseClient";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { toast } from "react-hot-toast";

interface Utilisateur {
  id: string;
  email: string;
  role: string;
  created_at: string;
}

export default function RolesPage() {
  const supabase = createClient();
  const [users, setUsers] = useState<Utilisateur[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await supabase.from("users").select("id, email, role, created_at").order("created_at", { ascending: false });
      if (data) setUsers(data);
    };
    fetchUsers();
  }, []);

  const updateRole = async (id: string, role: string) => {
    const { error } = await supabase.from("users").update({ role }).eq("id", id);
    if (!error) {
      toast.success("Rôle mis à jour !");
      setUsers(users.map((u) => (u.id === id ? { ...u, role } : u)));
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">🧑‍💼 Gestion des Rôles</h1>

      <Card>
        <CardContent className="overflow-x-auto p-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Email</TableHead>
                <TableHead>Rôle</TableHead>
                <TableHead>Date d'inscription</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((u) => (
                <TableRow key={u.id}>
                  <TableCell>{u.email}</TableCell>
                  <TableCell className="capitalize text-indigo-600 font-medium">{u.role}</TableCell>
                  <TableCell>{new Date(u.created_at).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <select
                      value={u.role}
                      onChange={(e) => updateRole(u.id, e.target.value)}
                      className="px-2 py-1 border rounded"
                    >
                      <option value="client">Client</option>
                      <option value="agent">Agent</option>
                      <option value="admin">Admin</option>
                    </select>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
