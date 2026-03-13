import { useEffect } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function FinalCtaSection() {
  const ref = useScrollReveal();

  useEffect(() => {
    const check = setInterval(() => {
      const iframe = document.querySelector('.calendly-inline-widget iframe');
      const fallback = document.getElementById('calendly-fallback');
      if (iframe && fallback && (iframe as HTMLIFrameElement).getBoundingClientRect().height > 100) {
        fallback.style.opacity = '0';
        fallback.style.transition = 'opacity 0.4s ease';
        fallback.style.pointerEvents = 'none';
        clearInterval(check);
      }
    }, 500);
    return () => clearInterval(check);
  }, []);

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="book"
      className="bg-[#0152ff] px-6 py-16 md:py-28 lg:py-36 relative overflow-hidden"
      ref={ref}
    >
      <div className="max-w-[800px] mx-auto text-center relative z-10">
        <h2
          className="reveal-hidden text-white leading-[1.1] mb-4"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 800, fontSize: 'clamp(28px, 7vw, 64px)' }}
        >
          The agencies growing fastest in 2026 are{' '}
          <span style={{ color: '#0a0f1e' }}>the ones adopting AI.</span>
        </h2>
        <p
          className="reveal-hidden text-base md:text-lg sm:text-xl text-white/80 mb-4"
          style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
        >
          Disagree and face the consequences.
        </p>
        <p className="reveal-hidden text-[15px] md:text-[16px] text-white/70 max-w-[520px] mx-auto mb-10 leading-[1.6]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          This is a 30-minute call. No commitment. No pressure. Just a clear chat to see if your agency could be a fit to work with us.
        </p>
        <div className="reveal-hidden">
          <button
            onClick={scrollToBooking}
            className="w-full md:w-auto bg-white text-[#0152ff] text-base px-12 py-4 rounded-full hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)] transition-all duration-200"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}
          >
            Book a Partnership Discovery Call
          </button>
        </div>
      </div>

      <div id="booking" className="mt-16 md:mt-20" style={{ scrollMarginTop: 'calc(50vh - 200px)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', borderRadius: '16px', overflow: 'hidden', background: '#0A0F1E', border: '1px solid rgba(255,255,255,0.05)', position: 'relative', minHeight: '700px' }}>
          <div className="calendly-inline-widget" data-url="https://calendly.com/_apexai/partnerships-call?hide_gdpr_banner=1&background_color=0a0f1e&text_color=ffffff&primary_color=0152ff" style={{ minWidth: '320px', height: '700px', width: '100%', position: 'relative', zIndex: 1 }} />
          <div id="calendly-fallback" style={{ position: 'absolute', inset: 0, zIndex: 2, background: '#0A0F1E', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '24px', borderRadius: '16px' }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>PARTNERSHIPS DISCOVERY CALL</p>
            <p style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 800, fontSize: '28px', color: '#ffffff' }}>30 minutes with Louis Grange</p>
            <button onClick={() => window.open('https://calendly.com/_apexai/partnerships-call', '_blank')} style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: '16px', color: '#0A0F1E', background: '#ffffff', border: 'none', borderRadius: '9999px', padding: '14px 40px', cursor: 'pointer' }}>Open Calendar</button>
          </div>
        </div>
      </div>
    </section>
  );
}
