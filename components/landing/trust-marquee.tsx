export function TrustMarquee() {
  const items = [
    "QPIA Qualified Property Investment Adviser",
    "PIPA Member",
    "Independent & Unbiased",
    "$2.5B+ Portfolio Under Management",
    "2,000+ Properties Acquired",
    "14+ Years Track Record",
    "13.32%* Average Annual Return",
  ];

  const doubled = [...items, ...items];

  return (
    <section className="bg-dark-teal py-3.5 overflow-hidden relative">
      {/* Edge fades */}
      <div
        className="absolute inset-y-0 left-0 w-20 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, var(--color-dark-teal) 0%, transparent 100%)",
        }}
      />
      <div
        className="absolute inset-y-0 right-0 w-20 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to left, var(--color-dark-teal) 0%, transparent 100%)",
        }}
      />

      <div className="marquee-track flex w-max">
        {doubled.map((item, index) => (
          <div key={index} className="flex items-center">
            <span className="marquee-dot w-1.5 h-1.5 rounded-full mx-6 shrink-0" />
            <span className="text-white/60 text-xs font-medium tracking-wide uppercase whitespace-nowrap">
              {item}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        :root { --color-dark-teal: #0d2b2b; }
        .marquee-track {
          animation: marquee 32s linear infinite;
          will-change: transform;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        .marquee-dot {
          background-color: var(--color-teal, #2dd4bf);
          box-shadow: 0 0 5px 1px color-mix(in srgb, var(--color-teal, #2dd4bf) 60%, transparent);
        }
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
