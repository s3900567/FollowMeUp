import Navbar from '../../components/Navbar';
import Hero from '../../components/HomePage/Hero';
import { About } from '../../components/HomePage/About';
import { Goals } from '../../components/HomePage/Goals';
import Footer from '../../components/Footer';

function App() {
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

export default App;
