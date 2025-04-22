"use client"

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-800 px-6 py-12 md:px-20 animate-fade-in">
      <section className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-violet-700">À propos de Dave & Luce Solutions</h1>
        <p className="text-lg md:text-xl leading-relaxed mb-8">
          Basée à Yaoundé, Cameroun – au quartier École de Police, notre entreprise <strong>Dave & Luce Solutions</strong> (SARL) est spécialisée dans la <strong>relation client</strong>,
          la <strong>communication digitale</strong>, la <strong>création d’applications web & mobiles</strong>, et l’accompagnement stratégique des entreprises.
        </p>
        <p className="text-lg md:text-xl leading-relaxed mb-8">
          Grâce à notre produit phare <strong>NovaCore AI</strong>, nous aidons les organisations à automatiser leur croissance à travers des solutions CRM intelligentes, des outils IA de community management,
          de suivi client, de prise de rendez-vous, de génération de devis, et un studio de développement IA complet.
        </p>
        <p className="text-lg md:text-xl leading-relaxed mb-12">
          Nos solutions sont conçues pour répondre aux besoins des entreprises africaines mais également adaptées aux standards internationaux, notamment ceux de l’Union Européenne 🇪🇺 et de l’OTAN, en matière de
          <strong>protection des données, cybersécurité et performance digitale</strong>.
        </p>

        <div className="bg-gradient-to-r from-violet-100 via-purple-50 to-pink-50 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Notre mission</h2>
          <p className="text-base md:text-lg">
            Apporter à chaque entreprise – grande ou petite – les outils numériques les plus puissants et accessibles,
            pour une croissance durable, professionnelle et centrée sur le client.
          </p>
        </div>
      </section>
    </main>
  )
}
