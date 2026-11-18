import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../data/navigation.js';
import { Droplet, ChevronDown, MenuIcon, CloseIcon } from './icons.jsx';

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState({});
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

  // High contrast styling:
  // - On homepage: clean frosted light mist (#e3eef0/92) with deep teal text (#022731) and blue accent (#397493)
  // - On subpages: dark corporate teal (#022731/98) with crisp white text and light aqua accent (#88b3b9)
  const navBg = isHome
    ? 'bg-[#e3eef0]/92 backdrop-blur-md border-b border-[#022731]/12 shadow-xs'
    : 'bg-[#022731]/98 backdrop-blur-md border-b border-white/10';

  const navTextColor = isHome ? 'text-ink' : 'text-white';
  const subtitleColor = isHome ? 'text-ink/85' : 'text-accent-lt';
  const activeLinkColor = isHome ? 'text-ink font-bold border-b-2 border-accent pb-0.5' : 'text-accent-lt font-semibold';
  const linkHoverColor = isHome ? 'text-ink/75 hover:text-ink' : 'text-white/85 hover:text-white';
  const chevronColor = isHome ? 'text-ink/80 hover:text-ink' : 'text-white/80 hover:text-white';

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
        <div className='flex items-center gap-3'>
          <Link
            to='/contact'
            className='hidden sm:inline-flex items-center justify-center h-9 px-4 rounded-lg text-xs font-semibold bg-accent text-white hover:bg-ink transition-colors shadow-sm'
          >
            Get In Touch
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className='lg:hidden p-2 rounded-lg text-current hover:bg-black/5 transition-colors focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center'
            aria-label={mobileOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <CloseIcon className='w-5 h-5' /> : <MenuIcon className='w-5 h-5' />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div
          className='lg:hidden fixed inset-x-0 top-16 bottom-0 bg-[#022731] text-white overflow-y-auto px-6 py-6 border-t border-white/10 shadow-2xl z-50'
          role='dialog'
          aria-modal='true'
        >
          <nav className='space-y-3 max-w-md mx-auto'>
            {NAV_LINKS.map((link) => {
              const hasChildren = link.items && link.items.length > 0;

              if (!hasChildren) {
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className='block text-[15px] font-medium py-3 border-b border-white/10 min-h-[44px] flex items-center hover:text-accent-lt transition-colors'
                  >
                    {link.label}
                  </Link>
                );
              }

              const isExpanded = mobileExpanded[link.label];

              return (
                <div key={link.label} className='border-b border-white/10 pb-2'>
                  <div className='flex items-center justify-between py-1'>
                    <Link
                      to={link.path}
                      onClick={() => setMobileOpen(false)}
                      className='text-[15px] font-medium text-white min-h-[44px] flex items-center flex-1 hover:text-accent-lt transition-colors'
                    >
                      {link.label}
                    </Link>
                    <button
                      type='button'
                      onClick={() => toggleMobileSection(link.label)}
                      className='p-2 text-white/70 hover:text-white min-h-[44px] min-w-[44px] flex items-center justify-center'
                      aria-label={`Toggle ${link.label} section`}
                      aria-expanded={isExpanded}
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </div>

                  {isExpanded && (
                    <div className='pl-3 py-1 space-y-1 border-l border-white/15 my-2'>
                      {link.items.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => setMobileOpen(false)}
                          className='block py-2.5 text-[13.5px] text-white/80 hover:text-accent-lt min-h-[40px] flex items-center transition-colors'
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <div className='pt-6'>
              <Link
                to='/contact'
                onClick={() => setMobileOpen(false)}
                className='w-full h-11 rounded-lg bg-accent text-white font-medium text-center flex items-center justify-center text-sm shadow-sm hover:bg-accent/90 transition-colors'
              >
                Request a Quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
