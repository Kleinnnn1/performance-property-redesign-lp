"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () =>
      setVisible(window.scrollY > window.innerHeight * 0.9);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-transform duration-300 ${visible ? "translate-y-0" : "translate-y-full"}`}
    >
      <div className="bg-white border-t border-border px-4 py-3 flex items-center gap-3 shadow-lg">
        <div className="flex-1 min-w-0">
          <p className="text-xs text-dark-gray">Ready to start?</p>
          <p className="text-sm font-semibold text-dark-teal">
            Book a free consultation
          </p>
        </div>
        <Button
          asChild
          size="sm"
          className="bg-teal hover:bg-teal/90 text-white font-semibold flex-shrink-0"
        >
          <Link href="#contact">
            Book now
            <ArrowRight className="ml-1.5 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
