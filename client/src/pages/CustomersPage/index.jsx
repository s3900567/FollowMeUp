import Footer from '../../components/Footer';
import Hero from '../../components/CustomersPage/Hero';
import Navbar from '../../components/Navbar';
import Reviews from '../../components/CustomersPage/Reviews';

function CustomersPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Reviews />
      {/* <Extra /> */}
      <Footer />
    </>
  );
}

export default CustomersPage;
