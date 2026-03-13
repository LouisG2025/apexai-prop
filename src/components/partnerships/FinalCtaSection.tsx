import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function FinalCtaSection() {
  const ref = useScrollReveal();

  return (
    <section
      id="final-cta"
      className="bg-electric min-h-screen flex items-center justify-center px-6 py-28 relative overflow-hidden"
      ref={ref}
    >
      <div className="max-w-[800px] mx-auto text-center relative z-10">
        <h2 className="reveal-hidden font-headline text-[36px] sm:text-[48px] lg:text-[64px] text-white leading-[1.1] mb-6">
          The agencies growing fastest in 2026 are the ones moving{' '}
          <span style={{ color: '#0a0f1e' }}>now.</span>
        </h2>
        <p className="reveal-hidden font-dm text-lg sm:text-xl text-white/75 max-w-[520px] mx-auto mb-10 leading-[1.6]">
          This is a 30-minute call. No commitment. No pressure. Just a clear and honest look at how AI fits your agency and what it could be worth to you.
        </p>
        <div className="reveal-hidden">
          <button className="bg-white text-electric font-bold text-base px-12 py-4 rounded-full hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)] transition-all duration-200 mb-8">
            Book a Strategy Call
          </button>
          <p className="font-dm text-[12px] text-white/50 tracking-[0.15em] uppercase">
            Above-Market Commission &middot; White Label Available
          </p>
        </div>
      </div>
    </section>
  );
}
