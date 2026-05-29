export function TrustMarquee() {
  const items = [
    'QPIA Qualified Property Investment Adviser',
    'PIPA Member',
    'Independent & Unbiased',
    '$2.5B+ Portfolio Under Management',
    '2,000+ Properties Acquired',
    '14+ Years Track Record',
    '13.32%* Average Annual Return',
  ]

  return (
    <section className="bg-dark-teal py-4 overflow-hidden">
      <div className="relative">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...items, ...items].map((item, index) => (
            <div key={index} className="flex items-center mx-8">
              <span className="w-2 h-2 bg-teal rounded-full mr-4" />
              <span className="text-white/80 text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
