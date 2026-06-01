const testimonials = [
  {
    quote: "As a surgeon, I had the income but no time. They built a three-property portfolio over four years, manage every tenancy decision, and send me a quarterly report I can read in fifteen minutes. I haven't had to think about the day-to-day in two years.",
    author: 'Dr. M.',
    role: 'Orthopaedic Surgeon',
    location: 'VIC',
    initial: 'M',
    result: '3 properties · 4 years · $2.1M portfolio value',
    profession: 'Medical',
  },
  {
    quote: "After selling my business, I had capital but no urgency. Most advisors wanted to transact quickly. Performance Property was the only firm that said 'spend three months on strategy first.' Eighteen months in, the portfolio is performing to plan.",
    author: 'J.K.',
    role: 'Former Business Owner',
    location: 'NSW',
    initial: 'J',
    result: 'Capital event → 2 acquisitions · 18-month deployment',
    profession: 'Capital Event',
  },
  {
    quote: "I came to them with five existing properties and no idea how they were performing. Their first deliverable was an honest review — including advising me to sell two of them. That cost them an acquisition fee but earned my trust.",
    author: 'S.P.',
    role: 'Established Investor',
    location: 'QLD',
    initial: 'S',
    result: 'Portfolio rationalised · 3 retained · 2 divested',
    profession: 'Investor',
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
            Real clients,{' '}
            <em className="font-normal text-teal">real decisions.</em>
          </h2>
          <p className="text-lg text-dark-gray leading-relaxed">
            Our clients don&apos;t typically discuss their wealth publicly — and we respect that.
            Stories are shared with permission; names and identifying details adjusted where requested.
            The outcomes are real.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm flex flex-col"
            >
              {/* Teal top border */}
              <div className="h-1 bg-teal" />

              <div className="p-8 flex flex-col flex-grow">
                {/* Quote */}
                <p className="text-dark-teal italic leading-relaxed mb-6 text-base flex-grow">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Outcome badge */}
                <div className="bg-teal/8 border border-teal/15 rounded-lg px-4 py-3 mb-6">
                  <p className="text-xs text-dark-teal/60 uppercase tracking-wider font-semibold mb-1">Outcome</p>
                  <p className="text-sm font-semibold text-dark-teal">{testimonial.result}</p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-dark-teal/8 flex items-center justify-center flex-shrink-0">
                    <span className="text-dark-teal font-bold text-sm">
                      {testimonial.initial}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-dark-teal text-sm">{testimonial.author}</p>
                    <p className="text-xs text-dark-gray">{testimonial.role} · {testimonial.location}</p>
                    <p className="text-xs text-dark-gray/50 mt-0.5">Verified client — name withheld</p>
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
