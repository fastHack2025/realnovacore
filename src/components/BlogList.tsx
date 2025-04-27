// src/components/BlogList.tsx
"use client";
import Link from 'next/link';

const articles = [
  {
    title: "L'importance d'un site rapide en 2025",
    slug: "site-rapide-2025",
    description: "Comment booster votre SEO et vos conversions en optimisant vos performances web.",
  },
  {
    title: "Tendances Webdesign à suivre",
    slug: "tendances-webdesign",
    description: "Découvrez les tendances qui domineront l'année prochaine en UI/UX design.",
  },
];

export default function BlogList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {articles.map((article) => (
        <Link key={article.slug} href={`/blog/${article.slug}`}>
          <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md hover:scale-105 transform transition-all duration-300 cursor-pointer">
            <h2 className="text-2xl font-semibold mb-2">{article.title}</h2>
            <p className="text-gray-600 dark:text-gray-400">{article.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
