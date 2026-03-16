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
    <section id="process" ref={sectionRef} className="bg-[#0a0f1e] py-16 md:py-28 lg:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="md:grid md:grid-cols-[300px_1fr] lg:grid-cols-[400px_1fr] md:gap-16 lg:gap-24 items-start">
          <div className="md:sticky md:top-32 md:self-start h-fit mb-12 md:mb-0">
            <p
              className={`text-[11px] uppercase tracking-[0.18em] text-white/40 mb-3 transition-all duration-600 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}`}
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              How It Works
            </p>
            <h2
              className={`text-[32px] sm:text-[40px] lg:text-[48px] text-white leading-[1.1] transition-all duration-600 delay-100 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}`}
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 800 }}
            >
              You introduce.<br />We deliver.<br />Partnered.
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-[13px] top-4 bottom-4 w-[1px] bg-white/[0.04] hidden md:block" />

            <div className="space-y-12 md:space-y-20 lg:space-y-28">
              {steps.map((step, i) => (
                <div
                  key={i}
                  ref={(el) => { stepRefs.current[i] = el; }}
                  className="relative md:pl-16 group"
                >
                  {/* Step Indicator */}
                  <div
                    className={`absolute left-[5px] top-1.5 w-[18px] h-[18px] rounded-full border-2 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hidden md:block z-10 ${
                      i <= activeStep 
                        ? 'bg-[#0152ff] border-[#0152ff] shadow-[0_0_15px_rgba(1,82,255,0.5)] scale-110' 
                        : 'bg-[#0a0f1e] border-white/10 scale-100'
                    }`}
                  />
                  
                  {/* Step Content */}
                  <div 
                    className="transition-all duration-700 ease-out"
                    style={{
                      opacity: revealed ? 1 : 0,
                      transform: revealed ? 'translateY(0)' : 'translateY(30px)',
                      transitionDelay: `${i * 150}ms`
                    }}
                  >
                    <span
                      className={`text-[50px] md:text-[80px] leading-none block mb-4 select-none transition-all duration-1000 ${i === activeStep ? 'text-[#0152ff]/15 scale-105' : 'text-white/[0.03] scale-100'}`}
                      style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 900 }}
                    >
                      {step.num}
                    </span>
                    <h3
                      className={`text-xl md:text-2xl transition-all duration-500 mb-4 ${i === activeStep ? 'text-white' : 'text-white/40'}`}
                      style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 800 }}
                    >
                      {step.title}
                    </h3>
                    <p className={`text-[15px] md:text-[16px] leading-[1.75] max-w-[540px] transition-all duration-500 ${i === activeStep ? 'text-white/70' : 'text-white/20'}`} style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
