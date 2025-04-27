// src/components/BlogPost.tsx
'use client';

type BlogPostProps = {
  slug: string;
};

const articles: Record<string, { title: string; content: string }> = {
  "site-rapide-2025": {
    title: "L'importance d'un site rapide en 2025",
    content: "Un site rapide est essentiel pour améliorer l'expérience utilisateur et booster votre SEO. Voici pourquoi c'est vital pour 2025...",
  },
  "tendances-webdesign": {
    title: "Tendances Webdesign à suivre",
    content: "Le monde du web évolue vite. Voici les tendances majeures qui impacteront votre stratégie de design...",
  },
};

export default function BlogPost({ slug }: BlogPostProps) {
  const post = articles[slug];

  if (!post) {
    return <div>Article introuvable.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
      <p className="text-lg leading-relaxed">{post.content}</p>
    </div>
  );
}
