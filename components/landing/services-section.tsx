"use client";

import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "portfolio",
    title: "Portfolio Building",
    subtitle: "Residential & Commercial",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    usp: "Strategy before transaction — always.",
    color: "from-teal/20 to-cyan-400/10",
    accent: "bg-teal",
    features: [
      "A multi-property mandate built around your strategy",
      "Research-driven market identification",
      "Systematically tested across multiple market cycles",
      "Starting point for most clients",
    ],
  },
  {
    id: "foreign",
    title: "Interstate Buying",
    subtitle: "Interstate Acquisitions",
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80",
    usp: "National reach with local expertise.",
    color: "from-blue-400/20 to-cyan-400/10",
    accent: "bg-blue-400",
    features: [
      "Bespoke mandate built on tested model portfolios",
      "National market access and expertise",
      "Independent due diligence on every property",
      "Active management from day one",
    ],
  },
  {
    id: "commercial",
    title: "Commercial Property",
    subtitle: "Office & Retail",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    usp: "Superior lease terms. Better yields.",
    color: "from-emerald-400/20 to-teal/10",
    accent: "bg-emerald-400",
    features: [
      "Commercial property portfolio construction",
      "Tenant analysis and lease review",
      "Yield optimization strategies",
      "Risk-adjusted return focus",
    ],
  },
  {
    id: "management",
    title: "Property Management",
    subtitle: "Active Ownership",
    image:
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1200&q=80",
    usp: "15-minute quarterly reports. Total clarity.",
    color: "from-amber-400/20 to-yellow-300/10",
    accent: "bg-amber-400",
    features: [
      "Active ownership approach to property management",
      "Performance tracking and reporting",
      "Maintenance and capital works oversight",
      "Tenant relations and retention",
    ],
  },
];

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState("portfolio");
  const [animKey, setAnimKey] = useState(0);
  const activeService = services.find((s) => s.id === activeTab);

  const handleTabChange = (id: string) => {
    setActiveTab(id);
    setAnimKey((k) => k + 1);
  };

  return (
    <section id="services" className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-semibold text-teal uppercase tracking-wider mb-4">
            Our services
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-teal leading-tight mb-6">
            Full-spectrum{" "}
            <em className="not-italic text-teal">property advisory.</em>
          </h2>
          <p className="text-lg text-dark-gray leading-relaxed">
            Independent and systematic. Nationally.
          </p>
        </div>

        {/* Tab row */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-border pb-4">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => handleTabChange(service.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === service.id
                  ? "bg-dark-teal text-white shadow-sm"
                  : "bg-secondary text-dark-gray hover:bg-secondary/80"
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {activeService && (
          <div
            key={animKey}
            className="grid lg:grid-cols-2 gap-12 items-start"
            style={{ animation: "serviceFadeIn 0.25s ease both" }}
          >
            {/* Content side */}
            <div>
              {/* USP callout — highlighted */}
              <div
                className={`inline-flex items-center gap-2 bg-gradient-to-r ${activeService.color} border border-teal/20 rounded-full px-4 py-2 mb-5`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${activeService.accent}`}
                />
                <span className="text-dark-teal font-bold text-sm">
                  {activeService.usp}
                </span>
              </div>

              <p className="text-sm text-teal font-semibold uppercase tracking-wider mb-2">
                {activeService.subtitle}
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-dark-teal mb-6">
                {activeService.title}
              </h3>
              <ul className="space-y-4 mb-8">
                {activeService.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-teal" />
                    </span>
                    <span className="text-dark-gray">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 bg-teal text-white font-semibold px-6 py-3 rounded-lg hover:bg-teal/90 transition-colors shadow-md shadow-teal/20"
              >
                Book a Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Image side */}
            <div className="relative">
              <img
                src={activeService.image}
                alt={activeService.title}
                loading="lazy"
                className="aspect-[4/3] rounded-2xl overflow-hidden w-full object-cover shadow-xl"
              />
              {/* Overlay badge on image */}
              <div className="absolute bottom-4 left-4 right-4 bg-dark-teal/90 backdrop-blur-sm rounded-xl p-4">
                <p className="text-teal text-xs font-bold uppercase tracking-wider mb-1">
                  Our USP
                </p>
                <p className="text-white text-sm font-semibold">
                  {activeService.usp}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes serviceFadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
