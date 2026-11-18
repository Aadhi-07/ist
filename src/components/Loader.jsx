import { Droplet } from './icons.jsx';

export default function Loader({ done }) {
  return (
    <div className={`fixed inset-0 z-50 grid place-items-center bg-mist transition-[opacity,visibility] duration-[800ms] ${done ? 'opacity-0 invisible' : ''}`}>
      <Droplet className='w-[46px] h-[46px] text-ink animate-beat' />
    </div>
  );
}
