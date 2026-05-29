'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'

const services = [
  {
    id: 'portfolio',
    title: 'Portfolio Building',
    subtitle: 'Residential & Commercial',
    features: [
      'A multi-property mandate built around your strategy',
      'Research-driven market identification',
      'Systematically tested across multiple market cycles',
      'Starting point for most clients',
    ],
  },
  {
    id: 'foreign',
    title: 'Foreign State Buying',
    subtitle: 'Interstate Acquisitions',
    features: [
      'Bespoke mandate built on tested model portfolios',
      'National market access and expertise',
      'Independent due diligence on every property',
      'Active management from day one',
    ],
  },
  {
    id: 'commercial',
    title: 'Commercial Property',
    subtitle: 'Office & Retail',
    features: [
      'Commercial property portfolio construction',
      'Tenant analysis and lease review',
      'Yield optimization strategies',
      'Risk-adjusted return focus',
    ],
  },
  {
    id: 'management',
    title: 'Property Management',
    subtitle: 'Active Ownership',
    features: [
      'Active ownership approach to property management',
      'Performance tracking and reporting',
      'Maintenance and capital works oversight',
      'Tenant relations and retention',
    ],
  },
]

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState('portfolio')
  const activeService = services.find(s => s.id === activeTab)

  return (
    <section id="services" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-semibold text-teal uppercase tracking-wider mb-4">
            Our services
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-teal leading-tight mb-6">
            Full-spectrum{' '}
            <em className="not-italic text-teal">property advisory.</em>
          </h2>
          <p className="text-lg text-dark-gray leading-relaxed">
            Independent and systematic. Nationally.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-border pb-4">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === service.id
                  ? 'bg-teal text-white'
                  : 'bg-secondary text-dark-gray hover:bg-secondary/80'
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeService && (
          <div className="grid lg:grid-cols-2 gap-12 items-start">
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

            <div 
              className="aspect-[4/3] rounded-xl overflow-hidden"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </div>
        )}
      </div>
    </section>
  )
}
