"use client";
import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  { href: "https://facebook.com", src: "/icons/facebook.svg", alt: "Facebook" },
  { href: "https://instagram.com", src: "/icons/instagram.svg", alt: "Instagram" },
  { href: "https://linkedin.com", src: "/icons/linkedin.svg", alt: "LinkedIn" },
  { href: "https://twitter.com", src: "/icons/twitter.svg", alt: "Twitter / X" },
  { href: "https://whatsapp.com", src: "/icons/whatsapp.svg", alt: "WhatsApp" },
  { href: "https://tiktok.com", src: "/icons/tiktok.svg", alt: "TikTok" },
  { href: "https://youtube.com", src: "/icons/youtube.svg", alt: "YouTube" },
];

export default function SocialIcons() {
  return (
    <div className="flex flex-wrap gap-4 justify-center py-6">
      {socialLinks.map((icon, index) => (
        <Link
          key={index}
          href={icon.href}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-110 hover:rotate-2"
        >
          <Image
            src={icon.src}
            alt={icon.alt}
            width={32}
            height={32}
            className="hover:drop-shadow-md"
          />
        </Link>
      ))}
    </div>
  );
}
