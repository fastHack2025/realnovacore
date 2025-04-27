"use client";

import PortfolioUploader from "@/components/PortfolioUploader";
import PortfolioDashboardPage from "@/components/PortfolioDashboard";

export default function PortfolioAdminPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-8 space-y-12">
      <section>
        <h1 className="text-3xl font-extrabold mb-6">🎨 Ajouter un nouveau projet</h1>
        <PortfolioUploader />
      </section>

      <section>
        <h1 className="text-3xl font-extrabold mb-6">🖼️ Projets existants</h1>
        <PortfolioDashboardPage />
      </section>
    </main>
  );
}
