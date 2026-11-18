import { PROPELLER } from '../config/assets.js';
import { useReveal } from '../hooks/useReveal.js';
import Cutout from './Cutout.jsx';
import { Num, Title, Copy, Chips } from './Type.jsx';

export default function SectionThree() {
  const [ref, inView] = useReveal();
  return (
    <section
      ref={ref}
      data-theme='light'
      className={`relative z-[1] h-screen min-h-screen overflow-hidden bg-[linear-gradient(180deg,#eaf3f5_0%,#e3eef0_100%)] ${
        inView ? 'in' : ''
      }`}
    >
      {/* Ship Propeller Cutout on Left — positive left offset ensures unclipped framing */}
      <Cutout
        src={PROPELLER}
        speed={-0.12}
        rot={-4}
        className='w-[clamp(280px,36vw,560px)] left-[clamp(20px,3vw,50px)] top-[clamp(40px,8vh,90px)] origin-[40%_50%] mob:w-[75vw] mob:-left-4 mob:top-[6vh]'
      />

      {/* Narrative on Right */}
      <div className='absolute left-[clamp(520px,54vw,760px)] top-[clamp(70px,10vh,140px)] w-[min(480px,42vw)] mob:inset-x-5 mob:w-auto mob:top-auto mob:bottom-[6vh]'>
        <Num>03</Num>
        <Title className='mt-3 sm:mt-5'>
          Incorporated<br />in 1997
        </Title>
        <Copy wide>
          I.S.T. was incorporated in 1997 as a private company under the Company Act 1965. Its principal activities include, among others, a wide range of services related to Blasting, Painting and Hydro-Jetting in the Oil &amp; Gas Industry, Petrochemical, Oleo Chemicals, Marine and General Industries.
        </Copy>
        <Chips solid className='mt-3 sm:mt-5' items={['Blasting', 'Painting', 'Hydro-Jetting']} />
        <Chips className='mt-2 sm:mt-3' items={['Oil & Gas', 'Petrochemical', 'Oleo Chemicals', 'Marine', 'General Industries']} />
      </div>
    </section>
  );
}