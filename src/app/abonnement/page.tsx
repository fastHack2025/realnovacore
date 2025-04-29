'use client';

import { motion } from 'framer-motion';
import { loadStripe } from '@stripe/stripe-js';
import { useUser } from '@clerk/nextjs';
import toast from 'react-hot-toast';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

export default function AbonnementPage() {
  const { user } = useUser();

  const handleCheckout = async () => {
    if (!user) {
      toast.error('Veuillez vous connecter pour vous abonner.');
      return;
    }

    const stripe = await stripePromise;

    const res = await fetch('/api/stripe/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: user.emailAddresses[0].emailAddress }),
    });

    const { sessionId } = await res.json();

    await stripe?.redirectToCheckout({ sessionId });
  };

  return (
    <div className="relative min-h-screen bg-black text-white flex items-center justify-center px-6">
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-zinc-900 p-10 rounded-2xl shadow-2xl max-w-2xl w-full text-center space-y-6"
      >
        <h1 className="text-4xl font-bold mb-4">S'abonner à NovaCore 🚀</h1>

        <p className="text-gray-400">
          Accédez à toutes nos fonctionnalités CRM, ERP et IA. Abonnement simple, rapide et sécurisé via Stripe.
        </p>

        <ul className="text-gray-300 text-sm space-y-2 text-left mt-6">
          <li>✅ CRM sectoriels personnalisés</li>
          <li>✅ Modules IA exclusifs</li>
          <li>✅ Gestion de projet intelligente</li>
          <li>✅ Support client prioritaire</li>
          <li>✅ Accès futur au Réseau NovaWorld</li>
        </ul>

        <button
          onClick={handleCheckout}
          className="mt-8 bg-indigo-600 hover:bg-indigo-700 transition py-3 px-6 rounded-full font-bold text-lg"
        >
          🔥 S'abonner Maintenant
        </button>
      </motion.div>

    </div>
  );
}
