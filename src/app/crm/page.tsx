"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import toast from "react-hot-toast";

interface Client {
  id: string;
  nom: string;
  email: string;
  telephone: string;
  statut: string;
  source: string;
  notes: string;
  created_at: string;
  user_id: string;
}

export default function CRMPage() {
  const { user } = useUser();
  const router = useRouter();

  const [clients, setClients] = useState<Client[]>([]);
  const [form, setForm] = useState({
    nom: "",
    email: "",
    telephone: "",
    statut: "Nouveau",
    source: "Site Web",
    notes: "",
  });
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (user && !user.id) router.push("/");
    if (user?.id) fetchClients();
  }, [user]);

  const fetchClients = async () => {
    const { data } = await supabase
      .from("crm_clients")
      .select("*")
      .eq("user_id", user?.id)
      .order("created_at", { ascending: false });
    if (data) setClients(data);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.nom || !form.email) return toast.error("Nom et email obligatoires");

    const newClient = { ...form, user_id: user?.id };
    const { error } = await supabase.from("crm_clients").insert([newClient]);
    if (error) return toast.error("Erreur d'ajout");
    toast.success("Client ajouté !");
    setForm({ nom: "", email: "", telephone: "", statut: "Nouveau", source: "Site Web", notes: "" });
    fetchClients();
  };

  const filteredClients = clients.filter((c) =>
    [c.nom, c.email, c.statut, c.source].some((val) =>
      val.toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">📇 CRM – Clients</h1>

      <div className="grid gap-4 mb-6 grid-cols-1 md:grid-cols-2">
        <input name="nom" value={form.nom} onChange={handleChange} placeholder="Nom" className="p-2 border rounded" />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="p-2 border rounded" />
        <input name="telephone" value={form.telephone} onChange={handleChange} placeholder="Téléphone" className="p-2 border rounded" />
        <input name="source" value={form.source} onChange={handleChange} placeholder="Source (ex: site, appel...)" className="p-2 border rounded" />
        <select name="statut" value={form.statut} onChange={handleChange} className="p-2 border rounded">
          <option>Nouveau</option>
          <option>En cours</option>
          <option>Converti</option>
          <option>Perdu</option>
        </select>
        <textarea name="notes" value={form.notes} onChange={handleChange} placeholder="Notes IA ou personnelles" className="p-2 border rounded col-span-2" />
      </div>

      <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Ajouter</button>

      <div className="my-6">
        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="🔍 Rechercher un client..." className="w-full p-2 border rounded" />
      </div>

      <div className="grid gap-4">
        {filteredClients.map((c) => (
          <div key={c.id} className="border rounded p-4 bg-white shadow-sm">
            <h2 className="text-xl font-semibold">{c.nom}</h2>
            <p>📧 {c.email}</p>
            <p>📱 {c.telephone}</p>
            <p>📌 {c.source} • <strong>{c.statut}</strong></p>
            <p className="mt-2 text-gray-600">{c.notes}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
