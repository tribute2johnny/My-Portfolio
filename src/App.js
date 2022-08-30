import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Components/About';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Navbar from './Components/Navbar';
import ErrorPage from './Components/ErrorPage';
import Contact from './Components/Contact';


function App() {
  return (
    <div className='App'>
      <Router >

        <div className='main'>

          <Navbar />

          <Routes>
            <Route path="/portfolio" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </Router>
      <footer className='footer'>
        info
      </footer>
    </div>

  );
}

export default App;
