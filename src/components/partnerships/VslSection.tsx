import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function VslSection() {
  const ref = useScrollReveal();

  const scrollToFinalCta = () => {
    document.getElementById('final-cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="vsl-section" className="relative z-20 -mt-[120px] pb-24 lg:pb-32 px-6" ref={ref}>
      <div className="max-w-[900px] mx-auto pt-0">
        <p className="reveal-hidden font-dm text-[11px] uppercase tracking-[0.18em] text-white/40 mb-3 text-center">
          Watch Here
        </p>
        <h2 className="reveal-hidden font-headline text-[24px] sm:text-[32px] text-white leading-[1.15] mb-8 text-center max-w-[640px] mx-auto">
          The agency landscape has changed. Here is what that means for you.
        </h2>

        <div
          className="reveal-hidden relative w-full rounded-2xl border border-white/[0.08] overflow-hidden"
          style={{
            aspectRatio: '16/9',
            background: '#111827',
            boxShadow: '0 32px 80px rgba(0,0,0,0.6)',
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-mono text-sm text-white/30">VSL GOES HERE</span>
          </div>
        </div>

        <p className="reveal-hidden font-dm text-[13px] text-white/35 text-center mt-4 mb-8">
          4 min
        </p>

        <div className="reveal-hidden text-center">
          <button
            onClick={scrollToFinalCta}
            className="bg-electric text-white font-bold text-base px-10 py-4 rounded-full hover:scale-[1.03] hover:brightness-110 hover:shadow-[0_0_40px_rgba(1,82,255,0.6)] transition-all duration-200"
          >
            Book a Free Strategy Call
          </button>
        </div>
      </div>
    </section>
  );
}
