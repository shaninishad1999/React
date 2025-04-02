// App.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home';
import Counter from './components/Counter';

import TodoList from './components/TodoList';
import Contact from './components/Contact';
import ThemeChanger from './components/ThemeChanger';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="counter" element={<Counter />} />
          <Route path="themechange" element={<ThemeChanger />} />
          <Route path="todolist" element={<TodoList/>} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;