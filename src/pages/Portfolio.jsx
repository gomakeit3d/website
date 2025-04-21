import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #000;
  color: #fff;
`;

const HeroSection = styled.section`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  padding: 6rem 2rem;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9));

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(255, 77, 77, 0.1), rgba(249, 203, 40, 0.1));
    z-index: -1;
  }
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

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin: 1rem 0;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  padding: 1rem 2.5rem;
  border-radius: 4px;
  border: none;
  background: ${props => props.active ? 'linear-gradient(90deg, #ff4d4d, #f9cb28)' : 'rgba(255, 255, 255, 0.1)'};
  color: ${props => props.active ? '#000' : '#fff'};
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.active ? '0 5px 15px rgba(255, 77, 77, 0.3)' : '0 5px 15px rgba(255, 255, 255, 0.1)'};
  }
`;

const PortfolioSection = styled.section`
  padding: 6rem 2rem;
  background: #000;
`;

const PortfolioGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2.5rem;
  padding: 2rem 0;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 2rem;
  }
`;

const PortfolioItem = styled(motion.div)`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  background: #1a1a1a;
  aspect-ratio: 1/1;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 20px rgba(255, 77, 77, 0.3),
                0 0 40px rgba(255, 77, 77, 0.2),
                0 0 60px rgba(249, 203, 40, 0.1);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(255, 77, 77, 0.1), rgba(249, 203, 40, 0.1));
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .image-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: rgba(255, 255, 255, 0.9);
    background: #2a2a2a;
    transition: transform 0.5s ease;
    padding: 2rem;
    text-align: center;
  }
`;

