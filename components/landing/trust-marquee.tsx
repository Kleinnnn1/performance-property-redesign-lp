export function TrustMarquee() {
  const items = [
    { label: "QPIA Qualified", sub: "Property Investment Adviser" },
    { label: "PIPA Member", sub: "Industry Association" },
    { label: "Independent & Unbiased", sub: "No commissions. Ever." },
    { label: "$2.5B+", sub: "Assets Under Advice" },
    { label: "2,000+", sub: "Private Clients" },
    { label: "14+ Years", sub: "Track Record" },
    { label: "13.32%*", sub: "Avg. Annual Return" },
  ];

  const doubled = [...items, ...items];

  return (
    <section className="bg-dark-teal border-y border-white/10 py-10 overflow-hidden relative">
      {/* Edge fades */}
      <div
        className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to right, #171B24 0%, transparent 100%)",
        }}
      />
      <div
        className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to left, #171B24 0%, transparent 100%)",
        }}
      />

      <p className="text-center text-xs font-semibold text-white/40 uppercase tracking-[0.2em] mb-8">
        Our credentials &amp; track record
      </p>

      <div className="marquee-track flex w-max">
        {doubled.map(({ label, sub }, i) => (
          <div key={i} className="flex items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-teal mx-10 shrink-0" />
            <div className="flex flex-col items-center text-center">
              <span className="text-base font-bold text-white leading-tight whitespace-nowrap">
                {label}
              </span>
              <span className="text-xs text-white/40 mt-0.5 whitespace-nowrap">
                {sub}
              </span>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .marquee-track {
          animation: marquee 36s linear infinite;
          will-change: transform;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
