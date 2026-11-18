import { Droplet } from './icons.jsx';

export default function Badge() {
  return (
    <div
      aria-label='Incorporated 1997'
      className='fixed z-30 right-4 sm:right-pad bottom-4 sm:bottom-6 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/95 backdrop-blur-md border border-[#022731]/15 shadow-sm text-[12px] font-medium'
    >
      <Droplet className='w-4 h-4 text-accent flex-shrink-0' />
      <span className='text-ink font-medium'>Incorporated</span>
      <strong className='font-bold text-accent font-mono text-[12.5px]'>1997</strong>
    </div>
  );
}
