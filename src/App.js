import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import "./components/Navbar.css";
import "./components/About.css";
 import "./components/Home.css";
import "./components/Project.css";


function App() {
  return (
    <Router>
      <div className='nav-links'>
        <Navigation />
       
        <main>
          <Routes>
            <Route path="/" element={<Home />} />  {/* Use imported components */}
            <Route path="/About" element={<About/>} />
            <Route path="/projects" element={<Projects />} />
        
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
     
    </Router>
  );
}

export default App;
