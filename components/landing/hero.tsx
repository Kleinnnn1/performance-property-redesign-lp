import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 md:pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-dark-teal/95 via-dark-teal/80 to-dark-teal/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        {/* Trust Badge Bar */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/20">
            QPIA Member
          </span>
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/20">
            PIPA Member
          </span>
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/20">
            Independent Advisory
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 max-w-4xl text-balance">
          Expert Property.{' '}
          <br className="hidden sm:block" />
          <em className="not-italic text-teal">Proven Performance.</em>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-4 leading-relaxed">
          Property strategy and active portfolio management for medical professionals, senior executives, and business owners.
        </p>

        {/* Features List */}
        <p className="text-sm md:text-base text-white/60 max-w-2xl mb-10">
          Strategy. Acquisition. Active management. Independent performance reporting. Residential and commercial. Over five years building Australian wealth.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            asChild
            size="lg"
            className="bg-teal hover:bg-teal/90 text-white font-semibold text-base px-8 py-6"
          >
            <Link href="#contact">
              Book a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button 
            asChild
            variant="outline"
            size="lg"
            className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white font-semibold text-base px-8 py-6"
          >
            <Link href="#video">
              <Play className="mr-2 h-5 w-5" />
              Watch our Story
            </Link>
          </Button>
        </div>
      </div>

    </section>
  )
}
