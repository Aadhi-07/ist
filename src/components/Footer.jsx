import { Link } from 'react-router-dom';
import { PHOTOS, EMAIL, PHONE, ADDRESS } from '../config/assets.js';
import { GLOBAL_OFFICES } from '../data/contactData.js';
import { NAV_LINKS } from '../data/navigation.js';
import { Droplet, PhoneIcon, MailIcon, MapPinIcon } from './icons.jsx';
import Join from './Join.jsx';
import { Title } from './Type.jsx';

export default function Footer() {
  const strip = [...PHOTOS, ...PHOTOS];
  const hq = GLOBAL_OFFICES[0];

  return (
    <footer
      id='contact'
      data-theme='light'
      className='relative z-10 bg-mist border-t border-[#022731]/15 text-ink pt-14 sm:pt-20 pb-10 sm:pb-12'
    >
      <div className='max-w-7xl mx-auto px-pad'>
        {/* Top Callout & "Get in Touch" CTA */}
        <div className='text-center max-w-3xl mx-auto mb-10 sm:mb-14 px-4'>
          <Title big className='text-ink'>
            Need blasting, painting<br />or hydro-jetting?
          </Title>
          <div className='mt-6 sm:mt-8 flex justify-center'>
            <Join href={EMAIL ? `mailto:${EMAIL}` : '#contact'}>
              Get in touch
            </Join>
          </div>
        </div>

        {/* Client Photo Marquee Carousel */}
        <div className='w-full overflow-hidden mb-12 sm:mb-16 -mx-pad px-pad'>
          <div className='flex w-max animate-marquee motion-reduce:animate-none'>
            {strip.map((src, i) => (
              <img
                key={i}
                src={src}
                alt='I.S.T. Project Operations'
                aria-hidden={i >= PHOTOS.length ? 'true' : undefined}
                className='h-32 sm:h-44 md:h-52 aspect-[4/3] object-cover rounded-xl mr-3 sm:mr-4 flex-none shadow-sm'
              />
            ))}
          </div>
        </div>

        {/* Multi-Column Footer Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-12 border-b border-[#022731]/15 text-xs'>
          {/* Brand Column */}
          <div className='sm:col-span-2 space-y-3.5'>
            <Link to='/' className='flex items-center gap-2.5 text-ink'>
              <Droplet className='w-7 h-7 text-accent' />
              <div className='flex flex-col text-left'>
                <span className='text-base font-bold tracking-tight leading-tight text-ink'>I.S.T.</span>
                <span className='text-[10px] tracking-wider font-semibold uppercase text-accent'>
                  Innovative Solutions &amp; Technologies
                </span>
              </div>
            </Link>

            <p className='text-xs text-ink/80 max-w-sm leading-relaxed'>
              Incorporated in 1997 as a private company under the Malaysian Company Act 1965. Specializing in high-pressure hydro-jetting, surface preparation, protective coatings, spark-free cold cutting, and industrial maintenance.
            </p>

            <div className='pt-1 text-[11.5px] text-ink/75'>
              Associated with <strong className='text-ink font-semibold'>Dyna-Jet Pte Ltd</strong>, providing specialized cleaning equipment and regional offshore capabilities.
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className='text-[11px] font-bold uppercase tracking-wider text-ink mb-3'>
              Navigation
            </h4>
            <ul className='space-y-2 text-xs text-ink/80 font-medium'>
              <li><a href='#about' className='hover:text-accent transition-colors block py-0.5'>About I.S.T.</a></li>
              <li><a href='#dyna-jet' className='hover:text-accent transition-colors block py-0.5'>Dyna-Jet Association</a></li>
              <li><Link to='/services' className='hover:text-accent transition-colors block py-0.5'>All Services</Link></li>
              <li><Link to='/equipment' className='hover:text-accent transition-colors block py-0.5'>Equipment Fleet</Link></li>
              <li><Link to='/industries' className='hover:text-accent transition-colors block py-0.5'>Industries</Link></li>
              <li><Link to='/contact' className='hover:text-accent transition-colors block py-0.5'>Contact Bases</Link></li>
            </ul>
          </div>

          {/* Specialist Portfolios */}
          <div>
            <h4 className='text-[11px] font-bold uppercase tracking-wider text-ink mb-3'>
              Capabilities
            </h4>
            <ul className='space-y-2 text-xs text-ink/80 font-medium'>
              {NAV_LINKS[2].items.slice(0, 5).map((svc) => (
                <li key={svc.path}>
                  <Link to={svc.path} className='hover:text-accent transition-colors block py-0.5'>
                    {svc.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* "Get in Touch" Column */}
          <div className='space-y-3'>
            <h4 className='text-[11px] font-bold uppercase tracking-wider text-ink mb-3'>
              Get in Touch
            </h4>

            <div className='space-y-2.5 text-xs text-ink/85'>
              <div className='flex items-start gap-2.5'>
                <MapPinIcon className='w-4 h-4 text-accent flex-shrink-0 mt-0.5' />
                <span className='leading-snug'>{ADDRESS || hq.address}</span>
              </div>

              <div className='flex items-center gap-2.5'>
                <PhoneIcon className='w-4 h-4 text-accent flex-shrink-0' />
                <a
                  href='tel:+6045017073'
                  className='hover:text-accent font-semibold text-ink transition-colors'
                >
                  +604 - 501 7073 / 508 1550
                </a>
              </div>

              <div className='flex items-center gap-2.5'>
                <MailIcon className='w-4 h-4 text-accent flex-shrink-0' />
                <a
                  href={`mailto:${EMAIL || hq.email}`}
                  className='hover:text-accent font-semibold text-ink transition-colors'
                >
                  {EMAIL || hq.email}
                </a>
              </div>

              <div className='pt-2 border-t border-[#022731]/15'>
                <div className='text-[11px] text-ink/70 font-semibold mb-1'>24/7 Emergency Duty:</div>
                <a
                  href='tel:+60124781222'
                  className='text-xs font-bold text-accent hover:text-ink transition-colors block font-mono'
                >
                  +6012 - 478 1222 / 1622
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Regional Operating Bases Strip */}
        <div className='py-6 border-b border-[#022731]/15'>
          <h5 className='text-[11px] font-bold uppercase tracking-wider text-ink mb-3'>
            Regional Operating Bases
          </h5>
          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 text-xs'>
            {GLOBAL_OFFICES.map((off) => (
              <div key={off.country} className='bg-white/90 p-3 rounded-lg border border-[#022731]/15 shadow-xs'>
                <strong className='block text-ink text-[12px] font-semibold mb-0.5'>{off.country}</strong>
                <p className='text-[11px] text-ink/75 line-clamp-1 leading-snug'>{off.address}</p>
                <a
                  href={`tel:${off.phone}`}
                  className='block text-[11px] text-accent mt-1 font-mono font-medium hover:underline'
                >
                  {off.phone}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className='pt-6 flex flex-col sm:flex-row items-center justify-between text-[11.5px] text-ink/75 font-medium gap-3'>
          <p className='text-center sm:text-left'>
            &copy; 1997 &ndash; {new Date().getFullYear()} INNOVATIVE SOLUTIONS &amp; TECHNOLOGIES SDN BHD (I.S.T.). All Rights Reserved.
          </p>
          <div className='flex items-center gap-5'>
            <Link to='/about/technical-standards' className='hover:text-accent transition-colors'>Quality Standards</Link>
            <Link to='/about/safety-management' className='hover:text-accent transition-colors'>HSE Policy</Link>
            <Link to='/contact' className='hover:text-accent transition-colors'>Operating Bases</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
