import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader.jsx';
import SidebarNav from '../../components/SidebarNav.jsx';
import CorporateFooter from '../../components/CorporateFooter.jsx';
import { COMPANY_OVERVIEW } from '../../data/companyData.js';
import { NAV_LINKS } from '../../data/navigation.js';
import { ArrowRightIcon } from '../../components/icons.jsx';

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
            {/* Intro Card */}
            <div className='bg-white rounded-xl p-6 sm:p-8 border border-neutral-200/80 shadow-sm'>
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
                <Link
                  to='/contact'
                  className='inline-flex items-center justify-center h-9 px-4 rounded-lg bg-accent text-white font-medium text-xs hover:bg-accent/90 transition-colors'
                >
                  Contact Our Team &rarr;
                </Link>
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
