'use client';

import { SignOutButton } from '@clerk/nextjs';
import { useState } from 'react';

export default function LogoutButton() {
  const [confirming, setConfirming] = useState(false);

  const handleSignOut = () => {
    setConfirming(true);
  };

  return (
    <>
      {!confirming ? (
        <button
          onClick={handleSignOut}
          className="px-4 py-2 rounded-full bg-red-500 hover:bg-red-600 text-white font-bold text-sm md:text-base transition duration-300"
        >
          Déconnexion
        </button>
      ) : (
        <div className="flex flex-col items-center space-y-2 p-2 bg-gray-800 rounded-xl shadow-md animate-fade-in">
          <p className="text-sm">Confirmer la déconnexion ?</p>
          <div className="flex gap-2">
            <SignOutButton>
              <button className="px-3 py-1 bg-red-500 hover:bg-red-600 rounded-full text-white text-xs">
                Oui
              </button>
            </SignOutButton>
            <button
              onClick={() => setConfirming(false)}
              className="px-3 py-1 bg-gray-600 hover:bg-gray-700 rounded-full text-white text-xs"
            >
              Non
            </button>
          </div>
        </div>
      )}
    </>
  );
}
