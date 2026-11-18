import { PIPES } from '../config/assets.js';
import { useReveal } from '../hooks/useReveal.js';
import Cutout from './Cutout.jsx';
import { Num, Title, Copy } from './Type.jsx';

export default function SectionOne() {
  const [ref, inView] = useReveal();
  return (
    <section
      ref={ref}
      id='about'
      data-theme='light'
      className={`relative z-[2] h-screen min-h-screen overflow-hidden bg-[linear-gradient(180deg,#e3eef0_0%,#eaf3f5_100%)] ${
        inView ? 'in' : ''
      }`}
    >
      {/* Industrial Pipes Cutout — framed with positive left/top offsets to prevent clipping */}
      <Cutout
        src={PIPES}
        speed={0.12}
        rot={-3}
        className='w-[clamp(280px,32vw,520px)] left-[clamp(20px,3.5vw,56px)] top-[clamp(24px,4vh,60px)] origin-[20%_0%] mob:w-[72vw] mob:left-2 mob:top-[6vh] mob:opacity-75'
      />

      {/* Section Number 01 — anchored cleanly below the pipe cluster on desktop */}
      <Num className='absolute left-[clamp(20px,3.5vw,56px)] top-[clamp(380px,58vh,620px)] mob:top-[12vh] mob:left-auto mob:right-5'>
        01
      </Num>

      {/* Narrative Text on Right — dedicated column with clear separation from the 3D jet nozzle */}
      <div className='absolute left-[clamp(520px,54vw,760px)] top-[clamp(180px,34vh,360px)] w-[min(480px,40vw)] mob:inset-x-5 mob:w-auto mob:top-auto mob:bottom-[8vh]'>
        <Title>
          Consistently<br />High Quality
        </Title>
        <Copy>
          I.S.T. prides itself on the consistently high quality of its end services, and strives to continually raise its quality standards.
        </Copy>
      </div>
    </section>
  );
}