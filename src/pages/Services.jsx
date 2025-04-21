import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PageContainer = styled.div`
  padding-top: 80px;
  background-color: #000;
  color: #fff;
  min-height: 100vh;
`;

const HeroSection = styled.section`
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  padding: 4rem 2rem;
  background: rgba(10, 10, 10, 0.5);
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: linear-gradient(90deg, #ffffff, #cccccc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1rem;
  line-height: 1.6;
  max-width: 800px;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ServicesSection = styled.section`
  padding: 6rem 2rem;
`;

const ServiceContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ServiceRow = styled.div`
  display: flex;
  flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};
  margin-bottom: 8rem;
  gap: 4rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 5rem;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const ServiceContent = styled(motion.div)`
  flex: 1;
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

const ServiceTitle = styled.h2`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(90deg, #ffffff, #cccccc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ServiceDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7;
  margin-bottom: 2rem;
  font-size: 1.1rem;
`;

const ServiceFeatures = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  
  &:before {
    content: "✓";
    margin-right: 12px;
    color: #f9cb28;
  }
  
  color: rgba(255, 255, 255, 0.8);
`;

const ServiceImage = styled.div`
  flex: 1;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// Process Section Styles
const ProcessSection = styled.section`
  padding: 6rem 2rem;
  background: rgba(10, 10, 10, 0.5);
`;

const ProcessContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(90deg, #ffffff, #cccccc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 4rem;
  line-height: 1.6;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const ProcessSteps = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const ProcessStep = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  text-align: left;
  gap: 2rem;

  .step-number {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: linear-gradient(90deg, #ff4d4d, #f9cb28);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 700;
    color: #000;
    flex-shrink: 0;
  }

  .step-content {
    flex: 1;
  }

  .step-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #fff;
  }

  .step-description {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
    font-size: 1.1rem;
  }
`;

const GetStarted = styled(Link)`
  display: inline-block;
  margin-top: 2rem;
  padding: 1rem 2rem;
  background: transparent;
  border: 1px solid #fff;
  border-radius: 4px;
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-3px);
  }
`;

const Services = () => {
  return (
    <PageContainer>
      <HeroSection>
        <HeroTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </HeroTitle>
        <HeroSubtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Discover our comprehensive range of premium services designed to bring your
          creative ideas to life.
        </HeroSubtitle>
      </HeroSection>
      
      <ServicesSection>
        <ServiceContainer>
          <ServiceRow>
            <ServiceContent
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ServiceTitle>Mock Up Creation</ServiceTitle>
              <ServiceDescription>
                Our mockup creation service provides realistic visualizations of your products in real-world contexts. Ideal for marketing, social
                media, and presentations.
              </ServiceDescription>
              <ServiceFeatures>
                <FeatureItem>Photorealistic product mockups</FeatureItem>
                <FeatureItem>Lifestyle/contextual scenes</FeatureItem>
                <FeatureItem>Multiple product variations</FeatureItem>
                <FeatureItem>Social media optimized formats</FeatureItem>
              </ServiceFeatures>
              <GetStarted to="/contact">Get Started</GetStarted>
            </ServiceContent>
            <ServiceImage
              as={motion.div}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img src="/images/mockups/mockup.png" alt="Mock Up Creation Service" />
            </ServiceImage>
          </ServiceRow>

          <ServiceRow reverse>
            <ServiceContent
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ServiceTitle>3D Modelling</ServiceTitle>
              <ServiceDescription>
                Our professional 3D modeling services transform your concepts into detailed digital models with precision and creativity. Perfect for product development, visualization, and manufacturing.
              </ServiceDescription>
              <ServiceFeatures>
                <FeatureItem>Product design modelling</FeatureItem>
                <FeatureItem>Architectural visualization</FeatureItem>
                <FeatureItem>Technical and mecanical modeling</FeatureItem>
                <FeatureItem>Print-ready, high-resolution files</FeatureItem>
              </ServiceFeatures>
              <GetStarted to="/contact">Get Started</GetStarted>
            </ServiceContent>
            <ServiceImage
              as={motion.div}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img src="/images/3d-models/3d modelling.png" alt="3D Modelling Service" />
            </ServiceImage>
          </ServiceRow>

          <ServiceRow>
            <ServiceContent
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ServiceTitle>Custom 3D Printing</ServiceTitle>
              <ServiceDescription>
                We deliver high-quality custom 3D printed parts tailored to your business needs. Our advanced 3D printing capabilities produce functional prototypes, custom components, and small production runs.
              </ServiceDescription>
              <ServiceFeatures>
                <FeatureItem>Functional prototypes</FeatureItem>
                <FeatureItem>Custom parts/components</FeatureItem>
                <FeatureItem>Various materials and finishes</FeatureItem>
              </ServiceFeatures>
              <GetStarted to="/contact">Get Started</GetStarted>
            </ServiceContent>
            <ServiceImage
              as={motion.div}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img src="/images/printed-products/3d printing.png" alt="Custom 3D Printing Service" />
            </ServiceImage>
          </ServiceRow>
        </ServiceContainer>
      </ServicesSection>

      <ProcessSection>
        <ProcessContainer>
          <SectionTitle>Our Process</SectionTitle>
          <SectionSubtitle>
            We follow a streamlined process to ensure your project is completed efficiently and to your satisfaction
          </SectionSubtitle>
          
          <ProcessSteps>
            <ProcessStep
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="step-number">1</div>
              <div className="step-content">
                <div className="step-title">Consultation</div>
                <div className="step-description">
                  We begin with a detailed consultation to understand your project requirements, goals, and vision.
                </div>
              </div>
            </ProcessStep>
            
            <ProcessStep
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="step-number">2</div>
              <div className="step-content">
                <div className="step-title">Concept Development</div>
                <div className="step-description">
                  Our team develops initial concepts and designs based on your specifications and feedback.
                </div>
              </div>
            </ProcessStep>
            
            <ProcessStep
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="step-number">3</div>
              <div className="step-content">
                <div className="step-title">Creation & Refinement</div>
                <div className="step-description">
                  We create detailed 3D models, realistic mock-ups, and produce the final product based on your feedback.
                </div>
              </div>
            </ProcessStep>
            
            <ProcessStep
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="step-number">4</div>
              <div className="step-content">
                <div className="step-title">Delivery</div>
                <div className="step-description">
                  Final deliverables are provided in your required format, along with any necessary documentation or support.
                </div>
              </div>
            </ProcessStep>
          </ProcessSteps>
        </ProcessContainer>
      </ProcessSection>
    </PageContainer>
  );
};

export default Services; 