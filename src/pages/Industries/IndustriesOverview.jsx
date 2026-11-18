import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader.jsx';
import SidebarNav from '../../components/SidebarNav.jsx';
import CorporateFooter from '../../components/CorporateFooter.jsx';
import { INDUSTRIES_LIST } from '../../data/industriesData.js';
import { NAV_LINKS } from '../../data/navigation.js';
import { ArrowRightIcon, ShieldIcon } from '../../components/icons.jsx';

export default function IndustriesOverview() {
  const industryLinks = NAV_LINKS[4].items;

  return (
    <div className='bg-[#f7fafb] min-h-screen flex flex-col'>
      <PageHeader
        badge='Industries We Serve'
        title='Sectors of Excellence'
        subtitle='Providing mission-critical hydro-jetting, surface preparation, cold cutting, and maintenance solutions to energy, process, and marine industries since 1997.'
        breadcrumbs={[{ label: 'Industries' }]}
      />

      <div className='flex-1 max-w-7xl mx-auto px-pad py-12 w-full'>
        <div className='flex flex-col lg:flex-row gap-8 items-start'>
          {/* Main Column */}
          <div className='flex-1 space-y-8 w-full'>
            {/* Overview Intro */}
            <div className='bg-white rounded-xl p-6 sm:p-8 border border-neutral-200/80 shadow-sm'>
              <h2 className='text-xl sm:text-2xl font-semibold text-ink tracking-tight mb-2'>Specialized Engineering for Demanding Sectors</h2>
              <p className='text-xs sm:text-sm text-muted leading-relaxed mb-6'>
                Every industrial sector faces unique mechanical challenges, chemical chemistries, and environmental constraints. At I.S.T., we engineer our cleaning pressures, tooling setups, and safety procedures specifically around the operational realities of each industry.
              </p>

              {/* Industries Cards */}
              <div className='space-y-4'>
                {INDUSTRIES_LIST.map((ind) => (
                  <div
                    key={ind.id}
                    className='group bg-[#fbfdfd] rounded-xl p-4 sm:p-5 border border-neutral-200/80 hover:border-accent/40 transition-colors shadow-sm flex flex-col md:flex-row gap-5 items-start md:items-center'
                  >
                    <div className='w-full md:w-52 h-36 rounded-lg overflow-hidden flex-shrink-0 bg-neutral-100 relative'>
                      <img
                        src={ind.heroImg}
                        alt={ind.title}
                        loading='lazy'
                        className='w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300'
                      />
                    </div>

                    <div className='flex-1'>
                      <h3 className='text-base sm:text-lg font-semibold text-ink group-hover:text-accent transition-colors mb-0.5'>
                        {ind.title}
                      </h3>
                      <span className='text-[10.5px] font-medium text-accent uppercase tracking-wider block mb-1.5'>
                        {ind.subtitle}
                      </span>
                      <p className='text-xs sm:text-[13px] text-muted leading-relaxed mb-3'>
                        {ind.shortDesc}
                      </p>

                      <Link
                        to={`/industries/${ind.id}`}
                        className='inline-flex items-center gap-1 text-[11.5px] font-medium text-accent group-hover:text-ink transition-colors'
                      >
                        <span>Explore Sector Capabilities</span>
                        <ArrowRightIcon className='w-3 h-3' />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Partnership Banner */}
            <div className='bg-[#022731] text-white rounded-xl p-6 sm:p-8 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5'>
              <div>
                <span className='text-[11px] font-medium uppercase tracking-wider text-accent-lt'>Collaborative Engineering</span>
                <h3 className='text-lg sm:text-xl font-semibold mt-1 tracking-tight'>Have a Complex Maintenance Challenge?</h3>
                <p className='text-xs text-white/70 mt-1 max-w-md leading-relaxed'>
                  Our application engineers design bespoke cleaning circuits, custom nozzle geometry, and remote manipulators to resolve severe fouling.
                </p>
              </div>
              <Link
                to='/contact'
                className='h-9 px-4 rounded-lg bg-accent text-white font-medium text-xs hover:bg-accent/90 transition-colors flex-shrink-0 inline-flex items-center'
              >
                Consult Our Engineers &rarr;
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <SidebarNav title='All Industries' items={industryLinks} />
        </div>
      </div>

      <CorporateFooter />
    </div>
  );
}