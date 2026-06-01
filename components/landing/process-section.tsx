import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Strategy first",
    description:
      "We spend time understanding your goals, income profile, and risk tolerance before touching the market. Most clients start here — it takes 2–3 sessions to get it right.",
    cta: { label: "How it works", href: "#about" },
    usp: "No rushed transactions",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "02",
    title: "Acquisition",
    description:
      "We source, vet, and negotiate on your behalf. Every property passes independent due diligence. You approve the final decision — we handle everything else.",
    cta: { label: "Our track record", href: "#stats" },
    usp: "<8% approval rate",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "03",
    title: "Active management",
    description:
      "We manage tenancies, maintenance, and capital works decisions as if the properties were our own. Quarterly reports you can read in fifteen minutes.",
    cta: { label: "Book a consultation", href: "#contact" },
    usp: "15-min quarterly reports",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-20 md:py-32 bg-secondary">
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

        {/* Steps as cards with images */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map(({ number, title, description, cta, usp, image }, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl overflow-hidden border border-border hover:border-teal/30 hover:shadow-lg hover:shadow-teal/10 transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-dark-teal/60" />
                {/* Step number */}
                <div className="absolute top-4 left-4 w-10 h-10 bg-teal rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white text-sm font-bold">{number}</span>
                </div>
                {/* USP badge */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2">
                  <CheckCircle2 className="h-4 w-4 text-teal flex-shrink-0" />
                  <span className="text-white text-xs font-semibold">
                    {usp}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-dark-teal mb-3 group-hover:text-teal transition-colors">
                  {title}
                </h3>
                <p className="text-dark-gray leading-relaxed mb-6 flex-grow text-sm">
                  {description}
                </p>
                <Link
                  href={cta.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-teal hover:text-dark-teal transition-colors"
                >
                  {cta.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
