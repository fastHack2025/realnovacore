"use client";

import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 px-4">
      <h1 className="text-6xl font-bold text-purple-600 mb-6">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
        Page introuvable 🕵️‍♂️
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 text-center">
        Désolé, la page que vous cherchez n'existe pas ou a été déplacée.
      </p>
      <button
        onClick={() => router.push("/")}
        className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded"
      >
        Retour à l'accueil
      </button>
    </div>
  );
}
