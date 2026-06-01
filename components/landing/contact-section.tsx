"use client";

import { useState } from "react";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Check,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const investorTypes = [
  "Medical Professional",
  "Senior Executive",
  "Business Owner",
  "Established Investor",
  "Capital Event",
  "Other",
];
const portfolioSizes = [
  "Under $500k",
  "$500k - $1M",
  "$1M - $2M",
  "$2M - $5M",
  "$5M+",
];

function isValidEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}
function isValidPhone(v: string) {
  return /^[\d\s+\-()]{8,}$/.test(v);
}

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    investorType: "",
    portfolioSize: "",
    message: "",
    agreeTerms: false,
  });
  const [touched, setTouched] = useState<Partial<Record<string, boolean>>>({});

  const errors = {
    firstName: !form.firstName.trim() ? "Required" : "",
    lastName: !form.lastName.trim() ? "Required" : "",
    email: !form.email
      ? "Required"
      : !isValidEmail(form.email)
        ? "Invalid email"
        : "",
    phone: !form.phone
      ? "Required"
      : !isValidPhone(form.phone)
        ? "Invalid phone"
        : "",
  };

  const isValid = Object.values(errors).every((e) => !e) && form.agreeTerms;

  const handleSubmit = () => {
    setTouched({ firstName: true, lastName: true, email: true, phone: true });
    if (!isValid) return;
    console.log("Submitted:", form);
    setSubmitted(true);
  };

  const field = (name: keyof typeof errors) =>
    `w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
      touched[name] && errors[name]
        ? "border-red-400 focus:ring-red-200"
        : touched[name] && !errors[name]
          ? "border-teal focus:ring-teal/30"
          : "border-border focus:ring-teal/50 focus:border-teal"
    }`;

  return (
    <section id="contact" className="pt-0 md:pt-10 pb-10 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-teal leading-tight mb-6">
            No pitch.{" "}
            <em className="not-italic text-teal">Just a conversation.</em>
          </h2>
          <p className="text-lg text-dark-gray leading-relaxed max-w-2xl mx-auto">
            We&apos;ll ask about your situation, share how we might approach it
            — and if we&apos;re not the right fit, we&apos;ll say so. A senior
            adviser calls within 24 hours. No sales team, no junior staff.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left column */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-dark-teal rounded-xl p-6">
              <div className="flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-teal flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white mb-1">
                    We are genuinely independent
                  </h4>
                  <p className="text-sm text-white/60 leading-relaxed">
                    We receive no commissions from developers, agents, or
                    vendors. Our only revenue is from you. That&apos;s not just
                    good practice — it&apos;s the only way to give advice you
                    can actually trust.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-dark-teal mb-6">
                Contact details
              </h3>
              <ul className="space-y-4">
                {[
                  {
                    icon: Phone,
                    label: "Senior advisory only",
                    value: "+61 3 8528 2500",
                  },
                  {
                    icon: Mail,
                    label: "Email enquiries",
                    value: "advisory@performanceproperty.com.au",
                  },
                  {
                    icon: MapPin,
                    label: "Head office",
                    value: "Level 5/35 Collins Street\nMelbourne VIC 3000",
                  },
                ].map(({ icon: Icon, label, value }) => (
                  <li key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5 text-teal" />
                    </div>
                    <div>
                      <p className="text-sm text-dark-gray mb-1">{label}</p>
                      <p className="font-semibold text-dark-teal whitespace-pre-line">
                        {value}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-teal/5 rounded-xl p-6 border border-teal/20">
              <h4 className="font-semibold text-dark-teal mb-3">
                What happens next?
              </h4>
              <ul className="space-y-3 text-sm text-dark-gray">
                {[
                  "We'll review your enquiry within 24 hours",
                  "A senior adviser will call — not a junior or sales person",
                  "If there's a fit, we'll schedule a strategy session",
                  "If there's not, we'll tell you and point you in the right direction",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-teal mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right column — single step form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-white rounded-xl p-10 shadow-sm text-center">
                <div className="w-14 h-14 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-5">
                  <Check className="h-7 w-7 text-teal" />
                </div>
                <h3 className="text-xl font-bold text-dark-teal mb-3">
                  Enquiry received
                </h3>
                <p className="text-dark-gray">
                  We&apos;ll be in touch within 24 hours. A senior adviser will
                  call to discuss your situation — no pitch, just a
                  conversation.
                </p>
              </div>
            ) : (
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-base font-semibold text-dark-teal mb-1">
                  Book a consultation
                </h3>
                <p className="text-sm text-dark-gray mb-7">
                  Takes about 60 seconds.
                </p>

                {/* Name row */}
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-sm font-medium text-dark-teal mb-2">
                      First name
                    </label>
                    <input
                      type="text"
                      value={form.firstName}
                      onBlur={() =>
                        setTouched((t) => ({ ...t, firstName: true }))
                      }
                      onChange={(e) =>
                        setForm((f) => ({ ...f, firstName: e.target.value }))
                      }
                      className={field("firstName")}
                    />
                    {touched.firstName && errors.firstName && (
                      <p className="text-xs text-red-500 mt-1">
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-teal mb-2">
                      Last name
                    </label>
                    <input
                      type="text"
                      value={form.lastName}
                      onBlur={() =>
                        setTouched((t) => ({ ...t, lastName: true }))
                      }
                      onChange={(e) =>
                        setForm((f) => ({ ...f, lastName: e.target.value }))
                      }
                      className={field("lastName")}
                    />
                    {touched.lastName && errors.lastName && (
                      <p className="text-xs text-red-500 mt-1">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                {/* Contact row */}
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-sm font-medium text-dark-teal mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, email: e.target.value }))
                      }
                      className={field("email")}
                    />
                    {touched.email && errors.email && (
                      <p className="text-xs text-red-500 mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-teal mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, phone: e.target.value }))
                      }
                      className={field("phone")}
                    />
                    {touched.phone && errors.phone && (
                      <p className="text-xs text-red-500 mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Optional context row */}
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-sm font-medium text-dark-teal mb-2">
                      I am a…{" "}
                      <span className="text-dark-gray font-normal">
                        (optional)
                      </span>
                    </label>
                    <select
                      value={form.investorType}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, investorType: e.target.value }))
                      }
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal bg-white"
                    >
                      <option value="">Select...</option>
                      {investorTypes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-teal mb-2">
                      Target portfolio{" "}
                      <span className="text-dark-gray font-normal">
                        (optional)
                      </span>
                    </label>
                    <select
                      value={form.portfolioSize}
                      onChange={(e) =>
                        setForm((f) => ({
                          ...f,
                          portfolioSize: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal bg-white"
                    >
                      <option value="">Select...</option>
                      {portfolioSizes.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-dark-teal mb-2">
                    Anything else?{" "}
                    <span className="text-dark-gray font-normal">
                      (optional)
                    </span>
                  </label>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    placeholder="Your current situation, goals, or any constraints..."
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal resize-none"
                  />
                </div>

                {/* Consent + submit */}
                <div className="mb-6">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.agreeTerms}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, agreeTerms: e.target.checked }))
                      }
                      className="w-5 h-5 border border-border rounded text-teal focus:ring-teal mt-0.5"
                    />
                    <span className="text-sm text-dark-gray">
                      I agree to the Privacy Policy and consent to Performance
                      Property contacting me about my enquiry.
                    </span>
                  </label>
                </div>

                <Button
                  onClick={handleSubmit}
                  disabled={!form.agreeTerms}
                  size="lg"
                  className="w-full bg-teal hover:bg-teal/90 text-white font-semibold py-6 disabled:opacity-50"
                >
                  Book a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
