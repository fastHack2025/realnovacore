'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function LogoDL() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="w-12 h-12 relative animate-spin-slow">
        <Image
          src="https://res.cloudinary.com/dko5sommz/image/upload/v1745886218/Pink_Circle_Lotus_Yoga_Instructor_Logo_plv7yr.jpg"
          alt="DL Solutions Logo"
          fill
          className="rounded-full object-cover"
        />
      </div>
      <span className="font-bold text-white text-lg">DL Solutions</span>
    </Link>
  );
}
