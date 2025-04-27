// src/app/blog/[slug]/page.tsx
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Article = {
  title: string;
  slug: string;
  description: string;
  image: string;
  date: string;
  content: string;
};

const articles: Article[] = [
  {
    title: "Optimiser son Parcours Client en 2025",
    slug: "optimiser-parcours-client-2025",
    description: "Découvrez comment transformer votre expérience client et booster vos résultats.",
    image: "/blog/blog-1.jpg",
    date: "2025-04-27",
    content: `🚀 Chez Dave and Luce Solutions, nous sommes experts en cartographie client et en stratégie CRM personnalisée...`
  },
  {
    title: "L'IA au service du Centre d'Appel",
    slug: "ia-centre-appel",
    description: "Découvrez comment intégrer l'intelligence artificielle dans la gestion de votre centre d'appel.",
    image: "/blog/blog-2.jpg",
    date: "2025-04-26",
    content: `🤖 L'intelligence artificielle révolutionne la gestion client avec des bots, des analyses prédictives et des optimisations...`
  }
];

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = articles.find(a => a.slug === params.slug);
  if (!article) return {};

  return {
    title: `${article.title} | Dave & Luce Solutions`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      images: [{ url: article.image }],
      locale: 'fr_FR',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
      images: [article.image],
    },
    alternates: {
      canonical: `https://www.daveandlucesolutions.com/blog/${params.slug}`,
      languages: {
        'fr': `https://www.daveandlucesolutions.com/fr/blog/${params.slug}`,
        'en': `https://www.daveandlucesolutions.com/en/blog/${params.slug}`,
      },
    }
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find(a => a.slug === params.slug);
  if (!article) return notFound();

  return (
    <main className="min-h-screen pt-24 pb-12 bg-gray-50 dark:bg-black">
      <div className="container">
        <img src={article.image} alt={article.title} className="w-full rounded-xl mb-8" />
        <h1 className="text-4xl font-extrabold mb-4">{article.title}</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">{article.date}</p>
        <div className="prose dark:prose-invert max-w-none">
          <p>{article.content}</p>
        </div>
      </div>
    </main>
  );
}
