const team = [
  {
    name: "James Willoughby",
    role: "Founder & Lead Adviser",
    initial: "JW",
    background:
      "18 years in property advisory and investment banking. Ran institutional property funds before founding Performance Property in 2010. Personally invested in 6 residential and 2 commercial properties.",
    credentials: [
      "QPIA Qualified",
      "PIPA Member",
      "B.Comm (Finance), University of Melbourne",
    ],
    accentColor: "bg-teal",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Sarah Chen",
    role: "Head of Acquisition & Research",
    initial: "SC",
    background:
      "Former property analyst at CBRE and JLL. Leads all market research, due diligence, and acquisition strategy. Has reviewed over 4,000 properties and approved fewer than 8% for acquisition.",
    credentials: [
      "B.Prop (Hons), University of QLD",
      "RICS Associate",
      "Certified Property Practitioner",
    ],
    accentColor: "bg-emerald-400",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "David Park",
    role: "Portfolio & Client Relations",
    initial: "DP",
    background:
      "Over a decade in portfolio management and client advisory. Oversees ongoing management of all client portfolios and is the primary contact for quarterly reviews and strategy sessions.",
    credentials: [
      "B.Bus (Property), RMIT",
      "CPP Certified",
      "10+ years portfolio management",
    ],
    accentColor: "bg-blue-400",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
  },
];

export function TeamSection() {
  return (
    <section id="team" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-semibold text-teal uppercase tracking-wider mb-4">
            The people
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-teal leading-tight mb-6">
            You&apos;re investing with{" "}
            <em className="not-italic text-teal">people, not a firm.</em>
          </h2>
          <p className="text-lg text-dark-gray leading-relaxed">
            Every client works directly with a senior adviser. You won&apos;t be
            handed to a junior after onboarding. The people below are the ones
            who answer your calls.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="group bg-secondary/40 rounded-2xl overflow-hidden border border-border hover:border-teal/30 hover:shadow-lg hover:shadow-teal/10 transition-all duration-300 flex flex-col"
            >
              {/* Photo header */}
              <div className="relative h-52 overflow-hidden bg-dark-teal">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-[center_20%] opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-teal/80 to-transparent" />
                {/* Name overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-bold text-white text-lg leading-tight">
                    {member.name}
                  </p>
                  <p className="text-teal text-sm font-semibold">
                    {member.role}
                  </p>
                </div>
                {/* Accent stripe */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 ${member.accentColor}`}
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                {/* Background */}
                <p className="text-sm text-dark-gray leading-relaxed mb-5">
                  {member.background}
                </p>

                {/* Credentials */}
                <div className="flex flex-wrap gap-2">
                  {member.credentials.map((c) => (
                    <span
                      key={c}
                      className="text-xs bg-white border border-border text-dark-gray px-2.5 py-1 rounded-full"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
