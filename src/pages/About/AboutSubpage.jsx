import { useParams, Navigate, Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader.jsx';
import SidebarNav from '../../components/SidebarNav.jsx';
import CorporateFooter from '../../components/CorporateFooter.jsx';
import { ABOUT_SUBPAGES } from '../../data/companyData.js';
import { NAV_LINKS } from '../../data/navigation.js';
import { CheckIcon } from '../../components/icons.jsx';

export default function AboutSubpage() {
  const { subpage } = useParams();
  const data = ABOUT_SUBPAGES[subpage];
  const aboutLinks = NAV_LINKS[1].items;

  if (!data) {
    return <Navigate to='/about' replace />;
  }

  return (
    <div className='bg-[#f7fafb] min-h-screen flex flex-col'>
      <PageHeader
        badge='About Us'
        title={data.title}
        subtitle={data.subtitle}
        breadcrumbs={[
          { label: 'About Us', path: '/about' },
          { label: data.title },
        ]}
      />

      <div className='flex-1 max-w-7xl mx-auto px-pad py-12 w-full'>
        <div className='flex flex-col lg:flex-row gap-8 items-start'>
          {/* Main Content Area */}
          <div className='flex-1 space-y-8 w-full'>
            {data.content.map((sec, idx) => (
              <div key={idx} className='bg-white rounded-xl p-6 sm:p-8 border border-neutral-200/80 shadow-sm'>
                <h2 className='text-lg sm:text-xl font-semibold text-ink tracking-tight mb-3'>{sec.heading}</h2>

                {sec.text && (
                  <p className='text-xs sm:text-sm text-muted leading-relaxed mb-5'>{sec.text}</p>
                )}

                {sec.points && (
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-4'>
                    {sec.points.map((pt, pIdx) => (
                      <div key={pIdx} className='bg-[#f4f8f9] p-4 rounded-lg border border-neutral-200/50'>
                        <div className='flex items-start gap-2.5'>
                          <span className='w-4 h-4 rounded-full bg-accent/15 text-accent grid place-items-center flex-shrink-0 mt-0.5'>
                            <CheckIcon className='w-2.5 h-2.5' />
                          </span>
                          <div>
                            <h3 className='text-xs sm:text-[13px] font-semibold text-ink mb-1'>{pt.title}</h3>
                            <p className='text-[11.5px] text-muted leading-relaxed'>{pt.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Bottom CTA Card */}
            <div className='bg-[#022731] text-white rounded-xl p-6 sm:p-8 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5'>
              <div>
                <h3 className='text-lg sm:text-xl font-semibold tracking-tight'>Discuss Your Technical Scope</h3>
                <p className='text-xs text-white/70 mt-1 max-w-md leading-relaxed'>
                  Get in touch with our engineering team for specialized contractor capabilities and safety proposals.
                </p>
              </div>
              <Link
                to='/contact'
                className='h-9 px-4 rounded-lg bg-accent text-white font-medium text-xs hover:bg-accent/90 transition-colors flex-shrink-0 inline-flex items-center'
              >
                Get In Touch &rarr;
              </Link>
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
