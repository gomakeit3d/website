import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background: rgba(10, 10, 10, 0.8);
  padding: 4rem 2rem 2rem;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const FooterColumn = styled.div`
  h3 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 40px;
      height: 2px;
      background: linear-gradient(90deg, #ff4d4d, #f9cb28);
    }
  }
`;

const CompanyInfo = styled.div`
  p {
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
  
  .social-links {
    display: flex;
    gap: 1rem;
    margin-top: 1.5rem;
    
    a {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      
      &:hover {
        background: linear-gradient(90deg, #ff4d4d, #f9cb28);
        transform: translateY(-3px);
      }
    }
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  
  li {
    margin-bottom: 0.8rem;
    
    a {
      color: rgba(255, 255, 255, 0.7);
      transition: all 0.3s ease;
      display: inline-block;
      
      &:hover {
        color: #ffffff;
        transform: translateX(5px);
      }
    }
  }
`;

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 2rem;
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  
  .copyright {
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.9rem;
  }
  
  .footer-bottom-links {
    display: flex;
    gap: 1.5rem;
    
    a {
      color: rgba(255, 255, 255, 0.5);
      font-size: 0.9rem;
      transition: all 0.3s ease;
      
      &:hover {
        color: #ffffff;
      }
    }
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <CompanyInfo>
            <Link to="/">
              <div className="logo-box">
                <i className="fas fa-pen"></i>
              </div>
              <span className="logo-text">gomakeit</span>
            </Link>
            <p>
              Premium print on demand services for businesses and individuals. 
              We bring your creative ideas to life with high-quality printing and customization.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </CompanyInfo>
        </FooterColumn>
        
        <FooterColumn>
          <h3>Quick Links</h3>
          <FooterLinks>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </FooterLinks>
        </FooterColumn>
        
        <FooterColumn>
          <h3>Services</h3>
          <FooterLinks>
            <li><Link to="/services">Print on Demand</Link></li>
            <li><Link to="/services">Customization</Link></li>
            <li><Link to="/services">Modelling</Link></li>
            <li><Link to="/services">Mockup Creation</Link></li>
          </FooterLinks>
        </FooterColumn>
        
        <FooterColumn>
          <h3>Contact</h3>
          <FooterLinks>
            <li><a href="mailto:info@gomakeit.com">info@gomakeit.com</a></li>
            <li><a href="tel:+1234567890">+1 (234) 567-890</a></li>
            <li>123 Print Street, Design City</li>
          </FooterLinks>
        </FooterColumn>
      </FooterContent>
      
      <FooterBottom>
        <div className="copyright">
          &copy; {new Date().getFullYear()} gomakeit. All rights reserved.
        </div>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
