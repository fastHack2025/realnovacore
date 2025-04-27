// src/components/BlogSection.tsx
"use client";

import BlogCard from "./BlogCard";

const articles = [
  {
    title: "Optimiser l'expérience client avec l'IA",
    description: "Découvrez comment l'IA révolutionne le parcours client en 2025.",
    imageUrl: "/blog/blog-1.jpg",
    slug: "optimiser-experience-client",
  },
  {
    title: "Les 5 secrets d'un CRM sur mesure réussi",
    description: "Comment construire un CRM parfait pour votre entreprise ?",
    imageUrl: "/blog/blog-2.jpg",
    slug: "crm-sur-mesure-reussi",
  },
];

export default function BlogSection() {
  return (
    <section className="section container">
      <h2 className="section-title">Derniers Articles</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {articles.map((article, index) => (
          <BlogCard key={index} {...article} />
        ))}
      </div>
    </section>
  );
}
