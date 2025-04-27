"use client";

import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) setVisible(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 bg-white shadow-md rounded-lg p-4 flex justify-between items-center">
      <span className="text-gray-700">Nous utilisons des cookies pour améliorer votre expérience.</span>
      <button onClick={acceptCookies} className="ml-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
        Accepter
      </button>
    </div>
  );
}
