import { useParams, Navigate, Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader.jsx';
import SidebarNav from '../../components/SidebarNav.jsx';
import CorporateFooter from '../../components/CorporateFooter.jsx';
import ContactForm from '../../components/ContactForm.jsx';
import { SERVICES_LIST } from '../../data/servicesData.js';
import { NAV_LINKS } from '../../data/navigation.js';
import { CheckIcon, ArrowRightIcon, ShieldIcon } from '../../components/icons.jsx';

const RELATED_EQUIPMENT_MAP = {
  'high-pressure-water-jetting': [
    { title: 'High Pressure & UHP Pumps', path: '/equipment/high-pressure-pumps', desc: 'Skid and containerized pump fleet delivering up to 45,000 PSI.' }
  ],
  'surface-preparation-coating': [
    { title: 'High Pressure & UHP Pumps', path: '/equipment/high-pressure-pumps', desc: 'Hydro-blasting and UHP water jet surface preparation units.' }
  ],
  'cctv-inspection': [
    { title: 'CCTV & Wellhead Camera Systems', path: '/equipment/camera-systems', desc: 'Explosion-proof optical crawlers and borehole camera arrays.' }
  ],
  'cold-cutting': [
    { title: 'Hydraulic Power Packs (HPUs)', path: '/equipment/hydraulic-power-packs', desc: 'Zone 2 hydraulic units powering cold cutting systems and manipulators.' },
    { title: 'High Pressure & UHP Pumps', path: '/equipment/high-pressure-pumps', desc: 'UHP water jet generation up to 45,000 PSI with garnet injection.' }
  ],
  'chemical-cleaning': [
    { title: 'High Volume & Dredging Pumps', path: '/equipment/dredging-pumps', desc: 'High-volume circulation pumps for chemical pickling and flushing.' }
  ],
  'catalyst-transfer': [
    { title: 'High Pressure & UHP Pumps', path: '/equipment/high-pressure-pumps', desc: 'Reactor hydro-cleaning and vacuum pump system support.' }
  ],
  'leak-detection': [
    { title: 'High Pressure & UHP Pumps', path: '/equipment/high-pressure-pumps', desc: 'High-pressure hydrostatic and pneumatic pressure testing units.' }
  ],
  'friction-welding': [
    { title: 'Hydraulic Power Packs (HPUs)', path: '/equipment/hydraulic-power-packs', desc: 'Hydromarine solid-phase forge welding hydraulic drive packs.' }
  ]
};

const SERVICE_WORKFLOW_STEPS = [
  { step: '01', title: 'Site Inspection & Engineering JSA', desc: 'Technical evaluation of deposits, operating pressures, and hazardous atmosphere controls.' },
  { step: '02', title: 'Rapid Mobilization & Setup', desc: 'Deployment of containerized spreads, safety barricades, and certified technician crews.' },
  { step: '03', title: 'Precision Execution', desc: 'Continuous pressure monitoring, automated lance feeding, and zero-spark protocol.' },
  { step: '04', title: 'Quality Verification & Handover', desc: 'Visual C.C.T.V. or NACE coating inspection, hydro-test reports, and sign-off.' }
];

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = SERVICES_LIST.find((s) => s.id === serviceId);
  const serviceLinks = NAV_LINKS[2].items;

  if (!service) {
    return <Navigate to='/services' replace />;
  }

  const relatedEquipment = RELATED_EQUIPMENT_MAP[serviceId] || [
    { title: 'High Pressure & UHP Pumps', path: '/equipment/high-pressure-pumps', desc: 'Versatile pump fleet delivering up to 45,000 PSI.' }
  ];

  return (
    <div className='bg-[#f7fafb] min-h-screen flex flex-col'>
      <PageHeader
        badge='Specialist Service'
        title={service.title}
        subtitle={service.tagline}
        breadcrumbs={[
          { label: 'Services', path: '/services' },
          { label: service.title },
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
                  src={service.heroImg}
                  alt={service.title}
                  loading='lazy'
                  className='w-full h-full object-cover'
                />
              </div>

              <h2 className='text-xl sm:text-2xl font-semibold text-ink tracking-tight mb-3'>Service Overview</h2>
              <p className='text-sm sm:text-base text-ink font-normal leading-relaxed mb-3'>{service.shortDesc}</p>
              <p className='text-xs sm:text-sm text-muted leading-relaxed'>{service.overview}</p>
            </div>

            {/* Applications List */}
            {service.applications && (
              <div className='bg-white rounded-xl p-6 sm:p-8 border border-neutral-200/80 shadow-sm'>
                <h3 className='text-lg sm:text-xl font-semibold text-ink tracking-tight mb-1.5'>Industry Applications</h3>
                <p className='text-xs text-muted mb-4 leading-relaxed'>
                  Targeted field applications where our {service.title.toLowerCase()} provides proven operational value.
                </p>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                  {service.applications.map((app, idx) => (
                    <div key={idx} className='bg-[#f4f8f9] p-3.5 rounded-lg flex items-start gap-2.5 border border-neutral-200/50'>
                      <span className='w-4 h-4 rounded-full bg-accent/15 text-accent grid place-items-center flex-shrink-0 mt-0.5'>
                        <CheckIcon className='w-2.5 h-2.5' />
                      </span>
                      <span className='text-xs sm:text-[13px] font-medium text-ink leading-snug'>{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technical Advantages */}
            {service.features && (
              <div className='bg-white rounded-xl p-6 sm:p-8 border border-neutral-200/80 shadow-sm'>
                <h3 className='text-lg sm:text-xl font-semibold text-ink tracking-tight mb-4'>Key Technical Advantages</h3>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                  {service.features.map((feat, idx) => (
                    <div key={idx} className='border-l-2 border-accent pl-3.5 py-1'>
                      <h4 className='text-sm font-semibold text-ink mb-1'>{feat.title}</h4>
                      <p className='text-xs text-muted leading-relaxed'>{feat.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Execution Workflow */}
            <div className='bg-white rounded-xl p-6 sm:p-8 border border-neutral-200/80 shadow-sm'>
              <div className='mb-4'>
                <div className='inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-accent mb-1'>
                  <ShieldIcon className='w-3.5 h-3.5' />
                  <span>Deployment Protocol</span>
                </div>
                <h3 className='text-lg sm:text-xl font-semibold text-ink tracking-tight'>
                  Execution Workflow &amp; Quality Control
                </h3>
              </div>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-3.5'>
                {SERVICE_WORKFLOW_STEPS.map((ws) => (
                  <div key={ws.step} className='bg-[#f4f8f9] p-4 rounded-lg border border-neutral-200/50 flex items-start gap-3'>
                    <span className='text-base font-bold text-accent font-mono mt-0.5'>{ws.step}</span>
                    <div>
                      <h4 className='text-xs sm:text-[13px] font-semibold text-ink mb-1'>{ws.title}</h4>
                      <p className='text-[11.5px] text-muted leading-relaxed'>{ws.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Machinery & Tooling */}
            <div className='bg-white rounded-xl p-6 sm:p-8 border border-neutral-200/80 shadow-sm'>
              <div className='mb-4'>
                <h3 className='text-lg sm:text-xl font-semibold text-ink tracking-tight'>Related Equipment &amp; Machinery</h3>
                <p className='text-xs text-muted mt-1'>
                  Machinery deployed for this service, available for turnkey contracting or equipment hire.
                </p>
              </div>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-3.5'>
                {relatedEquipment.map((eq, i) => (
                  <Link
                    key={i}
                    to={eq.path}
                    className='group bg-[#fbfdfd] p-4 rounded-lg border border-neutral-200/80 hover:border-accent/50 transition-colors flex flex-col justify-between'
                  >
                    <div>
                      <h4 className='text-sm font-semibold text-ink group-hover:text-accent transition-colors flex items-center justify-between'>
                        <span>{eq.title}</span>
                        <ArrowRightIcon className='w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity' />
                      </h4>
                      <p className='text-xs text-muted mt-1.5 leading-relaxed'>{eq.desc}</p>
                    </div>
                    <span className='mt-3 text-[11.5px] font-medium text-accent flex items-center gap-1'>
                      View Equipment Specs &rarr;
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Direct Inquiry Form */}
            <div id='quote'>
              <ContactForm prefilledService={service.title} />
            </div>
          </div>

          {/* Sidebar */}
          <SidebarNav title='All Services' items={serviceLinks} />
        </div>
      </div>

      <CorporateFooter />
    </div>
  );
}