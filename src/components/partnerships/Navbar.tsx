import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToFinalCta = () => {
    document.getElementById('final-cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-[250ms] ease-out h-16 ${
        scrolled
          ? 'border-b border-white/[0.08]'
          : 'bg-transparent border-b border-transparent'
      }`}
      style={scrolled ? { background: 'rgba(10, 15, 30, 0.7)', backdropFilter: 'blur(20px) saturate(180%)' } : undefined}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-full">
        <img
          src="/white_ApexAI_logo.png"
          alt="ApexAI"
          className="h-6 lg:h-7 w-auto"
        />
        <button
          onClick={scrollToFinalCta}
          className="bg-electric text-white font-bold text-sm px-6 py-2.5 rounded-full hover:brightness-110 hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(1,82,255,0.4)] transition-all duration-200"
        >
          Book a Strategy Call
        </button>
      </div>
    </nav>
  );
}
