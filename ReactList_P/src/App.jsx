import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Contact from "../pages/Contact";
import Resume from "../pages/Resume";
import Work from "../pages/Work";
import AboutCompany from "../pages/AboutCompany";
import AboutProduct from "../pages/AboutProduct";
import Home from "../pages/Home"; // Import Home component
import About from "../pages/About"; // Import About component

const App = () => {
 

  return (
    <>
     

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} /> {/* Ensure Home is imported */}
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />}> {/* Ensure About is imported */}
              <Route path="aboutcompany" element={<AboutCompany />} />
              <Route path="aboutproduct" element={<AboutProduct />} />
            </Route>
            <Route path="contact" element={<Contact />} />
            <Route path="resume" element={<Resume />} />
            <Route path="works" element={<Work />} />
          </Route>
        </Routes>
      </BrowserRouter>
      
    </>
  );
};

export default App;
