import { useEffect, useState, useRef } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useCurrency } from '../../context/CurrencyContext';
import type { CurrencyCode } from '../../context/CurrencyContext';

const navLinks = [
  { label: 'Our Approach', href: '#approach' },
  { label: 'The Difference', href: '#difference' },
  { label: 'Services', href: '#services' },
  { label: 'Partnership', href: '#partnership' },
  { label: 'After5', href: '#after5' },
  { label: 'How It Works', href: '#process' },
];

const currencyLabels: Record<CurrencyCode, string> = {
  GBP: 'GBP (\u00A3)',
  USD: 'USD ($)',
  EUR: 'EUR (\u20AC)',
  AUD: 'AUD (A$)',
  AED: 'AED (\u062F.\u0625)',
  MYR: 'MYR (RM)',
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currency, setCurrency, allCurrencies } = useCurrency();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setCurrencyOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out px-6 md:px-12"
        style={{
          paddingTop: 16,
          paddingBottom: 16,
          background: scrolled || mobileMenuOpen ? 'rgba(10,15,30,0.85)' : 'transparent',
          backdropFilter: scrolled || mobileMenuOpen ? 'blur(20px) saturate(180%)' : 'none',
          WebkitBackdropFilter: scrolled || mobileMenuOpen ? 'blur(20px) saturate(180%)' : 'none',
          borderBottom: scrolled || mobileMenuOpen ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <img
            src="/white_ApexAI_logo.png"
            alt="ApexAI"
            className="h-6 md:h-8 w-auto cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
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

          {/* Desktop CTA & Currency */}
          <div className="hidden md:flex items-center gap-3">
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setCurrencyOpen(!currencyOpen)}
                className="flex items-center gap-1.5 text-white/60 hover:text-white border border-white/10 rounded-full px-3 py-1.5 transition-colors duration-200"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 500 }}
              >
                {currency}
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${currencyOpen ? 'rotate-180' : ''}`} />
              </button>
              {currencyOpen && (
                <div className="absolute top-full right-0 mt-2 bg-[#111827] border border-white/10 rounded-xl overflow-hidden shadow-2xl min-w-[140px]">
                  {allCurrencies.map((c) => (
                    <button
                      key={c}
                      onClick={() => { setCurrency(c); setCurrencyOpen(false); }}
                      className={`w-full text-left px-4 py-2.5 text-[13px] transition-colors duration-150 ${c === currency ? 'text-[#0152ff] bg-[#0152ff]/10' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
                      style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
                    >
                      {currencyLabels[c]}
                    </button>
                  ))}
                </div>
              )}
            </div>

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
              Book a Call
            </button>
          </div>

          {/* Mobile Toggle & CTA */}
          <div className="flex md:hidden items-center gap-4">
            <button
              onClick={() => handleNav('#book')}
              className="bg-[#0152ff] text-white text-[12px] font-bold px-4 py-2 rounded-full active:scale-95 transition-all"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Book a Call
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-1"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-[#0a0f1e]/95 backdrop-blur-xl md:hidden transition-all duration-500 ease-in-out ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}
      >
        <div className="flex flex-col h-full pt-32 px-6 pb-12">
          <div className="flex flex-col gap-6">
            {navLinks.map((link, i) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`text-left text-2xl font-bold text-white/90 hover:text-white transition-all ${mobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}
                style={{ 
                  fontFamily: "'Cabinet Grotesk', sans-serif",
                  transitionDelay: `${i * 50}ms`
                }}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="mt-auto pt-10 border-t border-white/10">
            <p className="text-[11px] uppercase tracking-widest text-white/40 mb-4 font-bold">Change Currency</p>
            <div className="grid grid-cols-2 gap-3">
              {allCurrencies.map((c) => (
                <button
                  key={c}
                  onClick={() => { setCurrency(c); setMobileMenuOpen(false); }}
                  className={`px-4 py-3 rounded-xl border text-sm font-medium transition-all ${c === currency ? 'bg-[#0152ff] border-[#0152ff] text-white' : 'bg-white/5 border-white/10 text-white/60'}`}
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {currencyLabels[c]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
