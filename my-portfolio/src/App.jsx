
import './App.css';
import React from "react";
import { useEffect } from "react";
//import About from "./components/About/About";
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
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

export default function App() {
  /* const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/About" element={<About />} >
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Resume" element={<Resume />} />
      </Route>
    )
  ); */
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
    
     {/*  <About />
      <Projects />
      <Contact />
      <Resume />
      <Footer /> */}
    </>
  );
}