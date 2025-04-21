import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 1rem 2rem;
  transition: all 0.3s ease;
  background: ${props => props.scrolled ? 'rgba(0, 0, 0, 0.9)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  box-shadow: ${props => props.scrolled ? '0 5px 20px rgba(0, 0, 0, 0.5)' : 'none'};
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  
  img {
    height: 80px; /* Decreased from 135px */
    transition: all 0.3s ease;
    filter: brightness(1.1); /* Makes the logo slightly brighter to stand out */
  }
  
  &:hover img {
    transform: scale(1.05);
  }
  
  @media (max-width: 768px) {
    img {
      height: 65px; /* Decreased from 112px */
    }
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  position: relative;
  font-weight: 500;
  transition: all 0.3s ease;
  opacity: ${props => props.active ? '1' : '0.7'};
  
  &:hover {
    opacity: 1;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${props => props.active ? '100%' : '0'};
    height: 2px;
    background: linear-gradient(90deg, #ff4d4d, #f9cb28);
    transition: all 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 70%;
  max-width: 300px;
  height: 100vh;
  background: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1001;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  
  .close-button {
    align-self: flex-end;
    background: transparent;
    border: none;
    color: white;
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;

const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
`;

const MobileNavLink = styled(Link)`
  font-size: 1.2rem;
  font-weight: 500;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  opacity: ${props => props.active ? '1' : '0.7'};
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <NavContainer scrolled={scrolled}>
      <NavContent>
        <Logo to="/">
          <img src="/images/makeit_logo.png" alt="GoMakeIt Logo" />
        </Logo>
        
        <NavLinks>
          <NavLink to="/" active={location.pathname === '/' ? 1 : 0}>
            Home
          </NavLink>
          <NavLink 
            to="/services" 
            active={location.pathname === '/services' ? 1 : 0}
            onClick={scrollToTop}
          >
            Services
          </NavLink>
          <NavLink 
            to="/portfolio" 
            active={location.pathname === '/portfolio' ? 1 : 0}
            onClick={scrollToTop}
          >
            Portfolio
          </NavLink>
          <NavLink 
            to="/contact" 
            active={location.pathname === '/contact' ? 1 : 0}
            onClick={scrollToTop}
          >
            Contact
          </NavLink>
        </NavLinks>
        
        <MobileMenuButton onClick={toggleMobileMenu}>
          <i className="fas fa-bars"></i>
        </MobileMenuButton>
      </NavContent>
      
      {mobileMenuOpen && (
        <Overlay 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeMobileMenu}
        />
      )}
      
      <MobileMenu
        initial={{ x: '100%' }}
        animate={{ x: mobileMenuOpen ? 0 : '100%' }}
        transition={{ type: 'tween', duration: 0.3 }}
      >
        <button className="close-button" onClick={closeMobileMenu}>
          <i className="fas fa-times"></i>
        </button>
        
        <MobileNavLinks>
          <MobileNavLink 
            to="/" 
            active={location.pathname === '/' ? 1 : 0} 
            onClick={() => {
              closeMobileMenu();
              scrollToTop();
            }}
          >
            Home
          </MobileNavLink>
          <MobileNavLink 
            to="/services" 
            active={location.pathname === '/services' ? 1 : 0} 
            onClick={() => {
              scrollToTop();
              closeMobileMenu();
            }}
          >
            Services
          </MobileNavLink>
          <MobileNavLink 
            to="/portfolio" 
            active={location.pathname === '/portfolio' ? 1 : 0} 
            onClick={() => {
              scrollToTop();
              closeMobileMenu();
            }}
          >
            Portfolio
          </MobileNavLink>
          <MobileNavLink 
            to="/contact" 
            active={location.pathname === '/contact' ? 1 : 0} 
            onClick={() => {
              scrollToTop();
              closeMobileMenu();
            }}
          >
            Contact
          </MobileNavLink>
        </MobileNavLinks>
      </MobileMenu>
    </NavContainer>
  );
};

export default Navbar; 