import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #000;
  color: #fff;
  padding: 4rem 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FooterSection = styled.div`
  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: #fff;
  }
`;

const CompanyInfo = styled(FooterSection)`
  .logo {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
    
    img {
      height: 50px;
      width: auto;
    }
    
    span {
      font-size: 1.5rem;
      font-weight: 700;
    }
  }
  
  p {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  
  a {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    transition: all 0.3s ease;
    
    &:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: translateY(-3px);
    }
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  a {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    transition: all 0.3s ease;
    
    &:hover {
      color: #fff;
      transform: translateX(5px);
    }
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  p {
    color: rgba(255, 255, 255, 0.7);
    display: flex;
    flex-direction: column;
  }
`;

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <FooterContainer>
      <FooterContent>
        <CompanyInfo>
          <Link to="/" className="logo" onClick={scrollToTop}>
            <img src="/images/makeit_logo.png" alt="GoMakeIt Logo" />
          </Link>
          <p>
            Premium print on demand services for businesses and individuals. We bring your creative ideas to life with
            high-quality printing and customization.
          </p>
          <SocialLinks>
            <a href="https://www.instagram.com/gomakeitpt/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </SocialLinks>
        </CompanyInfo>

        <FooterSection>
          <h3>Quick Links</h3>
          <FooterLinks>
            <Link to="/" onClick={scrollToTop}>Home</Link>
            <Link to="/services" onClick={scrollToTop}>Services</Link>
            <Link to="/portfolio" onClick={scrollToTop}>Portfolio</Link>
            <Link to="/contact" onClick={scrollToTop}>Contact</Link>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <h3>Contact</h3>
          <ContactInfo>
            <p>
              <a href="mailto:info@gomakeit.com">info@gomakeit.com</a>
            </p>
          </ContactInfo>
        </FooterSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 