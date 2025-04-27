// src/app/about/page.tsx
import TeamSection from '@/components/TeamSection';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:to-black p-8">
      <h1 className="text-5xl font-bold text-center text-primary mb-10">
        À Propos de Dave And Luce Solutions
      </h1>
      <p className="text-center max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300 mb-10 leading-relaxed">
        Nous sommes une organisation de passionnés de la gestion de l'expérience client, experts en intégration d'IA, 
        programmation, et optimisation de la relation client depuis 2018.
      </p>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
        <div className="team-card">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Nos Missions</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
            <li>Gestion et optimisation du parcours client et cartographie</li>
            <li>Formations professionnelles en gestion de l'expérience client (CX)</li>
            <li>Management et pilotage de Centres d'Appel</li>
            <li>Création de CRM sur-mesure et personnalisé</li>
            <li>Gestion de pages média et optimisation de l'image de marque</li>
            <li>Intégration stratégique de l'Intelligence Artificielle (IA)</li>
          </ul>
        </div>

        <div className="team-card flex flex-col items-center justify-center">
          <TeamSection />
        </div>
      </div>
    </div>
  );
}
