import { Droplet } from './icons.jsx';

export default function Nav({ onDark }) {
  return (
    <nav className={`fixed inset-x-0 top-0 z-30 flex items-center px-pad pt-[18px] pointer-events-none transition-colors duration-500 ${onDark ? 'text-white' : 'text-ink'}`}>
      <a href='#top' aria-label='Home' className='group pointer-events-auto grid place-items-center w-10 h-10 mr-[clamp(28px,5vw,66px)]'>
        <Droplet className='w-[38px] h-[38px] transition-transform duration-[600ms] ease-logo group-hover:-translate-y-[3px] group-hover:scale-[1.08]' />
      </a>
      <div className='pointer-events-auto flex gap-[clamp(22px,4.5vw,58px)] text-[15.5px] font-normal mob:hidden'>
        <a href='#about' className='link-u'>About</a>
        <a href='#contact' className='link-u'>Contact</a>
      </div>
      <a href='#contact' className='pointer-events-auto ml-auto text-base font-semibold pr-[clamp(0px,4vw,70px)]'>Get in touch</a>
    </nav>
  );
}
