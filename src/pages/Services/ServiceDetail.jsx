import { useParams, Navigate } from 'react-router-dom';
import PageHeader from '../../components/PageHeader.jsx';
import SidebarNav from '../../components/SidebarNav.jsx';
import CorporateFooter from '../../components/CorporateFooter.jsx';
import ContactForm from '../../components/ContactForm.jsx';
import { SERVICES_LIST } from '../../data/servicesData.js';
import { NAV_LINKS } from '../../data/navigation.js';
import { CheckIcon } from '../../components/icons.jsx';

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = SERVICES_LIST.find((s) => s.id === serviceId);
  const serviceLinks = NAV_LINKS[2].items;

  if (!service) {
    return <Navigate to='/services' replace />;
  }

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