const ViewProject = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%) translateY(20px);
  opacity: 0;
  transition: all 0.3s ease;
  background: linear-gradient(90deg, #ff4d4d, #f9cb28);
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  color: #000;
  font-weight: 600;
  pointer-events: none;

  ${PortfolioItem}:hover & {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
`;

// Modal Components
const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 2rem;
`;

const ModalContent = styled(motion.div)`
  background: #1a1a1a;
  border-radius: 12px;
  width: 100%;
  max-width: 800px;
  position: relative;
  overflow: hidden;
`;

const ModalImage = styled.div`
  width: 100%;
  height: 400px;
  background: #2a2a2a;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ModalInfo = styled.div`
  padding: 2rem;
`;

const ModalTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #fff;
`;

const ModalDescription = styled.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const ProjectDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;
`;

const DetailGroup = styled.div`
  margin-bottom: 1.5rem;

  h3 {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 0.5rem;
  }
  
  p {
    font-size: 1.2rem;
    color: #fff;
  }
`;

const PriceTable = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .price-row {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    
    &:last-child {
      border-bottom: none;
    }
  }

  .quantity {
    color: rgba(255, 255, 255, 0.7);
  }

  .price {
    color: #f9cb28;
    font-weight: 600;
  }
`;

const ExtraInfo = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;

  h4 {
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }

  p {
    color: #fff;
    font-size: 1.1rem;
  }
`;

const StarRating = styled.div`
  display: flex;
  gap: 0.5rem;
  color: #f9cb28;
  font-size: 1.2rem;
`;

const Star = styled.span`
  opacity: ${props => props.filled ? '1' : '0.3'};
`;

const RequestButton = styled.button`
  padding: 1rem 2rem;
  background: linear-gradient(90deg, #ff4d4d, #f9cb28);
  border: none;
  border-radius: 4px;
  color: #000;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 77, 77, 0.3);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 10;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const CTASection = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9));
  text-align: center;
`;

const CTAContainer = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
`;

const CTATitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(90deg, #ffffff, #cccccc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CTADescription = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  background: linear-gradient(90deg, #ff4d4d, #f9cb28);
  border: none;
  border-radius: 4px;
  color: #000;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(255, 77, 77, 0.3);
  }
`;

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('Mock Up');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = ['Mock Up', '3D Modeling', '3D Printing'];

  const featuredProjects = [
    {
      id: 1,
      title: "Smart Brand Keychain",
      category: "3D Printing",
      description: "Customized 3D printed keychain with brand logo, designed to automatically open your Instagram profile when tapped.",
      service: "3D Printing",
      extraHardware: "Stainless steel keychain, NFC tag",
      pricing: [
        { quantity: "1 unit", price: "8-12€" },
        { quantity: "5+ units", price: "6-8€" },
        { quantity: "10+ units", price: "3-6€" }
      ],
      image: "/images/printed-products/1.jpg"
    },
    {
      id: 2,
      title: "Heart Vase",
      category: "3D Printing",
      description: "25cm anatomical heart-shaped vase for home or office decoration, 3D printed in deep red.",
      service: "3D Printing",
      extraHardware: "None",
      priceRange: "35-60€",
      image: "/images/printed-products/2.jpg"
    },
    {
      id: 3,
      title: "Twisted Vase",
      category: "3D Printing",
      description: "Geometric twisted vase, 3D printed in Oxford Tan, 10cm tall. Originally made as a decorative gift for wedding guests.",
      service: "3D Printing",
      extraHardware: "None",
      pricing: [
        { quantity: "1 unit", price: "8-14€" },
        { quantity: "5+ units", price: "5-12€" },
        { quantity: "15+ units", price: "3-8€" }
      ],
      image: "/images/printed-products/3.jpg"
    },
    {
      id: 4,
      title: "Coral Vase",
      category: "3D Printing",
      description: "10cm coral-shaped vase, 3D printed with organic texture and form. Designed as a decorative element inspired by natural marine structures.",
      service: "3D Printing",
      extraHardware: "None",
      priceRange: "25-50€",
      image: "/images/printed-products/4.jpg"
    },
    {
      id: 5,
      title: "Twisted Vase",
      category: "3D Printing",
      description: "Geometric twisted vase, 3D printed in pearl white and 25cm tall. Originally created as a centerpiece for a home dining table.",
      service: "3D Printing",
      extraHardware: "None",
      priceRange: "45-70€",
      image: "/images/printed-products/5.jpg"
    },
    {
      id: 6,
      title: "Easter Bunny Decoration",
      category: "3D Printing",
      description: "Playful rabbit figure designed for Easter décor, 3D printed in multiple colors.",
      service: "3D Printing",
      extraHardware: "None",
      priceRange: "5-20€",
      image: "/images/printed-products/6.jpg"
    },
    {
      id: 7,
      title: "Human Anatomy Educational Model",
      category: "3D Printing",
      description: "Anatomical model of the human torso with removable organs, designed for educational use. 3D printed in multiple colors to support anatomy learning in classrooms or training settings.",
      service: "3D Printing",
      extraHardware: "None",
      priceRange: "30-100€",
      image: "/images/printed-products/7.jpg"
    },
    {
      id: 8,
      title: "Multicolor Puzzle Dinosaur",
      category: "3D Printing",
      description: "3D printed dinosaur designed in interlocking parts to support play and stimulation. Originally made for a pediatric clinic to engage and assist children with developmental challenges.",
      service: "3D Printing",
      extraHardware: "None",
      priceRange: "10-25€",
      image: "/images/printed-products/9.jpg"
    },
    {
      id: 10,
      title: "Multicolor Puzzle Dinosaur",
      category: "3D Printing",
      description: "3D printed dinosaur designed in interlocking parts to support play and stimulation. Originally made for a pediatric clinic to engage and assist children with developmental challenges.",
      service: "3D Printing",
      extraHardware: "None",
      priceRange: "10-25€",
      image: "/images/printed-products/10.jpg"
    },
    {
      id: 11,
      title: "Smart Brand Keychain",
      category: "3D Printing",
      description: "Customized 3D printed keychain with brand logo, designed to automatically open your Instagram profile when tapped.",
      service: "3D Printing",
      extraHardware: "Stainless steel keychain, NFC tag",
      pricing: [
        { quantity: "1 unit", price: "8-12€" },
        { quantity: "5+ units", price: "6-8€" },
        { quantity: "10+ units", price: "3-6€" }
      ],
      image: "/images/printed-products/11.jpg"
    },
    {
      id: 12,
      title: "Smart Brand Keychain",
      category: "3D Printing",
      description: "Customized 3D printed keychain with brand logo, designed to automatically open your Instagram profile when tapped.",
      service: "3D Printing",
      extraHardware: "Stainless steel keychain, NFC tag",
      pricing: [
        { quantity: "1 unit", price: "8-12€" },
        { quantity: "5+ units", price: "6-8€" },
        { quantity: "10+ units", price: "3-6€" }
      ],
      image: "/images/printed-products/12.jpg"
    },
    {
      id: 13,
      title: "Christmas Pokémon Keychain",
      category: "3D Printing",
      description: "Snowman-themed Pikachu keychain, 3D printed in full christmas colors.",
      service: "3D Printing",
      extraHardware: "Stainless steel keychain",
      pricing: [
        { quantity: "1 unit", price: "8-12€" },
        { quantity: "5+ units", price: "6-8€" },
        { quantity: "10+ units", price: "3-6€" }
      ],
      image: "/images/printed-products/13.jpg"
    },
    {
      id: 14,
      title: "Christmas Moose Napkin Holder",
      category: "3D Printing",
      description: "Holiday-themed napkin holder in the shape of a moose, 3D printed in christmas green.",
      service: "3D Printing",
      extraHardware: "None",
      priceRange: "4-10€",
      image: "/images/printed-products/14.jpg"
    },
    {
      id: 15,
      title: "Santa Claus Christmas Ornament",
      category: "3D Printing",
      description: "3D printed Santa Claus ornament designed to hang on a Christmas tree.",
      service: "3D Printing",
      extraHardware: "String loop for tree hanging",
      priceRange: "3-10€",
      image: "/images/printed-products/15.jpg"
    },
    {
      id: 16,
      title: "Home Spa Candle Holder Set",
      category: "3D Printing",
      description: "3D printed decorative set featuring a base, two vases, and an LED light. Originally designed as a calming element for a home spa environment.",
      service: "3D Printing",
      extraHardware: "LED light",
      priceRange: "15-30€",
      image: "/images/printed-products/16.jpg"
    },
    {
      id: 17,
      title: "GoMakeIt Wall Art Logo",
      category: "Mock Up",
      description: "Large-scale gomakeit wall art, featuring bold 3D letters up to 25 cm in height and integrated LED. Perfect for office spaces, studios, or showrooms.",
      service: "Mock Up",
      pricing: [
        { quantity: "First mock-up", price: "Free" },
        { quantity: "Additional mock-ups", price: "5€ each" }
      ],
      image: "/images/mockups/gomakeit_1.jpg"
    },
    {
      id: 18,
      title: "F1 Themed Trophy",
      category: "Mock Up",
      description: "Mock-up of a Formula 1 themed trophy design. Perfect customizable component for presentations, contests, and other events.",
      service: "Mock Up",
      pricing: [
        { quantity: "First mock-up", price: "Free" },
        { quantity: "Additional mock-ups", price: "5€ each" }
      ],
      image: "/images/mockups/f1_1.png"
    },
    {
      id: 19,
      title: "Brand Keychain",
      category: "Mock Up",
      description: "Mock-up of a keychain designed for a barbershop setting. Includes product visualization in a relevant environment to support branding and presentation needs.",
      service: "Mock Up",
      pricing: [
        { quantity: "First mock-up", price: "Free" },
        { quantity: "Additional mock-ups", price: "5€ each" }
      ],
      image: "/images/mockups/lacucaracha_keychain_1.png"
    },
    {
      id: 20,
      title: "Santa Claus Christmas Ornament",
      category: "Mock Up",
      description: "Mock-up of a Santa Claus ornament displayed in a realistic Christmas tree setting. Includes seasonal context and detailed product visualization for presentation or promotional use.",
      service: "Mock Up",
      pricing: [
        { quantity: "First mock-up", price: "Free" },
        { quantity: "Additional mock-ups", price: "5€ each" }
      ],
      image: "/images/mockups/santa_ornament_1.png"
    },
    {
      id: 21,
      title: "Twisted Vase",
      category: "Mock Up",
      description: "Mock-up of a 3D-printed twisted vase placed in a modern interior setting on a wooden dining table. Suitable for product presentation and realistic visualization in home decor environments.",
      service: "Mock Up",
      pricing: [
        { quantity: "First mock-up", price: "Free" },
        { quantity: "Additional mock-ups", price: "5€ each" }
      ],
      image: "/images/mockups/jar_1.png"
    },
    {
      id: 22,
      title: "Brand Keychain",
      category: "Mock Up",
      description: "Mock-up of a keychain designed for a technology-focused brand. Includes product visualization in a digital or tech-oriented environment to support branding and presentation.",
      service: "Mock Up",
      pricing: [
        { quantity: "First mock-up", price: "Free" },
        { quantity: "Additional mock-ups", price: "5€ each" }
      ],
      image: "/images/mockups/upgraide_keychain_1.png"
    },
    {
      id: 23,
      title: "Brand Keychain",
      category: "Mock Up",
      description: "Mock-up of a keychain designed for a technology-focused brand. Includes product visualization in a digital or tech-oriented environment to support branding and presentation.",
      service: "Mock Up",
      pricing: [
        { quantity: "First mock-up", price: "Free" },
        { quantity: "Additional mock-ups", price: "5€ each" }
      ],
      image: "/images/mockups/upgraide_keychain_2.png"
    },
    {
      id: 24,
      title: "gomakeit Logo",
      category: "3D Modeling",
      description: "3D model of the gomakeit logo designed for large-scale wall art applications. Includes geometry suitable for LED integration and precision fabrication.",
      service: "3D Modeling",
      priceRange: "15€/hour",
      image: "/images/3d-models/gomakeit_model.jpg"
    }
  ];

  const renderStars = (difficulty) => {
    return [...Array(5)].map((_, index) => (
      <Star key={index} filled={index < difficulty}>★</Star>
    ));
  };

  const filteredProjects = featuredProjects.filter(project => project.category === activeFilter);

  return (
    <PageContainer>
      <HeroSection>
        <HeroTitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Portfolio
        </HeroTitle>
        <HeroSubtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Explore our collection of premium print on demand projects and see how we bring creative ideas to life.
        </HeroSubtitle>
      </HeroSection>

      <PortfolioSection>
        <FilterContainer>
          {filters.map(filter => (
            <FilterButton
              key={filter}
              active={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </FilterButton>
          ))}
        </FilterContainer>

        <PortfolioGrid>
          {filteredProjects.map((project, index) => (
            <PortfolioItem
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProject(project)}
            >
              <ProjectImage>
                <img src={project.image} alt={project.title} />
              </ProjectImage>
              <ViewProject>View Project</ViewProject>
            </PortfolioItem>
          ))}
        </PortfolioGrid>
      </PortfolioSection>

      <AnimatePresence>
        {selectedProject && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <ModalContent
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              <CloseButton onClick={() => setSelectedProject(null)}>×</CloseButton>
              <ModalImage>
                <img src={selectedProject.image} alt={selectedProject.title} />
              </ModalImage>
              <ModalInfo>
                <ModalTitle>{selectedProject.title}</ModalTitle>
                <ModalDescription>{selectedProject.description}</ModalDescription>
                
                <DetailGroup>
                  <h3>Service</h3>
                  <p>{selectedProject.service}</p>
                </DetailGroup>

                {selectedProject.extraHardware && (
                  <DetailGroup>
                    <h3>Extra Hardware</h3>
                    <p>{selectedProject.extraHardware}</p>
                  </DetailGroup>
                )}

                {selectedProject.pricing ? (
                  <DetailGroup>
                    <h3>Price range per unit</h3>
                    <PriceTable>
                      {selectedProject.pricing.map((price, index) => (
                        <div key={index} className="price-row">
                          <span className="quantity">{price.quantity}</span>
                          <span className="price">{price.price}</span>
                        </div>
                      ))}
                    </PriceTable>
                  </DetailGroup>
                ) : selectedProject.priceRange && (
                  <DetailGroup>
                    <h3>Price range</h3>
                    <p>{selectedProject.priceRange}</p>
                  </DetailGroup>
                )}

                <Link to="/contact">
                  <RequestButton>Request Similar Project</RequestButton>
                </Link>
              </ModalInfo>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>

      <CTASection>
        <CTAContainer
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <CTATitle>Ready to Start Your Project?</CTATitle>
          <CTADescription>
            Let's collaborate to bring your creative vision to life with our premium print on demand services.
          </CTADescription>
          <Link to="/contact">
            <Button>Get Started</Button>
          </Link>
        </CTAContainer>
      </CTASection>
    </PageContainer>
  );
};

export default Portfolio; 