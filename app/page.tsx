import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AboutSection from "@/components/AboutSection";
import PremiumGallery from "@/components/PremiumGallery";
import Amenities from "@/components/Amenities";
import CTA from "@/components/CTA";
import TypeASection from "@/components/TypeASection";
import OfferBanner from "@/components/OfferBanner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <Features />
      <PremiumGallery />
      <Amenities />
      <CTA />
      <TypeASection />
      <OfferBanner />
      <ContactSection />
      <Footer />
    </>
  );
}