import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PageContainer = styled.div`
  padding-top: 80px;
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

// Services section
const ServicesSection = styled.section`
  padding: 6rem 2rem;
`;

const ServiceContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

// New service layout components
const ServiceRow = styled.div`
  display: flex;
  flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};
  margin-bottom: 8rem;
  
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
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
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
  align-items: flex-start;
  
  .check-icon {
    color: #f9cb28;
    margin-right: 1rem;
    font-size: 1.2rem;
  }
  
  .feature-text {
    color: rgba(255, 255, 255, 0.8);
  }
`;

const ServiceImage = styled.div`
  flex: 1;
  background: rgba(60, 30, 20, 0.5);
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.5rem;
  
  @media (max-width: 768px) {
    min-height: 300px;
  }
`;

const GetStartedButton = styled.a`
  display: inline-block;
  padding: 0.8rem 2rem;
  background: transparent;
  border: 1px solid #ffffff;
  border-radius: 4px;
  color: #ffffff;
  font-weight: 600;
  margin-top: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-3px);
  }
`;

// Process section
const ProcessSection = styled.section`
  padding: 6rem 2rem;
  background: rgba(10, 10, 10, 0.5);
`;

const ProcessContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ProcessSteps = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-top: 4rem;
`;

const ProcessStep = styled(motion.div)`
  text-align: center;
  
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
    margin: 0 auto 1.5rem;
    color: #000;
  }
  
  .step-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  
  .step-description {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
  }
`;

// FAQ section
const FAQSection = styled.section`
  padding: 6rem 2rem;
`;

const FAQContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FAQItem = styled(motion.div)`
  margin-bottom: 1.5rem;
  background: rgba(20, 20, 20, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 1.5rem;
  
  .question {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  
  .answer {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
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

const Button = styled.button`
  padding: 0.8rem 2rem;
  background: transparent;
  border: 1px solid #ffffff;
  border-radius: 4px;
  color: #ffffff;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
