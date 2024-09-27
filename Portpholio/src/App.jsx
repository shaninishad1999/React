// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';


// import components
import Header from "../components/Header"
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import About from '../components/About';
import Contact from '../components/Contact';
import Skills from '../components/Skills';
const App = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <About/>
    <Skills/>
    <Contact />
    <Footer/>
    
    </>
  )
}

export default App