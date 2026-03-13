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
    <section className="bg-[#0a0f1e] py-16 lg:py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className="bg-[#111827] rounded-3xl border border-white/[0.05] p-10 sm:p-14 lg:px-20 lg:py-16">
          <p className="reveal-hidden text-[11px] uppercase tracking-[0.18em] text-white/40 mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            The Offer Gap
          </p>
          <h2
            className="reveal-hidden text-[32px] sm:text-[40px] lg:text-[48px] text-white leading-[1.1] mb-6"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 800 }}
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
                className="grid md:grid-cols-2 gap-4 md:gap-8 py-7 border-t border-white/[0.06]"
              >
                <p className="reveal-left text-[17px] text-white leading-[1.5]" style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 700 }}>
                  {row.you}
                </p>
                <p className="reveal-right text-[15px] text-white/50 leading-[1.65]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {row.us}
                </p>
              </div>
            ))}
          </div>

          <p
            className="reveal-hidden text-[22px] lg:text-[24px] text-[#0152ff] text-center leading-[1.3]"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 800 }}
          >
            You are already doing the hard part. We make sure none of it goes to waste.
          </p>
        </div>
      </div>
    </section>
  );
}
