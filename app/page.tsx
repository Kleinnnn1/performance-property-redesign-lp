import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { TrustMarquee } from "@/components/landing/trust-marquee";
import { VideoSection } from "@/components/landing/video-section";
import { ClientTypes } from "@/components/landing/client-types";
import { ProcessSection } from "@/components/landing/process-section";
import { ServicesSection } from "@/components/landing/services-section";
import { StatsSection } from "@/components/landing/stats-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { FAQSection } from "@/components/landing/faq-section";
import { ContactSection } from "@/components/landing/contact-section";
import { Footer } from "@/components/landing/footer";
import { StickyCta } from "@/components/landing/sticky-cta";

export default function LandingPage() {
  return (
    <main>
      <Header />
      <Hero />
      <TrustMarquee />
      <VideoSection />
      <ClientTypes />
      <ProcessSection />
      <ServicesSection />
      <StatsSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <StickyCta />
    </main>
  );
}