`;

const Services = () => {
  return (
    <PageContainer>
      <HeroSection>
        <HeroTitle>Our Services</HeroTitle>
        <HeroSubtitle>
          Comprehensive solutions for your product development and visualization needs
        </HeroSubtitle>
      </HeroSection>

      <ServicesSection>
        <ServiceContainer>
          <ServiceContent
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ServiceTitle>Mock Up Creation</ServiceTitle>
            <ServiceDescription>
              Our mockup creation service provides realistic visualizations of your products in real-world contexts. Ideal for marketing, social media, and presentations.
            </ServiceDescription>
            <ServiceFeatures>
              <FeatureItem>
                <div className="check-icon">✓</div>
                <div className="feature-text">Photorealistic product mockups</div>
              </FeatureItem>
              <FeatureItem>
                <div className="check-icon">✓</div>
                <div className="feature-text">Lifestyle/contextual scenes</div>
              </FeatureItem>
              <FeatureItem>
                <div className="check-icon">✓</div>
                <div className="feature-text">Multiple product variations</div>
              </FeatureItem>
              <FeatureItem>
                <div className="check-icon">✓</div>
                <div className="feature-text">Social media optimized formats</div>
              </FeatureItem>
            </ServiceFeatures>
            <ServiceImage>
              <div className="image-placeholder">Mock Up Example</div>
            </ServiceImage>
          </ServiceContent>

          <ServiceContent
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ServiceTitle>3D Modelling</ServiceTitle>
            <ServiceDescription>
              Our professional 3D modeling services transform your concepts into detailed digital models with precision and creativity. Perfect for product development, visualization, and manufacturing.
            </ServiceDescription>
            <ServiceFeatures>
              <FeatureItem>
                <div className="check-icon">✓</div>
                <div className="feature-text">Product design modelling</div>
              </FeatureItem>
              <FeatureItem>
                <div className="check-icon">✓</div>
                <div className="feature-text">Architectural visualization</div>
              </FeatureItem>
              <FeatureItem>
                <div className="check-icon">✓</div>
                <div className="feature-text">Technical and mechanical modeling</div>
              </FeatureItem>
              <FeatureItem>
                <div className="check-icon">✓</div>
                <div className="feature-text">Print-ready, high-resolution files</div>
              </FeatureItem>
            </ServiceFeatures>
            <ServiceImage>
              <div className="image-placeholder">3D Model Example</div>
            </ServiceImage>
          </ServiceContent>

          <ServiceContent
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <ServiceTitle>Custom 3D Printing</ServiceTitle>
            <ServiceDescription>
              We deliver high-quality custom 3D printed parts tailored to your business needs. Our advanced 3D printing capabilities produce functional prototypes, custom components, and small production runs.
            </ServiceDescription>
            <ServiceFeatures>
              <FeatureItem>
                <div className="check-icon">✓</div>
                <div className="feature-text">Functional prototypes</div>
              </FeatureItem>
              <FeatureItem>
                <div className="check-icon">✓</div>
                <div className="feature-text">Custom parts/components</div>
              </FeatureItem>
              <FeatureItem>
                <div className="check-icon">✓</div>
                <div className="feature-text">Various materials and finishes</div>
              </FeatureItem>
            </ServiceFeatures>
            <ServiceImage>
              <div className="image-placeholder">3D Print Example</div>
            </ServiceImage>
          </ServiceContent>
        </ServiceContainer>
      </ServicesSection>

      <ProcessSection>
        <ProcessContainer>
          <h2 className="section-title">Our Process</h2>
          <p className="section-subtitle">
            We follow a streamlined process to ensure your project is completed efficiently and to your satisfaction
          </p>
          
          <ProcessSteps style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <ProcessStep
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              style={{ display: 'flex', alignItems: 'flex-start', textAlign: 'left' }}
            >
              <div className="step-number" style={{ marginRight: '2rem', flexShrink: 0 }}>1</div>
              <div>
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
              style={{ display: 'flex', alignItems: 'flex-start', textAlign: 'left' }}
            >
              <div className="step-number" style={{ marginRight: '2rem', flexShrink: 0 }}>2</div>
              <div>
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
              style={{ display: 'flex', alignItems: 'flex-start', textAlign: 'left' }}
            >
              <div className="step-number" style={{ marginRight: '2rem', flexShrink: 0 }}>3</div>
              <div>
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
              style={{ display: 'flex', alignItems: 'flex-start', textAlign: 'left' }}
            >
              <div className="step-number" style={{ marginRight: '2rem', flexShrink: 0 }}>4</div>
              <div>
                <div className="step-title">Delivery</div>
                <div className="step-description">
                  Final deliverables are provided in your required format, along with any necessary documentation or support.
                </div>
              </div>
            </ProcessStep>
          </ProcessSteps>
        </ProcessContainer>
      </ProcessSection>
      
      {/* FAQ Section */}
      <FAQSection>
        <FAQContainer>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Find answers to common questions about our services
          </p>
          
          <FAQItem
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="question">What file formats do you accept for 3D modeling?</div>
            <div className="answer">
              We accept a variety of file formats including OBJ, STL, STEP, IGES, and more. For best results, we recommend providing as much detail as possible about your project requirements.
            </div>
          </FAQItem>
          
          <FAQItem
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="question">What materials are available for 3D printing?</div>
            <div className="answer">
              We offer a wide range of materials including various plastics (PLA, ABS, PETG), resins, nylon, and specialty materials with different properties. The best material depends on your specific application and requirements.
            </div>
          </FAQItem>
          
          <FAQItem
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="question">How long does the mockup creation process take?</div>
            <div className="answer">
              Typical turnaround time for mockups is 2-5 business days depending on complexity. Rush service is available upon request.
            </div>
          </FAQItem>
        </FAQContainer>
      </FAQSection>

      <CTASection>
        <CTAContainer
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <CTATitle>Ready to Start Your Project?</CTATitle>
          <CTADescription>
            Let's discuss how we can help bring your ideas to life with our premium services.
          </CTADescription>
          <Link to="/contact">
            <Button>Get Started Today</Button>
          </Link>
        </CTAContainer>
      </CTASection>
    </PageContainer>
  );
};

export default Services;