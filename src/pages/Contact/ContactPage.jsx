import PageHeader from '../../components/PageHeader.jsx';
import CorporateFooter from '../../components/CorporateFooter.jsx';
import ContactForm from '../../components/ContactForm.jsx';
import { GLOBAL_OFFICES } from '../../data/contactData.js';
import { PhoneIcon, MailIcon, ShieldIcon } from '../../components/icons.jsx';

export default function ContactPage() {
  return (
    <div className='bg-[#f7fafb] min-h-screen flex flex-col'>
      <PageHeader
        badge='Global Contact'
        title='Contact I.S.T. Operations Worldwide'
        subtitle='Connect directly with our headquarters in Malaysia or our regional operating bases across Singapore, Indonesia, the United Kingdom, and the United Arab Emirates.'
        breadcrumbs={[{ label: 'Contact Us' }]}
      />

      <div className='flex-1 max-w-7xl mx-auto px-pad py-12 w-full space-y-10'>
        {/* Main 2-Column: Form & Primary Info */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-start'>
          {/* Left Form */}
          <div className='lg:col-span-7'>
            <ContactForm />
          </div>

          {/* Right Headquarters Card & 24/7 Support */}
          <div className='lg:col-span-5 space-y-6'>
            {/* Headquarters Highlight Box */}
            <div className='bg-[#022731] text-white rounded-xl p-6 sm:p-7 border border-white/10 shadow-sm'>
              <div className='space-y-4'>
                <span className='inline-block px-2.5 py-0.5 rounded text-[10.5px] font-medium uppercase tracking-wider bg-accent text-white'>
                  Global Headquarters
                </span>

                <h3 className='text-xl font-semibold tracking-tight'>Penang, Malaysia</h3>
                <p className='text-xs text-white/75 leading-relaxed'>
                  Lot 1024 (2), Juru, 14100 Simpang Ampat, Penang, Malaysia
                </p>

                <div className='pt-3.5 border-t border-white/10 space-y-2.5 text-xs'>
                  <div className='flex items-center gap-2.5'>
                    <PhoneIcon className='w-4 h-4 text-accent-lt flex-shrink-0' />
                    <div>
                      <div className='text-[10.5px] text-white/50'>Telephone</div>
                      <a href='tel:+6045017073' className='font-medium text-white hover:text-accent-lt transition-colors'>
                        +604 - 501 7073 / 508 1550
                      </a>
                    </div>
                  </div>

                  <div className='flex items-center gap-2.5'>
                    <PhoneIcon className='w-4 h-4 text-accent-lt flex-shrink-0' />
                    <div>
                      <div className='text-[10.5px] text-white/50'>Facsimile</div>
                      <span className='font-medium text-white'>+604 - 508 4361</span>
                    </div>
                  </div>

                  <div className='flex items-center gap-2.5'>
                    <MailIcon className='w-4 h-4 text-accent-lt flex-shrink-0' />
                    <div>
                      <div className='text-[10.5px] text-white/50'>Email Inquiries</div>
                      <a href='mailto:info@istsb.com' className='font-medium text-white hover:text-accent-lt transition-colors'>
                        info@istsb.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className='pt-3 border-t border-white/10 text-[11px] text-white/50'>
                  Incorporated in 1997 as a private company under the Company Act 1965.
                </div>
              </div>
            </div>

            {/* 24/7 Operations Callout */}
            <div className='bg-white rounded-xl p-5 sm:p-6 border border-neutral-200/80 shadow-sm'>
              <div className='flex items-start gap-3.5'>
                <div className='w-10 h-10 rounded-lg bg-accent/10 text-accent grid place-items-center flex-shrink-0'>
                  <ShieldIcon className='w-5 h-5' />
                </div>
                <div>
                  <h4 className='text-sm font-semibold text-ink mb-1'>Emergency Turnaround Support</h4>
                  <p className='text-xs text-muted leading-relaxed mb-2.5'>
                    For unscheduled refinery shutdowns, pipeline blockages, or emergency cold cutting deployments:
                  </p>
                  <a
                    href='tel:+60124781222'
                    className='inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-ink transition-colors'
                  >
                    <span>+6012 - 478 1222 / 1622 (24/7 Duty)</span>
                    <span>&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Bases Directory */}
        <div className='bg-white rounded-xl p-6 sm:p-8 border border-neutral-200/80 shadow-sm'>
          <div className='mb-6'>
            <h3 className='text-lg sm:text-xl font-semibold text-ink tracking-tight'>International Operating Bases</h3>
            <p className='text-xs text-muted mt-1'>
              Strategic facilities supporting maritime, refinery, and offshore engineering operations.
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {GLOBAL_OFFICES.map((off) => (
              <div
                key={off.country}
                className='bg-[#f4f8f9] p-4 sm:p-5 rounded-lg border border-neutral-200/60 flex flex-col justify-between'
              >
                <div>
                  <div className='flex items-center justify-between mb-1.5'>
                    <h4 className='text-sm font-semibold text-ink'>{off.country}</h4>
                    {off.isPrimary && (
                      <span className='text-[10px] font-medium uppercase tracking-wider bg-accent/15 text-accent px-1.5 py-0.5 rounded'>
                        HQ
                      </span>
                    )}
                  </div>
                  <div className='text-xs font-medium text-accent mb-1.5'>{off.title}</div>
                  <p className='text-xs text-muted leading-relaxed mb-4'>{off.address}</p>
                </div>

                <div className='pt-3 border-t border-neutral-200/60 space-y-1 text-xs text-ink/80'>
                  <div className='flex items-center gap-2'>
                    <PhoneIcon className='w-3 h-3 text-accent flex-shrink-0' />
                    <a href={`tel:${off.phone}`} className='hover:text-accent font-mono text-[11.5px]'>{off.phone}</a>
                  </div>
                  <div className='flex items-center gap-2'>
                    <MailIcon className='w-3 h-3 text-accent flex-shrink-0' />
                    <a href={`mailto:${off.email}`} className='hover:text-accent font-mono text-[11.5px]'>{off.email}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CorporateFooter />
    </div>
  );
}
