import { X, Check } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const rows = [
  {
    without: 'Leads arrive after hours. By morning they are cold.',
    withAi: 'Every lead responded to instantly. 24/7.',
  },
  {
    without: 'Clients question ad spend that is not converting.',
    withAi: 'Clients see better ROI. The frameworks become undeniable.',
  },
  {
    without: 'Your pitch sounds like every other agency.',
    withAi: 'You walk in with something most agencies cannot offer yet.',
  },
  {
    without: 'Results plateau. Clients churn.',
    withAi: 'AI embedded into operations makes clients hard to lose.',
  },
  {
    without: 'AI comes up and you don\'t have an answer.',
    withAi: 'You bring in the specialist. You lead with confidence.',
  },
  {
    without: 'Reporting is manual. Margins stay tight.',
    withAi: 'Automated reporting. Growth without adding headcount.',
  },
];

export default function ComparisonSection() {
  const ref = useScrollReveal(150);

  return (
    <section id="difference" className="bg-[#0a0f1e] py-16 md:py-28 lg:py-36 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <p className="reveal-hidden text-[11px] uppercase tracking-[0.18em] text-white/40 mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          The Difference
        </p>
        <h2
          className="reveal-hidden text-[32px] sm:text-[40px] lg:text-[52px] text-white leading-[1.1] mb-16"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 800 }}
        >
          What your offer looks like with an AI partner.
        </h2>

        <div className="hidden md:grid grid-cols-2 gap-x-8 lg:gap-x-16 mb-6">
          <p className="reveal-hidden text-[15px] text-white/35 pb-4 border-b border-white/[0.06]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Without AI
          </p>
          <p className="reveal-hidden text-[15px] font-bold text-[#0152ff] pb-4 border-b-2 border-[#0152ff]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            With AI
          </p>
        </div>

        <div className="hidden md:block">
          <div className="space-y-0">
            {rows.map((row, i) => (
              <div key={i} className="grid md:grid-cols-2 gap-x-8 lg:gap-x-16 border-b border-white/[0.04]">
                <div className="reveal-left py-5 flex items-start gap-3">
                  <X className="w-4 h-4 text-red-400/70 shrink-0 mt-0.5" strokeWidth={2.5} />
                  <p className="text-[14px] text-white/50 leading-[1.65]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{row.without}</p>
                </div>
                <div className="reveal-right py-5 flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#0152ff] shrink-0 mt-0.5" strokeWidth={2.5} />
                  <p className="text-[14px] text-white leading-[1.65]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{row.withAi}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:hidden flex flex-col gap-4">
          {rows.map((row, i) => (
            <div
              key={i}
              className="reveal-hidden bg-[#111827] border border-white/[0.06] rounded-2xl p-5"
            >
              <div className="flex items-start gap-3 mb-3">
                <X className="w-4 h-4 text-red-400/70 shrink-0 mt-0.5" strokeWidth={2.5} />
                <p className="text-[14px] text-white/50 leading-[1.65]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{row.without}</p>
              </div>
              <div className="border-t border-white/[0.06] pt-3">
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#0152ff] shrink-0 mt-0.5" strokeWidth={2.5} />
                  <p className="text-[14px] text-white leading-[1.65]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{row.withAi}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p
          className="reveal-hidden text-[22px] md:text-[24px] lg:text-[28px] text-white text-center mt-20 max-w-3xl mx-auto leading-[1.25]"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 800 }}
        >
          You either introduce AI to your clients. Or a competitor does it first.
        </p>
      </div>
    </section>
  );
}
