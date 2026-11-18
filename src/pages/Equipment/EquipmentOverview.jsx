import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader.jsx';
import SidebarNav from '../../components/SidebarNav.jsx';
import CorporateFooter from '../../components/CorporateFooter.jsx';
import SpecsTable from '../../components/SpecsTable.jsx';
import { EQUIPMENT_LIST, PUMP_SPECS_TABLE } from '../../data/equipmentData.js';
import { NAV_LINKS } from '../../data/navigation.js';
import { ArrowRightIcon, ShieldIcon } from '../../components/icons.jsx';

const MOBILIZATION_FORMATS = [
  {
    format: 'DNV 2.7-1 Offshore Spreads',
    description: 'Certified containerized units equipped with 4-leg slings, pad eyes, and explosion-proof Zone 2 ratings for oil platforms and FPSOs.'
  },
  {
    format: 'Road-Tow Mobile Units',
    description: 'Highway-certified trailer systems for rapid dispatch to refineries, shipyards, and municipal facilities across Peninsular Malaysia.'
  },
  {
    format: 'Compact Skid Packages',
    description: 'Narrow-footprint skids tailored for tight vessel engine rooms, plant alleyways, and confined industrial access bays.'
  },
  {
    format: 'Dry Hire or Wet Hire',
    description: 'Available as standalone equipment or fully supported with certified operators, technicians, and comprehensive tooling packs.'
  }
];

export default function EquipmentOverview() {
  const equipmentLinks = NAV_LINKS[3].items;

  return (
    <div className='bg-[#f7fafb] min-h-screen flex flex-col'>
      <PageHeader
        badge='Equipment Fleet'
        title='Industrial Equipment &amp; High-Pressure Systems'
        subtitle='Heavy-duty pumps, subsea tooling, hydraulic power units, and remote camera systems available for turnkey projects or equipment rental.'
        breadcrumbs={[{ label: 'Equipment' }]}
      />

      <div className='flex-1 max-w-7xl mx-auto px-pad py-12 w-full'>
        <div className='flex flex-col lg:flex-row gap-8 items-start'>
          {/* Main Column */}
          <div className='flex-1 space-y-8 w-full'>
            {/* Overview Intro */}
            <div className='bg-white rounded-xl p-6 sm:p-8 border border-neutral-200/80 shadow-sm'>
              <h2 className='text-xl sm:text-2xl font-semibold text-ink tracking-tight mb-2'>Turnkey Mobilization &amp; Equipment Hire</h2>
              <p className='text-xs sm:text-sm text-muted leading-relaxed mb-6'>
                I.S.T. maintains a modern, certified fleet of high-pressure and ultra-high-pressure pumps, dredging pumps, hydraulic power packs, and specialized subsea tooling. All machinery is inspected, pressure tested, and maintained to offshore standards prior to mobilization.
              </p>

              {/* Equipment Grid */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {EQUIPMENT_LIST.map((eq) => (
                  <div
                    key={eq.id}
                    className='group bg-[#fbfdfd] rounded-xl p-4 sm:p-5 border border-neutral-200/80 hover:border-accent/40 transition-colors shadow-sm flex flex-col justify-between'
                  >
                    <div>
                      <div className='aspect-[16/10] w-full rounded-lg overflow-hidden mb-3.5 bg-neutral-100 relative'>
                        <img
                          src={eq.heroImg}
                          alt={eq.title}
                          loading='lazy'
                          className='w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300'
                        />
                        <span className='absolute bottom-2.5 left-2.5 text-[10px] font-medium text-white/95 uppercase tracking-wide bg-[#022731]/80 px-2 py-0.5 rounded backdrop-blur-sm'>
                          {eq.specs ? eq.specs[0].value : 'Certified Fleet'}
                        </span>
                      </div>

                      <h3 className='text-sm sm:text-base font-semibold text-ink group-hover:text-accent transition-colors mb-1.5'>
                        {eq.title}
                      </h3>
                      <p className='text-xs text-muted leading-relaxed line-clamp-3 mb-3'>
                        {eq.shortDesc}
                      </p>
                    </div>

                    <Link
                      to={`/equipment/${eq.id}`}
                      className='inline-flex items-center gap-1 text-[11.5px] font-medium text-accent group-hover:text-ink pt-2.5 border-t border-neutral-200/50 transition-colors'
                    >
                      <span>View Specifications &amp; Hire Rates</span>
                      <ArrowRightIcon className='w-3 h-3' />
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobilization Readiness */}
            <div className='bg-white rounded-xl p-6 sm:p-8 border border-neutral-200/80 shadow-sm'>
              <div className='mb-4'>
                <div className='inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-accent mb-1'>
                  <ShieldIcon className='w-3.5 h-3.5' />
                  <span>Deployment Configurations</span>
                </div>
                <h3 className='text-lg sm:text-xl font-semibold text-ink tracking-tight'>
                  Mobilization Readiness &amp; Packaging Formats
                </h3>
                <p className='text-xs text-muted mt-1 leading-relaxed'>
                  Our fleet is prepared for swift deployment across onshore refineries, petrochemical complexes, and offshore marine vessels.
                </p>
              </div>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                {MOBILIZATION_FORMATS.map((mf, idx) => (
                  <div key={idx} className='bg-[#f4f8f9] p-4 rounded-lg border border-neutral-200/60'>
                    <h4 className='text-xs sm:text-[13px] font-semibold text-ink mb-1'>{mf.format}</h4>
                    <p className='text-[11.5px] text-muted leading-relaxed'>{mf.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* High Pressure Pump Fleet Spec Table */}
            <div className='bg-white rounded-xl p-6 sm:p-8 border border-neutral-200/80 shadow-sm'>
              <h3 className='text-lg sm:text-xl font-semibold text-ink tracking-tight mb-1'>Standard Pump Fleet Pressure Ratings</h3>
              <p className='text-xs text-muted mb-3 leading-relaxed'>
                Full configuration range for skid-mounted, roll-cage, and containerized pump spreads.
              </p>
              <SpecsTable
                title='I.S.T. Fleet Standard Operating Pressures &amp; Flow Capacities'
                rows={PUMP_SPECS_TABLE}
                note='Conversion reference: P.S.I. / 14.5 = BAR | G.P.M. x 4.55 = LTRS / MIN. Available in diesel-driven and electric configurations with complete accessories.'
              />
            </div>

            {/* Rental CTA */}
            <div className='bg-[#022731] text-white rounded-xl p-6 sm:p-8 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5'>
              <div>
                <span className='text-[11px] font-medium uppercase tracking-wider text-accent-lt'>Equipment Rental</span>
                <h3 className='text-lg sm:text-xl font-semibold mt-1 tracking-tight'>Need Immediate Equipment Mobilization?</h3>
                <p className='text-xs text-white/70 mt-1 max-w-md leading-relaxed'>
                  Pump spreads and tooling available for dry hire or wet hire with certified operators across Malaysia, Singapore, and regional ports.
                </p>
              </div>
              <Link
                to='/contact'
                className='h-9 px-4 rounded-lg bg-accent text-white font-medium text-xs hover:bg-accent/90 transition-colors flex-shrink-0 inline-flex items-center'
              >
                Inquire for Rates &rarr;
              </Link>
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