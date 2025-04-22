"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CXFormation() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <Link href="/formations" className="inline-flex items-center mb-6 text-purple-600 hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour aux formations
        </Link>

        <h1 className="text-4xl font-bold text-center mb-4">Formation : Gestion de l’Expérience Client</h1>
        <p className="text-lg text-center text-gray-600 mb-8">
          Maîtrisez les leviers d’une expérience client fluide, mémorable et différenciante.
        </p>

        <div className="bg-purple-50 p-6 rounded-2xl shadow-lg mb-10">
          <h2 className="text-2xl font-semibold mb-4">Objectifs</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Comprendre le parcours client de A à Z</li>
            <li>Évaluer les points de friction</li>
            <li>Mettre en place une stratégie CX omnicanale</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 p-6 rounded-xl mb-8">
          <h2 className="text-xl font-semibold mb-3">Plan de cours</h2>
          <ol className="list-decimal list-inside space-y-1">
            <li>Cartographie du parcours client</li>
            <li>Canaux et points de contact</li>
            <li>Data & KPI de satisfaction</li>
            <li>Exemples de stratégies CX gagnantes</li>
          </ol>
        </div>

        <div className="text-center">
          <Button className="text-lg px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full">
            S’inscrire à la formation
          </Button>
        </div>
      </div>
    </div>
  )
}
