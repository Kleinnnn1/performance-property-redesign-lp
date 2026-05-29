import { Stethoscope, Briefcase, Building2, PiggyBank, Landmark } from 'lucide-react'
import Link from 'next/link'

const clientTypes = [
  {
    number: '01',
    title: 'Medical Professionals',
    description: 'Specialists, surgeons, GPs, dentists, vets - time-poor professionals who want their money to work for them',
    icon: Stethoscope,
    link: '#medical',
  },
  {
    number: '02',
    title: 'Senior Executives',
    description: 'C-suite executives, managers, high-earners seeking diversification and wealth building beyond their income',
    icon: Briefcase,
    link: '#executives',
  },
  {
    number: '03',
    title: 'Business Owners',
    description: 'Entrepreneurs and SME owners building wealth outside their business through commercial property',
    icon: Building2,
    link: '#business',
  },
  {
    number: '04',
    title: 'Established Investors',
    description: 'Experienced property investors seeking independent advice and portfolio optimization for higher growth',
    icon: PiggyBank,
    link: '#investors',
  },
  {
    number: '05',
    title: 'Capital Events',
    description: 'Investors deploying capital after business sales, inheritances, or other wealth creation events',
    icon: Landmark,
    link: '#capital',
  },
]

export function ClientTypes() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-semibold text-teal uppercase tracking-wider mb-4">
            Who we work with
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-teal leading-tight mb-6">
            Built for Australia&apos;s{' '}
            <em className="not-italic text-teal">high achievers.</em>
          </h2>
          <p className="text-lg text-dark-gray leading-relaxed">
            Our clients share three things: significant earning capacity, limited time, and a desire to treat property as a long-term asset class — not a one-off transaction. We&apos;ve built around the way they actually invest.
          </p>
        </div>

        {/* Client Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {clientTypes.map((client) => (
            <Link
              key={client.number}
              href={client.link}
              className="group p-6 bg-secondary rounded-xl hover:bg-teal transition-colors duration-300"
            >
              <div className="flex flex-col h-full">
                <span className="text-4xl font-bold text-teal group-hover:text-white/50 transition-colors mb-4">
                  {client.number}
                </span>
                <client.icon className="h-8 w-8 text-teal group-hover:text-white transition-colors mb-4" />
                <h3 className="text-lg font-bold text-dark-teal group-hover:text-white transition-colors mb-3">
                  {client.title}
                </h3>
                <p className="text-sm text-dark-gray group-hover:text-white/80 transition-colors flex-grow">
                  {client.description}
                </p>
                <span className="mt-4 text-sm font-semibold text-teal group-hover:text-white transition-colors inline-flex items-center">
                  Learn more →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-dark-teal text-white font-semibold rounded-lg hover:bg-dark-teal/90 transition-colors"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </section>
  )
}
