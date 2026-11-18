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
      className={`relative z-[1] h-screen min-h-screen overflow-hidden bg-[linear-gradient(180deg,#eaf3f5_0%,#e3eef0_100%)] ${inView ? 'in' : ''}`}
    >
      <Cutout src={PROPELLER} speed={-0.2} rot={-10} className='w-[clamp(360px,42vw,760px)] -left-[10vw] top-[6vh] origin-[40%_50%] mob:w-[80vw]' />
      <div className='absolute left-[54vw] top-[11vh] w-[min(520px,40vw)] mob:inset-x-4 mob:w-auto mob:top-auto mob:bottom-[6vh]'>
        <Num>03</Num>
        <Title className='mt-3 sm:mt-6'>Incorporated<br />in 1997</Title>
        <Copy wide>I.S.T. was incorporated in 1997 as a private company under the Company Act 1965. Its principal activities include, among others, a wide range of services related to Blasting, Painting and Hydro-Jetting in the Oil &amp; Gas Industry, Petrochemical, Oleo Chemicals, Marine and General Industries.</Copy>
        <Chips solid className='mt-3 sm:mt-[22px]' items={['Blasting', 'Painting', 'Hydro-Jetting']} />
        <Chips className='mt-2.5 sm:mt-4' items={['Oil & Gas', 'Petrochemical', 'Oleo Chemicals', 'Marine', 'General Industries']} />
      </div>
    </section>
  );
}
