"use client";

import ServiceSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import IntroductionSection from "@/components/sections/IntroductionSection";
import PartnerSection from "@/components/sections/PartnerSection";

export default function Home() {
  return (
    <main className="w-full bg-[#0A0A0A] text-white overflow-x-hidden overflow-y-auto scroll-smooth">
      <AnimatedBackground />

      {/* Sections */}
      <IntroductionSection />
      <ServiceSection />
      <PartnerSection />
      <ContactSection />
    </main>
  );
}
