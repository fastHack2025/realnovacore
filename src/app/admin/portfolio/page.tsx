"use client";

import { useEffect, useState } from "react";
import { supabase, subscribeToPortfolio } from "@/lib/supabase/realtime";

interface Project {
  id: string;
  titre: string;
  description: string;
  image_url: string;
  created_at: string;
}

export default function PortfolioDashboardPage() {
  const [projects, setProjects] = useState<Project[]>([]);

  const fetchProjects = async () => {
    const { data, error } = await supabase
      .from("portfolio")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Erreur de chargement des projets :", error.message);
    } else {
      setProjects(data || []);
    }
  };

  useEffect(() => {
    fetchProjects();

    const subscription = subscribeToPortfolio(() => {
      fetchProjects();
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-3xl font-extrabold mb-8 text-primary text-center">
        🖼️ Projets du Portfolio
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="border p-4 rounded-lg shadow-md bg-white hover:shadow-lg transition-all">
            <img
              src={project.image_url}
              alt={project.titre}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{project.titre}</h2>
            <p className="text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
