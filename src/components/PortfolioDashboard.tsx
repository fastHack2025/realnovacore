import EditPortfolioModal from "@/components/EditPortfolioModal";
import { useState } from "react";

const [editingProject, setEditingProject] = useState<any>(null);

...

{projects.map((project) => (
  <div key={project.id} className="border p-4 rounded shadow-md relative">
    <img src={project.image_url} alt={project.titre} className="w-full h-48 object-cover rounded mb-4" />
    <h2 className="text-xl font-bold">{project.titre}</h2>
    <p className="text-gray-600">{project.description}</p>
    <div className="absolute top-4 right-4 flex space-x-2">
      <button
        onClick={() => setEditingProject(project)}
        className="bg-yellow-400 text-white px-3 py-1 rounded text-xs"
      >
        Modifier
      </button>
      <button
        onClick={() => handleDelete(project.id)}
        className="bg-red-500 text-white px-3 py-1 rounded text-xs"
      >
        Supprimer
      </button>
    </div>
  </div>
))}

{editingProject && (
  <EditPortfolioModal
    project={editingProject}
    onClose={() => setEditingProject(null)}
    onRefresh={fetchProjects}
  />
)}
