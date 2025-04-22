'use client';

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";

export default function RDVPage() {
  const [form, setForm] = useState({ name: "", email: "", date: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Rendez-vous envoyé avec succès !");
    // TODO: envoyer à Supabase ou EmailJS
  };

  return (
    <section className="min-h-screen bg-gray-100 py-16 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">Prendre un rendez-vous</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
            <Input name="name" placeholder="Votre nom" value={form.name} onChange={handleChange} required />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <Input type="email" name="email" placeholder="Votre email" value={form.email} onChange={handleChange} required />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date souhaitée</label>
            <div className="relative">
              <Input type="date" name="date" value={form.date} onChange={handleChange} required />
              <CalendarIcon className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <Textarea name="message" rows={4} placeholder="Votre message" value={form.message} onChange={handleChange} />
          </div>

          <Button type="submit" className="w-full">
            Envoyer la demande
          </Button>
        </form>
      </div>
    </section>
  );
}
