import Hero from '../components/Hero.jsx';
import SectionOne from '../components/SectionOne.jsx';
import SectionTwo from '../components/SectionTwo.jsx';
import SectionThree from '../components/SectionThree.jsx';
import Footer from '../components/Footer.jsx';

export default function Home({ loaded }) {
  return (
    <main>
      <Hero loaded={loaded} />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Footer />
    </main>
  );
}
