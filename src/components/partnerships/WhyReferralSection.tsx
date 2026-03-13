import { useScrollReveal } from '../../hooks/useScrollReveal';

const tableRows = [
  { label: 'Delivery risk', wl: 'You own it', ref: 'We own it' },
  { label: 'Technical support', wl: 'Your team', ref: 'Our team' },
  { label: 'What you need to know', wl: 'The whole product', ref: 'Just who to call' },
  { label: 'Commission', wl: 'Eroded by ops overhead', ref: '15%, zero overhead' },
  { label: 'Exit if it goes wrong', wl: 'Complicated', ref: 'Clean and simple' },
];

export default function WhyReferralSection() {
  const ref = useScrollReveal();

  return (
    <section className="bg-[#0a0f1e] py-28 lg:py-36 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <p className="reveal-hidden font-dm text-[11px] uppercase tracking-[0.18em] text-white/40 mb-3">
          Why Referral, Not White Label
        </p>
        <h2 className="reveal-hidden font-headline text-[32px] sm:text-[40px] lg:text-[48px] text-white leading-[1.1] mb-16 max-w-3xl">
          Specialists working together beat generalists pretending to be everything.
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          <div className="space-y-8">
            <p className="reveal-hidden font-dm text-[16px] text-white/60 leading-[1.75]">
              White labelling puts you in the middle of a product you did not build. Your team fields technical questions they cannot answer. You own the relationship when something goes wrong. You become a jack of all trades, which is exactly what clients pay specialists to avoid.
            </p>
            <p className="reveal-hidden font-dm text-[16px] text-white/60 leading-[1.75]">
              The referral model works differently. Clients want the best results. So you stay in your lane. We stay in ours. The client gets two specialists working in partnership toward one outcome: their growth. That is a story you can tell with genuine confidence. Not because you are pretending. Because you brought in the right people.
            </p>
            <p className="reveal-hidden font-dm text-[16px] text-white/60 leading-[1.75]">
              And the numbers work. Digital marketing agencies already run on referral and commission structures. 15% sits well within your existing margins. You refer once. You earn on the build. You earn on retainers where agreed. Zero operational overhead. Zero technical liability. Two specialists. One client. Better results.
            </p>
          </div>

          <div className="reveal-hidden overflow-hidden rounded-xl border border-white/[0.06]">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-electric/15">
                  <th className="font-headline text-[14px] text-electric px-5 py-4">&nbsp;</th>
                  <th className="font-headline text-[14px] text-electric px-5 py-4">White Label</th>
                  <th className="font-headline text-[14px] text-electric px-5 py-4">Referral Partnership</th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-[#111827]' : 'bg-white/[0.02]'}>
                    <td className="font-dm text-[13px] text-white/60 px-5 py-3.5">{row.label}</td>
                    <td className="font-dm text-[13px] text-white/40 px-5 py-3.5">{row.wl}</td>
                    <td className="font-dm text-[13px] text-white px-5 py-3.5">{row.ref}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
