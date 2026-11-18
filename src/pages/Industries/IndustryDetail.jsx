import { useParams, Navigate } from 'react-router-dom';
import PageHeader from '../../components/PageHeader.jsx';
import SidebarNav from '../../components/SidebarNav.jsx';
import CorporateFooter from '../../components/CorporateFooter.jsx';
import ContactForm from '../../components/ContactForm.jsx';
import { INDUSTRIES_LIST } from '../../data/industriesData.js';
import { NAV_LINKS } from '../../data/navigation.js';
import { CheckIcon } from '../../components/icons.jsx';

export default function IndustryDetail() {
  const { industryId } = useParams();
  const industry = INDUSTRIES_LIST.find((i) => i.id === industryId);
  const industryLinks = NAV_LINKS[4].items;

  if (!industry) {
    return <Navigate to='/industries' replace />;
  }

  return (
    <div className='bg-[#f7fafb] min-h-screen flex flex-col'>
      <PageHeader
        badge='Industry Sector'
        title={industry.title}
        subtitle={industry.subtitle}
        breadcrumbs={[
          { label: 'Industries', path: '/industries' },
          { label: industry.title },
        ]}
      />

      <div className='flex-1 max-w-7xl mx-auto px-pad py-12 w-full'>
        <div className='flex flex-col lg:flex-row gap-8 items-start'>
          {/* Main Column */}
          <div className='flex-1 space-y-8 w-full'>
            {/* Overview & Image */}
            <div className='bg-white rounded-xl p-6 sm:p-8 border border-neutral-200/80 shadow-sm'>
              <div className='aspect-[16/9] max-h-80 w-full rounded-lg overflow-hidden mb-6 bg-neutral-100'>
                <img
                  src={industry.heroImg}
                  alt={industry.title}
                  className='w-full h-full object-cover'
                />
              </div>

              <h2 className='text-xl sm:text-2xl font-semibold text-ink tracking-tight mb-3'>Sector Overview</h2>
              <p className='text-sm sm:text-base text-ink font-normal leading-relaxed mb-3'>{industry.shortDesc}</p>
              <p className='text-xs sm:text-sm text-muted leading-relaxed'>{industry.overview}</p>
            </div>

            {/* Challenges vs Solutions Comparison */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {/* Challenges */}
              <div className='bg-white rounded-xl p-5 sm:p-6 border border-neutral-200/80 shadow-sm'>
                <h3 className='text-sm sm:text-base font-semibold text-ink mb-1.5 flex items-center gap-2'>
                  <span className='w-2 h-2 rounded-full bg-red-500'></span>
                  <span>Operational Challenges</span>
                </h3>
                <p className='text-xs text-muted mb-4'>Key obstacles encountered in this environment:</p>
                <ul className='space-y-2.5'>
                  {industry.challenges.map((ch, idx) => (
                    <li key={idx} className='text-xs sm:text-[13px] text-ink/85 flex items-start gap-2 leading-relaxed'>
                      <span className='text-red-500 font-bold'>&bull;</span>
                      <span>{ch}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solutions */}
              <div className='bg-white rounded-xl p-5 sm:p-6 border border-neutral-200/80 shadow-sm'>
                <h3 className='text-sm sm:text-base font-semibold text-ink mb-1.5 flex items-center gap-2'>
                  <span className='w-2 h-2 rounded-full bg-accent'></span>
                  <span>I.S.T. Solutions</span>
                </h3>
                <p className='text-xs text-muted mb-4'>Capabilities engineered to resolve these challenges:</p>
                <ul className='space-y-2.5'>
                  {industry.solutions.map((sol, idx) => (
                    <li key={idx} className='text-xs sm:text-[13px] text-ink flex items-start gap-2 leading-relaxed'>
                      <span className='w-3.5 h-3.5 rounded-full bg-accent/15 text-accent grid place-items-center flex-shrink-0 mt-0.5'>
                        <CheckIcon className='w-2 h-2' />
                      </span>
                      <span>{sol}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Direct Inquiry Form */}
            <div id='quote'>
              <ContactForm prefilledService={`Sector Inquiry: ${industry.title}`} />
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
