import Link from "next/link";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Strategy first",
    description:
      "We spend time understanding your goals, income profile, and risk tolerance before touching the market. Most clients start here — it takes 2–3 sessions to get it right.",
    cta: { label: "How it works", href: "#about" },
  },
  {
    number: "02",
    title: "Acquisition",
    description:
      "We source, vet, and negotiate on your behalf. Every property passes independent due diligence. You approve the final decision — we handle everything else.",
    cta: { label: "Our track record", href: "#stats" },
  },
  {
    number: "03",
    title: "Active management",
    description:
      "We manage tenancies, maintenance, and capital works decisions as if the properties were our own. Quarterly reports you can read in fifteen minutes.",
    cta: { label: "Book a consultation", href: "#contact" },
  },
];

export function ProcessSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-semibold text-teal uppercase tracking-wider mb-4">
            How it works
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-teal leading-tight mb-6">
            What actually{" "}
            <em className="not-italic text-teal">happens after you call.</em>
          </h2>
          <p className="text-lg text-dark-gray leading-relaxed">
            No hard sell. No rushed transactions. A deliberate process built
            around your outcomes.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-border">
          {steps.map(({ number, title, description, cta }, i) => (
            <div key={i} className="pt-8 md:pt-0 md:px-10 first:pl-0 last:pr-0">
              <div className="w-12 h-12 bg-teal flex items-center justify-center mb-6 rounded-sm">
                <span className="text-white text-lg font-bold">{number}</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-dark-teal mb-4">
                {title}
              </h3>

              <p className="text-dark-gray leading-relaxed mb-8">
                {description}
              </p>

              <Link
                href={cta.href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-dark-teal border border-dark-teal/20 rounded-full px-5 py-2.5 hover:bg-dark-teal hover:text-white transition-colors duration-200"
              >
                {cta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
