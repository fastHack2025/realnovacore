// src/components/SEO.tsx
"use client";

import Head from "next/head";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  image?: string;
  url?: string;
}

export default function SEO({
  title = "Dave And Luce Solutions - Gestion de l'expérience client & CRM sur-mesure",
  description = "Experts en expérience client (CX), développement de CRM personnalisés, centres d'appels, et intégration IA. Basés en Europe et Amérique, nous boostons votre image de marque.",
  keywords = "CX, CRM personnalisé, Call Center, Gestion de l'expérience client, IA intégration, Branding, Europe, USA, Canada, Formation CX, Développement CRM",
  author = "Dave And Luce Solutions",
  image = "https://res.cloudinary.com/dko5sommz/image/upload/v1745726808/Design_sans_titre_x3pcna.png", // 👈 Ton image officielle (modifiables)
  url = "https://daveandlucesolutions.com", // 👈 Ton domaine final
}: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph pour Facebook, LinkedIn */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Dave And Luce Solutions" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
