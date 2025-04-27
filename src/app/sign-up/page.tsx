'use client';

import { SignUp } from '@clerk/nextjs';
import { motion } from 'framer-motion';

export default function SignUpPage() {
  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-extrabold text-center text-primary mb-8">
          Créer un compte
        </h1>
        <SignUp path="/sign-up" routing="path" />
      </div>
    </motion.div>
  );
}
