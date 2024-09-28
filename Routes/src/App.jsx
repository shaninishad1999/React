import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Aboout from "./pages/Aboout";
import Contact from "./pages/Contact";
import NoPages from "./NoPages";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
           <Route index element={<Home/>}/>
           <Route path="home" element={<Home/>}/>
           <Route path="about" element={<Aboout/>}/>
           <Route path="contact" element={<Contact/>}/>
           <Route path="*" element={<NoPages/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
