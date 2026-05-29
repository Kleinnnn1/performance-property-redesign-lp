import { Header } from '@/components/landing/header'
import { Hero } from '@/components/landing/hero'
import { TrustMarquee } from '@/components/landing/trust-marquee'
import { VideoSection } from '@/components/landing/video-section'
import { ClientTypes } from '@/components/landing/client-types'
import { StatsSection } from '@/components/landing/stats-section'
import { ServicesSection } from '@/components/landing/services-section'
import { TestimonialsSection } from '@/components/landing/testimonials-section'
import { FAQSection } from '@/components/landing/faq-section'
import { ContactSection } from '@/components/landing/contact-section'
import { Footer } from '@/components/landing/footer'

export default function LandingPage() {
  return (
    <main>
      <Header />
      <Hero />
      <TrustMarquee />
      <VideoSection />
      <ClientTypes />
      <StatsSection />
      <ServicesSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
