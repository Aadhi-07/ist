import { HERO_BG, SPLASH } from '../config/assets.js';
import Cutout from './Cutout.jsx';
import Join from './Join.jsx';

const bg = `${HERO_BG ? `url(${HERO_BG}) center/cover no-repeat, ` : ''}radial-gradient(900px 520px at 78% 12%,#f6fbfc 0%,transparent 60%), #dcebee`;

export default function Hero({ loaded }) {
  return (
    <section id='top' data-theme='light' style={{ background: bg }} className='relative z-[3] h-screen min-h-screen overflow-hidden'>
      <h1
        data-speed='0.55'
        className='absolute inset-x-0 top-[16vh] sm:top-[17vh] z-[2] text-center font-semibold text-[clamp(28px,5.2vw,86px)] leading-[1.08] tracking-[-0.03em] text-ink will-change-transform px-4'
      >
        {['Blasting, Painting', '& Hydro-Jetting'].map((t, i) => (
          <span key={t} className='block overflow-hidden pb-[.06em]'>
            <span className={`inline-block translate-y-[110%] ${loaded ? 'animate-rise' : ''} ${i ? '[animation-delay:.12s]' : ''}`}>{t}</span>
          </span>
        ))}
      </h1>

      <Cutout
        src={SPLASH}
        speed={-0.25}
        rot={8}
        className='w-[clamp(420px,64vw,1100px)] -left-[14vw] -bottom-[24vw] origin-[60%_40%] z-[1] [filter:drop-shadow(0_30px_40px_rgba(2,39,49,.18))] mob:w-[100vw] mob:-left-[30vw] mob:-bottom-[45vw]'
      />

      <div className={`absolute z-[2] right-[clamp(20px,6.5vw,120px)] top-[58vh] w-[min(280px,80vw)] opacity-0 ${loaded ? 'animate-fade' : ''} mob:top-auto mob:bottom-[12vh] mob:right-4 mob:w-[75vw] max-w-xs`}>
        <p className='text-[clamp(13px,1.25vw,17px)] leading-[1.45] font-normal text-ink/85'>
          Services for Oil &amp; Gas, Petrochemical, Oleo Chemicals, Marine and General Industries.
        </p>
        <Join href='#contact'>Get in touch</Join>
      </div>
    </section>
  );
}
