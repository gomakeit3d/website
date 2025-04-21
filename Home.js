import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Page container with padding for the navbar
const PageContainer = styled.div`
  padding-top: 80px;
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
`;

const HeroTitle = styled(motion.h1)`
  font-size: 4.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: linear-gradient(90deg, #ffffff, #cccccc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2.5rem;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
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
  
  .image-placeholder {
    width: 100%;
    height: 100%;
    background: #222;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: rgba(255, 255, 255, 0.5);
  }
`;

// Services preview section
const ServicesPreviewSection = styled.section`
  padding: 6rem 2rem;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 3rem auto 0;
`;

const ServiceCard = styled(motion.div)`
  background: rgba(20, 20, 20, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 2rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    border-color: rgba(255, 255, 255, 0.2);
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const ServiceDescription = styled.p`
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 1.5rem;
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

const Home = () => {
  return (
    <PageContainer>
      <HeroSection>
        <HeroContent
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <HeroTitle>Premium Print On Demand Services</HeroTitle>
          <HeroSubtitle>Bringing Your Ideas To Life</HeroSubtitle>
          <ButtonGroup
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link to="/services">
              <Button>Explore Services</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline">Get Started</Button>
            </Link>
          </ButtonGroup>
        </HeroContent>
      </HeroSection>

      <AboutSection>
        <AboutContainer>
          <AboutContent
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>About GOMAKEIT</h2>
            <p>
              We are a premium print-on-demand service provider specializing in bringing your creative ideas to life through advanced 3D printing, modeling, and mockup creation services.
            </p>
            <p>
              Our mission is to empower businesses and creators with high-quality, sustainable manufacturing solutions that turn their concepts into reality.
            </p>
          </AboutContent>
          <AboutImage
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="image-placeholder">Company Image</div>
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
            <div className="number">500+</div>
            <div className="label">Projects Completed</div>
          </StatItem>
          <StatItem
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="number">100+</div>
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

      <ServicesPreviewSection>
        <ServicesGrid>
          <ServiceCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <ServiceTitle>Mock Up Creation</ServiceTitle>
            <ServiceDescription>
              Our mockup creation service provides realistic visualizations of your products in real-world contexts. Ideal for marketing, social media, and presentations.
            </ServiceDescription>
            <Link to="/services">
              <Button variant="text">Learn More →</Button>
            </Link>
          </ServiceCard>
          <ServiceCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <ServiceTitle>3D Modelling</ServiceTitle>
            <ServiceDescription>
              Our professional 3D modeling services transform your concepts into detailed digital models with precision and creativity. Perfect for product development, visualization, and manufacturing.
            </ServiceDescription>
            <Link to="/services">
              <Button variant="text">Learn More →</Button>
            </Link>
          </ServiceCard>
          <ServiceCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ServiceTitle>Custom 3D Printing</ServiceTitle>
            <ServiceDescription>
              We deliver high-quality custom 3D printed parts tailored to your business needs. Our advanced 3D printing capabilities produce functional prototypes, custom components, and small production runs.
            </ServiceDescription>
            <Link to="/services">
              <Button variant="text">Learn More →</Button>
            </Link>
          </ServiceCard>
        </ServicesGrid>
      </ServicesPreviewSection>

      <CTASection>
        <CTAContainer
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <CTATitle>Ready to Bring Your Ideas to Life?</CTATitle>
          <CTADescription>
            Let's discuss how we can help transform your concepts into reality with our premium print-on-demand services.
          </CTADescription>
          <Link to="/contact">
            <Button>Get Started Today</Button>
          </Link>
        </CTAContainer>
      </CTASection>
    </PageContainer>
  );
};

export default Home;
