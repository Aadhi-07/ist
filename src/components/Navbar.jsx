import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../data/navigation.js';
import { Droplet, ChevronDown, MenuIcon, CloseIcon, PhoneIcon, MailIcon, ArrowRightIcon } from './icons.jsx';

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState({
    Services: true, // Expand services by default for fast mobile access
  });
  const timeoutRef = useRef(null);

  // Close mobile menu and dropdowns on route change
  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
        setActiveDropdown(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Clean timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleMouseEnter = (label) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const toggleMobileSection = (label) => {
    setMobileExpanded((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  // Cohesive styling:
  // - When mobile drawer is open, keep navbar dark teal to match the drawer seamlessly
  // - On homepage: clean frosted light mist (#e3eef0/95) with deep teal text (#022731) and blue accent (#397493)
  // - On subpages: dark corporate teal (#022731/98) with crisp white text and light aqua accent (#88b3b9)
  const navBg = mobileOpen
    ? 'bg-[#022731] text-white border-b border-white/10'
    : isHome
    ? 'bg-[#e3eef0]/95 backdrop-blur-md border-b border-[#022731]/15 shadow-xs'
    : 'bg-[#022731]/98 backdrop-blur-md border-b border-white/10';

  const navTextColor = mobileOpen ? 'text-white' : isHome ? 'text-ink' : 'text-white';
  const subtitleColor = mobileOpen ? 'text-accent-lt' : isHome ? 'text-ink/85' : 'text-accent-lt';
  const activeLinkColor = isHome && !mobileOpen
    ? 'text-ink font-bold border-b-2 border-accent pb-0.5'
    : 'text-accent-lt font-semibold';
  const linkHoverColor = isHome && !mobileOpen ? 'text-ink/75 hover:text-ink' : 'text-white/85 hover:text-white';
  const chevronColor = isHome && !mobileOpen ? 'text-ink/80 hover:text-ink' : 'text-white/80 hover:text-white';

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${navBg} ${navTextColor}`}
    >
      <div className='max-w-7xl mx-auto px-pad flex items-center justify-between h-16'>
        {/* Brand Logo */}
        <Link
          to='/'
          onClick={() => setMobileOpen(false)}
          aria-label='I.S.T. Homepage'
          className='group flex items-center gap-2.5 sm:gap-3 focus:outline-none'
        >
          <span className='grid place-items-center w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0'>
            <Droplet className='w-6 h-6 sm:w-7 sm:h-7 text-accent transition-transform duration-300 group-hover:-translate-y-0.5' />
          </span>
          <span className='flex flex-col text-left'>
            <span className='text-[16px] font-bold tracking-tight leading-tight'>I.S.T.</span>
            <span className={`text-[9px] sm:text-[10px] tracking-wider font-semibold uppercase ${subtitleColor} whitespace-nowrap`}>
              Engineering &amp; Cleaning
            </span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className='hidden lg:flex items-center gap-6 text-[13.5px]'
          aria-label='Primary Navigation'
        >
          {NAV_LINKS.map((link) => {
            const hasChildren = link.items && link.items.length > 0;
            const isActive =
              location.pathname === link.path ||
              (link.path !== '/' && location.pathname.startsWith(link.path));

            if (!hasChildren) {
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`link-u py-1.5 transition-colors ${
                    isActive ? activeLinkColor : `${linkHoverColor} font-medium`
                  }`}
                >
                  {link.label}
                </Link>
              );
            }

            const isOpen = activeDropdown === link.label;

            return (
              <div
                key={link.label}
                className='relative py-4'
                onMouseEnter={() => handleMouseEnter(link.label)}
                onMouseLeave={handleMouseLeave}
                onFocus={() => handleMouseEnter(link.label)}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget)) {
                    setActiveDropdown(null);
                  }
                }}
              >
                <div className='flex items-center gap-1 cursor-pointer py-1.5'>
                  <Link
                    to={link.path}
                    className={`transition-colors ${
                      isActive ? activeLinkColor : `${linkHoverColor} font-medium`
                    }`}
                  >
                    {link.label}
                  </Link>
                  <button
                    type='button'
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveDropdown(isOpen ? null : link.label);
                    }}
                    aria-expanded={isOpen}
                    aria-haspopup='true'
                    aria-label={`Toggle ${link.label} menu`}
                    className={`p-0.5 ${chevronColor} focus:outline-none transition-colors`}
                  >
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </div>

                {/* Dropdown / Mega Menu */}
                {isOpen && (
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 top-full pt-1.5 z-50 ${
                      link.isMega ? 'w-[740px]' : 'w-72'
                    }`}
                  >
                    <div className='bg-[#022731] text-white rounded-xl p-5 shadow-2xl border border-white/15'>
                      {link.description && (
                        <div className='pb-3 mb-3 border-b border-white/10 flex items-center justify-between text-xs'>
                          <span className='text-[11px] font-semibold tracking-wide text-accent-lt uppercase'>
                            {link.label} Directory
                          </span>
                          <Link
                            to={link.path}
                            onClick={() => setActiveDropdown(null)}
                            className='text-white/80 hover:text-white text-[11.5px] transition-colors underline underline-offset-4'
                          >
                            View All &rarr;
                          </Link>
                        </div>
                      )}

                      {link.isMega ? (
                        <div className='grid grid-cols-2 gap-2'>
                          {link.items.map((item) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              onClick={() => setActiveDropdown(null)}
                              className='group/item block p-2.5 rounded-lg hover:bg-white/10 transition-colors'
                            >
                              <div className='text-[13px] font-medium text-white group-hover/item:text-accent-lt flex items-center justify-between'>
                                <span>{item.label}</span>
                                <span className='opacity-0 group-hover/item:opacity-100 transition-opacity text-xs'>
                                  &rarr;
                                </span>
                              </div>
                              {item.desc && (
                                <p className='text-[11.5px] text-white/70 mt-0.5 line-clamp-1 font-normal'>
                                  {item.desc}
                                </p>
                              )}
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <div className='space-y-1'>
                          {link.items.map((item) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              onClick={() => setActiveDropdown(null)}
                              className='group/item block px-3 py-2 rounded-lg hover:bg-white/10 transition-colors'
                            >
                              <div className='text-[13px] font-medium text-white group-hover/item:text-accent-lt'>
                                {item.label}
                              </div>
                              {item.desc && (
                                <p className='text-[11px] text-white/70 mt-0.5 line-clamp-1 font-normal'>
                                  {item.desc}
                                </p>
                              )}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className='flex items-center gap-2.5 sm:gap-3'>
          {/* Always-visible Quick Contact Button on both Mobile & Desktop */}
          <Link
            to='/contact'
            onClick={() => setMobileOpen(false)}
            className='inline-flex items-center justify-center h-8 sm:h-9 px-3 sm:px-4 rounded-lg text-[11px] sm:text-xs font-semibold bg-accent text-white hover:bg-accent/90 transition-colors shadow-xs'
          >
            Get In Touch
          </Link>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className='lg:hidden p-2 rounded-lg text-current hover:bg-black/10 transition-colors focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center'
            aria-label={mobileOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <CloseIcon className='w-5 h-5' /> : <MenuIcon className='w-5 h-5' />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu — Full Feature Parity with Desktop Mega Menus */}
      {mobileOpen && (
        <div
          className='lg:hidden fixed inset-x-0 top-16 bottom-0 bg-[#022731] text-white overflow-y-auto overscroll-contain px-4 sm:px-6 py-5 border-t border-white/10 shadow-2xl z-50 flex flex-col justify-between'
          role='dialog'
          aria-modal='true'
        >
          <div className='space-y-4 max-w-lg mx-auto w-full'>
            {/* Quick Contact & Dispatch Bar */}
            <div className='grid grid-cols-2 gap-2 pb-3 border-b border-white/10 text-xs'>
              <a
                href='tel:+6045017073'
                className='bg-white/5 hover:bg-white/10 p-2.5 rounded-lg border border-white/10 flex items-center gap-2 transition-colors'
              >
                <PhoneIcon className='w-3.5 h-3.5 text-accent-lt flex-shrink-0' />
                <div className='truncate'>
                  <div className='text-[10px] text-white/60 font-medium'>Penang HQ</div>
                  <div className='text-[11.5px] font-semibold text-white'>+604 501 7073</div>
                </div>
              </a>
              <a
                href='tel:+60124781222'
                className='bg-accent/20 hover:bg-accent/30 p-2.5 rounded-lg border border-accent/30 flex items-center gap-2 transition-colors'
              >
                <div className='w-2 h-2 rounded-full bg-accent animate-pulse flex-shrink-0'></div>
                <div className='truncate'>
                  <div className='text-[10px] text-accent-lt font-semibold'>24/7 Duty</div>
                  <div className='text-[11.5px] font-semibold text-white'>+6012 478 1222</div>
                </div>
              </a>
            </div>

            {/* Navigation Accordion Sections */}
            <nav className='space-y-2' aria-label='Mobile Navigation'>
              {NAV_LINKS.map((link) => {
                const hasChildren = link.items && link.items.length > 0;
                const isActive =
                  location.pathname === link.path ||
                  (link.path !== '/' && location.pathname.startsWith(link.path));

                if (!hasChildren) {
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setMobileOpen(false)}
                      className={`block px-3 py-3 rounded-lg text-[14.5px] font-semibold min-h-[44px] flex items-center justify-between transition-colors ${
                        isActive ? 'bg-white/15 text-accent-lt' : 'text-white hover:bg-white/10'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowRightIcon className='w-3.5 h-3.5 text-white/50' />
                    </Link>
                  );
                }

                const isExpanded = mobileExpanded[link.label];

                return (
                  <div key={link.label} className='bg-white/[0.04] rounded-xl border border-white/10 overflow-hidden'>
                    {/* Entire header row toggles accordion for effortless mobile tapping */}
                    <button
                      type='button'
                      onClick={() => toggleMobileSection(link.label)}
                      className='w-full px-3.5 py-3 min-h-[48px] flex items-center justify-between text-left focus:outline-none hover:bg-white/5 transition-colors'
                      aria-expanded={isExpanded}
                      aria-label={`Toggle ${link.label} options`}
                    >
                      <div className='flex items-center gap-2'>
                        <span className={`text-[14.5px] font-semibold ${isActive ? 'text-accent-lt' : 'text-white'}`}>
                          {link.label}
                        </span>
                        {link.items && (
                          <span className='text-[10px] font-mono px-1.5 py-0.2 rounded bg-white/10 text-white/70'>
                            {link.items.length}
                          </span>
                        )}
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-white/70 transition-transform duration-200 flex-shrink-0 ${
                          isExpanded ? 'rotate-180 text-accent-lt' : ''
                        }`}
                      />
                    </button>

                    {/* Expanded Directory & Rich Items */}
                    {isExpanded && (
                      <div className='px-3 pb-3 pt-1 space-y-1.5 border-t border-white/10 bg-black/15'>
                        {/* Overview link for entire section */}
                        <Link
                          to={link.path}
                          onClick={() => setMobileOpen(false)}
                          className='block p-2.5 rounded-lg bg-accent/20 hover:bg-accent/30 border border-accent/30 transition-colors'
                        >
                          <div className='flex items-center justify-between text-xs font-semibold text-white'>
                            <span>Explore {link.label} Overview</span>
                            <span className='text-accent-lt'>&rarr;</span>
                          </div>
                          {link.description && (
                            <p className='text-[11px] text-white/75 mt-0.5 font-normal leading-relaxed'>
                              {link.description}
                            </p>
                          )}
                        </Link>

                        {/* Rich Sub-Items with descriptions, mirroring Desktop Mega Menu */}
                        <div className='space-y-1 pt-1'>
                          {link.items.map((item) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              onClick={() => setMobileOpen(false)}
                              className='group/sub block p-2.5 rounded-lg hover:bg-white/10 border border-transparent hover:border-white/10 transition-colors'
                            >
                              <div className='text-[13px] font-medium text-white group-hover/sub:text-accent-lt flex items-center justify-between'>
                                <span>{item.label}</span>
                                <span className='opacity-0 group-hover/sub:opacity-100 transition-opacity text-xs'>
                                  &rarr;
                                </span>
                              </div>
                              {item.desc && (
                                <p className='text-[11px] text-white/70 mt-0.5 line-clamp-2 font-normal leading-snug'>
                                  {item.desc}
                                </p>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>

          {/* Bottom Drawer Actions */}
          <div className='pt-5 pb-2 border-t border-white/10 max-w-lg mx-auto w-full space-y-3'>
            <Link
              to='/contact'
              onClick={() => setMobileOpen(false)}
              className='w-full h-11 rounded-lg bg-accent text-white font-medium text-center flex items-center justify-center text-sm shadow-sm hover:bg-accent/90 transition-colors'
            >
              Request a Consultation or Equipment Quote &rarr;
            </Link>
            <div className='text-center text-[10.5px] text-white/50'>
              Innovative Solutions &amp; Technologies Sdn Bhd &bull; Incorporated 1997
            </div>
          </div>
        </div>
      )}
    </header>
  );
}