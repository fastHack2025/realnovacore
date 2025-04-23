"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Image from "next/image";

export default function EquipeSection() {
  const [membres, setMembres] = useState<any[]>([]);

  useEffect(() => {
    const fetchEquipe = async () => {
      const { data } = await supabase.from("equipe").select("*").eq("visible", true).order("ordre", { ascending: true });
      if (data) setMembres(data);
    };
    fetchEquipe();
  }, []);

  if (membres.length === 0) return null;

  return (
    <section className="bg-gray-950 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">👥 Équipe dirigeante</h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10">
          {membres.map((m) => (
            <div key={m.id} className="bg-white/5 border border-white/10 rounded-xl p-6 text-center shadow-xl hover:scale-105 transition">
              <div className="w-28 h-28 mx-auto overflow-hidden rounded-full border mb-4">
                <Image src={m.photo_url} alt={m.nom} width={100} height={100} className="object-cover w-full h-full" />
              </div>
              <h3 className="text-lg font-semibold">{m.nom}</h3>
              <p className="text-sm text-white/70">{m.fonction}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
