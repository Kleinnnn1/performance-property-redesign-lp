import Link from "next/link";
import { ArrowRight, Play, ShieldCheck, TrendingUp, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const uspPillars = [
  {
    icon: ShieldCheck,
    label: "100% Independent",
    sub: "No commissions. Ever.",
  },
  { icon: TrendingUp, label: "13.32% Avg Return*", sub: "Across 2019–2024" },
  { icon: Clock, label: "Done For You", sub: "We handle everything" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-10 md:pt-14 overflow-hidden">
      {/* Background image with stronger gradient for contrast */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-dark-teal/98 via-dark-teal/88 to-dark-teal/50" />
        {/* Teal accent glow bottom-left */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">

        {/* Headline */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 max-w-4xl text-balance"
          style={{
            animation: "heroFadeUp 0.6s ease both",
            animationDelay: "0.2s",
          }}
        >
          We build portfolios for people who don&apos;t have time{" "}
          <em className="not-italic text-teal">to build portfolios.</em>
        </h1>

        <p
          className="text-lg md:text-xl text-white/80 max-w-2xl mb-4 leading-relaxed"
          style={{
            animation: "heroFadeUp 0.6s ease both",
            animationDelay: "0.35s",
          }}
        >
          Property strategy, acquisition, and active management for
          Australia&apos;s high-income professionals — so your wealth works
          while you do.
        </p>

        {/* CTA row */}
        <div
          className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-0"
          style={{
            animation: "heroFadeUp 0.6s ease both",
            animationDelay: "0.55s",
          }}
        >
          <Button
            asChild
            size="lg"
            className="bg-teal hover:bg-teal/90 text-white font-bold text-base px-8 py-6 shadow-xl shadow-teal/40 hover:shadow-teal/50 transition-all duration-200"
          >
            <Link href="#contact">
              Book a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white font-semibold text-base px-8 py-6"
          >
            <Link href="#video">
              <Play className="mr-2 h-5 w-5" />
              Watch our Story
            </Link>
          </Button>
        </div>

      </div>

      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
