import Layout from "../Layout/Layout";
import "./App.css";
import Home from "../Home/Home"; 
import Insert from "../Insert/Insert"; 
import Display from "../Display/Display"; 
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="insert" element={<Insert />} />
            <Route path="display" element={<Display />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
