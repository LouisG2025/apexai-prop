import { useScrollReveal } from '../../hooks/useScrollReveal';

const steps = [
  {
    num: '01',
    title: 'You make the introduction',
    body: 'A warm intro or a referral link. That is all we need. We take the conversation from there and handle the pitch, the scope, and the contract.',
  },
  {
    num: '02',
    title: 'We strategise together',
    body: 'Before anything is built, we get aligned. A call with you, a call with the client, and a clear plan. You are part of that conversation. Alignment between us and you is how this works well.',
  },
  {
    num: '03',
    title: 'We build and deliver',
    body: 'Your client gets a fully built, tested, and deployed system. We manage delivery and handle every technical question. You stay informed without having to manage anything.',
  },
  {
    num: '04',
    title: 'You earn and retain',
    body: '15% of the build value confirmed before we start. Retainer arrangements where agreed. And a client with AI embedded in how they operate, which means they are staying with the agency that brought it to them.',
  },
];

export default function ProcessSection() {
  const ref = useScrollReveal();

  return (
    <section className="bg-[#111827] py-28 lg:py-36 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <p className="reveal-hidden font-dm text-[11px] uppercase tracking-[0.18em] text-white/40 mb-3">
          How It Works
        </p>
        <h2 className="reveal-hidden font-headline text-[32px] sm:text-[40px] lg:text-[52px] text-white leading-[1.1] mb-20 max-w-2xl">
          You introduce. We deliver. Together.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, i) => (
            <div key={i} className="reveal-hidden relative border-t-2 border-electric pt-8">
              <span className="font-mono text-[96px] font-semibold text-electric/[0.06] absolute -top-6 -left-1 leading-none select-none pointer-events-none">
                {step.num}
              </span>
              <div className="relative pt-12">
                <h3 className="font-headline text-xl text-white mb-3">
                  {step.title}
                </h3>
                <p className="font-dm text-sm text-white/50 leading-[1.65]">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
