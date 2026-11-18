import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader.jsx';
import SidebarNav from '../../components/SidebarNav.jsx';
import CorporateFooter from '../../components/CorporateFooter.jsx';
import { COMPANY_OVERVIEW, CORPORATE_MILESTONES } from '../../data/companyData.js';
import { NAV_LINKS } from '../../data/navigation.js';
import { ArrowRightIcon, ShieldIcon, CheckIcon } from '../../components/icons.jsx';

export default function AboutOverview() {
  const aboutLinks = NAV_LINKS[1].items;

  return (
    <div className='bg-[#f7fafb] min-h-screen flex flex-col'>
      <PageHeader
        badge='About I.S.T.'
        title='Engineering Precision. Industrial Excellence.'
        subtitle={COMPANY_OVERVIEW.tagline}
        breadcrumbs={[{ label: 'About Us' }]}
      />

      <div className='flex-1 max-w-7xl mx-auto px-pad py-12 w-full'>
        <div className='flex flex-col lg:flex-row gap-8 items-start'>
          {/* Main Content */}
          <div className='flex-1 space-y-8 w-full'>
            {/* Intro Card with Authentic Industrial Media */}
            <div className='bg-white rounded-xl p-6 sm:p-8 border border-neutral-200/80 shadow-sm'>
              {/* Authentic Field Photography */}
              <div className='aspect-[16/9] max-h-80 w-full rounded-lg overflow-hidden mb-6 bg-neutral-100 relative'>
                <img
                  src='https://www.istsb.com/sliders/1.jpg'
                  alt='I.S.T. Industrial Operations'
                  loading='lazy'
                  className='w-full h-full object-cover'
                />
                <div className='absolute bottom-3 left-3 bg-[#022731]/85 backdrop-blur-sm text-white px-3 py-1.5 rounded text-[11px] font-medium flex items-center gap-2'>
                  <ShieldIcon className='w-3.5 h-3.5 text-accent-lt' />
                  <span>Frontline Field Operations &bull; High Pressure Cleaning &bull; Est. 1997</span>
                </div>
              </div>

              <h2 className='text-xl sm:text-2xl font-semibold text-ink tracking-tight mb-4'>
                {COMPANY_OVERVIEW.title}
              </h2>
              <p className='text-sm sm:text-base text-ink font-normal leading-relaxed mb-5'>
                {COMPANY_OVERVIEW.intro}
              </p>
              <div className='space-y-3.5 text-xs sm:text-sm text-muted leading-relaxed'>
                {COMPANY_OVERVIEW.paragraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Stats Grid */}
              <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-neutral-100'>
                {COMPANY_OVERVIEW.stats.map((st) => (
                  <div key={st.label} className='bg-[#f4f8f9] p-3.5 rounded-lg text-center border border-neutral-200/50'>
                    <div className='text-xl sm:text-2xl font-semibold text-accent font-mono'>{st.value}</div>
                    <div className='text-[10.5px] font-medium text-muted uppercase tracking-wider mt-0.5'>{st.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Corporate Milestone Timeline */}
            <div className='bg-white rounded-xl p-6 sm:p-8 border border-neutral-200/80 shadow-sm'>
              <div className='mb-6'>
                <div className='inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-accent mb-1'>
                  <span>Corporate Heritage</span>
                </div>
                <h3 className='text-lg sm:text-xl font-semibold text-ink tracking-tight'>
                  Milestones of Technical Growth
                </h3>
                <p className='text-xs text-muted mt-1 leading-relaxed'>
                  From our incorporation under the Malaysian Company Act 1965 to an international network of industrial bases.
                </p>
              </div>

              <div className='relative pl-6 sm:pl-8 border-l-2 border-neutral-200 space-y-7 my-2'>
                {CORPORATE_MILESTONES.map((item, idx) => (
                  <div key={idx} className='relative group'>
                    {/* Timeline Node */}
                    <div className='absolute -left-[31px] sm:-left-[39px] top-0.5 w-4 h-4 rounded-full bg-white border-2 border-accent flex items-center justify-center'>
                      <div className='w-1.5 h-1.5 rounded-full bg-accent'></div>
                    </div>

                    <div className='bg-[#fbfdfd] border border-neutral-200/70 rounded-lg p-4 sm:p-4.5'>
                      <div className='flex items-center gap-2.5 mb-1'>
                        <span className='inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-accent/10 text-accent font-mono'>
                          {item.year}
                        </span>
                        <h4 className='text-sm sm:text-[14.5px] font-semibold text-ink'>
                          {item.title}
                        </h4>
                      </div>
                      <p className='text-xs sm:text-[12.5px] text-muted leading-relaxed mt-1'>
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Strategic Sections Directory */}
            <div>
              <div className='mb-4'>
                <h3 className='text-lg sm:text-xl font-semibold text-ink tracking-tight'>Corporate Governance &amp; Capabilities</h3>
                <p className='text-xs text-muted mt-1'>
                  Explore the organizational pillars that ensure safety, quality, and technical integrity on every project.
                </p>
              </div>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-3.5'>
                {aboutLinks.filter(l => l.path !== '/about').map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className='group bg-white rounded-xl p-5 border border-neutral-200/80 shadow-sm hover:border-accent/40 transition-colors flex flex-col justify-between'
                  >
                    <div>
                      <h4 className='text-sm font-medium text-ink group-hover:text-accent transition-colors flex items-center justify-between'>
                        <span>{link.label}</span>
                        <ArrowRightIcon className='w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity' />
                      </h4>
                      <p className='text-xs text-muted mt-1.5 leading-relaxed'>{link.desc}</p>
                    </div>
                    <span className='mt-3 text-[11.5px] font-medium text-accent flex items-center gap-1'>
                      Read Section &rarr;
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Dyna-Jet Association Banner */}
            <div className='bg-[#022731] text-white rounded-xl p-6 sm:p-8 border border-white/10'>
              <div className='max-w-2xl'>
                <span className='text-[11px] font-medium uppercase tracking-wider text-accent-lt'>Strategic Association</span>
                <h3 className='text-xl sm:text-2xl font-semibold mt-1.5 mb-3 tracking-tight'>Backed by Dyna-Jet Pte Ltd</h3>
                <p className='text-xs sm:text-sm text-white/75 leading-relaxed mb-5'>
                  Through our established partnership with Dyna-Jet Pte Ltd, I.S.T. commands direct access to one of the Asia-Pacific region&apos;s largest specialized cleaning machinery inventories, proprietary cold cutting technologies, and certified offshore engineering teams.
                </p>
                <div className='flex flex-wrap gap-3'>
                  <Link
                    to='/contact'
                    className='inline-flex items-center justify-center h-9 px-4 rounded-lg bg-accent text-white font-medium text-xs hover:bg-accent/90 transition-colors'
                  >
                    Contact Our Team &rarr;
                  </Link>
                  <Link
                    to='/services'
                    className='inline-flex items-center justify-center h-9 px-4 rounded-lg bg-white/10 text-white font-medium text-xs hover:bg-white/20 transition-colors'
                  >
                    Explore Capabilities &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <SidebarNav title='About I.S.T.' items={aboutLinks} />
        </div>
      </div>

      <CorporateFooter />
    </div>
  );
}