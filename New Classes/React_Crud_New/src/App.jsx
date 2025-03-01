import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Insert from "./pages/Insert";
import Update from "./pages/Update";
import Display from "./pages/Display";
import NotFound from "./pages/NotFound";
import Layout from "./Layout";
import Search from "./pages/Search";
import Contact from "./pages/Contact";
import EditData from "./pages/EditData";

const App = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="home" element={<Home />} /> */}
          <Route path="insert" element={<Insert />} />
          <Route path="update" element={<Update />} />
          <Route path="search" element={<Search />} />
          <Route path="display" element={<Display />} />
          <Route path="contact" element={<Contact />} />
          <Route path="editdata/:id" element={<EditData />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;
