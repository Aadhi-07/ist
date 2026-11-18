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
      <div className='absolute left-[6vw] top-[22vh] w-[min(500px,46vw)] mob:inset-x-4 mob:w-auto mob:top-[12vh] z-10'>
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
      <Cutout
        src={TANK}
        speed={-0.3}
        rot={10}
        className='w-[clamp(380px,46vw,820px)] -right-[8vw] -bottom-[20vw] origin-[30%_30%] z-[2] [filter:drop-shadow(0_40px_60px_rgba(2,39,49,.16))] mob:w-[95vw] mob:-right-[18vw] mob:-bottom-[35vw]'
      />
    </section>
  );
}
