// src/app/formations/televente/page.tsx
"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function TeleventeFormation() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <Link href="/formations" className="inline-flex items-center mb-6 text-blue-600 hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour aux formations
        </Link>

        <h1 className="text-4xl font-bold text-center mb-4">Formation : Télévente Professionnelle</h1>
        <p className="text-lg text-center text-gray-600 mb-8">
          Développez vos compétences pour exceller dans la vente à distance et la relation client.
        </p>

        <div className="bg-blue-50 p-6 rounded-2xl shadow-lg mb-10">
          <h2 className="text-2xl font-semibold mb-4">Objectifs</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Maitriser les techniques de télévente modernes</li>
            <li>Gérer efficacement les objections</li>
            <li>Transformer un appel en opportunité commerciale</li>
            <li>Booster la fidélisation client par téléphone</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 p-6 rounded-xl mb-8">
          <h2 className="text-xl font-semibold mb-3">Contenu de la formation</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-1">
            <li>Introduction à la télévente</li>
            <li>Scripts d'appel efficaces</li>
            <li>Voix, ton, et écoute active</li>
            <li>CRM et outils numériques</li>
            <li>Exercices pratiques et role-play</li>
          </ol>
        </div>

        <div className="text-center">
          <Button className="text-lg px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full">
            S’inscrire à la formation
          </Button>
        </div>
      </div>
    </div>
  )
}
