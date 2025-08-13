import { useState } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Layout from "./pages/Layout.jsx";

function App() {
  return (
    <BrowserRouter>
    <Routes>  
      <Route path = '/' element = {<Layout/>}>
        <Route path = '' element = {<HomePage/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
