import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Our Approach', href: '#approach' },
  { label: 'The Difference', href: '#difference' },
  { label: 'Services', href: '#services' },
  { label: 'Partnership', href: '#partnership' },
  { label: 'After5', href: '#after5' },
  { label: 'How It Works', href: '#process' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out"
        style={{
          padding: '16px 48px',
          background: scrolled ? 'rgba(10,15,30,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <img
            src="/main_short_whtie_logo_(4).webp"
            alt="ApexAI"
            className="h-7 w-auto"
          />

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="nav-underline text-white/70 hover:text-white transition-colors duration-200"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500 }}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => handleNav('#book')}
              className="bg-[#0152ff] text-white rounded-full hover:brightness-110 hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(1,82,255,0.4)] transition-all duration-200"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14,
                fontWeight: 600,
                padding: '10px 24px',
              }}
            >
              Book a Strategy Call
            </button>

            <button
              className="lg:hidden text-white"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-[#0a0f1e] flex flex-col items-center justify-center">
          <button
            className="absolute top-6 right-6 text-white"
            onClick={() => setMobileOpen(false)}
          >
            <X className="w-7 h-7" />
          </button>

          <div className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-white text-2xl"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 800 }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav('#book')}
              className="mt-4 bg-[#0152ff] text-white rounded-full px-8 py-3 text-lg"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}
            >
              Book a Strategy Call
            </button>
          </div>
        </div>
      )}
    </>
  );
}
