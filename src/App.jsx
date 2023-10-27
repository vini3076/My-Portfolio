
import './App.css';
import React from "react";
import Home from './pages/Home';
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import Resume from './pages/Resume';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Route,
  Routes,
} from "react-router-dom";


export default function App() {
  
  return (
    <>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} /> 
				<Route path="/projects" element={<Projects />} />
				<Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
			</Routes>
      <Footer />
    
    </>
  );
}