"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.4 },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-border shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2">
            <svg
              viewBox="0 0 40 40"
              className="h-8 w-8 md:h-10 md:w-10"
              fill="none"
            >
              <circle cx="20" cy="20" r="18" fill="#171B24" />
              <path d="M12 28V12h6l6 8V12h4v16h-6l-6-8v8h-4z" fill="white" />
              <path
                d="M26 12l4 8-4 8"
                stroke="#00A0B4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="flex flex-col leading-none">
              <span
                className={`text-lg md:text-xl font-bold tracking-tight transition-colors duration-300 ${scrolled ? "text-dark-teal" : "text-white"}`}
              >
                PERFORM<span className="text-teal">A</span>NCE
              </span>
              <span
                className={`text-[10px] md:text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${scrolled ? "text-dark-gray" : "text-white/60"}`}
              >
                Property
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, label }) => {
              const id = href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`text-sm font-medium transition-colors relative ${
                    isActive
                      ? "text-teal"
                      : scrolled
                        ? "text-dark-gray hover:text-dark-teal"
                        : "text-white/80 hover:text-white"
                  }`}
                >
                  {label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-teal rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Button
              asChild
              className="bg-teal hover:bg-teal/90 text-white font-semibold uppercase tracking-wide text-sm px-6"
            >
              <Link href="#contact">
                Book a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 transition-colors ${scrolled ? "text-dark-teal" : "text-white"}`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <nav className="flex flex-col px-4 py-4 gap-4">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-medium text-dark-gray hover:text-dark-teal transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Button
              asChild
              className="bg-teal hover:bg-teal/90 text-white font-semibold uppercase tracking-wide text-sm w-full mt-2"
            >
              <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
                Book a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
