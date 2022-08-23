import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductList from "./components/ProductList";
import TaskManager from "./components/TaskManager";
import Navbar from "./components/Navbar";

function App(){
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes> 
      <Route path="/" element={<Home />} />
      <Route path="/task-manager" element={<TaskManager />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/product" element={<ProductList />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;

