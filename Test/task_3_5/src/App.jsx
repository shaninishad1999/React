import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Display from "./Pages/Display";
import Insert from "./Pages/Insert";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* Corrected default route */}
          <Route path="/home" element={<Home />} /> {/* Added Home route */}
          <Route path="/insert" element={<Insert/>} />
          <Route path="/display" element={<Display/>} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
