import { S2_BG, TANK } from '../config/assets.js';
import { useReveal } from '../hooks/useReveal.js';
import Cutout from './Cutout.jsx';
import { Num, Title, Copy } from './Type.jsx';

export default function SectionTwo() {
  const [ref, inView] = useReveal();
  return (
    <section
      ref={ref}
      id='dyna-jet'
      data-theme='light'
      style={{
        background: `${
          S2_BG ? `url(${S2_BG}) center/cover no-repeat, ` : ''
        }linear-gradient(180deg, #dcebee 0%, #e8f3f5 50%, #dcebee 100%)`,
      }}
      className={`relative z-[3] h-screen min-h-screen overflow-hidden text-ink ${
        inView ? 'in' : ''
      }`}
    >
      {/* Narrative on Left */}
      <div className='absolute left-[clamp(24px,5.5vw,72px)] top-[clamp(140px,22vh,240px)] w-[min(480px,42vw)] mob:inset-x-5 mob:w-auto mob:top-[12vh] z-10'>
        <Num>02</Num>
        <Title className='mt-3 sm:mt-5'>
          Backed by<br />Dyna-Jet
        </Title>
        <Copy>
          Through the association with Dyna-Jet Pte Ltd, I.S.T. has access to
          years of experience and the resources of one of the largest specialist
          cleaning companies in the region.
        </Copy>
      </div>

      {/* Storage Tank Cutout on Right — well grounded and properly framed within section boundaries */}
      <Cutout
        src={TANK}
        speed={-0.12}
        rot={4}
        className='w-[clamp(300px,38vw,620px)] right-[clamp(16px,2.5vw,48px)] bottom-0 origin-[30%_30%] z-[2] [filter:drop-shadow(0_25px_40px_rgba(2,39,49,.14))] mob:w-[85vw] mob:-right-6 mob:bottom-0'
      />
    </section>
  );
}