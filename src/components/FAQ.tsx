"use client";

export default function FAQ() {
  return (
    <section className="py-20 bg-white text-center px-6">
      <h2 className="text-3xl md:text-5xl font-bold mb-10 text-gray-900">Questions Fréquentes</h2>
      <div className="max-w-4xl mx-auto text-left space-y-6">
        <details className="group bg-gray-50 p-6 rounded-lg shadow">
          <summary className="flex justify-between items-center cursor-pointer font-semibold text-indigo-600">
            Comment démarrer avec NovaCore ?
            <span className="transform group-open:rotate-180 transition">⌄</span>
          </summary>
          <p className="mt-4 text-gray-700">Créez un compte gratuit et accédez à votre dashboard personnalisé en moins de 2 minutes.</p>
        </details>
        <details className="group bg-gray-50 p-6 rounded-lg shadow">
          <summary className="flex justify-between items-center cursor-pointer font-semibold text-indigo-600">
            Puis-je connecter mon CRM existant ?
            <span className="transform group-open:rotate-180 transition">⌄</span>
          </summary>
          <p className="mt-4 text-gray-700">Oui, NovaCore propose des intégrations faciles avec vos outils existants (Zapier, Make, etc.).</p>
        </details>
      </div>
    </section>
  );
}
