"use client";

import Navigation from "@/components/sections/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import StudioCarousel from "@/components/sections/StudioCarousel";
import LookbookGallery from "@/components/sections/LookbookGallery";
import ArtistsSection from "@/components/sections/ArtistsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import { FloatingActionButton } from "@/components/business";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <StudioCarousel />
      <LookbookGallery />
      <ArtistsSection />
      <ServicesSection />
      <ContactSection />
      <Footer />

      <FloatingActionButton />
    </div>
  );
}
