import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Page container with padding for the navbar
const PageContainer = styled.div`
  padding-top: 80px;
  background-color: #000;
  min-height: 100vh;
`;

// Hero section with full height and centered content
const HeroSection = styled.section`
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  padding: 4rem 2rem;
`;

const HeroContent = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled(motion.h1)`
  font-size: 5.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: linear-gradient(90deg, #ffffff, #cccccc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  max-width: 1000px;
  line-height: 1.1;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    font-size: 3.5rem;
    max-width: 90%;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2.5rem;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PrimaryButton = styled(Link)`
  padding: 1rem 2rem;
  background: linear-gradient(90deg, #ff4d4d, #f9cb28);
  border: none;
  border-radius: 4px;
  color: #000;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(255, 77, 77, 0.3);
  }
`;

const SecondaryButton = styled(Link)`
  padding: 1rem 2rem;
  background: transparent;
  border: 1px solid #fff;
  border-radius: 4px;
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-3px);
  }
`;

// About section
const AboutSection = styled.section`
  padding: 6rem 2rem;
  background: rgba(10, 10, 10, 0.5);
  position: relative;
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutContent = styled(motion.div)`
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    font-weight: 700;
  }
  
  p {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }

  .btn-outline {
    display: inline-block;
    padding: 1rem 2rem;
    font-size: 1.1rem;
    font-weight: 600;
    text-decoration: none;
    border-radius: 5px;
    transition: all 0.3s ease;
    background: transparent;
    color: white;
    border: 2px solid white;

    &:hover {
      background: rgba(255, 255, 255, 0.1);
      transform: translateY(-2px);
    }
  }
`;

const AboutImage = styled(motion.div)`
  position: relative;
  height: 400px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(255, 77, 77, 0.2), rgba(249, 203, 40, 0.2));
    z-index: 1;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// Stats section
const StatsSection = styled.section`
  padding: 6rem 2rem;
  background: rgba(10, 10, 10, 0.5);
`;

const StatsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const StatItem = styled(motion.div)`
  text-align: center;
  padding: 2rem;
  
  .number {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
    background: linear-gradient(90deg, #ff4d4d, #f9cb28);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .label {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.8);
  }
`;

// CTA section
const CTASection = styled.section`
  padding: 6rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(255, 77, 77, 0.1), rgba(249, 203, 40, 0.1));
    z-index: -1;
  }
`;

const CTAContainer = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
`;

const CTATitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const CTADescription = styled(motion.p)`
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2.5rem;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const CTAButton = styled(Link)`
  display: inline-block;
  padding: 1rem 2rem;
  background: linear-gradient(90deg, #ff4d4d, #f9cb28);
  border: none;
  border-radius: 4px;
  color: #000;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(255, 77, 77, 0.3);
  }
`;

const Home = () => {
  return (
    <PageContainer>
      <HeroSection>
        <HeroContent
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Premium Print On Demand Services
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We bring your creative ideas to life with high-quality printing,
            customization, professional modelling, and realistic mockup creation.
          </Subtitle>
          <ButtonContainer
            as={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <PrimaryButton to="/services">Explore Services</PrimaryButton>
            <SecondaryButton to="/contact">Contact Us</SecondaryButton>
          </ButtonContainer>
        </HeroContent>
      </HeroSection>

      <AboutSection>
        <AboutContainer>
          <AboutContent
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Bringing Your Ideas To Life</h2>
            <p>
              At gomakeit, we specialize in premium print on demand services that transform your creative 
              concepts into tangible, high-quality products. Our team of experts combines technical 
              expertise with artistic vision to deliver exceptional results for businesses and individuals.
            </p>
            <p>
              Whether you need custom merchandise, promotional materials, or product visualizations, 
              we provide end-to-end solutions that meet your specific requirements and exceed your expectations.
            </p>
            <Link to="/services" className="btn-outline">Learn More</Link>
          </AboutContent>
          
          <AboutImage
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img src="/images/home_page_image.jpg" alt="Premium Print Services" />
          </AboutImage>
        </AboutContainer>
      </AboutSection>

      <StatsSection>
        <StatsContainer>
          <StatItem
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="number">100+</div>
            <div className="label">Projects Completed</div>
          </StatItem>
          
          <StatItem
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="number">50+</div>
            <div className="label">Happy Clients</div>
          </StatItem>
          
          <StatItem
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="number">100K+</div>
            <div className="label">Printing Hours</div>
          </StatItem>
          
          <StatItem
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="number">100%</div>
            <div className="label">Sustainable Materials</div>
          </StatItem>
        </StatsContainer>
      </StatsSection>

      <CTASection>
        <CTAContainer
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <CTATitle>Ready to Bring Your Ideas to Life?</CTATitle>
          <CTADescription>
            Contact us today to discuss your project and discover how our premium print on demand 
            services can help you achieve your goals.
          </CTADescription>
          <CTAButton to="/contact">Get Started</CTAButton>
        </CTAContainer>
      </CTASection>
    </PageContainer>
  );
};

export default Home; 