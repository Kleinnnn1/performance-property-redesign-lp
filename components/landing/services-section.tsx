"use client";

import { useState } from "react";
import { Check } from "lucide-react";

const services = [
  {
    id: "portfolio",
    title: "Portfolio Building",
    subtitle: "Residential & Commercial",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    features: [
      "A multi-property mandate built around your strategy",
      "Research-driven market identification",
      "Systematically tested across multiple market cycles",
      "Starting point for most clients",
    ],
  },
  {
    id: "foreign",
    title: "Foreign State Buying",
    subtitle: "Interstate Acquisitions",
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80",
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
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
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
    <section id="services" className="py-20 md:py-32 bg-white">
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

        <div className="flex flex-wrap gap-2 mb-12 border-b border-border pb-4">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => handleTabChange(service.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === service.id
                  ? "bg-teal text-white shadow-sm"
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
            <div>
              <p className="text-sm text-teal font-semibold uppercase tracking-wider mb-2">
                {activeService.subtitle}
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-dark-teal mb-6">
                {activeService.title}
              </h3>
              <ul className="space-y-4">
                {activeService.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-teal mt-0.5 flex-shrink-0" />
                    <span className="text-dark-gray">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <img
              src={activeService.image}
              alt={activeService.title}
              loading="lazy"
              className="aspect-[4/3] rounded-xl overflow-hidden w-full object-cover"
            />
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
