// src/components/BlogCard.tsx
"use client";

import Image from 'next/image';
import Link from 'next/link';

interface BlogCardProps {
  title: string;
  description: string;
  imageUrl: string;
  slug: string;
}

export default function BlogCard({ title, description, imageUrl, slug }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="block transform hover:scale-105 transition-transform duration-500">
      <div className="rounded-lg overflow-hidden shadow-xl bg-white dark:bg-gray-800">
        <Image
          src={imageUrl}
          alt={title}
          width={600}
          height={400}
          className="object-cover w-full h-48"
        />
        <div className="p-6">
          <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{title}</h2>
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </div>
      </div>
    </Link>
  );
}
