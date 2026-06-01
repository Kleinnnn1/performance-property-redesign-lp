import { Stethoscope, Briefcase, Building2, PiggyBank, Landmark } from 'lucide-react'

const clientTypes = [
  {
    number: '01',
    title: 'Medical Professionals',
    pain: '"I earn well but I\'m always working. I want to own property without it becoming a second job."',
    description: 'Specialists, surgeons, GPs, dentists, vets. High income, zero spare time — we do everything except sign the contract.',
    icon: Stethoscope,
  },
  {
    number: '02',
    title: 'Senior Executives',
    pain: '"I\'ve been meaning to get into property for three years. I just never have time to actually do it."',
    description: 'C-suite leaders and high earners who want property exposure but can\'t manage another inbox.',
    icon: Briefcase,
  },
  {
    number: '03',
    title: 'Business Owners',
    pain: '"Most of my wealth is tied up in my business. I need diversification that doesn\'t require my attention."',
    description: 'Entrepreneurs building wealth outside their business — commercial property in particular suits their tax structure.',
    icon: Building2,
  },
  {
    number: '04',
    title: 'Established Investors',
    pain: '"I have five properties but I genuinely don\'t know how they\'re performing. Nobody has ever told me."',
    description: 'Experienced investors who want independent, honest portfolio analysis — not just someone to buy more property.',
    icon: PiggyBank,
  },
  {
    number: '05',
    title: 'Capital Events',
    pain: '"I just sold my business. I have capital but no urgency — I want to get this right, not rush."',
    description: 'Business sales, inheritances, bonuses. We help deploy meaningful capital into property deliberately.',
    icon: Landmark,
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
            Built for people who{' '}
            <em className="not-italic text-teal">think like this.</em>
          </h2>
          <p className="text-lg text-dark-gray leading-relaxed">
            Our clients share three things: significant earning capacity, limited time, and a desire
            to treat property as a long-term asset class — not a one-off transaction.
            If one of these sounds like your internal monologue, we should talk.
          </p>
        </div>

        {/* Client Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clientTypes.slice(0, 3).map((client) => (
            <div
              key={client.number}
              className="group p-7 bg-secondary rounded-xl hover:bg-teal transition-colors duration-300 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl font-bold text-teal group-hover:text-white/40 transition-colors font-mono">
                  {client.number}
                </span>
                <client.icon className="h-6 w-6 text-teal group-hover:text-white transition-colors" />
              </div>

              <h3 className="text-lg font-bold text-dark-teal group-hover:text-white transition-colors mb-3">
                {client.title}
              </h3>

              {/* The internal monologue quote */}
              <blockquote className="text-sm text-teal group-hover:text-white/90 italic leading-relaxed mb-4 border-l-2 border-teal/30 group-hover:border-white/30 pl-3 transition-colors">
                {client.pain}
              </blockquote>

              <p className="text-sm text-dark-gray group-hover:text-white/80 transition-colors flex-grow leading-relaxed">
                {client.description}
              </p>
            </div>
          ))}
        </div>

        {/* Second row — 2 cards centered */}
        <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-3xl mx-auto lg:max-w-none lg:grid-cols-2 lg:ml-0 lg:mr-0">
          {clientTypes.slice(3).map((client) => (
            <div
              key={client.number}
              className="group p-7 bg-secondary rounded-xl hover:bg-teal transition-colors duration-300 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl font-bold text-teal group-hover:text-white/40 transition-colors font-mono">
                  {client.number}
                </span>
                <client.icon className="h-6 w-6 text-teal group-hover:text-white transition-colors" />
              </div>

              <h3 className="text-lg font-bold text-dark-teal group-hover:text-white transition-colors mb-3">
                {client.title}
              </h3>

              <blockquote className="text-sm text-teal group-hover:text-white/90 italic leading-relaxed mb-4 border-l-2 border-teal/30 group-hover:border-white/30 pl-3 transition-colors">
                {client.pain}
              </blockquote>

              <p className="text-sm text-dark-gray group-hover:text-white/80 transition-colors flex-grow leading-relaxed">
                {client.description}
              </p>
            </div>
          ))}
        </div>

        {/* Not for everyone — confidence signal */}
        <div className="mt-12 p-8 border border-border rounded-xl bg-secondary/50">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-dark-teal uppercase tracking-wider mb-3">
              Not the right fit for everyone
            </p>
            <p className="text-dark-gray leading-relaxed mb-4">
              We&apos;re probably not your best option if you&apos;re looking for a quick
              single acquisition, want to be hands-on in every decision, or have a capital
              allocation under $500k. We work best as a long-term partner, not a transaction agent.
            </p>
            <p className="text-sm text-dark-gray/70">
              If you&apos;re not sure — book a consultation anyway. We&apos;ll tell you honestly.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-dark-teal text-white font-semibold rounded-lg hover:bg-dark-teal/90 transition-colors"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </section>
  )
}
