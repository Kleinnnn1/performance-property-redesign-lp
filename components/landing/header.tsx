'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <svg 
              viewBox="0 0 40 40" 
              className="h-8 w-8 md:h-10 md:w-10"
              fill="none"
            >
              <circle cx="20" cy="20" r="18" fill="#171B24" />
              <path 
                d="M12 28V12h6l6 8V12h4v16h-6l-6-8v8h-4z" 
                fill="white"
              />
              <path 
                d="M26 12l4 8-4 8" 
                stroke="#00A0B4" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            <div className="flex flex-col leading-none">
              <span className="text-lg md:text-xl font-bold tracking-tight text-dark-teal">
                PERFORM<span className="text-teal">A</span>NCE
              </span>
              <span className="text-[10px] md:text-xs tracking-[0.2em] text-dark-gray uppercase">
                Property
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              href="#services" 
              className="text-sm font-medium text-dark-gray hover:text-dark-teal transition-colors"
            >
              Services
            </Link>
            <Link 
              href="#about" 
              className="text-sm font-medium text-dark-gray hover:text-dark-teal transition-colors"
            >
              About
            </Link>
            <Link 
              href="#testimonials" 
              className="text-sm font-medium text-dark-gray hover:text-dark-teal transition-colors"
            >
              Testimonials
            </Link>
            <Link 
              href="#faq" 
              className="text-sm font-medium text-dark-gray hover:text-dark-teal transition-colors"
            >
              FAQ
            </Link>
          </nav>

          {/* CTA Button */}
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-dark-teal"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <nav className="flex flex-col px-4 py-4 gap-4">
            <Link 
              href="#services" 
              className="text-sm font-medium text-dark-gray hover:text-dark-teal transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="#about" 
              className="text-sm font-medium text-dark-gray hover:text-dark-teal transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="#testimonials" 
              className="text-sm font-medium text-dark-gray hover:text-dark-teal transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link 
              href="#faq" 
              className="text-sm font-medium text-dark-gray hover:text-dark-teal transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
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
  )
}
