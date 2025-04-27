"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  useEffect(() => {
    console.error("Erreur capturée:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 px-4">
      <h1 className="text-5xl font-bold text-red-600 mb-6">Erreur 🚨</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center">
        Oups... Quelque chose s'est mal passé.  
        <br />
        Code erreur : {error?.name ?? "Inconnu"}
      </p>
      <div className="flex space-x-4">
        <button
          onClick={() => reset()}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
        >
          Réessayer
        </button>
        <button
          onClick={() => router.push("/")}
          className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded"
        >
          Retour à l'accueil
        </button>
      </div>
    </div>
  );
}
