import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Layout";
import Home from "./Pages/Home";

import About from "./Pages/About";
import Services from "./Pages/Services";
import Placement from "./Pages/Placement";
import Gallery from "./Pages/Gallery";
import Contact_Us from "./Pages/Contact_Us";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* Corrected default route */}
          <Route path="home" element={<Home />} /> {/* Added Home route */}
          <Route path="about" element={<About/>} />
          <Route path="services" element={<Services />} />
          <Route path="placement" element={<Placement/>} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact_Us />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
