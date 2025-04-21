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

// Portfolio section
const PortfolioSection = styled.section`
  padding: 6rem 2rem;
`;

const PortfolioContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

// Portfolio filter
const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
`;

const FilterButton = styled.button`
  padding: 0.6rem 1.5rem;
  background: ${props => props.active ? 'linear-gradient(90deg, #ff4d4d, #f9cb28)' : 'rgba(20, 20, 20, 0.5)'};
  border: 1px solid ${props => props.active ? 'transparent' : 'rgba(255, 255, 255, 0.1)'};
  border-radius: 4px;
  color: ${props => props.active ? '#000' : 'rgba(255, 255, 255, 0.8)'};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

// Portfolio grid
const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`;

const PortfolioItem = styled(motion.div)`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  height: 350px;
  background: #222;
  cursor: pointer;
  
  &:hover .overlay {
    opacity: 1;
  }
  
  &:hover .image-placeholder {
    transform: scale(1.05);
  }
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.2rem;
  transition: transform 0.5s ease;
`;

const ItemOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  
  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    text-align: center;
  }
  
  p {
    color: rgba(255, 255, 255, 0.8);
    text-align: center;
    margin-bottom: 1.5rem;
  }
  
  .btn {
    padding: 0.5rem 1.2rem;
    font-size: 0.9rem;
  }
`;

// Portfolio modal
const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const ModalContent = styled(motion.div)`
  background: rgba(20, 20, 20, 0.95);
  border-radius: 8px;
  width: 100%;
  max-width: 900px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  
  .close-button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: transparent;
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 10;
  }
`;

const ModalBody = styled.div`
  padding: 3rem;
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const ModalImagePlaceholder = styled.div`
  width: 100%;
  height: 400px;
  background: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.2rem;
  margin-bottom: 2rem;
  border-radius: 4px;
`;

const ModalTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const ModalDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7;
  margin-bottom: 2rem;
`;

const ProjectDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const DetailItem = styled.div`
  h4 {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: rgba(255, 255, 255, 0.9);
  }
  
  p {
    color: rgba(255, 255, 255, 0.7);
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
  padding: 0.75rem 1.5rem;
  background: linear-gradient(90deg, #ff4d4d, #f9cb28);
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 100%;
  background: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.2rem;
  transition: transform 0.5s ease;
`;

const ProjectInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  
  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    text-align: center;
  }
  
  p {
    color: rgba(255, 255, 255, 0.8);
    text-align: center;
    margin-bottom: 1.5rem;
  }
`;

const ProjectCategory = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: rgba(255, 255, 255, 0.9);
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: rgba(255, 255, 255, 0.9);
`;

const ProjectDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7;
  margin-bottom: 1.5rem;
`;

const ViewProjectButton = styled.button`
  padding: 0.5rem 1.2rem;
  font-size: 0.9rem;
  background: linear-gradient(90deg, #ff4d4d, #f9cb28);
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const Portfolio = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "Product Mockup Showcase",
      category: "Mock Up Creation",
      description: "A comprehensive collection of photorealistic product mockups for a leading e-commerce brand, showcasing their products in various lifestyle contexts.",
      image: "mockup-example.jpg"
    },
    {
      id: 2,
      title: "Architectural Visualization",
      category: "3D Modelling",
      description: "Detailed 3D models and visualizations for a modern architectural project, demonstrating the power of our modeling capabilities in real estate development.",
      image: "3d-model-example.jpg"
    },
    {
      id: 3,
      title: "Custom Prototype Series",
      category: "Custom 3D Printing",
      description: "A series of functional prototypes created for a tech startup, showcasing our ability to produce high-quality, custom 3D printed components.",
      image: "3d-print-example.jpg"
    }
  ];

  return (
    <PageContainer>
      <HeroSection>
        <HeroTitle>Our Portfolio</HeroTitle>
        <HeroSubtitle>
          Explore our featured projects and see how we've helped bring ideas to life
        </HeroSubtitle>
      </HeroSection>

      <PortfolioSection>
        <PortfolioGrid>
          {featuredProjects.map((project, index) => (
            <PortfolioItem
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectImage>
                <div className="image-placeholder">{project.title}</div>
              </ProjectImage>
              <ProjectInfo>
                <ProjectCategory>{project.category}</ProjectCategory>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ViewProjectButton>View Project</ViewProjectButton>
              </ProjectInfo>
            </PortfolioItem>
          ))}
        </PortfolioGrid>
      </PortfolioSection>

      <CTASection>
        <CTAContainer
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <CTATitle>Have a Project in Mind?</CTATitle>
          <CTADescription>
            Let's discuss how we can help bring your ideas to life with our premium services.
          </CTADescription>
          <Link to="/contact">
            <Button>Start Your Project</Button>
          </Link>
        </CTAContainer>
      </CTASection>
    </PageContainer>
  );
};

export default Portfolio;
