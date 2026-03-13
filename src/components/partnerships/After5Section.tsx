import { MessageCircle, Mail, MessageSquare, Phone } from 'lucide-react';
import { useScrollReveal, useCountUp } from '../../hooks/useScrollReveal';

const channels = [
  {
    icon: MessageCircle,
    title: 'WhatsApp Agent',
    body: 'The highest engagement channel. Responds, qualifies, and books meetings inside the same thread.',
    price: 'From \u00A32,000',
  },
  {
    icon: Mail,
    title: 'Email Agent',
    body: 'Every inbound email read and replied to within seconds. Built for paid ad and website enquiry flows.',
    price: 'From \u00A32,000',
  },
  {
    icon: MessageSquare,
    title: 'SMS Agent',
    body: 'The fallback channel that catches everyone else. 98 percent open rate.',
    price: 'From \u00A32,000',
  },
  {
    icon: Phone,
    title: 'Voice AI Qualification',
    body: 'Outbound AI calls that qualify leads and log everything to the CRM. Human-like. Automatic.',
    price: 'From \u00A3500',
  },
];

export default function After5Section() {
  const ref = useScrollReveal();
  const stat = useCountUp(391);

  return (
    <section className="bg-[#0a0f1e] py-16 lg:py-24 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#111827] rounded-3xl p-10 sm:p-14 lg:px-20 lg:py-[72px] overflow-hidden relative">
          <p className="reveal-hidden font-dm text-[11px] uppercase tracking-[0.25em] text-after5 mb-6">
            Part of the ApexAI Family
          </p>

          <h2 className="reveal-hidden font-headline text-[28px] sm:text-[36px] text-white mb-4">
            After5 Digital
          </h2>
          <div className="reveal-hidden max-w-[560px] mb-8">
            <p className="font-dm text-[17px] text-white/60 leading-[1.65] mb-1">
              After5 is our AI sales agent company.
            </p>
            <p className="font-dm text-[17px] text-white/60 leading-[1.65] mb-1">
              Built for one specific problem. Leads that arrive when nobody is watching.
            </p>
            <p className="font-dm text-[17px] text-white/60 leading-[1.65]">
              After hours. Weekends. Bank holidays. Every enquiry gets captured, qualified, and booked. 24/7.
            </p>
          </div>

          <div
            ref={stat.ref}
            className="reveal-hidden border-l-[3px] border-after5 bg-after5/[0.05] rounded-lg px-6 py-5 max-w-[600px] mb-14"
          >
            <p className="font-headline text-[32px] text-after5 leading-none mb-2">
              {stat.value}% <span className="font-dm text-[15px] text-white/50 font-normal">increase in conversion</span>
            </p>
            <p className="font-dm text-[14px] text-white/40 leading-[1.6]">
              when a lead is responded to within one minute. After5 makes that the default for every client we work with.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
            {channels.map((c, i) => {
              const Icon = c.icon;
              return (
                <div
                  key={i}
                  className="reveal-hidden bg-white/5 border border-after5/20 rounded-2xl p-7 hover:border-after5 hover:bg-after5/[0.06] hover:-translate-y-1.5 hover:scale-[1.01] hover:shadow-[0_20px_48px_rgba(46,255,161,0.1)] transition-all duration-[250ms]"
                  style={{ transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }}
                >
                  <div className="w-10 h-10 rounded-[10px] bg-after5/[0.15] flex items-center justify-center mb-5">
                    <Icon className="w-[18px] h-[18px] text-after5" strokeWidth={2} />
                  </div>
                  <h3 className="font-headline text-[17px] text-white mb-2.5">
                    {c.title}
                  </h3>
                  <p className="font-dm text-[13px] text-white/50 leading-[1.65] mb-5">
                    {c.body}
                  </p>
                  <p className="font-mono text-after5 text-[15px] font-medium">
                    {c.price}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="reveal-hidden flex flex-col sm:flex-row items-center gap-4 justify-center">
            <a
              href="https://www.after5.digital"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-after5 text-navy font-bold text-sm px-9 py-3.5 rounded-full hover:brightness-[1.08] hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(46,255,161,0.4)] transition-all duration-200"
            >
              Visit After5 Digital
            </a>
            <a
              href="https://www.after5.digital/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-after5 text-after5 font-semibold text-sm px-9 py-3.5 rounded-full bg-transparent hover:bg-after5/[0.08] transition-all duration-200"
            >
              Try the Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
