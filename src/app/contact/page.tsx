'use client';

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactDL() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message envoyé !");
    // TODO: brancher EmailJS ou Supabase
  };

  return (
    <section className="min-h-screen bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 bg-white rounded-2xl shadow-xl p-10">
        {/* Formulaire */}
        <div>
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Contactez-nous</h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="text-sm font-medium text-gray-700">Nom</label>
              <Input name="name" placeholder="Votre nom" value={form.name} onChange={handleChange} required />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <Input type="email" name="email" placeholder="Votre email" value={form.email} onChange={handleChange} required />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Objet</label>
              <Input name="subject" placeholder="Sujet du message" value={form.subject} onChange={handleChange} />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Message</label>
              <Textarea name="message" rows={4} placeholder="Votre message..." value={form.message} onChange={handleChange} />
            </div>
            <Button type="submit" className="w-full">Envoyer</Button>
          </form>
        </div>

        {/* Infos de contact */}
        <div className="bg-gray-50 rounded-xl p-6 flex flex-col justify-center space-y-4 text-sm text-gray-700">
          <div>
            <strong>📍 Adresse :</strong><br />
            École de Police, Yaoundé – Cameroun
          </div>
          <div>
            <strong>📧 Email :</strong><br />
            contact@dlsolutions.com
          </div>
          <div>
            <strong>📞 Téléphone :</strong><br />
            +237 694 34 15 86
          </div>
          <div>
            <strong>🌐 Site Web :</strong><br />
            <a href="https://www.dlsolutions.com" target="_blank" className="underline text-indigo-600">www.dlsolutions.com</a>
          </div>
        </div>
      </div>
    </section>
  );
}
