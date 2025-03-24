import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Join from './pages/Join';
import MyCompany from './pages/MyCompany';
import Myjoining from './pages/Myjoining';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Service />} />
          <Route path="join" element={<Join />} />
          <Route path="mycompany/:myname" element={<MyCompany />} />
          <Route path="myjoining/:id" element={<Myjoining />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
