import { useState, useEffect } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const cards = [
  {
    line1: 'ROI',
    line2: 'Focused',
    title: 'ROI First',
    body: 'Every system starts with one question. What is the measurable return. If the ROI case is not clear before we start, we say so.',
  },
  {
    line1: 'Strategic',
    line2: 'Thinking',
    title: 'Strategic Thinking',
    body: 'Automation without strategy is just chasing trends. We understand the business, the market and the goals first. Then we design.',
  },
  {
    line1: 'Creative',
    line2: 'Execution',
    title: 'Creative Execution',
    body: 'We strategise, plan and design creatively, thinking different, spotting opportunities others would miss and seeing gaps to help gain an edge.',
  },
];

export default function HowWeThinkSection() {
  const ref = useScrollReveal(120);
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const handleTap = (i: number) => {
    setFlippedIndex(flippedIndex === i ? null : i);
  };

  return (
    <section id="approach" className="bg-[#0a0f1e] py-16 md:py-28 lg:py-36 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <p className="reveal-hidden text-[11px] uppercase tracking-[0.18em] text-white/40 mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Our Approach
        </p>
        <h2
          className="reveal-hidden text-[32px] sm:text-[40px] lg:text-[52px] text-white leading-[1.1] mb-16 max-w-2xl"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 800 }}
        >
          We are not just builders. We are thinkers.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`reveal-hidden flip-card cursor-pointer ${flippedIndex === i ? 'flipped' : ''}`}
              style={{ minHeight: 280 }}
              onClick={() => handleTap(i)}
            >
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <span
                    className="text-[48px] md:text-[56px] lg:text-[64px] text-white leading-none"
                    style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 800 }}
                  >
                    {card.line1}
                  </span>
                  <span
                    className="text-[28px] md:text-[32px] lg:text-[36px] text-white/50 leading-none mt-1"
                    style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 700 }}
                  >
                    {card.line2}
                  </span>
                  <span className="text-[11px] text-white/20 tracking-[0.15em] uppercase mt-5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {isMobile ? 'Tap to flip' : 'Hover to flip'}
                  </span>
                </div>
                <div className="flip-card-back text-center">
                  <h3
                    className="text-xl text-white mb-4"
                    style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 800 }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-[15px] text-white/90 leading-[1.65]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {card.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p
          className="reveal-hidden text-[20px] md:text-[22px] lg:text-[24px] text-[#0152ff] text-center mt-16"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 800 }}
        >
          We don't want clients. We want long-term growth partnerships.
        </p>
      </div>
    </section>
  );
}
