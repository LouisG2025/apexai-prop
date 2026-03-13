import { useScrollReveal, useCountUp } from '../../hooks/useScrollReveal';

export default function PartnershipSection() {
  const ref = useScrollReveal();
  const counter = useCountUp(15);

  return (
    <section id="partnership" className="bg-[#0a0f1e] py-16 lg:py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className="bg-[#111827] rounded-3xl border border-white/[0.05] p-10 sm:p-14 lg:px-20 lg:py-16">
          <p className="reveal-hidden text-[11px] uppercase tracking-[0.18em] text-white/40 mb-10" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            The Partnership
          </p>

          <h2
            className="reveal-hidden text-[32px] sm:text-[40px] lg:text-[48px] text-white leading-[1.1] mb-10"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 800 }}
          >
            How it works between us.
          </h2>

          <div ref={counter.ref} className="reveal-hidden text-center mb-10">
            <span
              className="text-[100px] lg:text-[140px] text-[#0152ff] leading-none"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 800 }}
            >
              {counter.value}%
            </span>
            <p className="text-[17px] text-white/50 mt-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              commission on every build. Retainers too, where agreed.
            </p>
          </div>

          <div className="space-y-8 max-w-[640px] mx-auto mb-0">
            <p className="reveal-hidden text-[16px] text-white/60 leading-[1.75]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              You pitch AI as part of your offer. When a client is interested, you introduce us.
            </p>
            <p className="reveal-hidden text-[16px] text-white/60 leading-[1.75]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              We jump on a strategy call with the client, design the solution, build it, and deliver it. Your name stays on the relationship. Ours stays behind the scenes.
            </p>
            <p className="reveal-hidden text-[16px] text-white/60 leading-[1.75]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              You earn on every project. No overhead. No technical questions to answer. No delivery to manage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
