import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-dark-teal py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <svg viewBox="0 0 40 40" className="h-8 w-8" fill="none">
              <circle cx="20" cy="20" r="18" fill="white" />
              <path d="M12 28V12h6l6 8V12h4v16h-6l-6-8v8h-4z" fill="#171B24" />
              <path d="M26 12l4 8-4 8" stroke="#00A0B4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="flex flex-col leading-none">
              <span className="text-lg font-bold tracking-tight text-white">
                PERFORM<span className="text-teal">A</span>NCE
              </span>
              <span className="text-[10px] tracking-[0.2em] text-white/60 uppercase">
                Property
              </span>
            </div>
          </Link>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-sm text-white/60">
            <a href="tel:+61385282500" className="hover:text-white transition-colors">
              +61 3 8528 2500
            </a>
            <span className="hidden sm:inline">|</span>
            <span>Level 5/35 Collins Street, Melbourne VIC 3000</span>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
            <p>© 2024 Performance Property. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/disclaimer" className="hover:text-white transition-colors">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
