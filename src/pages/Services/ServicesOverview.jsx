import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader.jsx';
import SidebarNav from '../../components/SidebarNav.jsx';
import CorporateFooter from '../../components/CorporateFooter.jsx';
import { SERVICES_LIST } from '../../data/servicesData.js';
import { NAV_LINKS } from '../../data/navigation.js';
import { ArrowRightIcon, ShieldIcon, CheckIcon } from '../../components/icons.jsx';

const EXECUTION_METHODOLOGY = [
  {
    step: '01',
    title: 'Pre-Job Engineering & Risk Assessment',
    description: 'Detailed site inspection, metallurgy profiling, fouling severity classification, and comprehensive Job Safety Analysis (JSA).'
  },
  {
    step: '02',
    title: 'Turnkey Mobilization & Containment',
    description: 'Rapid deployment of containerized DNV 2.7-1 pump spreads, high-pressure barriers, and certified environmental containment.'
  },
  {
    step: '03',
    title: 'Automated Cleaning & Cold Execution',
    description: 'Utilizing remote multi-lance feeders, rotary jet heads, and spark-free cold cutting to strip severe scale without heat hazards.'
  },
  {
    step: '04',
    title: 'Quality Verification & Handover',
    description: 'Non-destructive CCTV video inspection, hydro-testing, NACE surface certification, and formal client sign-off documentation.'
  }
];

export default function ServicesOverview() {
  const serviceLinks = NAV_LINKS[2].items;

  return (
    <div className='bg-[#f7fafb] min-h-screen flex flex-col'>
      <PageHeader
        badge='Specialist Capabilities'
        title='Industrial Services &amp; Cleaning Technologies'
        subtitle='Delivering certified hydro-jetting, surface preparation, cold cutting, chemical decontamination, and non-destructive inspection across demanding environments.'
        breadcrumbs={[{ label: 'Services' }]}
      />

      <div className='flex-1 max-w-7xl mx-auto px-pad py-12 w-full'>
        <div className='flex flex-col lg:flex-row gap-8 items-start'>
          {/* Main Grid */}
          <div className='flex-1 space-y-8 w-full'>
            {/* Services Grid */}
            <div className='bg-white rounded-xl p-6 sm:p-8 border border-neutral-200/80 shadow-sm'>
              <h2 className='text-xl sm:text-2xl font-semibold text-ink tracking-tight mb-2'>
                Specialized Industrial Contracting
              </h2>
              <p className='text-xs sm:text-sm text-muted leading-relaxed mb-6'>
                From our founding in 1997, I.S.T. has provided critical mechanical and surface engineering solutions to oil refineries, chemical plants, offshore platforms, and shipyards. Explore our 8 primary service portfolios below:
              </p>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {SERVICES_LIST.map((svc) => (
                  <div
                    key={svc.id}
                    className='group bg-[#fbfdfd] rounded-xl p-4 sm:p-5 border border-neutral-200/80 hover:border-accent/40 transition-colors shadow-sm flex flex-col justify-between'
                  >
                    <div>
                      <div className='aspect-[16/10] w-full rounded-lg overflow-hidden mb-3.5 bg-neutral-100 relative'>
                        <img
                          src={svc.heroImg}
                          alt={svc.title}
                          loading='lazy'
                          className='w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300'
                        />
                        <span className='absolute bottom-2.5 left-2.5 text-[10px] font-medium text-white/95 uppercase tracking-wide bg-[#022731]/80 px-2 py-0.5 rounded backdrop-blur-sm'>
                          {svc.tagline.split(',')[0]}
                        </span>
                      </div>

                      <h3 className='text-sm sm:text-base font-semibold text-ink group-hover:text-accent transition-colors mb-1.5'>
                        {svc.title}
                      </h3>
                      <p className='text-xs text-muted leading-relaxed line-clamp-3 mb-3'>
                        {svc.shortDesc}
                      </p>
                    </div>

                    <Link
                      to={`/services/${svc.id}`}
                      className='inline-flex items-center gap-1 text-[11.5px] font-medium text-accent group-hover:text-ink pt-2.5 border-t border-neutral-200/50 transition-colors'
                    >
                      <span>Explore Technical Capabilities</span>
                      <ArrowRightIcon className='w-3 h-3' />
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Execution Methodology & Safety Standards */}
            <div className='bg-white rounded-xl p-6 sm:p-8 border border-neutral-200/80 shadow-sm'>
              <div className='mb-6'>
                <div className='inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-accent mb-1'>
                  <ShieldIcon className='w-3.5 h-3.5' />
                  <span>Standard Operating Protocol</span>
                </div>
                <h3 className='text-lg sm:text-xl font-semibold text-ink tracking-tight'>
                  Execution Methodology &amp; Quality Control
                </h3>
                <p className='text-xs text-muted mt-1 leading-relaxed'>
                  Our four-stage project management framework ensures maximum cleaning efficiency, zero sparks, and uncompromised site safety.
                </p>
              </div>

              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                {EXECUTION_METHODOLOGY.map((m) => (
                  <div key={m.step} className='bg-[#f4f8f9] p-4 rounded-lg border border-neutral-200/60 flex flex-col justify-between'>
                    <div>
                      <div className='text-xl font-bold text-accent font-mono mb-2'>{m.step}</div>
                      <h4 className='text-xs sm:text-sm font-semibold text-ink mb-1.5 leading-snug'>{m.title}</h4>
                      <p className='text-[11.5px] text-muted leading-relaxed'>{m.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Service Assurance */}
            <div className='bg-[#022731] text-white rounded-xl p-6 sm:p-8 border border-white/10'>
              <div className='max-w-2xl'>
                <span className='text-[11px] font-medium uppercase tracking-wider text-accent-lt'>Turnkey Project Execution</span>
                <h3 className='text-xl sm:text-2xl font-semibold mt-1 mb-2 tracking-tight'>Turnaround &amp; Shutdown Readiness</h3>
                <p className='text-xs sm:text-sm text-white/75 leading-relaxed mb-5'>
                  Our dedicated project task forces deploy complete containerized pump spreads, certified hoses, automated tube bundles, and experienced field superintendents directly to client berths or onshore terminals.
                </p>
                <Link
                  to='/contact'
                  className='inline-flex items-center justify-center h-9 px-4 rounded-lg bg-accent text-white font-medium text-xs hover:bg-accent/90 transition-colors'
                >
                  Request Service Consultation &rarr;
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <SidebarNav title='Service Portfolios' items={serviceLinks} />
        </div>
      </div>

      <CorporateFooter />
    </div>
  );
}