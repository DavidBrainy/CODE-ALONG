import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ProductList from "./pages/ProductList";
import TaskManager from "./pages/TaskManager";
import Navbar from "./components/Navbar";
import ProductDetail from "./pages/ProductDetail";

function App(){
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes> 
      <Route path="/" element={<Home />} />
      <Route path="/task-manager" element={<TaskManager />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products/:productId" element={<ProductDetail />} />
      <Route path="/product" element={<ProductList />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;














