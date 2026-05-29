'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Is there a minimum portfolio size?',
    answer: 'We work with clients building toward a $1m+ portfolio allocation. That isn\'t a strict barrier — we\'ve worked with clients from $500k upward — but it\'s a general guide. The economics of our service model work best when there\'s enough capital to build a meaningful, diversified portfolio over time.',
  },
  {
    question: 'What does reporting look like?',
    answer: 'Every client receives quarterly performance reports tracking their portfolio against benchmarks. We also provide annual strategy reviews and market updates. Our reporting is designed to give you visibility without drowning you in unnecessary detail.',
  },
  {
    question: 'How long are typical engagements?',
    answer: 'Most clients stay with us for 5+ years. Property is a long-term asset class, and our model is built around ongoing portfolio management rather than one-off transactions. That said, there are no lock-ins — clients stay because they see value.',
  },
  {
    question: 'Do you accept clients with existing portfolios?',
    answer: 'Yes. Many clients come to us with existing properties. We\'ll conduct an honest review of your current portfolio — including recommendations to sell where appropriate — before mapping out your forward strategy.',
  },
  {
    question: 'Can I exit the relationship?',
    answer: 'Absolutely. There are no exit fees or lock-in contracts. You own your properties, and if you decide to manage them yourself or work with someone else, we\'ll facilitate a clean handover.',
  },
  {
    question: 'Where do I start from scratch?',
    answer: 'Book a consultation. We\'ll discuss your goals, timeline, and capital position, then determine whether we\'re the right fit. If we are, we\'ll map out a strategy and timeline for your first acquisition.',
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-teal uppercase tracking-wider mb-4">
            Common questions
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-teal leading-tight mb-6">
            What clients{' '}
            <em className="not-italic text-teal">usually want to know.</em>
          </h2>
          <p className="text-lg text-dark-gray leading-relaxed max-w-2xl mx-auto">
            The questions sophisticated investors ask before engaging — answered openly, in plain language.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-border rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-secondary/50 transition-colors"
              >
                <span className="font-semibold text-dark-teal pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`h-5 w-5 text-teal flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-dark-gray leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
