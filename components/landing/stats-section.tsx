import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const stats = [
  {
    value: '13.32%',
    suffix: '*',
    label: 'Average annual return',
  },
  {
    value: '2,000',
    suffix: '+',
    label: 'Private clients',
  },
  {
    value: '14',
    suffix: '',
    label: 'Year track record',
  },
  {
    value: '$2.5B',
    suffix: '+',
    label: 'Assets under advice',
  },
]

export function StatsSection() {
  return (
    <section className="py-20 md:py-32 bg-dark-teal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Numbers that{' '}
              <em className="not-italic text-teal">speak for themselves.</em>
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              Over a decade of consistent performance — building wealth for our private clients through strategic property investment and active ownership.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-teal hover:bg-teal/90 text-white font-semibold"
            >
              <Link href="#contact">
                Book a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}
                  <span className="text-teal">{stat.suffix}</span>
                </div>
                <p className="text-sm text-white/60 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-12 text-xs text-white/40 max-w-3xl">
          *Past performance is not indicative of future results. The 13.32% figure represents the average internal rate of return across all residential investment properties acquired for clients between 2019-2024, calculated as at October 2024. Individual results will vary.
        </p>
      </div>
    </section>
  )
}
