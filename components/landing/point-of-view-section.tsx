import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const insights = [
  {
    tag: 'Market view',
    title: "Why we rarely buy in Sydney's inner suburbs",
    body: "Yield compression in inner-ring Sydney has made capital growth the only story. That works — until it doesn't. We prefer markets where population fundamentals, infrastructure spending, and rental demand tell a more balanced story. Here's our current thinking.",
    readingTime: '4 min read',
  },
  {
    tag: 'Industry',
    title: "What most property advisers get wrong about yield",
    body: "Gross yield is a marketing number. Net yield, adjusted for vacancy rates, maintenance trajectory, and tenant quality, is what you actually earn. We've seen clients come to us with 'high-yield' portfolios that were losing money on a net basis. Here's how to read the real number.",
    readingTime: '6 min read',
  },
  {
    tag: 'Strategy',
    title: "The case for commercial: why we recommend it to more clients",
    body: "Commercial property was once considered 'advanced.' We think that's outdated. For business owners and high-income professionals with the right structure, commercial properties offer superior lease terms, lower ongoing management burden, and genuine portfolio diversification. Here's our current allocation thinking.",
    readingTime: '5 min read',
  },
]

export function PointOfViewSection() {
  return (
    <section id="insights" className="py-20 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-semibold text-teal uppercase tracking-wider mb-4">
            Our thinking
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-teal leading-tight mb-6">
            We have opinions.{' '}
            <em className="not-italic text-teal">Here are some of them.</em>
          </h2>
          <p className="text-lg text-dark-gray leading-relaxed">
            Advisers who won&apos;t share their views aren&apos;t advisers — they&apos;re
            order-takers. These are real positions we hold, updated as markets change.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {insights.map((insight, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-7 flex flex-col group hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-teal uppercase tracking-wider bg-teal/8 px-3 py-1 rounded-full">
                  {insight.tag}
                </span>
                <span className="text-xs text-dark-gray/50">{insight.readingTime}</span>
              </div>

              <h3 className="text-lg font-bold text-dark-teal leading-snug mb-4 flex-grow group-hover:text-teal transition-colors">
                {insight.title}
              </h3>

              <p className="text-sm text-dark-gray leading-relaxed mb-6">
                {insight.body}
              </p>

              {/* Placeholder CTA — link to real articles when ready */}
              <div className="flex items-center gap-2 text-sm font-semibold text-teal">
                <span>Read our view</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
