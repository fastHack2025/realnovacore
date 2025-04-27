// lib/seo.ts
interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    url?: string;
    image?: string;
  }
  
  export function generateMeta({
    title = "NovaCore - Votre plateforme innovante",
    description = "NovaCore propulse vos projets dans une nouvelle ère numérique.",
    keywords = "novacore, digital, agence web, europe, seo, startup",
    url = "https://www.dlsolutions.com",
    image = "https://res.cloudinary.com/dko5sommz/image/upload/v1744370550/logo-novacore_iqi2pd.png"
  }: SEOProps) {
    return {
      title,
      description,
      keywords,
      openGraph: {
        type: "website",
        url,
        title,
        description,
        images: [{ url: image }]
      },
      twitter: {
        card: "summary_large_image",
        site: "@NovaCore",
        title,
        description,
        image
      }
    };
  }
  