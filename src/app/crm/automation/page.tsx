"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase";

export default function AutomationCRMPage() {
  const supabase = createClient();
  const [tasks, setTasks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTasks() {
      const { data, error } = await supabase.from("automation_tasks").select("*").order("created_at", { ascending: false });
      if (!error) {
        setTasks(data || []);
      }
      setLoading(false);
    }
    fetchTasks();
  }, [supabase]);

  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 p-8">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-2 animate-fadeInUp">🔄 Automatisation CRM</h1>
        <p className="text-lg text-gray-600 animate-fadeInUp">Notifications, rappels & suivis intelligents automatisés.</p>
      </header>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="loader animate-bounce">Chargement...</div>
        </div>
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tasks.map((task) => (
            <div key={task.id} className="p-6 rounded-lg shadow-md bg-white hover:shadow-2xl transition transform hover:scale-105 animate-zoomIn">
              <h2 className="text-xl font-semibold">{task.titre}</h2>
              <p className="text-gray-600">Type : {task.type}</p>
              <p className="text-gray-600">Date : {new Date(task.date).toLocaleDateString()}</p>
              <p className="text-gray-400 text-sm">Ajouté : {new Date(task.created_at).toLocaleString()}</p>
            </div>
          ))}
        </section>
      )}

      <footer className="mt-16 text-center text-gray-500 text-sm animate-fadeInUp">
        &copy; {new Date().getFullYear()} NovaCore CRM - Tous droits réservés.
      </footer>
    </main>
  );
}
