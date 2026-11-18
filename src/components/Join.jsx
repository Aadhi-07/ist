import { Chevron } from './icons.jsx';

export default function Join({ href, className = '', children }) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-3 mt-6 sm:mt-8 font-medium text-[clamp(14px,1.2vw,16px)] text-ink hover:text-accent transition-colors min-h-[44px] py-1 ${className}`}
    >
      <span className='grid place-items-center w-6 h-7 rounded-md border border-current transition-transform duration-200 group-hover:translate-x-1'>
        <Chevron className='w-2.5 h-2.5' />
      </span>
      <span>{children}</span>
    </a>
  );
}
