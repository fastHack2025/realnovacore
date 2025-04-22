"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function VenteStrategiqueFormation() {
  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <Link href="/formations" className="inline-flex items-center mb-6 text-indigo-600 hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour aux formations
        </Link>

        <h1 className="text-4xl font-bold text-center mb-4">Formation : Vente Stratégique & Négociation</h1>
        <p className="text-lg text-center text-gray-600 mb-8">
          Devenez un négociateur hors pair et améliorez votre taux de conversion.
        </p>

        <div className="bg-indigo-50 p-6 rounded-2xl shadow-lg mb-10">
          <h2 className="text-2xl font-semibold mb-4">Objectifs</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>Conduire un entretien de vente efficace</li>
            <li>Construire une stratégie commerciale performante</li>
            <li>Conclure des ventes avec impact</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 p-6 rounded-xl mb-8">
          <h2 className="text-xl font-semibold mb-3">Contenu</h2>
          <ol className="list-decimal list-inside space-y-1">
            <li>Méthodologie SPIN Selling</li>
            <li>Négociation commerciale éthique</li>
            <li>Psychologie du client</li>
            <li>Clôture & relance efficace</li>
          </ol>
        </div>

        <div className="text-center">
          <Button className="text-lg px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full">
            S’inscrire à la formation
          </Button>
        </div>
      </div>
    </div>
  )
}
