import { Play } from 'lucide-react'

export function VideoSection() {
  return (
    <section id="video" className="py-20 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <p className="text-sm font-semibold text-teal uppercase tracking-wider mb-4">
              A quick, easy first step
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-teal leading-tight mb-6">
              Before you book a call,{' '}
              <em className="not-italic text-teal">watch this.</em>
            </h2>
            <p className="text-lg text-dark-gray leading-relaxed">
              In two minutes, you&apos;ll know exactly how we work, who we work with, and whether we&apos;re the right fit.
            </p>
          </div>

          {/* Video Thumbnail */}
          <div className="relative group cursor-pointer">
            <div 
              className="relative aspect-video rounded-xl overflow-hidden shadow-2xl"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-dark-teal/40 group-hover:bg-dark-teal/30 transition-colors" />
              
              {/* Logo Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="h-8 w-8 text-teal ml-1" fill="currentColor" />
                  </div>
                  <div className="mt-6 text-center">
                    <div className="flex items-center gap-2 text-white">
                      <svg viewBox="0 0 40 40" className="h-8 w-8" fill="none">
                        <circle cx="20" cy="20" r="18" fill="#171B24" />
                        <path d="M12 28V12h6l6 8V12h4v16h-6l-6-8v8h-4z" fill="white" />
                        <path d="M26 12l4 8-4 8" stroke="#00A0B4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-lg font-bold">
                        PERFORM<span className="text-teal">A</span>NCE
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Caption */}
            <p className="mt-4 text-sm text-dark-gray text-center">
              Watch the 2 minute overview
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
