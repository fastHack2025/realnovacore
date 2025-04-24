'use client';

import { useRouter } from 'next/navigation';

export default function RDVFloat() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push('/rdv')}
      className="fixed bottom-5 right-5 z-50 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-full shadow-lg transition-all duration-300"
    >
      📅 Prendre un RDV
    </button>
  );
}
