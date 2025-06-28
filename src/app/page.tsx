"use client";

import ServiceSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import IntroductionSection from "@/components/sections/IntroductionSection";
import PartnerSection from "@/components/sections/PartnerSection";
import MetricsSection from "@/components/sections/MetricsSection";
import WorkIlustrationSection from "@/components/sections/WorkIlustrationSection";
import AboutMeSection from "@/components/sections/AboutMeSection";

export default function Home() {
  return (
    <main className="w-full bg-[#0A0A0A] text-white overflow-x-hidden overflow-y-auto scroll-smooth">
      <AnimatedBackground />

      {/* Sections */}
      <IntroductionSection />
      <MetricsSection />
      <AboutMeSection />
      <ServiceSection />
      <PartnerSection />
      <ContactSection />
    </main>
  );
}
