import { useEffect, useState, useRef, useCallback } from 'react';
import { ChevronDown } from 'lucide-react';

const words = ['AI', 'is', 'now', 'part', 'of', 'the', 'pitch.', '|||', 'Is', 'it', 'part', 'of'];

export default function HeroSection() {
  const [on, setOn] = useState(false);
  const glowRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setOn(true), 200);
    return () => clearTimeout(t);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!glowRef.current || !sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    glowRef.current.style.transform = `translate(${x}px, ${y}px)`;
  }, []);

  const scrollToVsl = () => {
    document.getElementById('vsl-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const fade = (ms: number) => ({
    opacity: on ? 1 : 0,
    transform: on ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 500ms cubic-bezier(0.16,1,0.3,1) ${ms}ms, transform 500ms cubic-bezier(0.16,1,0.3,1) ${ms}ms`,
  });

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="min-h-screen bg-[#0a0f1e] grid-bg flex items-center justify-center px-6 relative overflow-hidden"
    >
      <div
        ref={glowRef}
        className="absolute inset-0 pointer-events-none transition-transform duration-[800ms] ease-out"
        style={{ background: 'radial-gradient(ellipse at 50% 40%, rgba(1,82,255,0.12) 0%, transparent 65%)' }}
      />

      <div className="max-w-[900px] mx-auto text-center relative z-10 pt-16">
        <div style={fade(0)}>
          <span className="inline-block font-dm text-[11px] uppercase tracking-[0.18em] text-electric bg-electric/[0.15] border border-electric/30 rounded-full px-4 py-1.5 mb-8">
            Agency Partnerships
          </span>
        </div>

        <h1 className="font-headline text-[40px] sm:text-[56px] lg:text-[72px] xl:text-[80px] text-white leading-[1.05] mb-6">
          {words.map((w, i) =>
            w === '|||' ? (
              <br key={i} className="hidden sm:block" />
            ) : (
              <span
                key={i}
                className="inline-block mr-[0.25em]"
                style={{
                  opacity: on ? 1 : 0,
                  transform: on ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 400ms cubic-bezier(0.16,1,0.3,1) ${i * 60}ms, transform 400ms cubic-bezier(0.16,1,0.3,1) ${i * 60}ms`,
                }}
              >
                {w}
              </span>
            )
          )}
          <span
            className="inline-block"
            style={{
              color: '#0152ff',
              opacity: on ? 1 : 0,
              transform: on ? 'translateY(0)' : 'translateY(20px)',
              transition: `opacity 400ms cubic-bezier(0.16,1,0.3,1) ${words.length * 60}ms, transform 400ms cubic-bezier(0.16,1,0.3,1) ${words.length * 60}ms`,
            }}
          >
            yours?
          </span>
        </h1>

        <p className="font-dm text-lg sm:text-xl text-white/60 max-w-[560px] mx-auto mb-10 leading-[1.75]" style={fade(900)}>
          Agencies adding AI to their offer are winning more clients, retaining them longer, and charging more. We make that possible without you building anything.
        </p>

        <div style={fade(1050)}>
          <button
            onClick={scrollToVsl}
            className="bg-electric text-white font-bold text-base px-12 py-4 rounded-full hover:scale-[1.03] hover:brightness-110 hover:shadow-[0_0_40px_rgba(1,82,255,0.6)] transition-all duration-200"
          >
            Watch the Breakdown. Seriously watch it!
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-pulse-down" style={fade(1350)}>
        <ChevronDown className="w-5 h-5 text-white/30" />
      </div>
    </section>
  );
}
