import { Play } from "lucide-react";

export function VideoSection() {
  return (
    <section id="video" className="py-12 md:py-16 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <p className="text-sm font-semibold text-teal uppercase tracking-wider mb-4">
              A quick, easy first step
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-teal leading-tight mb-6">
              Before you book a call,{" "}
              <em className="not-italic text-teal">watch this.</em>
            </h2>
            <p className="text-lg text-dark-gray leading-relaxed">
              In two minutes, you&apos;ll know exactly how we work, who we work
              with, and whether we&apos;re the right fit.
            </p>
          </div>

          {/* Video Embed */}
          <div className="relative group">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/z-jlsHwywfE"
                title="Performance overview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <p className="mt-4 text-sm text-dark-gray text-center">
              Watch the 2 minute overview
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
