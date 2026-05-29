'use client'

import { useState } from 'react'
import { ArrowRight, Phone, Mail, MapPin, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

const investorTypes = [
  'Medical Professional',
  'Senior Executive',
  'Business Owner',
  'Established Investor',
  'Capital Event',
  'Other',
]

const portfolioSizes = [
  'Under $500k',
  '$500k - $1M',
  '$1M - $2M',
  '$2M - $5M',
  '$5M+',
]

const timeframes = [
  'Immediately',
  '1-3 months',
  '3-6 months',
  '6-12 months',
  'Just exploring',
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    investorType: '',
    portfolioSize: '',
    timeframe: '',
    message: '',
    agreeTerms: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-teal leading-tight mb-6">
            Start with a{' '}
            <em className="not-italic text-teal">private consultation.</em>
          </h2>
          <p className="text-lg text-dark-gray leading-relaxed max-w-2xl mx-auto">
            Book a no-obligation conversation with a senior adviser. No pitch. We&apos;ll ask about the situation, share how we might approach it — and if we can&apos;t, we&apos;ll say so.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl font-bold text-dark-teal mb-6">Contact details</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-teal" />
                  </div>
                  <div>
                    <p className="text-sm text-dark-gray mb-1">Senior advisory only</p>
                    <p className="font-semibold text-dark-teal">+61 3 8528 2500</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-teal" />
                  </div>
                  <div>
                    <p className="text-sm text-dark-gray mb-1">Email enquiries</p>
                    <p className="font-semibold text-dark-teal">advisory@performanceproperty.com.au</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-teal" />
                  </div>
                  <div>
                    <p className="text-sm text-dark-gray mb-1">Head office</p>
                    <p className="font-semibold text-dark-teal">Level 5/35 Collins Street<br />Melbourne VIC 3000</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-teal/5 rounded-xl p-6 border border-teal/20">
              <h4 className="font-semibold text-dark-teal mb-3">What happens next?</h4>
              <ul className="space-y-3 text-sm text-dark-gray">
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-teal mt-0.5 flex-shrink-0" />
                  <span>We&apos;ll review your enquiry within 24 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-teal mt-0.5 flex-shrink-0" />
                  <span>A senior adviser will call to discuss your situation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-teal mt-0.5 flex-shrink-0" />
                  <span>If there&apos;s a fit, we&apos;ll schedule a strategy session</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow-sm">
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-dark-teal mb-2">
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-dark-teal mb-2">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal"
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark-teal mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-dark-teal mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="investorType" className="block text-sm font-medium text-dark-teal mb-2">
                  I am a...
                </label>
                <select
                  id="investorType"
                  value={formData.investorType}
                  onChange={(e) => setFormData({ ...formData, investorType: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal bg-white"
                  required
                >
                  <option value="">Select...</option>
                  {investorTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="portfolioSize" className="block text-sm font-medium text-dark-teal mb-2">
                    Target portfolio
                  </label>
                  <select
                    id="portfolioSize"
                    value={formData.portfolioSize}
                    onChange={(e) => setFormData({ ...formData, portfolioSize: e.target.value })}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal bg-white"
                    required
                  >
                    <option value="">Select...</option>
                    {portfolioSizes.map((size) => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="timeframe" className="block text-sm font-medium text-dark-teal mb-2">
                    Timeframe
                  </label>
                  <select
                    id="timeframe"
                    value={formData.timeframe}
                    onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal bg-white"
                    required
                  >
                    <option value="">Select...</option>
                    {timeframes.map((timeframe) => (
                      <option key={timeframe} value={timeframe}>{timeframe}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-dark-teal mb-2">
                  Annual portfolio review
                  <span className="text-dark-gray font-normal ml-1">(optional)</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Anything else we should know about your situation?"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal resize-none"
                />
              </div>

              <div className="mb-8">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.agreeTerms}
                    onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                    className="w-5 h-5 border border-border rounded text-teal focus:ring-teal mt-0.5"
                    required
                  />
                  <span className="text-sm text-dark-gray">
                    I agree to the Privacy Policy and consent to Performance Property contacting me about my enquiry.
                  </span>
                </label>
              </div>

              <Button 
                type="submit"
                size="lg"
                className="w-full bg-teal hover:bg-teal/90 text-white font-semibold py-6"
              >
                Book a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
