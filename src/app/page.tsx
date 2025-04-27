// src/app/page.tsx

import SEO from "@/components/SEO";
import HeroDL from "@/components/HeroDL";
import ServicesSection from "@/components/ServicesSection";
import PricingGrid from "@/components/PricingGrid";
import ProjectsShowcase from "@/components/ProjectsShowcase";

export default function HomePage() {
  return (
    <>
      <SEO /> {/* 👈 SEO MAGIQUE ACTIF */}
      <HeroDL />
      <ServicesSection />
      <PricingGrid />
      <ProjectsShowcase />
    </>
  );
}
