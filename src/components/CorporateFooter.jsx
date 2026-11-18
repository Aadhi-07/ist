import { Link } from 'react-router-dom';
import { Droplet, PhoneIcon, MailIcon, MapPinIcon } from './icons.jsx';
import { GLOBAL_OFFICES } from '../data/contactData.js';
import { NAV_LINKS } from '../data/navigation.js';

export default function CorporateFooter() {
  const hq = GLOBAL_OFFICES[0];

  return (
    <footer className='bg-[#021d25] text-white pt-14 sm:pt-16 pb-12 border-t border-white/10 text-xs'>
      <div className='max-w-7xl mx-auto px-pad'>
        {/* Top Section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10 pb-12 sm:pb-14 border-b border-white/10'>
          {/* Brand Info */}
          <div className='sm:col-span-2 lg:col-span-1.5 space-y-3.5'>
            <Link to='/' className='flex items-center gap-2.5'>
              <Droplet className='w-7 h-7 text-accent-lt' />
              <div className='flex flex-col'>
                <span className='text-base font-semibold tracking-tight leading-tight'>I.S.T.</span>
                <span className='text-[9.5px] tracking-wider font-normal uppercase text-accent-lt'>
                  Innovative Solutions &amp; Technologies
                </span>
              </div>
            </Link>

            <p className='text-xs text-white/70 max-w-sm leading-relaxed'>
              Incorporated in 1997 as a private company under the Malaysian Company Act 1965. Specializing in high-pressure hydro-jetting, surface preparation, protective coatings, spark-free cold cutting, and industrial maintenance.
            </p>

            <div className='text-[11.5px] text-white/50 pt-1'>
              Strategic association with <strong className='text-white/80 font-medium'>Dyna-Jet Pte Ltd</strong>.
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className='text-[11px] font-semibold uppercase tracking-wider text-accent-lt mb-3'>Services</h4>
            <ul className='space-y-1.5 text-xs text-white/70'>
              {NAV_LINKS[2].items.map((svc) => (
                <li key={svc.path}>
                  <Link to={svc.path} className='hover:text-white transition-colors block py-0.5'>
                    {svc.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Equipment Column */}
          <div>
            <h4 className='text-[11px] font-semibold uppercase tracking-wider text-accent-lt mb-3'>Equipment</h4>
            <ul className='space-y-1.5 text-xs text-white/70'>
              {NAV_LINKS[3].items.map((eq) => (
                <li key={eq.path}>
                  <Link to={eq.path} className='hover:text-white transition-colors block py-0.5'>
                    {eq.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Industries */}
          <div className='space-y-5'>
            <div>
              <h4 className='text-[11px] font-semibold uppercase tracking-wider text-accent-lt mb-2.5'>Company</h4>
              <ul className='space-y-1.5 text-xs text-white/70'>
                <li><Link to='/about' className='hover:text-white transition-colors'>Overview</Link></li>
                <li><Link to='/about/vision-values' className='hover:text-white transition-colors'>Vision &amp; Values</Link></li>
                <li><Link to='/about/technical-standards' className='hover:text-white transition-colors'>Technical Standards</Link></li>
                <li><Link to='/about/safety-management' className='hover:text-white transition-colors'>Safety Management</Link></li>
              </ul>
            </div>

            <div>
              <h4 className='text-[11px] font-semibold uppercase tracking-wider text-accent-lt mb-2.5'>Industries</h4>
              <ul className='space-y-1.5 text-xs text-white/70'>
                {NAV_LINKS[4].items.slice(0, 3).map((ind) => (
                  <li key={ind.path}>
                    <Link to={ind.path} className='hover:text-white transition-colors block py-0.5'>
                      {ind.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* "Get in Touch" Column */}
          <div className='space-y-3.5'>
            <h4 className='text-[11px] font-semibold uppercase tracking-wider text-accent-lt mb-3'>
              Get in Touch
            </h4>

            <div className='space-y-2.5 text-xs text-white/75'>
              <div className='flex items-start gap-2.5'>
                <MapPinIcon className='w-4 h-4 text-accent-lt flex-shrink-0 mt-0.5' />
                <span className='leading-snug'>{hq.address}</span>
              </div>

              <div className='flex items-center gap-2.5'>
                <PhoneIcon className='w-4 h-4 text-accent-lt flex-shrink-0' />
                <a href={`tel:${hq.phone}`} className='hover:text-white font-medium transition-colors'>
                  {hq.phone}
                </a>
              </div>

              <div className='flex items-center gap-2.5'>
                <MailIcon className='w-4 h-4 text-accent-lt flex-shrink-0' />
                <a href={`mailto:${hq.email}`} className='hover:text-white font-medium transition-colors'>
                  {hq.email}
                </a>
              </div>

              <div className='pt-2 border-t border-white/10'>
                <div className='text-[11px] text-white/50 mb-0.5'>24/7 Duty Contact:</div>
                <a
                  href='tel:+60124781222'
                  className='text-xs font-semibold text-accent-lt hover:text-white transition-colors block font-mono'
                >
                  +6012 - 478 1222 / 1622
                </a>
              </div>

              <div className='pt-1'>
                <Link
                  to='/contact'
                  className='inline-block text-[11.5px] font-medium text-accent-lt hover:text-white underline underline-offset-4 transition-colors'
                >
                  View Global Bases &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Global Bases Strip */}
        <div className='py-6 border-b border-white/10'>
          <h5 className='text-[11px] font-medium uppercase tracking-wider text-white/50 mb-3'>
            Regional Operating Bases
          </h5>
          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 text-xs text-white/80'>
            {GLOBAL_OFFICES.map((off) => (
              <div key={off.country} className='bg-white/5 p-3 rounded-lg border border-white/5'>
                <strong className='block text-white text-[12px] font-medium mb-0.5'>{off.country}</strong>
                <p className='text-[11px] text-white/60 line-clamp-1'>{off.address}</p>
                <a
                  href={`tel:${off.phone}`}
                  className='block text-[10.5px] text-accent-lt mt-1 font-mono hover:underline'
                >
                  {off.phone}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Legal */}
        <div className='pt-6 flex flex-col sm:flex-row items-center justify-between text-[11.5px] text-white/50 gap-4'>
          <p className='text-center sm:text-left'>
            &copy; 1997 &ndash; {new Date().getFullYear()} INNOVATIVE SOLUTIONS &amp; TECHNOLOGIES SDN BHD (I.S.T.). All Rights Reserved.
          </p>
          <div className='flex items-center gap-6'>
            <Link to='/about/technical-standards' className='hover:text-white transition-colors'>Quality Standards</Link>
            <Link to='/about/safety-management' className='hover:text-white transition-colors'>HSE Policy</Link>
            <Link to='/contact' className='hover:text-white transition-colors'>Operating Bases</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
