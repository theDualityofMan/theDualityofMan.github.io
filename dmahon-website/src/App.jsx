import { useState } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Layout from "./pages/Layout.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import CoopsPage from "./pages/CoopsPage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>  
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage/>} />
          <Route path="about" element={<AboutPage/>} />
          <Route path="coops" element={<CoopsPage/>} />
          <Route path="projects" element={<ProjectsPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
