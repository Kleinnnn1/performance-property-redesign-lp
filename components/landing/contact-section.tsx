"use client";

import { useState } from "react";
import { ArrowRight, Phone, Mail, MapPin, Check } from "lucide-react";
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
const timeframes = [
  "Immediately",
  "1-3 months",
  "3-6 months",
  "6-12 months",
  "Just exploring",
];

function isValidEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}
function isValidPhone(v: string) {
  return /^[\d\s+\-()]{8,}$/.test(v);
}

export function ContactSection() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [step1, setStep1] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [step2, setStep2] = useState({
    investorType: "",
    portfolioSize: "",
    timeframe: "",
    message: "",
    agreeTerms: false,
  });
  const [touched1, setTouched1] = useState<Partial<Record<string, boolean>>>(
    {},
  );

  const errors1 = {
    firstName: !step1.firstName.trim() ? "Required" : "",
    lastName: !step1.lastName.trim() ? "Required" : "",
    email: !step1.email
      ? "Required"
      : !isValidEmail(step1.email)
        ? "Invalid email"
        : "",
    phone: !step1.phone
      ? "Required"
      : !isValidPhone(step1.phone)
        ? "Invalid phone"
        : "",
  };
  const step1Valid = Object.values(errors1).every((e) => !e);

  const handleStep1Next = () => {
    setTouched1({ firstName: true, lastName: true, email: true, phone: true });
    if (step1Valid) setStep(2);
  };

  const handleSubmit = () => {
    if (!step2.agreeTerms) return;
    console.log("Submitted:", { ...step1, ...step2 });
    setSubmitted(true);
  };

  const fieldClass = (err: string, touch?: boolean) =>
    `w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
      touch && err
        ? "border-red-400 focus:ring-red-200"
        : touch && !err
          ? "border-teal focus:ring-teal/30"
          : "border-border focus:ring-teal/50 focus:border-teal"
    }`;

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-teal leading-tight mb-6">
            Start with a{" "}
            <em className="not-italic text-teal">private consultation.</em>
          </h2>
          <p className="text-lg text-dark-gray leading-relaxed max-w-2xl mx-auto">
            Book a no-obligation conversation with a senior adviser. No pitch.
            We&apos;ll ask about the situation, share how we might approach it —
            and if we can&apos;t, we&apos;ll say so.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl font-bold text-dark-teal mb-6">
                Contact details
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-teal" />
                  </div>
                  <div>
                    <p className="text-sm text-dark-gray mb-1">
                      Senior advisory only
                    </p>
                    <p className="font-semibold text-dark-teal">
                      +61 3 8528 2500
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-teal" />
                  </div>
                  <div>
                    <p className="text-sm text-dark-gray mb-1">
                      Email enquiries
                    </p>
                    <p className="font-semibold text-dark-teal">
                      advisory@performanceproperty.com.au
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-teal" />
                  </div>
                  <div>
                    <p className="text-sm text-dark-gray mb-1">Head office</p>
                    <p className="font-semibold text-dark-teal">
                      Level 5/35 Collins Street
                      <br />
                      Melbourne VIC 3000
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-teal/5 rounded-xl p-6 border border-teal/20">
              <h4 className="font-semibold text-dark-teal mb-3">
                What happens next?
              </h4>
              <ul className="space-y-3 text-sm text-dark-gray">
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-teal mt-0.5 flex-shrink-0" />
                  <span>We&apos;ll review your enquiry within 24 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-teal mt-0.5 flex-shrink-0" />
                  <span>
                    A senior adviser will call to discuss your situation
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-teal mt-0.5 flex-shrink-0" />
                  <span>
                    If there&apos;s a fit, we&apos;ll schedule a strategy
                    session
                  </span>
                </li>
              </ul>
            </div>
          </div>

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
                  call to discuss your situation.
                </p>
              </div>
            ) : (
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-8">
                  <div className="flex-1 h-1 rounded-full bg-border overflow-hidden">
                    <div
                      className="h-full bg-teal transition-all duration-500"
                      style={{ width: step === 1 ? "50%" : "100%" }}
                    />
                  </div>
                  <span className="text-xs text-dark-gray whitespace-nowrap">
                    Step {step} of 2
                  </span>
                </div>

                {step === 1 && (
                  <div style={{ animation: "formFadeIn 0.2s ease both" }}>
                    <h3 className="text-base font-semibold text-dark-teal mb-6">
                      About you
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-dark-teal mb-2">
                          First name
                        </label>
                        <input
                          type="text"
                          value={step1.firstName}
                          onBlur={() =>
                            setTouched1((t) => ({ ...t, firstName: true }))
                          }
                          onChange={(e) =>
                            setStep1((s) => ({
                              ...s,
                              firstName: e.target.value,
                            }))
                          }
                          className={fieldClass(
                            errors1.firstName,
                            !!touched1.firstName,
                          )}
                        />
                        {touched1.firstName && errors1.firstName && (
                          <p className="text-xs text-red-500 mt-1">
                            {errors1.firstName}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-dark-teal mb-2">
                          Last name
                        </label>
                        <input
                          type="text"
                          value={step1.lastName}
                          onBlur={() =>
                            setTouched1((t) => ({ ...t, lastName: true }))
                          }
                          onChange={(e) =>
                            setStep1((s) => ({
                              ...s,
                              lastName: e.target.value,
                            }))
                          }
                          className={fieldClass(
                            errors1.lastName,
                            !!touched1.lastName,
                          )}
                        />
                        {touched1.lastName && errors1.lastName && (
                          <p className="text-xs text-red-500 mt-1">
                            {errors1.lastName}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6 mb-8">
                      <div>
                        <label className="block text-sm font-medium text-dark-teal mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          value={step1.email}
                          onBlur={() =>
                            setTouched1((t) => ({ ...t, email: true }))
                          }
                          onChange={(e) =>
                            setStep1((s) => ({ ...s, email: e.target.value }))
                          }
                          className={fieldClass(
                            errors1.email,
                            !!touched1.email,
                          )}
                        />
                        {touched1.email && errors1.email && (
                          <p className="text-xs text-red-500 mt-1">
                            {errors1.email}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-dark-teal mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          value={step1.phone}
                          onBlur={() =>
                            setTouched1((t) => ({ ...t, phone: true }))
                          }
                          onChange={(e) =>
                            setStep1((s) => ({ ...s, phone: e.target.value }))
                          }
                          className={fieldClass(
                            errors1.phone,
                            !!touched1.phone,
                          )}
                        />
                        {touched1.phone && errors1.phone && (
                          <p className="text-xs text-red-500 mt-1">
                            {errors1.phone}
                          </p>
                        )}
                      </div>
                    </div>
                    <Button
                      onClick={handleStep1Next}
                      size="lg"
                      className="w-full bg-teal hover:bg-teal/90 text-white font-semibold py-6"
                    >
                      Continue
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                )}

                {step === 2 && (
                  <div style={{ animation: "formFadeIn 0.2s ease both" }}>
                    <h3 className="text-base font-semibold text-dark-teal mb-6">
                      Your situation
                    </h3>
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-dark-teal mb-2">
                        I am a...
                      </label>
                      <select
                        value={step2.investorType}
                        onChange={(e) =>
                          setStep2((s) => ({
                            ...s,
                            investorType: e.target.value,
                          }))
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
                    <div className="grid sm:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-dark-teal mb-2">
                          Target portfolio
                        </label>
                        <select
                          value={step2.portfolioSize}
                          onChange={(e) =>
                            setStep2((s) => ({
                              ...s,
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
                      <div>
                        <label className="block text-sm font-medium text-dark-teal mb-2">
                          Timeframe
                        </label>
                        <select
                          value={step2.timeframe}
                          onChange={(e) =>
                            setStep2((s) => ({
                              ...s,
                              timeframe: e.target.value,
                            }))
                          }
                          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal bg-white"
                        >
                          <option value="">Select...</option>
                          {timeframes.map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-dark-teal mb-2">
                        Tell us about your situation
                        <span className="text-dark-gray font-normal ml-1">
                          (optional)
                        </span>
                      </label>
                      <textarea
                        rows={4}
                        value={step2.message}
                        onChange={(e) =>
                          setStep2((s) => ({ ...s, message: e.target.value }))
                        }
                        placeholder="Anything else we should know?"
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal resize-none"
                      />
                    </div>
                    <div className="mb-8">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={step2.agreeTerms}
                          onChange={(e) =>
                            setStep2((s) => ({
                              ...s,
                              agreeTerms: e.target.checked,
                            }))
                          }
                          className="w-5 h-5 border border-border rounded text-teal focus:ring-teal mt-0.5"
                        />
                        <span className="text-sm text-dark-gray">
                          I agree to the Privacy Policy and consent to
                          Performance Property contacting me about my enquiry.
                        </span>
                      </label>
                    </div>
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="lg"
                        onClick={() => setStep(1)}
                        className="px-6 py-6 border-border text-dark-gray hover:bg-secondary"
                      >
                        Back
                      </Button>
                      <Button
                        onClick={handleSubmit}
                        disabled={!step2.agreeTerms}
                        size="lg"
                        className="flex-1 bg-teal hover:bg-teal/90 text-white font-semibold py-6 disabled:opacity-50"
                      >
                        Book a Consultation
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes formFadeIn {
          from { opacity: 0; transform: translateX(12px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
