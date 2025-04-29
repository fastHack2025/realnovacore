'use client';

import { motion } from "framer-motion";
import { useState } from "react";
import { db } from "@/lib/firebaseClient";
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import toast from 'react-hot-toast';

export default function ContactPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "messages"), {
        email,
        message,
        createdAt: serverTimestamp(),
      });
      toast.success("Message envoyé avec succès ✅");
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error(error);
      toast.error("Erreur lors de l'envoi ❌");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col items-center justify-center text-center p-8 bg-gradient-to-b from-indigo-700 via-purple-700 to-pink-700"
    >
      <h1 className="text-4xl font-bold text-white mb-6">Contactez DL Solutions</h1>

      <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-md space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Votre email"
          required
          className="p-3 rounded bg-gray-800 text-white"
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Votre message"
          required
          rows={5}
          className="p-3 rounded bg-gray-800 text-white"
        />
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-full font-bold transition"
        >
          Envoyer
        </button>
      </form>
    </motion.section>
  );
}
