import { useEffect, useRef, useState } from 'react';

const steps = [
  {
    num: '01',
    title: 'You pitch AI as part of your offer',
    body: 'When a client is interested, you make the introduction. A warm intro or a referral link. That is all we need.',
  },
  {
    num: '02',
    title: 'We run a strategy call with the client',
    body: 'Together with you. We assess what the client needs, where the gaps are, and what will actually move the needle.',
  },
  {
    num: '03',
    title: 'We design, build, and deliver',
    body: 'Our team handles everything. Fully built, tested, deployed. You stay informed without managing anything.',
  },
  {
    num: '04',
    title: 'You earn and retain',
    body: '15% confirmed before we start. Retainer arrangements where agreed. A client with AI embedded is a client that stays.',
  },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setRevealed(true); obs.disconnect(); }
    }, { threshold: 0.1 });
    obs.observe(section);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const refs = stepRefs.current;
      const viewportCenter = window.innerHeight * 0.5;
      let closest = 0;
      let closestDist = Infinity;
      refs.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const dist = Math.abs(center - viewportCenter);
        if (dist < closestDist) { closestDist = dist; closest = i; }
      });
      setActiveStep(closest);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="process" ref={sectionRef} className="bg-[#0a0f1e] py-28 lg:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="lg:grid lg:grid-cols-[320px_1fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start mb-12 lg:mb-0">
            <p
              className={`text-[11px] uppercase tracking-[0.18em] text-white/40 mb-3 transition-all duration-600 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}`}
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              How It Works
            </p>
            <h2
              className={`text-[32px] sm:text-[40px] lg:text-[44px] text-white leading-[1.1] transition-all duration-600 delay-100 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}`}
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 800 }}
            >
              You introduce. We deliver. Partnered.
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-[18px] top-0 bottom-0 w-[2px] bg-white/[0.06] hidden lg:block" />

            <div className="space-y-12 lg:space-y-16">
              {steps.map((step, i) => (
                <div
                  key={i}
                  ref={(el) => { stepRefs.current[i] = el; }}
                  className="relative lg:pl-14"
                  style={{
                    opacity: revealed ? 1 : 0,
                    transform: revealed ? 'translateY(0)' : 'translateY(30px)',
                    transition: `opacity 600ms ease ${i * 150}ms, transform 600ms ease ${i * 150}ms`,
                  }}
                >
                  <div
                    className={`absolute left-[9px] top-1 w-[20px] h-[20px] rounded-full border-2 transition-all duration-300 hidden lg:block ${
                      i <= activeStep ? 'bg-[#0152ff] border-[#0152ff]' : 'bg-transparent border-white/20'
                    }`}
                  />
                  <span
                    className="text-[40px] text-[#0152ff]/15 leading-none block mb-2 select-none"
                    style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 800 }}
                  >
                    {step.num}
                  </span>
                  <h3
                    className="text-xl text-white mb-3"
                    style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 800 }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[15px] text-white/50 leading-[1.65] max-w-[480px]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
