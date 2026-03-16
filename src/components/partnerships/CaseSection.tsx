import { useScrollReveal } from '../../hooks/useScrollReveal';

const rows = [
  {
    you: 'You generate the leads.',
    us: 'We make sure they actually convert.',
  },
  {
    you: 'You drive the traffic.',
    us: 'We turn it into booked meetings and closed deals.',
  },
  {
    you: 'You build the brand.',
    us: 'We build the systems that make it sell.',
  },
];

export default function GapSection() {
  const ref = useScrollReveal();

  return (
    <section className="bg-[#0a0f1e] py-16 md:py-16 lg:py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className="bg-[#111827] rounded-3xl border border-white/[0.05] p-6 sm:p-14 lg:px-20 lg:py-16">
          <p className="reveal-hidden text-[11px] uppercase tracking-[0.18em] text-white/40 mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            The Offer Gap
          </p>
          <h2
            className="reveal-hidden text-white leading-[1.1] mb-6"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 800, fontSize: 'clamp(28px, 7vw, 48px)' }}
          >
            Your clients are not paying for marketing. They are paying for growth.
          </h2>

          <p className="reveal-hidden text-[17px] text-white/55 max-w-[480px] leading-[1.75] mb-14" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Marketing generates attention. But attention without conversion is just noise. AI turns that attention into revenue.
          </p>

          <div className="space-y-0 mb-14">
            {rows.map((row, i) => (
              <div
                key={i}
                className="grid md:grid-cols-2 gap-4 md:gap-8 py-8 border-t border-white/[0.06] group hover:bg-white/[0.01] transition-colors duration-500"
              >
                <div 
                  className="transition-all duration-700 ease-out"
                  style={{ 
                    opacity: ref.current ? 1 : 0, 
                    transform: ref.current ? 'translateX(0)' : 'translateX(-20px)',
                    transitionDelay: `${i * 150}ms`
                  }}
                >
                  <p className="text-[17px] text-white/50 leading-[1.5] group-hover:text-white/70 transition-colors duration-300" style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 700 }}>
                    {row.you}
                  </p>
                </div>
                
                <div 
                  className="relative transition-all duration-700 ease-out"
                  style={{ 
                    opacity: ref.current ? 1 : 0, 
                    transform: ref.current ? 'translateX(0)' : 'translateX(20px)',
                    transitionDelay: `${i * 150 + 75}ms`
                  }}
                >
                  <div className="absolute inset-y-0 -left-4 w-[1px] bg-gradient-to-b from-transparent via-[#0152ff]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <p className="text-[15px] text-white leading-[1.65] font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    <span className="text-[#0152ff] font-bold mr-1">→</span> {row.us}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
            className="reveal-hidden relative py-6 px-10 rounded-2xl bg-[#0152ff]/[0.03] border border-[#0152ff]/10 overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0152ff]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <p
              className="text-[20px] md:text-[22px] lg:text-[24px] text-[#0152ff] text-center leading-[1.3] relative z-10"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 800 }}
            >
              You are already doing the hard part. We make sure none of it goes to waste.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
