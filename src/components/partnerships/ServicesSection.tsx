import { useScrollReveal } from '../../hooks/useScrollReveal';

const services = [
  {
    title: 'AI Sales Agents',
    body: 'Every inbound lead responded to in seconds, qualified through conversation, and booked into the calendar. No humans required, no leads missed.',
    price: 'From \u00A32,000 per channel',
  },
  {
    title: 'Voice AI Qualification',
    body: 'Urgently re-engages leads that have gone cold before they disappear for good. Quick comedic calls, to catch, qualify, and log every chat, recovering pipeline that would otherwise be lost. Other voice AI services available on request (we typically avoid it).',
    price: 'From \u00A3500',
  },
  {
    title: "Intelligent CRM's",
    body: "Pipeline design, lead scoring, post-call automation, and live dashboards built around how your client's sales team actually works.",
    price: 'From \u00A32,500',
  },
  {
    title: 'AI Lead Generation',
    body: 'Cold email infrastructure, LinkedIn outbound, and lead enrichment built and managed by us. Booked meetings arrive in the calendar.',
    price: 'From \u00A31,500/mo management retainer',
  },
  {
    title: 'Database Reactivation',
    body: "Revenue sitting dormant in your client's CRM. Intelligent multi-channel sequences that wake it up. Results visible within 48 hours.",
    price: 'Performance-based',
  },
  {
    title: 'Pipeline Automation',
    body: 'Every stage of the sales pipeline automated. Follow-ups triggered, tasks assigned, deals moved forward without manual input.',
    price: 'From \u00A31,000',
  },
  {
    title: 'Sales Intelligence D/A',
    body: 'Every bit of data analysed, every pattern surfaced, every blind spot exposed. Objection trends, deal velocity, conversion rates by source, and pipeline health delivered automatically to whoever needs to see it. Turning lost or messy data into clarity.',
    price: 'From \u00A32,000 for set up',
  },
  {
    title: 'Lead Enrichment',
    body: 'Every lead automatically researched and scored before contact. Company size, decision maker details, buying intent signals, and contact data appended in real time. Know your leads before you speak to them.',
    price: 'From \u00A3500',
  },
  {
    title: 'Lead Scraping and Database Building',
    body: 'Targeted prospect lists built from multiple sources. Filtered by buying signals, industry, company size, and job title. Clean, verified, and ready to contact.',
    price: 'From \u00A330',
  },
];

const bespokeUseCases = [
  'Automated proposal generation',
  'Contract and e-signature workflows',
  'Sales call reviews and analysis',
  'Objection pattern reporting',
  'Competitor monitoring alerts',
  'Client onboarding sequences',
  'Automated invoice chasing',
  'Review and reputation management',
  'Social proof collection',
  'Client performance reporting',
  'Lead qualification scoring',
  'Intelligent reminder sequences',
  'Churn prediction alerts',
  'Lapsed customer reactivation',
  'AI receptionists and call handling',
  'Post-purchase upsell triggers',
  'NPS and feedback automation',
  'Internal knowledge base AI',
  'Meeting prep automation',
  'Meeting transcription',
  'Custom dashboard and app development',
];

export default function ServicesSection() {
  const ref = useScrollReveal();

  return (
    <section className="bg-[#0a0f1e] py-28 lg:py-36 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <p className="reveal-hidden font-dm text-[11px] uppercase tracking-[0.18em] text-white/40 mb-3">
          What We Offer Alongside Agencies
        </p>
        <h2 className="reveal-hidden font-headline text-[32px] sm:text-[40px] lg:text-[52px] text-white leading-[1.1] mb-4 max-w-2xl">
          Everything we bring to your clients.
        </h2>
        <p className="reveal-hidden font-dm text-[17px] text-white/50 mb-16 max-w-[560px] leading-[1.75]">
          You make the introduction. We strategise, build, and deliver. You take the commission.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="reveal-hidden bg-[#111827] border border-white/[0.06] rounded-2xl p-8 flex flex-col hover:-translate-y-1.5 hover:scale-[1.01] hover:shadow-[0_20px_48px_rgba(1,82,255,0.15)] hover:border-electric/30 transition-all duration-[250ms]"
              style={{ transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }}
            >
              <h3 className="font-headline text-[18px] text-white mb-3">
                {s.title}
              </h3>
              <p className="font-dm text-[14px] text-white/50 leading-[1.65] mb-6 flex-1">
                {s.body}
              </p>
              <p className="font-mono text-[13px] text-electric mt-auto">
                {s.price}
              </p>
            </div>
          ))}
        </div>

        <div className="reveal-hidden bg-[#111827] border border-white/[0.06] rounded-2xl p-8 lg:p-10">
          <h3 className="font-headline text-xl text-white mb-3">
            Bespoke Automation Builds
          </h3>
          <p className="font-dm text-[15px] text-white/50 leading-[1.75] max-w-[640px] mb-3">
            Not everything fits a standard package. If your client has a specific workflow, a unique process, or a problem that does not fit neatly into a category, we scope and build it from scratch.
          </p>
          <p className="font-dm text-[15px] text-white/50 leading-[1.75] max-w-[640px] mb-8">
            Every build starts with a conversation about what the outcome needs to be, not what the technology can do. We work backwards from the result.
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {bespokeUseCases.map((uc, i) => (
              <span
                key={i}
                className="inline-block font-dm text-[13px] text-electric bg-electric/10 rounded-[20px] px-4 py-1.5"
              >
                {uc}
              </span>
            ))}
          </div>

          <p className="font-mono text-[13px] text-electric mb-2">
            Bespoke solutions start at &pound;500. Scoped individually based on use case.
          </p>
          <p className="font-dm text-[15px] text-white/35">
            If you can describe the problem, we can build the solution.
          </p>
        </div>
      </div>
    </section>
  );
}
