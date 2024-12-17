import React, { useState, useEffect } from "react";
import { Nav, Container, Navbar } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll";

import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/icons8-github(2).svg';

export default function NavBar() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className='navbar-toggle-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Enlaces usando react-scroll */}
            <Nav.Link
              as={ScrollLink}
              to="home" // ID de la sección
              smooth={true}
              duration={500} // Duración del desplazamiento en milisegundos
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={ScrollLink}
              to="skills"
              smooth={true}
              duration={500}
              className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('skills')}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              as={ScrollLink}
              to="projects"
              smooth={true}
              duration={500}
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('projects')}
            >
              Projects
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <span className='navbar-text'>
          <div className='social-icon'>
            <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/nicolas-ruiz-037aa5222/'>
              <img src={navIcon1} alt="" />
            </a>
            <a target="_blank" rel='noreferrer' href='https://github.com/IamNewInThis'>
              <img src={navIcon2} alt="" />
            </a>

            <button className='vdd' onClick={() => console.log('connect')}>
              <span>Let's Connect</span>
            </button>
          </div>
        </span>
      </Container>
    </Navbar>
  );
}
