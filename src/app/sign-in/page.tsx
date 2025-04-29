'use client';

import { SignIn } from '@clerk/nextjs';
import { motion } from 'framer-motion';

export const metadata = {
  title: "Connexion - NovaCore",
  description: "Connectez-vous à NovaCore pour accéder à votre espace CRM.",
  keywords: "Connexion, CRM, NovaCore, ERP",
  openGraph: {
    title: "Connexion NovaCore",
    description: "Accédez à votre espace client NovaCore.",
    url: "https://tonsite.com/sign-in",
    type: "website",
  },
};

export default function SignInPage() {
  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-extrabold text-center text-primary mb-8">Connexion</h1>
        <SignIn path="/sign-in" routing="path" />
      </div>
    </motion.div>
  );
}
