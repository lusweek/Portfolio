import './App.css';
import About from './Components/About';
import { ContactUs } from './Components/Contact/ContactUs';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import ServiseSection from './Components/ServiceSection/ServiseSection';

function App() {
  return (
    <>      
      <Navbar />
      <Hero />
      <About />
      <ServiseSection />
      <ContactUs />
      <Footer />
    </>

  );
}

export default App;
