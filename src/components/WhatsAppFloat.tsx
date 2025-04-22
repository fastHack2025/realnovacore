"use client";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/237694341586"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-5 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition"
      title="Contact WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
        viewBox="0 0 24 24"
        className="w-6 h-6"
      >
        <path d="M20.5 3.5a11.69 11.69 0 0 0-16.5 0c-4.1 4.1-4.1 10.8 0 14.9l-1 4 4-1a11.68 11.68 0 0 0 13.5-18z..." />
      </svg>
    </a>
  );
}
