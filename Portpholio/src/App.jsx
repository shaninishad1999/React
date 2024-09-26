// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';


// import components
import Header from "../components/Header"
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import About from '../components/About';
import Contact from '../components/Contact';
const App = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <About/>
    <Contact />
    <Footer/>
    
    </>
  )
}

export default App