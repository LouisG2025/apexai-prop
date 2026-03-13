import { useState } from 'react';
import { Plus } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const faqs = [
  {
    q: 'How long does it take to get started?',
    a: 'Most projects go from strategy call to live system within 2 to 4 weeks. Some simpler builds are done in days.',
  },
  {
    q: 'Do my clients know about the partnership?',
    a: 'That is up to you. Some agencies introduce us as their AI partner. Others prefer we stay behind the scenes. Either works.',
  },
  {
    q: 'What if a client needs something not on your services list?',
    a: 'We scope bespoke builds all the time. If you can describe the problem, we will figure out the solution.',
  },
  {
    q: 'How does the 15% commission work?',
    a: 'You earn 15% of the build value, confirmed before we start. Where there is an ongoing retainer, you earn on that too. Paid on completion, no chasing required.',
  },
  {
    q: 'What happens if something goes wrong with a build?',
    a: 'We own delivery. If something breaks, we fix it. Your client calls us, not you.',
  },
  {
    q: 'Can we trial this with one client first?',
    a: 'Absolutely. Most partnerships start with a single referral. No minimum commitment.',
  },
];

export default function FaqSection() {
  const ref = useScrollReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#0a0f1e] py-28 lg:py-36 px-6" ref={ref}>
      <div className="max-w-[640px] mx-auto">
        <p className="reveal-hidden text-[11px] uppercase tracking-[0.18em] text-white/40 mb-3 text-center" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          FAQ
        </p>
        <h2
          className="reveal-hidden text-[32px] sm:text-[40px] lg:text-[48px] text-white leading-[1.1] mb-14 text-center"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 800 }}
        >
          Got questions? Here are the obvious ones.
        </h2>

        <div className="space-y-0">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="reveal-hidden border-b border-white/[0.06]">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left group"
                >
                  <span
                    className="text-[16px] text-white group-hover:text-white/80 transition-colors pr-4"
                    style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
                  >
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full border border-white/20 flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'rotate-45 border-[#0152ff] bg-[#0152ff]/10' : ''}`}
                  >
                    <Plus className={`w-4 h-4 transition-colors ${isOpen ? 'text-[#0152ff]' : 'text-white/40'}`} strokeWidth={2} />
                  </div>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: isOpen ? 200 : 0, opacity: isOpen ? 1 : 0 }}
                >
                  <p className="text-[15px] text-white/50 leading-[1.7] pb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
