const testimonials = [
  {
    quote: "As a surgeon, I had the income but no time. They built a three-property portfolio over four years, manage every tenancy decision, and send me a quarterly report I can read in fifteen minutes. I haven't had to think about the day-to-day in two years.",
    author: 'Dr. M.',
    role: 'Orthopaedic Surgeon, VIC',
    initial: 'D',
  },
  {
    quote: "After selling my business, I had capital but no urgency. Most advisors wanted to transact quickly. Performance Property was the only firm that said 'spend three months on strategy first.' Eighteen months in, the portfolio is performing to plan.",
    author: 'J.K.',
    role: 'Former Owner, Manufacturing, NSW',
    initial: 'J',
  },
  {
    quote: "I came to them with five existing properties and no idea how they were performing. Their first deliverable was an honest review — including advising me to sell two of them. That cost them an acquisition fee but earned my trust.",
    author: 'S.P.',
    role: 'Established Investor, QLD',
    initial: 'S',
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <p className="text-sm font-semibold text-dark-teal uppercase tracking-widest">
              Client stories
            </p>
            <div className="w-12 h-px bg-teal" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-teal leading-tight mb-6">
            Real results{' '}
            <em className="font-normal text-teal">across Australia.</em>
          </h2>
          <p className="text-lg text-dark-gray leading-relaxed">
            Our clients don&apos;t typically discuss their wealth publicly — and we respect that. The stories below are shared with permission, with identifying details adjusted where requested.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm"
            >
              {/* Teal top border */}
              <div className="h-1 bg-teal" />
              
              <div className="p-8">
                {/* Quote - italic style */}
                <p className="text-dark-teal italic leading-relaxed mb-8 text-lg">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-4">
                  {/* Initial circle */}
                  <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center">
                    <span className="text-teal font-semibold text-lg">
                      {testimonial.initial}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-dark-teal">{testimonial.author}</p>
                    <p className="text-sm text-dark-gray">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
