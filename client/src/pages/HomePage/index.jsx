import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Hero from '../../components/HomePage/Hero';
import {About} from '../../components/HomePage/About';
import Goals from '../../components/HomePage/Goals';
import Navbar from '../../components/Navbar';

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Goals />
      <Footer />
    </>
  );
}

export default HomePage;
