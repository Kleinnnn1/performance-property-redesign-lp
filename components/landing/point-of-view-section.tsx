import { ArrowRight } from "lucide-react";
import Link from "next/link";

const insights = [
  {
    tag: "Market view",
    title: "Why we rarely buy in Sydney's inner suburbs",
    body: "Yield compression in inner-ring Sydney has made capital growth the only story. That works — until it doesn't. We prefer markets where population fundamentals, infrastructure spending, and rental demand tell a more balanced story.",
    readingTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=800&q=80",
    accentColor: "bg-teal",
  },
  {
    tag: "Industry",
    title: "What most property advisers get wrong about yield",
    body: "Gross yield is a marketing number. Net yield, adjusted for vacancy rates, maintenance trajectory, and tenant quality, is what you actually earn. We've seen clients come to us with 'high-yield' portfolios that were losing money on a net basis.",
    readingTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=800&q=80",
    accentColor: "bg-emerald-400",
  },
  {
    tag: "Strategy",
    title: "The case for commercial: why we recommend it to more clients",
    body: "Commercial property was once considered 'advanced.' We think that's outdated. For business owners and high-income professionals with the right structure, commercial properties offer superior lease terms and genuine diversification.",
    readingTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    accentColor: "bg-blue-400",
  },
];

export function PointOfViewSection() {
  return (
    <section id="insights" className="py-20 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-semibold text-teal uppercase tracking-wider mb-4">
            Our thinking
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-teal leading-tight mb-6">
            We have opinions.{" "}
            <em className="not-italic text-teal">Here are some of them.</em>
          </h2>
          <p className="text-lg text-dark-gray leading-relaxed">
            Advisers who won&apos;t share their views aren&apos;t advisers —
            they&apos;re order-takers. These are real positions we hold, updated
            as markets change.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {insights.map((insight, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden flex flex-col group hover:shadow-xl hover:shadow-teal/10 transition-all duration-300 border border-border hover:border-teal/30"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-dark-teal/50" />
                {/* Tag badge on image */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`${insight.accentColor} text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide`}
                  >
                    {insight.tag}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 text-white/60 text-xs">
                  {insight.readingTime}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-base font-bold text-dark-teal leading-snug mb-4 flex-grow group-hover:text-teal transition-colors">
                  {insight.title}
                </h3>

                <p className="text-sm text-dark-gray leading-relaxed mb-6">
                  {insight.body}
                </p>

                <div className="flex items-center gap-2 text-sm font-semibold text-teal group-hover:gap-3 transition-all">
                  <span>Read our view</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
