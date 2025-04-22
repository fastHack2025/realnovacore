"use client"

import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { FaRobot } from "react-icons/fa"

export default function AssistantIT() {
  const [question, setQuestion] = useState("")
  const [response, setResponse] = useState("")

  const handleSupport = () => {
    // Simule une réponse IA (à remplacer par OpenAI plus tard)
    setResponse(`💡 Suggestion IA :

Si votre application ne démarre pas correctement, commencez par vérifier que toutes les dépendances sont installées avec :

\`\`\`bash
npm install
npm run dev
\`\`\`

Si l'erreur persiste, contactez le support technique Dave & Luce.`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8 text-gray-800">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-10 space-y-6">
        <div className="flex items-center gap-4 justify-center text-indigo-600">
          <FaRobot className="text-4xl" />
          <h1 className="text-3xl font-bold text-center">Assistant IT – NovaCore</h1>
        </div>

        <p className="text-center text-gray-600">
          Posez une question technique sur votre projet, votre plateforme ou une intégration (ex : bug, configuration, déploiement, etc.)
        </p>

        <Textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Décrivez ici votre problème technique ou demande (ex : l'authentification Clerk ne fonctionne pas...)"
          className="min-h-[140px]"
        />

        <div className="text-center">
          <Button
            onClick={handleSupport}
            className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg px-6 py-2 rounded-xl"
          >
            Obtenir l’aide IA 💬
          </Button>
        </div>

        {response && (
          <div className="mt-6 bg-gray-50 border border-gray-200 rounded-xl p-4 text-gray-700 whitespace-pre-wrap">
            {response}
          </div>
        )}
      </div>
    </div>
  )
}
