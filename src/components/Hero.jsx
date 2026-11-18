import { HERO_BG, SPLASH } from '../config/assets.js';
import Cutout from './Cutout.jsx';
import Join from './Join.jsx';

const bg = `${HERO_BG ? `url(${HERO_BG}) center/cover no-repeat, ` : ''}radial-gradient(900px 520px at 78% 12%,#f6fbfc 0%,transparent 60%), #dcebee`;

export default function Hero({ loaded }) {
  return (
    <section id='top' data-theme='light' style={{ background: bg }} className='relative z-[3] h-screen min-h-screen overflow-hidden'>
      {/* Hero Title — positioned with generous top clearance below the fixed 64px header */}
      <h1
        data-speed='0.3'
        className='absolute inset-x-0 top-[clamp(88px,11vh+48px,144px)] mob:top-[clamp(76px,8vh+48px,104px)] z-[2] text-center font-semibold text-[clamp(28px,4.8vw,80px)] leading-[1.08] tracking-[-0.03em] text-ink will-change-transform px-4 pointer-events-none'
      >
        {['Blasting, Painting', '& Hydro-Jetting'].map((t, i) => (
          <span key={t} className='block overflow-hidden pb-[.06em]'>
            <span className={`inline-block translate-y-[110%] ${loaded ? 'animate-rise' : ''} ${i ? '[animation-delay:.12s]' : ''}`}>
              {t}
            </span>
          </span>
        ))}
      </h1>

      {/* Water Splash Accent in Lower Left */}
      <Cutout
        src={SPLASH}
        speed={-0.15}
        rot={6}
        className='w-[clamp(360px,50vw,900px)] -left-[8vw] -bottom-[14vw] origin-[60%_40%] z-[1] [filter:drop-shadow(0_30px_40px_rgba(2,39,49,.18))] mob:w-[90vw] mob:-left-[18vw] mob:-bottom-[30vw]'
      />

      {/* Side Narrative & Call-to-Action */}
      <div className={`absolute z-[2] right-[clamp(24px,6vw,120px)] top-[54vh] w-[min(290px,28vw)] opacity-0 ${loaded ? 'animate-fade' : ''} mob:top-auto mob:bottom-[10vh] mob:right-5 mob:w-[82vw] max-w-xs`}>
        <p className='text-[clamp(13px,1.15vw,16.5px)] leading-[1.5] font-normal text-ink/85 mb-3'>
          Services for Oil &amp; Gas, Petrochemical, Oleo Chemicals, Marine and General Industries.
        </p>
        <Join href='#contact'>Get in touch</Join>
      </div>
    </section>
  );
}