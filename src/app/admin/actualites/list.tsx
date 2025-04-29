'use client';

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

interface Actualite {
  id: string;
  titre: string;
  description: string;
  media_url: string;
  date_publication: string;
}

export default function ListeActualitesAdmin() {
  const [news, setNews] = useState<Actualite[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      const snapshot = await getDocs(collection(db, "actualites"));
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Actualite));
      setNews(data);
    };
    fetchNews();
  }, []);

  const handleDelete = async (id: string) => {
    if (confirm("❗ Supprimer définitivement cette actualité ?")) {
      await deleteDoc(doc(db, "actualites", id));
      setNews(prev => prev.filter(news => news.id !== id));
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">📋 Actualités enregistrées</h1>
      <div className="grid gap-6">
        {news.map(item => (
          <div key={item.id} className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold">{item.titre}</h2>
            <p className="text-gray-600 text-sm mb-4">{item.date_publication}</p>
            <video src={item.media_url} controls className="rounded-lg w-full h-48 object-cover mb-4" />
            <p className="text-gray-800">{item.description}</p>
            <button
              onClick={() => handleDelete(item.id)}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
            >
              Supprimer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
