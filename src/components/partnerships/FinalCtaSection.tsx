import { useEffect } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function FinalCtaSection() {
  const ref = useScrollReveal();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section
      id="book"
      className="bg-[#0152ff] px-6 py-16 md:py-28 lg:py-36 relative overflow-hidden"
      ref={ref}
    >
      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-400 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white blur-[120px] rounded-full" />
      </div>

      <div className="max-w-[1240px] mx-auto text-center relative z-10">
        <h2
          className="reveal-hidden text-white leading-[1.1] mb-6"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 800, fontSize: 'clamp(32px, 8vw, 72px)' }}
        >
          The agencies growing fastest in 2026 are{' '}
          <span className="bg-[#0a0f1e] text-white px-6 py-2 inline-block -rotate-1 shadow-2xl">the ones adopting AI.</span>
        </h2>
        <p
          className="reveal-hidden text-lg md:text-xl text-white/90 mb-6"
          style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
        >
          Disagree and face the consequences.
        </p>
        <p className="reveal-hidden text-[16px] md:text-[17px] text-white/80 max-w-[640px] mx-auto mb-10 leading-[1.8]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          This is a 30-minute call. No commitment. No pressure. Just a clear chat to see if your agency could be a fit to work with us.
        </p>
        <div className="reveal-hidden mb-20">
          <button
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            className="w-full md:w-auto bg-white text-[#0152ff] text-base px-16 py-5 rounded-full hover:scale-[1.03] hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)] transition-all duration-300 active:scale-95"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}
          >
            Book a Partnership Discovery Call
          </button>
        </div>

        <div
          id="booking"
          className="reveal-hidden overflow-hidden"
          style={{
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto',
            minHeight: '700px',
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '16px',
            boxShadow: '0 50px 100px -20px rgba(0, 0, 0, 0.3)',
            scrollMarginTop: '100px',
          }}
        >
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/_apexai/partnerships-call?hide_gdpr_banner=1&background_color=ffffff&text_color=0a0f1e&primary_color=0152ff" 
            style={{ width: '100%', height: '700px', border: 'none' }} 
          />
        </div>
      </div>
    </section>
  );
}
