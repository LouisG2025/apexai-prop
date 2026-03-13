import { useScrollReveal } from '../../hooks/useScrollReveal';

const barStyle = (width: string) => ({
  width,
  height: '14px',
  borderRadius: '6px',
  background: 'rgba(255,255,255,0.03)',
});

const circleStyle = {
  width: '28px',
  height: '28px',
  borderRadius: '50%',
  background: 'rgba(255,255,255,0.03)',
};

function BookingCard() {
  return (
    <div
      style={{
        position: 'relative',
        background: '#0A0F1E',
        border: '1px solid rgba(255,255,255,0.05)',
        borderRadius: '24px',
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '64px',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
        }}
      >
        <div style={{ display: 'flex', gap: '48px', alignItems: 'flex-start', opacity: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ width: '200px', height: '160px', borderRadius: '12px', background: 'rgba(255,255,255,0.03)' }} />
            <div style={barStyle('180px')} />
            <div style={barStyle('140px')} />
            <div style={barStyle('160px')} />
            <div style={barStyle('120px')} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={barStyle('200px')} />
              <div style={barStyle('160px')} />
              <div style={barStyle('120px')} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 28px)', gap: '10px' }}>
              {Array.from({ length: 35 }).map((_, i) => (
                <div key={i} style={circleStyle} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          gap: '20px',
          minHeight: '260px',
        }}
      >
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '13px',
            color: 'rgba(255,255,255,0.35)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            fontWeight: 500,
          }}
        >
          Partnerships Discovery Call
        </p>
        <h3
          style={{
            fontFamily: "'Cabinet Grotesk', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(24px, 4vw, 36px)',
            color: '#ffffff',
            lineHeight: 1.2,
            margin: 0,
          }}
        >
          30 minutes with Louis Grange
        </h3>
        <button
          onClick={() => window.open('https://calendly.com/_apexai/partnerships-call', '_blank')}
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 700,
            fontSize: '16px',
            color: '#0A0F1E',
            background: '#ffffff',
            border: 'none',
            borderRadius: '9999px',
            padding: '16px 48px',
            cursor: 'pointer',
            marginTop: '8px',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.03)';
            e.currentTarget.style.boxShadow = '0 0 40px rgba(255,255,255,0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          Book a Call
        </button>
      </div>
    </div>
  );
}

export default function FinalCtaSection() {
  const ref = useScrollReveal();

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
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
            className="w-full md:w-auto bg-white text-[#0152ff] text-base px-12 py-4 rounded-full hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)] transition-all duration-200"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}
          >
            Book a Partnership Discovery Call
          </button>
        </div>
      </div>

      <div id="booking" className="mt-16 md:mt-20" style={{ scrollMarginTop: 'calc(50vh - 200px)' }}>
        <BookingCard />
      </div>
    </section>
  );
}
