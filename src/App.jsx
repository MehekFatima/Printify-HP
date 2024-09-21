import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BenefitCard from './components/BenefitCard';
import ProductDesignComponent from './components/ProductDesignComponent';
import PrintifySection from './components/PrintifySection';
import PrintifyIntegration from './components/PrintifyIntegration';
import Footer from './components/Footer';
import CustomerTestimonials from './components/CustomerTestimonials';

function App() {

  return (
    <>
     <Header/>
     <HeroSection/> 
     <BenefitCard/>
     <ProductDesignComponent/>
     <PrintifySection/>
     <PrintifyIntegration/>
     <CustomerTestimonials/>
     <Footer/>
    </>
  )
}

export default App
