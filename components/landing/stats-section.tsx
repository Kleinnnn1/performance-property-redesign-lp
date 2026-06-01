"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  {
    value: 13.32,
    decimals: 2,
    suffix: "%",
    label: "Average annual return",
    context: "Above the national residential median — 2019–2024",
    color: "from-teal to-cyan-400",
  },
  {
    value: 2000,
    decimals: 0,
    suffix: "+",
    label: "Private clients",
    context: "Doctors, executives, business owners & investors",
    color: "from-blue-400 to-cyan-400",
  },
  {
    value: 14,
    decimals: 0,
    suffix: "",
    label: "Year track record",
    context: "Consistent performance across multiple market cycles",
    color: "from-emerald-400 to-teal",
  },
  {
    value: 2.5,
    decimals: 1,
    suffix: "B+",
    label: "Assets under advice",
    prefix: "$",
    context: "Residential and commercial portfolios, nationally",
    color: "from-amber-400 to-yellow-300",
  },
];

function useCountUp(
  target: number,
  decimals: number,
  active: boolean,
  duration = 1600,
) {
  const [display, setDisplay] = useState("0");
  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const frame = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setDisplay((target * ease).toFixed(decimals));
      if (p < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }, [active, target, decimals, duration]);
  return display;
}

function StatCard({
  stat,
  active,
}: {
  stat: (typeof stats)[0];
  active: boolean;
}) {
  const display = useCountUp(stat.value, stat.decimals, active);
  return (
    <div className="relative p-6 bg-white/5 rounded-2xl border border-white/10 flex flex-col gap-3 overflow-hidden group hover:bg-white/8 transition-colors">
      {/* Gradient accent bar at top */}
      <div
        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} opacity-80`}
      />
      <div className="text-4xl md:text-5xl font-bold text-white">
        {stat.prefix ?? ""}
        {display}
        <span className="text-teal">{stat.suffix}</span>
      </div>
      <div>
        <p className="text-sm text-white/70 font-medium mb-1">{stat.label}</p>
        <p className="text-xs text-white/40 leading-relaxed">{stat.context}</p>
      </div>
    </div>
  );
}

function DisclaimerToggle() {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-12">
      <button
        onClick={() => setOpen((o) => !o)}
        className="text-xs text-white/30 hover:text-white/50 transition-colors underline decoration-dotted"
      >
        * Performance disclaimer
      </button>
      {open && (
        <p className="mt-3 text-xs text-white/40 max-w-3xl leading-relaxed">
          Past performance is not indicative of future results. The 13.32%
          figure represents the average internal rate of return across all
          residential investment properties acquired for clients between
          2019–2024, calculated as at October 2024. Individual results will
          vary.
        </p>
      )}
    </div>
  );
}

export function StatsSection() {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive(true);
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="stats"
      className="relative py-20 md:py-32 bg-dark-teal overflow-hidden"
    >
      {/* Background accent shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal/8 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#00A0B4 1px, transparent 1px), linear-gradient(90deg, #00A0B4 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            {/* USP highlight label */}
            <div className="inline-flex items-center gap-2 bg-teal/20 border border-teal/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
              <span className="text-teal text-xs font-bold uppercase tracking-wider">
                Verified Track Record
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Numbers that{" "}
              <em className="not-italic text-teal">mean something.</em>
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              Over a decade of consistent performance across residential and
              commercial portfolios. Every number below is auditable.
            </p>

            {/* USP callout box */}
            <div className="bg-teal/10 border border-teal/25 rounded-xl p-5 mb-8">
              <p className="text-teal font-bold text-sm uppercase tracking-wider mb-2">
                Why our returns are higher
              </p>
              <p className="text-white/70 text-sm leading-relaxed">
                We don&apos;t take commissions from developers, so we only
                recommend properties that actually perform — not ones that pay
                us the best referral fee. That independence is the difference.
              </p>
            </div>

            <Button
              asChild
              size="lg"
              className="bg-teal hover:bg-teal/90 text-white font-semibold shadow-lg shadow-teal/30"
            >
              <Link href="#contact">
                Book a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} active={active} />
            ))}
          </div>
        </div>

        <DisclaimerToggle />
      </div>
    </section>
  );
}
