import { PIPES } from '../config/assets.js';
import { useReveal } from '../hooks/useReveal.js';
import Cutout from './Cutout.jsx';
import { Num, Title, Copy } from './Type.jsx';

export default function SectionOne() {
  const [ref, inView] = useReveal();
  return (
    <section ref={ref} id='about' data-theme='light' className={`relative z-[2] h-screen min-h-screen overflow-hidden bg-[linear-gradient(180deg,#e3eef0_0%,#eaf3f5_100%)] ${inView ? 'in' : ''}`}>
      <Cutout src={PIPES} speed={0.35} rot={-6} className='w-[clamp(380px,46vw,820px)] -left-[9vw] -top-[14vw] origin-[50%_0%]' />
      <Num className='absolute left-[6vw] top-[50vh] mob:top-[16vh] mob:left-auto mob:right-[6vw]'>01</Num>
      <div className='absolute left-[50vw] top-[41vh] w-[min(520px,44vw)] mob:inset-x-4 mob:w-auto mob:top-auto mob:bottom-[8vh]'>
        <Title>Consistently<br />High Quality</Title>
        <Copy>I.S.T. prides itself on the consistently high quality of its end services, and strives to continually raise its quality standards.</Copy>
      </div>
    </section>
  );
}
