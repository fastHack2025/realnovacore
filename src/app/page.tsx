import HeroDL from "@/components/HeroDL";
import WhyChooseUs from "@/components/WhyChooseUs";
import ModulesDL from "@/components/ModulesDL";
import TestimonialsDL from "@/components/TestimonialsDL";
import PricingGrid from "@/components/PricingGrid";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import CTASection from "@/components/CTASection";
import ChatBot from "@/components/ChatBot";
import PopupRDV from "@/components/PopupRDV";

export default function HomePage() {
  return (
    <>
      <HeroDL />
      <WhyChooseUs />
      <ModulesDL />
      <TestimonialsDL />
      <PricingGrid />
      <FAQ />
      <ContactSection />
      <CTASection />
      <ChatBot />
      <PopupRDV />
    </>
  );
}
