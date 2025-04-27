// src/components/TeamSection.tsx
'use client';
import Image from 'next/image';

export default function TeamSection() {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative group w-44 h-44 rounded-full overflow-hidden shadow-2xl hover:scale-110 transition-all duration-500">
        <Image
          src="https://res.cloudinary.com/dko5sommz/image/upload/v1745726808/Design_sans_titre_x3pcna.png"
          alt="Samuel OBAM Davy"
          fill
          className="object-cover"
        />
      </div>
      <h3 className="text-2xl font-semibold text-center text-primary">Samuel OBAM Davy</h3>
      <p className="text-center text-gray-600 dark:text-gray-400 max-w-xs">
        Gérant, Programmeur et Formateur CX. Leader passionné par l'optimisation du parcours client et la croissance digitale par l'IA.
      </p>
    </div>
  );
}
