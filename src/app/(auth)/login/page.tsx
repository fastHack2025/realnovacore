'use client';

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // Intégrer API call ici pour Clerk/Supabase
    alert('Fonctionnalité de connexion en cours...');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-bubbles">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md animate-fadeInUp">
        <h1 className="text-2xl font-bold mb-6 text-center text-primary">Connexion</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Mot de passe"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-lg hover:opacity-90 transition-all"
          >
            Se connecter
          </button>
        </form>
        <p className="text-center mt-6 text-gray-600">
          Pas encore inscrit ?{" "}
          <Link href="/register" className="text-primary font-semibold hover:underline">
            Créer un compte
          </Link>
        </p>
      </div>
    </div>
  );
}
