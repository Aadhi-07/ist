import { useParams, Navigate } from 'react-router-dom';
import PageHeader from '../../components/PageHeader.jsx';
import SidebarNav from '../../components/SidebarNav.jsx';
import CorporateFooter from '../../components/CorporateFooter.jsx';
import SpecsTable from '../../components/SpecsTable.jsx';
import ContactForm from '../../components/ContactForm.jsx';
import { EQUIPMENT_LIST } from '../../data/equipmentData.js';
import { NAV_LINKS } from '../../data/navigation.js';

export default function EquipmentDetail() {
  const { equipmentId } = useParams();
  const eq = EQUIPMENT_LIST.find((e) => e.id === equipmentId);
  const equipmentLinks = NAV_LINKS[3].items;

  if (!eq) {
    return <Navigate to='/equipment' replace />;
  }

  return (
    <div className='bg-[#f7fafb] min-h-screen flex flex-col'>
      <PageHeader
        badge='Equipment Fleet'
        title={eq.title}
        subtitle={eq.tagline}
        breadcrumbs={[
          { label: 'Equipment', path: '/equipment' },
          { label: eq.title },
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
                  src={eq.heroImg}
                  alt={eq.title}
                  className='w-full h-full object-cover'
                />
              </div>

              <h2 className='text-xl sm:text-2xl font-semibold text-ink tracking-tight mb-3'>Equipment Overview</h2>
              <p className='text-sm sm:text-base text-ink font-normal leading-relaxed mb-3'>{eq.shortDesc}</p>
              <p className='text-xs sm:text-sm text-muted leading-relaxed'>{eq.overview}</p>

              {/* Quick Specs Cards */}
              {eq.specs && (
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-6 pt-6 border-t border-neutral-100'>
                  {eq.specs.map((sp, idx) => (
                    <div key={idx} className='bg-[#f4f8f9] p-3.5 rounded-lg border border-neutral-200/50'>
                      <div className='text-[10.5px] font-medium uppercase tracking-wider text-muted'>{sp.label}</div>
                      <div className='text-xs sm:text-sm font-semibold text-ink mt-0.5'>{sp.value}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Structured Table if available */}
            {eq.tableData && (
              <div className='bg-white rounded-xl p-6 sm:p-8 border border-neutral-200/80 shadow-sm'>
                <h3 className='text-lg sm:text-xl font-semibold text-ink tracking-tight mb-1'>Technical Capacity Matrix</h3>
                <p className='text-xs text-muted mb-3 leading-relaxed'>
                  Available configurations across our active fleet. Units are serviced, hydro-tested, and calibrated before delivery.
                </p>
                <SpecsTable
                  title='Standard Flow &amp; Pressure Configurations'
                  rows={eq.tableData}
                  note='Conversion reference: P.S.I. / 14.5 = BAR | G.P.M. x 4.55 = LTRS / MIN. Can be supplied with certified offshore container frames or road-tow trailers.'
                />
              </div>
            )}

            {/* Features & Safeguards */}
            {eq.features && (
              <div className='bg-white rounded-xl p-6 sm:p-8 border border-neutral-200/80 shadow-sm'>
                <h3 className='text-lg sm:text-xl font-semibold text-ink tracking-tight mb-4'>Design Features &amp; Safety Systems</h3>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                  {eq.features.map((feat, idx) => (
                    <div key={idx} className='bg-[#f4f8f9] p-4 rounded-lg border border-neutral-200/50'>
                      <h4 className='text-xs sm:text-sm font-semibold text-ink mb-1.5'>{feat.title}</h4>
                      <p className='text-xs text-muted leading-relaxed'>{feat.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Rental & Mobilization Quote Form */}
            <div id='quote'>
              <ContactForm prefilledService={`Equipment Rental: ${eq.title}`} />
            </div>
          </div>

          {/* Sidebar */}
          <SidebarNav title='Equipment Inventory' items={equipmentLinks} />
        </div>
      </div>

      <CorporateFooter />
    </div>
  );
}
