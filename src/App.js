import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import NavMenu from './components/navmenu/navmenu';
import Home from './components/home/home';
import Work from './components/work/work';
import CaseStudy from './components/case-study/case-study';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import './App.css';

function App() {
  return (
      <Container fluid className="App d-flex flex-column justify-content-end">
        <NavMenu className="Nav" />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="jp-portfolio" element={<Home />} />
          <Route path="work" element={<Work />} />
          <Route path="case-study" element={<CaseStudy />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer className="footer" />
      </Container>
  );
}

export default App;
