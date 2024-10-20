import React from "react";
import Task_1 from "../components/Task_1/Task_1";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarTop from "../components/Task_2/NavbarTop";
import Counter from "../components/Task_4/Counter";
import EmployeeForm from "../components/Task_5/EmployeeForm";
import EmployeeTable from "../components/Task_3/EmployeeTable";
import SearchComponent from "../components/Task_6/SearchComponent";
import StudentForm from "../components/Task_7/StudentForm ";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
const App = () => {
  return (
    <>
      {/* <NavbarTop/> */}
      {/* <Task_1/> */}

      {/* <Counter/> */}
      {/* <EmployeeForm/> */}
      {/* <EmployeeTable/> */}
      {/* <SearchComponent/> */}
      {/* <StudentForm/> */}

      <BrowserRouter>
        <Routes >
          <Route path="/" element={<Layout/>}>
          <Route index element={<Task_1/>}/>
          {/* <Route path="home" element={<Task_1/>}/> */}
          <Route path="about" element={<EmployeeTable/>}/>
          <Route path="services" element={<Counter/>}/>
          <Route path="placement" element={<EmployeeForm/>}/>
          <Route path="gallery" element={<SearchComponent/>}/>
          <Route path="contact" element={<StudentForm/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
