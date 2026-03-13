import { useScrollReveal } from '../../hooks/useScrollReveal';

const disruptions = [
  {
    title: 'GEO is rewriting how businesses get found.',
    body: 'Generative Engine Optimisation is not coming. It is here. Google is surfacing AI-generated answers above organic results. Clients who relied on SEO alone are already seeing traffic drop. The agencies that understand this shift and adapt their offer will own the next era of search. The ones that do not will watch their clients figure it out without them.',
  },
  {
    title: 'AI agents are replacing entire job functions.',
    body: 'OpenClaw, built by a single developer, reached 247,000 GitHub stars in weeks. Its creator called it AI that actually does things. Not a chatbot. An agent that executes. Sales outreach, inbox management, lead qualification, reporting, content production. These are not future use cases. They are in production at companies right now. Agencies that are not having this conversation with their clients are already behind the ones that are.',
  },
  {
    title: 'The agencies not integrating AI are visibly falling behind.',
    body: 'Automated reporting is now the baseline expectation. Clients who work with AI-integrated agencies are getting faster results, cleaner data, and more consistent follow-up. The gap between agencies using AI and agencies not using AI is widening every month. Waiting is no longer a neutral position. It is a choice to fall behind.',
  },
];

export default function DisruptionSection() {
  const ref = useScrollReveal();

  return (
    <section className="bg-[#111827] py-28 lg:py-36 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <p className="reveal-hidden font-dm text-[11px] uppercase tracking-[0.18em] text-white/40 mb-3">
          The Shift
        </p>
        <h2 className="reveal-hidden font-headline text-[32px] sm:text-[40px] lg:text-[52px] text-white leading-[1.1] mb-20 max-w-3xl">
          Digital marketing will never look the{' '}
          <span style={{ color: '#0152ff' }}>same.</span>
        </h2>

        <div className="space-y-12 lg:space-y-16 mb-20">
          {disruptions.map((d, i) => (
            <div key={i} className="reveal-hidden">
              <h3 className="font-headline text-xl lg:text-[22px] text-white mb-4">
                {d.title}
              </h3>
              <p className="font-dm text-[15px] text-white/50 leading-[1.75] max-w-[640px]">
                {d.body}
              </p>
            </div>
          ))}
        </div>

        <p className="reveal-hidden font-headline text-[22px] lg:text-[24px] text-electric text-center leading-[1.3]">
          The question is not whether this is happening. The question is whether your agency is part of it.
        </p>
      </div>
    </section>
  );
}
