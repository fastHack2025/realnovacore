"use client";

import Image from "next/image";

export default function FooterDL() {
  return (
    <footer className="bg-black text-white py-10 px-6 border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo et signature */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Image
            src="https://res.cloudinary.com/dko5sommz/image/upload/v1743895989/1_f3thi3.png"
            alt="DL Solutions"
            width={70}
            height={70}
            className="rounded-full border bg-white p-1 shadow"
          />
          <p className="text-sm mt-3">© Dave & Luce Solutions</p>
          <p className="text-xs text-white/60 italic">Samuel OBAM made this</p>
        </div>

        {/* Contacts */}
        <div className="text-sm text-center md:text-left space-y-2">
          <p>📞 +237 694 34 15 86</p>
          <p>📞 +237 620 21 62 17</p>
          <p>📧 samuelobaml@dlsolutions.com</p>
        </div>

        {/* Réseaux sociaux */}
        <div className="flex flex-wrap justify-center gap-3">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10">
            <Image src="https://res.cloudinary.com/dko5sommz/image/upload/v1745431179/facebook_vlin9i.jpg" alt="Facebook" width={40} height={40} className="object-cover rounded-full w-full h-full" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10">
            <Image src="https://res.cloudinary.com/dko5sommz/image/upload/v1745431188/instagram_ixnsiq.jpg" alt="Instagram" width={40} height={40} className="object-cover rounded-full w-full h-full" />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10">
            <Image src="https://res.cloudinary.com/dko5sommz/image/upload/v1745431183/tiktok_tqe6vk.jpg" alt="TikTok" width={40} height={40} className="object-cover rounded-full w-full h-full" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10">
            <Image src="https://res.cloudinary.com/dko5sommz/image/upload/v1745431190/twiter_mzyujj.jpg" alt="Twitter" width={40} height={40} className="object-cover rounded-full w-full h-full" />
          </a>
          <a href="https://wa.me/237694341586" target="_blank" rel="noopener noreferrer" className="w-10 h-10">
            <Image src="https://res.cloudinary.com/dko5sommz/image/upload/v1745431187/whatsapp_pixhht.jpg" alt="WhatsApp" width={40} height={40} className="object-cover rounded-full w-full h-full" />
          </a>
        </div>
      </div>
    </footer>
  );
}
