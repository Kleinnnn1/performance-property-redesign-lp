const testimonials = [
  {
    quote:
      "As a surgeon, I had the income but no time. They built a three-property portfolio over four years, manage every tenancy decision, and send me a quarterly report I can read in fifteen minutes. I haven't had to think about the day-to-day in two years.",
    author: "Dr. M.",
    role: "Orthopaedic Surgeon",
    location: "VIC",
    result: "3 properties · 4 years · $2.1M portfolio value",
    profession: "Medical",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80",
    highlight: "$2.1M portfolio",
  },
  {
    quote:
      "After selling my business, I had capital but no urgency. Most advisors wanted to transact quickly. Performance Property was the only firm that said 'spend three months on strategy first.' Eighteen months in, the portfolio is performing to plan.",
    author: "J.K.",
    role: "Former Business Owner",
    location: "NSW",
    result: "Capital event → 2 acquisitions · 18-month deployment",
    profession: "Capital Event",
    image:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=800&q=80",
    highlight: "Strategy first",
  },
  {
    quote:
      "I came to them with five existing properties and no idea how they were performing. Their first deliverable was an honest review — including advising me to sell two of them. That cost them an acquisition fee but earned my trust.",
    author: "S.P.",
    role: "Established Investor",
    location: "QLD",
    result: "Portfolio rationalised · 3 retained · 2 divested",
    profession: "Investor",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80",
    highlight: "Honest advice",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="pt-12 md:pt-16 pb-0 md:pb-16 bg-secondary">
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
            Real clients,{" "}
            <em className="font-normal text-teal">real decisions.</em>
          </h2>
          <p className="text-lg text-dark-gray leading-relaxed">
            Our clients don&apos;t typically discuss their wealth publicly — and
            we respect that. Stories are shared with permission; names and
            identifying details adjusted where requested. The outcomes are real.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col group hover:shadow-lg hover:shadow-teal/10 transition-all duration-300"
            >
              {/* Background image strip */}
              <div className="relative h-45 overflow-hidden">
                <img
                  src={testimonial.image}
                  alt=""
                  className="w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-dark-teal/70" />
              </div>

              <div className="p-6 pt-10 flex flex-col flex-grow">
                {/* Quote */}
                <p className="text-dark-teal italic leading-relaxed mb-6 text-sm flex-grow">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Outcome badge */}
                <div className="bg-teal/8 border border-teal/20 rounded-lg px-4 py-3 mb-5">
                  <p className="text-xs text-dark-teal/60 uppercase tracking-wider font-semibold mb-1">
                    Outcome
                  </p>
                  <p className="text-sm font-semibold text-dark-teal">
                    {testimonial.result}
                  </p>
                </div>

                {/* Author */}
                <div>
                  <p className="font-semibold text-dark-teal text-sm">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-dark-gray">
                    {testimonial.role} · {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
