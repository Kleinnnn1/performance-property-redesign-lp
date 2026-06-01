import {
  Stethoscope,
  Briefcase,
  Building2,
  PiggyBank,
  Landmark,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const clientTypes = [
  {
    number: "01",
    title: "Medical Professionals",
    description:
      "Specialists, surgeons, GPs, dentists, vets. High income, zero spare time — we do everything except sign the contract.",
    icon: Stethoscope,
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",
    accent: "from-cyan-500/30 to-teal/10",
  },
  {
    number: "02",
    title: "Senior Executives",
    description:
      "C-suite leaders and high earners who want property exposure but can't manage another inbox.",
    icon: Briefcase,
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80",
    accent: "from-blue-400/30 to-teal/10",
  },
  {
    number: "03",
    title: "Business Owners",
    description:
      "Entrepreneurs building wealth outside their business — commercial property in particular suits their tax structure.",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
    accent: "from-emerald-400/30 to-teal/10",
  },
  {
    number: "04",
    title: "Established Investors",
    description:
      "Experienced investors who want independent, honest portfolio analysis — not just someone to buy more property.",
    icon: PiggyBank,
    image:
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=600&q=80",
    accent: "from-amber-400/30 to-teal/10",
  },
  {
    number: "05",
    title: "Capital Events",
    description:
      "Business sales, inheritances, bonuses. We help deploy meaningful capital into property deliberately.",
    icon: Landmark,
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80",
    accent: "from-purple-400/30 to-teal/10",
  },
];

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
            Built for people who{" "}
            <em className="not-italic text-teal">think like this.</em>
          </h2>
          <p className="text-lg text-dark-gray leading-relaxed">
            Our clients share three things: significant earning capacity,
            limited time, and a desire to treat property as a long-term asset
            class — not a one-off transaction.
          </p>
        </div>

        {/* Client Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clientTypes.slice(0, 3).map((client) => (
            <div
              key={client.number}
              className="group rounded-2xl overflow-hidden border border-border hover:border-teal/40 transition-all duration-300 hover:shadow-lg hover:shadow-teal/10 flex flex-col"
            >
              {/* Image header */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={client.image}
                  alt={client.title}
                  className="w-full h-full object-cover object-[center_22%] group-hover:scale-105 transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${client.accent} opacity-80`}
                />
                <div className="absolute inset-0 bg-dark-teal/40" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="text-xl font-bold text-white/40 font-mono">
                    {client.number}
                  </span>
                  <client.icon className="h-5 w-5 text-white" />
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow bg-white group-hover:bg-secondary/30 transition-colors">
                <h3 className="text-lg font-bold text-dark-teal mb-3 group-hover:text-teal transition-colors">
                  {client.title}
                </h3>
                <p className="text-sm text-dark-gray leading-relaxed flex-grow">
                  {client.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Second row — 2 cards centered */}
        <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-3xl mx-auto lg:max-w-none lg:grid-cols-2 lg:ml-0 lg:mr-0">
          {clientTypes.slice(3).map((client) => (
            <div
              key={client.number}
              className="group rounded-2xl overflow-hidden border border-border hover:border-teal/40 transition-all duration-300 hover:shadow-lg hover:shadow-teal/10 flex flex-col"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={client.image}
                  alt={client.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${client.accent} opacity-80`}
                />
                <div className="absolute inset-0 bg-dark-teal/40" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="text-xl font-bold text-white/40 font-mono">
                    {client.number}
                  </span>
                  <client.icon className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow bg-white group-hover:bg-secondary/30 transition-colors">
                <h3 className="text-lg font-bold text-dark-teal mb-3 group-hover:text-teal transition-colors">
                  {client.title}
                </h3>
                <p className="text-sm text-dark-gray leading-relaxed flex-grow">
                  {client.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Banner — full width, no padding/margin */}
      <div className="px-4 sm:px-6 lg:px-8 mt-12">
        <div className="relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-dark-teal" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-teal via-teal/40 to-emerald-400/60" />
          <div className="absolute -top-10 right-10 w-64 h-64 bg-teal/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 left-20 w-48 h-48 bg-emerald-400/20 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 py-14 px-8 flex flex-col items-center text-center gap-5">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Need more information or assistance?
            </h3>
            <p className="text-white/70 text-base max-w-md">
              Visit our contact page for product support, enquiries and sales.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-teal text-white font-semibold rounded-lg hover:bg-teal/90 transition-colors shadow-lg shadow-teal/30 text-base"
            >
              Contact us
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
