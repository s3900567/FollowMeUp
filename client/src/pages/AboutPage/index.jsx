import Navbar from '../../components/Navbar';
import Hero from '../../components/AboutPage/Hero';
import Footer from '../../components/Footer';
import { Middle } from '../../components/AboutPage/Middle';
import Info from '../../components/AboutPage/Info';
import Extend from '../../components/AboutPage/Extend';
import { Break } from '../../components/AboutPage/Break';

function AboutPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Middle />
      <Info />
      <Break />
      <Extend />
      <Footer />
    </>
  );
}

export default AboutPage;
