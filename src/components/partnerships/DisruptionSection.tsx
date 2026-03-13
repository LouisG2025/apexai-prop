import { useScrollReveal } from '../../hooks/useScrollReveal';

const shifts = [
  {
    num: '01',
    body: 'Google is now answering search queries with AI before showing any organic results. Your clients\' SEO traffic is already being affected.',
  },
  {
    num: '02',
    body: 'AI agents are doing the work of entire sales teams. Outreach. Qualification. Follow-up. Reporting. Running 24/7 with no salary.',
  },
  {
    num: '03',
    body: 'Agencies offering AI alongside their marketing are closing bigger deals and keeping clients longer. The ones that are not... are losing pitches to the ones that are.',
  },
  {
    num: '04',
    body: 'Your clients are already Googling "AI for my business." The only question is whether they find you or someone else.',
  },
];

export default function ShiftSection() {
  const ref = useScrollReveal();

  return (
    <section className="bg-[#0a0f1e] py-28 lg:py-36 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <p className="reveal-hidden text-[11px] uppercase tracking-[0.18em] text-white/40 mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          The Shift
        </p>
        <h2
          className="reveal-hidden text-[32px] sm:text-[40px] lg:text-[52px] text-white leading-[1.1] mb-20 max-w-3xl"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 800 }}
        >
          This is what is happening right now.
        </h2>

        <div className="space-y-14 lg:space-y-16 mb-20">
          {shifts.map((s) => (
            <div key={s.num} className="reveal-hidden flex gap-6 items-start">
              <span
                className="text-[48px] lg:text-[56px] text-[#0152ff]/15 leading-none shrink-0 -mt-2 select-none"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 800 }}
              >
                {s.num}
              </span>
              <p className="text-[16px] lg:text-[17px] text-white/65 leading-[1.75] pt-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {s.body}
              </p>
            </div>
          ))}
        </div>

        <p
          className="reveal-hidden text-[22px] lg:text-[24px] text-[#0152ff] text-center leading-[1.3]"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 800 }}
        >
          This is not a trend. It is a shift. And the agencies that move first will be the ones still standing in two years.
        </p>
      </div>
    </section>
  );
}
