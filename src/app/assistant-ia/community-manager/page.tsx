"use client"

import { useState } from "react"
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function AssistantCommunityManager() {
  const [prompt, setPrompt] = useState("")
  const [response, setResponse] = useState("")

  const handleGenerate = () => {
    // Simule une réponse IA (à remplacer par OpenAI plus tard)
    setResponse(`✨ Voici une idée de post pour Instagram :

📣 *Boostez votre visibilité dès aujourd'hui !*  
Dave & Luce vous accompagne dans votre stratégie digitale avec des outils IA puissants.  
#DigitalStrategy #AI #DaveLuceSolutions`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8 text-gray-800">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-10 space-y-6">
        <h1 className="text-3xl font-bold text-center text-indigo-700">Assistant IA - Community Manager</h1>

        <p className="text-center text-gray-600 mb-6">
          Générez du contenu engageant pour vos réseaux sociaux en un clic !
        </p>

        <div className="flex justify-center gap-4 text-2xl text-indigo-500 mb-6">
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
          <FaLinkedin />
        </div>

        <Textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Décrivez ce que vous voulez publier ou le ton souhaité (ex : post pour la journée mondiale du client)"
          className="min-h-[120px]"
        />

        <div className="text-center">
          <Button onClick={handleGenerate} className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg px-6 py-2 rounded-xl">
            Générer un post IA ✨
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
