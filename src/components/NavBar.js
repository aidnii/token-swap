import { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('swap');
    const [scrolled, seScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
          <Container>
            <Navbar.Brand href="#swap">
                <img src={logo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#swap" className={activeLink === 'swap' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('swap')}>swap</Nav.Link>
                <Nav.Link href="#tokens" className={activeLink === 'tokens' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('tokens')}>tokens</Nav.Link>
                <Nav.Link href="#stake" className={activeLink === 'stake' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('stake')}>stake</Nav.Link>
                <Nav.Link href="#pool" className={activeLink === 'pool' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('pool')}>pool</Nav.Link>
                
              </Nav>
              <span className="navbar-text">
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/indiahuguely/"><img src={navIcon1} alt="" /></a>
                    <a href="https://www.twitter.com/krypticlady"><img src={navIcon2} alt="" /></a>
                    <a href="https://www.github.com/aidnii"><img src={navIcon3} alt="" /></a>
                    <a href="mailto:krypticlady.dev@gmail.com"><img src={navIcon4} alt="" /></a>
                </div>
                <a href="https://calendly.com/krypticlady/intro" className="btn">let's chat!</a>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}