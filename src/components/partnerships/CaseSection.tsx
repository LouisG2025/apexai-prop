import { useScrollReveal } from '../../hooks/useScrollReveal';

const rows = [
  {
    bold: 'Digital marketing increases revenue.',
    muted: 'AI reduces cost, increases conversion, and makes that revenue more consistent.',
  },
  {
    bold: 'Marketing brings the lead to the door.',
    muted: 'AI makes sure the door opens, the conversation happens, and the deal gets closed.',
  },
  {
    bold: 'Your retainer drives traffic and visibility.',
    muted: 'Our systems turn that visibility into pipeline, pipeline into meetings, and meetings into revenue.',
  },
];

export default function GapSection() {
  const ref = useScrollReveal();

  return (
    <section className="bg-[#111827] py-28 lg:py-36 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <p className="reveal-hidden font-dm text-[11px] uppercase tracking-[0.18em] text-white/40 mb-3">
          The Offer Gap
        </p>
        <h2 className="reveal-hidden font-headline text-[32px] sm:text-[40px] lg:text-[52px] text-white leading-[1.1] mb-10">
          Your clients are not just buying marketing anymore. They are buying growth. Those are two different things.
        </h2>

        <p className="reveal-hidden font-dm text-[20px] text-white/60 max-w-[640px] mx-auto text-center leading-[1.75] mb-20">
          A client does not invest in digital marketing because they want traffic. They invest because they want their business to grow. Growth means more revenue with the same costs, or the same revenue with less. Marketing addresses one side of that equation. AI addresses the other. Together they close the whole gap. Separately, you are only ever solving half the problem.
        </p>

        <div className="space-y-0 mb-16">
          {rows.map((row, i) => (
            <div
              key={i}
              className="grid md:grid-cols-2 gap-4 md:gap-8 py-8 border-t border-white/[0.06]"
            >
              <p className="reveal-left font-headline text-[17px] text-white leading-[1.5]">
                {row.bold}
              </p>
              <p className="reveal-right font-dm text-[15px] text-white/50 leading-[1.65]">
                {row.muted}
              </p>
            </div>
          ))}
        </div>

        <p className="reveal-hidden font-headline text-[24px] lg:text-[26px] text-electric text-center leading-[1.3]">
          You are already doing the hard part. We make sure it gets maximised.
        </p>
      </div>
    </section>
  );
}
