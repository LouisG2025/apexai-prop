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
          <div className="relative">
            <p className="reveal-hidden text-[15px] font-bold text-[#0152ff] pb-4 border-b-2 border-[#0152ff] relative z-10" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              With AI
            </p>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0152ff]/0 via-[#0152ff]/5 to-[#0152ff]/0 -bottom-1 blur-sm animate-pulse" />
          </div>
        </div>

        <div className="hidden md:block">
          <div className="space-y-0">
            {rows.map((row, i) => (
              <div 
                key={i} 
                className="grid md:grid-cols-2 gap-x-8 lg:gap-x-16 border-b border-white/[0.04] group hover:bg-white/[0.01] transition-colors duration-500"
              >
                <div 
                  className="py-5 flex items-start gap-4 transition-all duration-700 ease-out"
                  style={{ 
                    opacity: ref.current ? 1 : 0, 
                    transform: ref.current ? 'translateX(0)' : 'translateX(-20px)',
                    transitionDelay: `${i * 100}ms`
                  }}
                >
                  <div className="w-5 h-5 rounded-full bg-red-400/10 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-red-400/80" strokeWidth={3} />
                  </div>
                  <p className="text-[14px] text-white/40 leading-[1.65] group-hover:text-white/50 transition-colors duration-300" style={{ fontFamily: "'DM Sans', sans-serif" }}>{row.without}</p>
                </div>
                
                <div 
                  className="py-5 flex items-start gap-4 relative transition-all duration-700 ease-out"
                  style={{ 
                    opacity: ref.current ? 1 : 0, 
                    transform: ref.current ? 'translateX(0)' : 'translateX(20px)',
                    transitionDelay: `${i * 100 + 50}ms`
                  }}
                >
                  <div className="absolute inset-y-0 -left-4 w-[1px] bg-gradient-to-b from-transparent via-[#0152ff]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="w-5 h-5 rounded-full bg-[#0152ff]/10 flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_10px_rgba(1,82,255,0.2)]">
                    <Check className="w-3 h-3 text-[#0152ff]" strokeWidth={3} />
                  </div>
                  <p className="text-[14px] text-white/90 leading-[1.65] group-hover:text-white transition-colors duration-300" style={{ fontFamily: "'DM Sans', sans-serif" }}>{row.withAi}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:hidden flex flex-col gap-6">
          {rows.map((row, i) => (
            <div
              key={i}
              className="reveal-hidden bg-[#111827]/50 border border-white/[0.06] rounded-2xl p-6 transition-all duration-500 hover:border-[#0152ff]/30 shadow-sm overflow-hidden relative group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#0152ff]/5 blur-3xl -mr-12 -mt-12 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="flex items-start gap-4 mb-4">
                <div className="w-5 h-5 rounded-full bg-red-400/10 flex items-center justify-center shrink-0 mt-0.5">
                  <X className="w-3 h-3 text-red-400/80" strokeWidth={3} />
                </div>
                <p className="text-[14px] text-white/40 leading-[1.65]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{row.without}</p>
              </div>
              <div className="border-t border-white/[0.04] pt-4">
                <div className="flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full bg-[#0152ff]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#0152ff]" strokeWidth={3} />
                  </div>
                  <p className="text-[14px] text-white leading-[1.65] font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>{row.withAi}</p>
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
