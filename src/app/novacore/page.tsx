"use client"

import HeaderNovaCore from "@/components/HeaderNovaCore"
import HeroNovaCore from "@/components/HeroNovaCore"
import ModulesNovaCore from "@/components/ModulesNovaCore"
import FooterNovaCore from "@/components/FooterNovaCore"

export default function NovaCorePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      {/* Header */}
      <HeaderNovaCore />

      {/* Contenu principal */}
      <main className="flex-1">
        <HeroNovaCore />
        <ModulesNovaCore />
      </main>

      {/* Footer */}
      <FooterNovaCore />
    </div>
  )
}
