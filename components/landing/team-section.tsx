const team = [
  {
    name: 'James Willoughby',
    role: 'Founder & Lead Adviser',
    initial: 'JW',
    background: '18 years in property advisory and investment banking. Ran institutional property funds before founding Performance Property in 2010. Personally invested in 6 residential and 2 commercial properties.',
    philosophy: '"I got into this because I watched smart, high-income people lose years to bad advice. The model here is simple: we only make money when you trust us enough to stay."',
    credentials: ['QPIA Qualified', 'PIPA Member', 'B.Comm (Finance), University of Melbourne'],
  },
  {
    name: 'Sarah Chen',
    role: 'Head of Acquisition & Research',
    initial: 'SC',
    background: 'Former property analyst at CBRE and JLL. Leads all market research, due diligence, and acquisition strategy. Has reviewed over 4,000 properties and approved fewer than 8% for acquisition.',
    philosophy: '"The deals we walk away from are just as important as the ones we do. Our job is to protect your capital first, grow it second."',
    credentials: ['B.Prop (Hons), University of QLD', 'RICS Associate', 'Certified Property Practitioner'],
  },
  {
    name: 'David Park',
    role: 'Portfolio & Client Relations',
    initial: 'DP',
    background: 'Over a decade in portfolio management and client advisory. Oversees ongoing management of all client portfolios and is the primary contact for quarterly reviews and strategy sessions.',
    philosophy: '"A good portfolio review should take you 15 minutes to read and give you total clarity. If it doesn\'t, the report has failed — not you."',
    credentials: ['B.Bus (Property), RMIT', 'CPP Certified', '10+ years portfolio management'],
  },
]

export function TeamSection() {
  return (
    <section id="team" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-semibold text-teal uppercase tracking-wider mb-4">
            The people
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-teal leading-tight mb-6">
            You&apos;re investing with{' '}
            <em className="not-italic text-teal">people, not a firm.</em>
          </h2>
          <p className="text-lg text-dark-gray leading-relaxed">
            Every client works directly with a senior adviser. You won&apos;t be handed
            to a junior after onboarding. The people below are the ones who answer your calls.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name} className="flex flex-col">
              {/* Avatar */}
              <div className="flex items-center gap-4 mb-5">
                <div className="w-16 h-16 rounded-full bg-dark-teal flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg tracking-tight">
                    {member.initial}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-dark-teal text-lg leading-tight">{member.name}</p>
                  <p className="text-sm text-teal font-medium">{member.role}</p>
                </div>
              </div>

              {/* Background */}
              <p className="text-sm text-dark-gray leading-relaxed mb-5">
                {member.background}
              </p>

              {/* Philosophy quote */}
              <blockquote className="border-l-2 border-teal pl-4 mb-5 flex-grow">
                <p className="text-sm text-dark-teal italic leading-relaxed">
                  {member.philosophy}
                </p>
              </blockquote>

              {/* Credentials */}
              <div className="flex flex-wrap gap-2">
                {member.credentials.map((c) => (
                  <span
                    key={c}
                    className="text-xs bg-secondary text-dark-gray px-2.5 py-1 rounded-full"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-14 p-7 bg-secondary rounded-xl border-l-4 border-teal">
          <p className="text-base text-dark-teal font-medium leading-relaxed max-w-3xl">
            <strong>A note on placeholders:</strong> The profiles above use placeholder names
            and details. Replace with your actual team members — this section is one of the
            highest-trust signals on the entire site.
          </p>
        </div> */}
      </div>
    </section>
  )
}
