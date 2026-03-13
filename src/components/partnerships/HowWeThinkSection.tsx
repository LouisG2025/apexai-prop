import { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const cards = [
  {
    word: 'ROI',
    title: 'ROI First',
    lines: [
      'Every system we build starts with one question. What is the measurable return.',
      'We do not build for the sake of building. We build because the outcome justifies it.',
      'If the ROI case is not clear before we start, we say so.',
    ],
  },
  {
    word: 'Strategy',
    title: 'Strategic Thinking',
    lines: [
      'Automation without strategy is just chasing trends.',
      'Before we plan even one part of architecture, we understand the business, the market, the sales process, and where the real leverage is.',
      'Then we build.',
    ],
  },
  {
    word: 'Craft',
    title: 'Creative Execution',
    lines: [
      'The best systems are not just functional. They are designed.',
      'The way a lead is handled, the tone of an AI agent, the flow of a pipeline. These things affect how a business is perceived.',
      'We bring creative thinking to every build, not just technical delivery.',
    ],
  },
];

export default function HowWeThinkSection() {
  const ref = useScrollReveal(120);
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const handleTap = (i: number) => {
    setFlippedIndex(flippedIndex === i ? null : i);
  };

  return (
    <section className="bg-[#0a0f1e] py-28 lg:py-36 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <p className="reveal-hidden font-dm text-[11px] uppercase tracking-[0.18em] text-white/40 mb-3">
          Our Approach
        </p>
        <h2 className="reveal-hidden font-headline text-[32px] sm:text-[40px] lg:text-[52px] text-white leading-[1.1] mb-16 max-w-2xl">
          We are not just builders. We are thinkers.
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`reveal-hidden flip-card cursor-pointer ${flippedIndex === i ? 'flipped' : ''}`}
              style={{ minHeight: 280 }}
              onClick={() => handleTap(i)}
            >
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <span className="font-headline text-[64px] lg:text-[72px] text-white leading-none">
                    {card.word}
                  </span>
                  <span className="font-dm text-[11px] text-white/20 tracking-[0.15em] uppercase mt-4">
                    Hover to flip
                  </span>
                </div>
                <div className="flip-card-back text-center">
                  <h3 className="font-headline text-xl text-white mb-5">
                    {card.title}
                  </h3>
                  {card.lines.map((line, j) => (
                    <p key={j} className="font-dm text-[15px] text-white/85 leading-[1.65] mb-2">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="reveal-hidden font-headline text-[22px] lg:text-[24px] text-electric text-center mt-16">
          We do not want clients. We want long term growth partnerships.
        </p>
      </div>
    </section>
  );
}
