"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase";
import { Database } from "@/types/supabase";
import Loader from "@/components/Loader";
import Image from "next/image";

type Portfolio = Database["public"]["Tables"]["portfolio"]["Row"];

export default function AdminPortfolioPage() {
  const [projects, setProjects] = useState<Portfolio[]>([]);
  const [loading, setLoading] = useState(true);

  const supabase = createClient();

  useEffect(() => {
    const fetchPortfolio = async () => {
      const { data, error } = await supabase.from("portfolio").select("*");
      if (error) {
        console.error("Erreur chargement Portfolio:", error.message);
      } else {
        setProjects(data || []);
      }
      setLoading(false);
    };

    fetchPortfolio();
  }, [supabase]);

  if (loading) return <Loader />;

  return (
    <main className="min-h-screen p-6 bg-white dark:bg-gray-900">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        🎨 Gestion du Portfolio - Admin
      </h1>

      {projects.length === 0 ? (
        <p className="text-gray-700 dark:text-gray-300">Aucun projet ajouté.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-all p-4"
            >
              {project.image_url && (
                <Image
                  src={project.image_url}
                  alt={project.titre || "Projet"}
                  width={400}
                  height={300}
                  className="rounded-lg mb-4"
                />
              )}
              <h2 className="text-xl font-semibold mb-2">{project.titre}</h2>
              <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
