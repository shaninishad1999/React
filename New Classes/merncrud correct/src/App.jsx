import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Insert from "./Pages/Insert";
import Display from "./Pages/Display";
import Search from "./Pages/Search";
import Total_QTY from "./Pages/Total_QTY";
import Update from "./Pages/Update";
import EditData from "./Pages/EditData";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* Corrected default route */}
          <Route path="home" element={<Home />} /> {/* Added Home route */}
          <Route path="insert" element={<Insert />} />
          <Route path="display" element={<Display />} />
          <Route path="search" element={<Search />} />
          <Route path="totalqty" element={<Total_QTY />} />
          <Route path="update" element={<Update />} />
          <Route path="/edit/:id" element={<EditData />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
