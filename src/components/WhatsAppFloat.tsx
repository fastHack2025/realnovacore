"use client";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/237694341586"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600 p-3 rounded-full shadow-xl transition"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
        alt="WhatsApp"
        className="w-8 h-8"
      />
    </a>
  );
}
