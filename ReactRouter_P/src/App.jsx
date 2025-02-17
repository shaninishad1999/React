//  npm i react-router-dom

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Resume from "../pages/Resume";
import NoPages from "../pages/NoPages";
import Contact from "../pages/Contact";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="blog" element={<Blog/>}/>
            <Route path="resume" element={<Resume/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="*" element={<NoPages/>}/>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
