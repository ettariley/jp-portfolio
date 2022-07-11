import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import './App.css';
import NavMenu from './components/navmenu/navmenu';
import Home from './components/home/home';
import Work from './components/work/work';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <NavMenu className="Nav" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer className="footer" />
    </div>
  );
}

export default App;
