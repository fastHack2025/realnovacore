"use client";

import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { supabase } from "@/lib/supabase"; // ✅ Import Supabase

export default function ProfileClient() {
  const { user } = useUser();
  const [firstName, setFirstName] = useState(user?.firstName || "");
  const [lastName, setLastName] = useState(user?.lastName || "");
  const [imageUrl, setImageUrl] = useState(user?.imageUrl || "");
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await user?.update({ firstName, lastName });
      await user?.setProfileImage({ file: imageUrl });
      toast.success("Profil mis à jour ✅");
    } catch (err) {
      toast.error("Une erreur est survenue ❌");
    } finally {
      setLoading(false);
    }
  };

  if (!user) return null;

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-6 text-gray-800">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow p-6">
        <h1 className="text-2xl font-bold text-indigo-700 mb-4">👤 Mon Profil</h1>

        <div className="flex items-center gap-4 mb-6">
          <img
            src={user.imageUrl}
            alt="avatar"
            className="w-20 h-20 rounded-full border shadow"
          />
          <div>
            <h2 className="text-xl font-semibold">
              {user.firstName} {user.lastName || user.username}
            </h2>
            <p className="text-sm text-gray-500">
              {user.primaryEmailAddress?.emailAddress}
            </p>
          </div>
        </div>

        <form className="space-y-4" onSubmit={handleUpdate}>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Prénom</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Nom</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Image de profil (URL)</label>
            <input
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded text-sm"
            disabled={loading}
          >
            {loading ? "Enregistrement..." : "Enregistrer les modifications"}
          </button>
        </form>

        <div className="mt-10">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">⚙️ Préférences</h2>
          <div className="space-y-4 text-sm">
            <div className="bg-gray-100 p-4 rounded">
              <label className="block mb-1 font-medium">Notifications email</label>
              <select
                className="w-full border border-gray-300 rounded px-3 py-2"
                onChange={async (e) => {
                  await supabase.from("preferences").upsert({
                    user_id: user.id,
                    notifications: e.target.value,
                  });
                  toast.success("Préférences mises à jour ✅");
                }}
              >
                <option value="all">Recevoir toutes les notifications</option>
                <option value="important">Seulement les importantes</option>
                <option value="none">Aucune</option>
              </select>
            </div>
            <div className="bg-gray-100 p-4 rounded">
              <label className="block mb-1 font-medium">Langue de l'interface</label>
              <select
                className="w-full border border-gray-300 rounded px-3 py-2"
                onChange={async (e) => {
                  await supabase.from("preferences").upsert({
                    user_id: user.id,
                    langue: e.target.value,
                  });
                  toast.success("Langue enregistrée ✅");
                }}
              >
                <option value="fr">Français</option>
                <option value="en">English</option>
                <option value="de">Deutsch</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <a
            href="/sign-out"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm"
          >
            Se déconnecter
          </a>
        </div>
      </div>
    </main>
  );
}
