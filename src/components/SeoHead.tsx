"use client";

import Head from "next/head";

export default function SeoHead() {
  return (
    <Head>
      {/* Titre général */}
      <title>NovaCore - Plateforme IA Business</title>
      <meta name="description" content="NovaCore : propulsez votre entreprise grâce à notre plateforme IA 360° ultra performante." />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Dave and Luce Solutions" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph (Facebook, LinkedIn, WhatsApp) */}
      <meta property="og:title" content="NovaCore - Intelligence Artificielle Business" />
      <meta property="og:description" content="Découvrez NovaCore, la solution ultime pour propulser votre business." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.dlsolutions.com" />
      <meta property="og:image" content="https://res.cloudinary.com/dko5sommz/image/upload/v1744370550/logo-novacore_iqi2pd.png" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="NovaCore - Plateforme IA Business" />
      <meta name="twitter:description" content="NovaCore : propulsez votre entreprise grâce à l'IA ultime." />
      <meta name="twitter:image" content="https://res.cloudinary.com/dko5sommz/image/upload/v1744370550/logo-novacore_iqi2pd.png" />

      {/* JSON-LD SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "NovaCore",
            "url": "https://www.dlsolutions.com",
            "logo": "https://res.cloudinary.com/dko5sommz/image/upload/v1744370550/logo-novacore_iqi2pd.png",
            "sameAs": [
              "https://www.instagram.com/ton_compte/",
              "https://www.facebook.com/ton_compte/",
              "https://www.linkedin.com/company/ton_compte/",
              "https://twitter.com/ton_compte/"
            ]
          }),
        }}
      />
    </Head>
  );
}
