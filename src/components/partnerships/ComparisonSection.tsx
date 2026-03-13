import { X, Check } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const rows = [
  {
    without: 'Leads arrive after hours with no one to respond. By morning they are potentially cold.',
    withAi: 'Every inbound lead responded to instantly, 24/7.',
  },
  {
    without: 'Clients see ad spend that is not fully qualified. They start questioning the results.',
    withAi: 'Clients see their ad spend converting better. The ROI frameworks become undeniable.',
  },
  {
    without: 'Your pitch sounds the same as every other agency in the room.',
    withAi: 'You walk into pitches with something most agencies do not offer yet. An edge.',
  },
  {
    without: 'Results plateau. Clients churn. The loop continues slowing growth.',
    withAi: 'AI systems embedded into how clients operate make them genuinely hard to lose.',
  },
  {
    without: 'AI comes up in conversations and you do not have a clear answer or solution.',
    withAi: 'You bring in the specialist. You lead the AI conversation with confidence.',
  },
  {
    without: 'Reporting is manual. Operations are slow. Margins stay tight.',
    withAi: 'Automated reporting, streamlined operations, the ability to grow without adding headcount.',
  },
];

export default function ComparisonSection() {
  const ref = useScrollReveal(150);

  return (
    <section className="bg-[#0a0f1e] py-28 lg:py-36 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <p className="reveal-hidden font-dm text-[11px] uppercase tracking-[0.18em] text-white/40 mb-3">
          The Difference
        </p>
        <h2 className="reveal-hidden font-headline text-[32px] sm:text-[40px] lg:text-[52px] text-white leading-[1.1] mb-16">
          What your offer looks like with an AI partner.
        </h2>

        <div className="grid grid-cols-2 gap-x-8 lg:gap-x-16 mb-6">
          <p className="reveal-hidden text-[15px] text-white/35 font-dm pb-4 border-b border-white/[0.06]">
            Without AI
          </p>
          <p className="reveal-hidden text-[15px] font-bold text-electric font-dm pb-4 border-b-2 border-electric">
            With AI
          </p>
        </div>

        <div className="space-y-0">
          {rows.map((row, i) => (
            <div key={i} className="grid grid-cols-2 gap-x-8 lg:gap-x-16 border-b border-white/[0.04]">
              <div className="reveal-left py-5 flex items-start gap-3">
                <X className="w-4 h-4 text-red-400/70 shrink-0 mt-0.5" strokeWidth={2.5} />
                <p className="font-dm text-[14px] text-white/50 leading-[1.65]">{row.without}</p>
              </div>
              <div className="reveal-right py-5 flex items-start gap-3">
                <Check className="w-4 h-4 text-electric shrink-0 mt-0.5" strokeWidth={2.5} />
                <p className="font-dm text-[14px] text-white leading-[1.65]">{row.withAi}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="reveal-hidden font-headline text-[24px] lg:text-[28px] text-white text-center mt-20 max-w-3xl mx-auto leading-[1.25]">
          You are either the agency that introduces AI to your clients. Or the one that allowed a competitor to get there first.
        </p>
      </div>
    </section>
  );
}
