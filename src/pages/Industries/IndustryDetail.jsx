import { useParams, Navigate, Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader.jsx';
import SidebarNav from '../../components/SidebarNav.jsx';
import CorporateFooter from '../../components/CorporateFooter.jsx';
import ContactForm from '../../components/ContactForm.jsx';
import { INDUSTRIES_LIST } from '../../data/industriesData.js';
import { NAV_LINKS } from '../../data/navigation.js';
import { CheckIcon, ArrowRightIcon, ShieldIcon } from '../../components/icons.jsx';

const INDUSTRY_RECOMMENDED_SERVICES = {
  'oil-and-gas': [
    { title: 'High Pressure Water Jetting', path: '/services/high-pressure-water-jetting', desc: 'Tube bundles, heat exchangers & pre-commissioning.' },
    { title: 'Cold Cutting Systems', path: '/services/cold-cutting', desc: 'Spark-free abrasive water jet cutting for live pipelines.' },
    { title: 'CCTV Inspection', path: '/services/cctv-inspection', desc: 'Explosion-proof optical crawlers for process lines.' }
  ],
  'petrochemical': [
    { title: 'Chemical Cleaning & Decontamination', path: '/services/chemical-cleaning', desc: 'Lube oil flushing, degreasing & pickling loops.' },
    { title: 'Catalyst Transfer & Extraction', path: '/services/catalyst-transfer', desc: 'Reactor unloading, vacuum extraction & dense loading.' },
    { title: 'Surface Preparation & Coating', path: '/services/surface-preparation-coating', desc: 'Novolac epoxy tank linings & acid-resistant coats.' }
  ],
  'oleo-chemicals': [
    { title: 'Chemical Cleaning & Decontamination', path: '/services/chemical-cleaning', desc: 'Circulation cleaning, pickling, and high-volume flushing.' },
    { title: 'High Pressure Water Jetting', path: '/services/high-pressure-water-jetting', desc: 'Rotary tank cleaning and process pipe clearing.' },
    { title: 'Surface Preparation & Coating', path: '/services/surface-preparation-coating', desc: 'Tank lining renewal and acid protection.' }
  ],
  'marine': [
    { title: 'Friction Stud Welding', path: '/services/friction-welding', desc: 'Sacrificial anode welding in air and subsea down to 1,000m.' },
    { title: 'Surface Preparation & Coating', path: '/services/surface-preparation-coating', desc: 'Hull descaling, ballast tank hydro-jetting & painting.' },
    { title: 'High Volume & Dredging Pumps', path: '/equipment/dredging-pumps', desc: 'Dock basin dredging and ballast water transfer.' }
  ],
  'general-industries': [
    { title: 'High Pressure Water Jetting', path: '/services/high-pressure-water-jetting', desc: 'Power plant boiler descaling and industrial tank cleaning.' },
    { title: 'Leak Detection & Pre-Commissioning', path: '/services/leak-detection', desc: 'Helium mass spectrometer leak testing and pressure verification.' }
  ]
};

export default function IndustryDetail() {
  const { industryId } = useParams();
  const industry = INDUSTRIES_LIST.find((i) => i.id === industryId);
  const industryLinks = NAV_LINKS[4].items;

  if (!industry) {
    return <Navigate to='/industries' replace />;
  }

  const recommendedServices = INDUSTRY_RECOMMENDED_SERVICES[industryId] || [
    { title: 'High Pressure Water Jetting', path: '/services/high-pressure-water-jetting', desc: 'Specialized industrial cleaning.' }
  ];

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
                  loading='lazy'
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

            {/* Recommended Services for this Sector */}
            <div className='bg-white rounded-xl p-6 sm:p-8 border border-neutral-200/80 shadow-sm'>
              <div className='mb-4'>
                <h3 className='text-lg sm:text-xl font-semibold text-ink tracking-tight'>Recommended Capabilities for this Sector</h3>
                <p className='text-xs text-muted mt-1'>
                  Field-proven services frequently contracted by {industry.title} asset owners.
                </p>
              </div>

              <div className='grid grid-cols-1 sm:grid-cols-3 gap-3.5'>
                {recommendedServices.map((svc, i) => (
                  <Link
                    key={i}
                    to={svc.path}
                    className='group bg-[#fbfdfd] p-4 rounded-lg border border-neutral-200/80 hover:border-accent/50 transition-colors flex flex-col justify-between'
                  >
                    <div>
                      <h4 className='text-xs sm:text-sm font-semibold text-ink group-hover:text-accent transition-colors flex items-center justify-between'>
                        <span>{svc.title}</span>
                        <ArrowRightIcon className='w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity' />
                      </h4>
                      <p className='text-[11.5px] text-muted mt-1 leading-relaxed'>{svc.desc}</p>
                    </div>
                    <span className='mt-2.5 text-[11px] font-medium text-accent flex items-center gap-1'>
                      View Service &rarr;
                    </span>
                  </Link>
                ))}
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