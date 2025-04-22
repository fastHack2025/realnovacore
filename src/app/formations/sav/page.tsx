"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SAVFormation() {
  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <Link href="/formations" className="inline-flex items-center mb-6 text-blue-600 hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour aux formations
        </Link>

        <h1 className="text-4xl font-bold text-center mb-4">Formation : Service Après-Vente (SAV)</h1>
        <p className="text-lg text-center text-gray-600 mb-8">
          Devenez un expert dans la résolution rapide et humaine des problèmes clients.
        </p>

        <div className="bg-yellow-50 p-6 rounded-2xl shadow-lg mb-10">
          <h2 className="text-2xl font-semibold mb-4">Objectifs</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>Répondre efficacement aux demandes clients</li>
            <li>Gérer les retours et litiges avec diplomatie</li>
            <li>Renforcer la fidélité grâce à un SAV performant</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 p-6 rounded-xl mb-8">
          <h2 className="text-xl font-semibold mb-3">Programme</h2>
          <ol className="list-decimal list-inside space-y-1">
            <li>Réception des plaintes</li>
            <li>Analyse et typologie des demandes</li>
            <li>Gestion émotionnelle du client</li>
            <li>Procédures internes et outils</li>
            <li>Mesure de la satisfaction post-SAV</li>
          </ol>
        </div>

        <div className="text-center">
          <Button className="text-lg px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full">
            S’inscrire à la formation
          </Button>
        </div>
      </div>
    </div>
  )
}
