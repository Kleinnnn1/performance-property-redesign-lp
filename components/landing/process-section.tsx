import { Search, FileCheck, BarChart3 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Strategy first",
    description:
      "We spend time understanding your goals, income profile, and risk tolerance before touching the market. Most clients start here — it takes 2–3 sessions to get it right.",
  },
  {
    number: "02",
    icon: FileCheck,
    title: "Acquisition",
    description:
      "We source, vet, and negotiate on your behalf. Every property passes independent due diligence. You approve the final decision — we handle everything else.",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Active management",
    description:
      "We manage tenancies, maintenance, and capital works decisions as if the properties were our own. Quarterly reports you can read in fifteen minutes.",
  },
];

export function ProcessSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-semibold text-teal uppercase tracking-wider mb-4">
            How it works
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-teal leading-tight mb-6">
            What actually{" "}
            <em className="not-italic text-teal">happens after you call.</em>
          </h2>
          <p className="text-lg text-dark-gray leading-relaxed">
            No hard sell. No rushed transactions. A deliberate process built
            around your outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map(({ number, icon: Icon, title, description }, i) => (
            <div key={i}>
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 bg-white rounded-xl border border-border flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Icon className="h-6 w-6 text-teal" />
                </div>
                <span className="text-3xl font-bold text-dark-teal">
                  {number}
                </span>
              </div>
              <h3 className="text-lg font-bold text-dark-teal mb-3">{title}</h3>
              <p className="text-dark-gray leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
