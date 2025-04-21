import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

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

// Contact section
const ContactSection = styled.section`
  padding: 6rem 2rem;
`;

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 60px;
      height: 3px;
      background: linear-gradient(90deg, #ff4d4d, #f9cb28);
    }
  }
  
  p {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.7;
    margin-bottom: 2.5rem;
  }
`;

const ContactMethods = styled.div`
  margin-bottom: 3rem;
`;

const ContactMethod = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  
  .icon {
    width: 50px;
    height: 50px;
    background: rgba(20, 20, 20, 0.5);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
    font-size: 1.2rem;
    color: #ff4d4d;
  }
  
  .details {
    h3 {
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }
    
    p {
      color: rgba(255, 255, 255, 0.7);
      margin-bottom: 0;
    }
    
    a {
      color: rgba(255, 255, 255, 0.7);
      transition: all 0.3s ease;
      
      &:hover {
        color: #ffffff;
      }
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  
  a {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(20, 20, 20, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    
    &:hover {
      background: linear-gradient(90deg, #ff4d4d, #f9cb28);
      transform: translateY(-3px);
    }
  }
`;

// Contact form
const ContactForm = styled.div`
  background: rgba(20, 20, 20, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 3rem;
  
  h2 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2rem;
    text-align: center;
  }
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }
  
  input, textarea, select {
    width: 100%;
    padding: 0.8rem 1rem;
    background: rgba(10, 10, 10, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    color: #ffffff;
    font-family: 'Inter', sans-serif;
    transition: all 0.3s ease;
    
    &:focus {
      outline: none;
      border-color: rgba(255, 255, 255, 0.3);
      box-shadow: 0 0 0 2px rgba(255, 77, 77, 0.2);
    }
  }
  
  textarea {
    min-height: 150px;
    resize: vertical;
  }
  
  select {
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='white' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: calc(100% - 1rem) center;
    padding-right: 2.5rem;
  }
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: linear-gradient(90deg, #ff4d4d, #f9cb28);
  border: none;
  border-radius: 4px;
  color: #000;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(255, 77, 77, 0.2);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const FormSuccess = styled(motion.div)`
  background: rgba(0, 200, 83, 0.1);
  border: 1px solid rgba(0, 200, 83, 0.3);
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: 1.5rem;
  text-align: center;
  color: rgba(0, 200, 83, 1);
`;

// Map section
const MapSection = styled.section`
  padding: 6rem 2rem;
  background: rgba(10, 10, 10, 0.5);
`;

const MapContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const MapPlaceholder = styled.div`
  width: 100%;
  height: 400px;
  background: #222;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.2rem;
  margin-top: 3rem;
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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server here
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <PageContainer>
      {/* Hero Section */}
      <HeroSection>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <HeroTitle variants={itemVariants}>Contact Us</HeroTitle>
          <HeroSubtitle variants={itemVariants}>
            Get in touch with our team to discuss your print on demand needs and bring your creative ideas to life.
          </HeroSubtitle>
        </motion.div>
      </HeroSection>
      
      {/* Contact Section */}
      <ContactSection>
        <ContactContainer>
          <ContactInfo>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2>Get In Touch</h2>
              <p>
                We're here to help bring your creative ideas to life. Contact us today to discuss your print on demand needs, 
                request a quote, or learn more about our services.
              </p>
              
              <ContactMethods>
                <ContactMethod>
                  <div className="icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="details">
                    <h3>Our Location</h3>
                    <p>123 Print Street, Design City, DC 12345</p>
                  </div>
                </ContactMethod>
                
                <ContactMethod>
                  <div className="icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="details">
                    <h3>Email Us</h3>
                    <p><a href="mailto:info@gomakeit.com">info@gomakeit.com</a></p>
                  </div>
                </ContactMethod>
                
                <ContactMethod>
                  <div className="icon">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div className="details">
                    <h3>Call Us</h3>
                    <p><a href="tel:+1234567890">+1 (234) 567-890</a></p>
                  </div>
                </ContactMethod>
                
                <ContactMethod>
                  <div className="icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="details">
                    <h3>Business Hours</h3>
                    <p>Monday - Friday: 9am - 6pm<br />Saturday: 10am - 4pm</p>
                  </div>
                </ContactMethod>
              </ContactMethods>
              
              <h3>Follow Us</h3>
              <SocialLinks>
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
              </SocialLinks>
            </motion.div>
          </ContactInfo>
          
          <ContactForm>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2>Send Us a Message</h2>
              
              {formSubmitted && (
                <FormSuccess
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  Thank you for your message! We'll get back to you soon.
                </FormSuccess>
              )}
              
              <form onSubmit={handleSubmit}>
                <FormRow>
                  <FormGroup>
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                </FormRow>
                
                <FormRow>
                  <FormGroup>
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <label htmlFor="service">Service Interested In</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a Service</option>
                      <option value="print">Print on Demand</option>
                      <option value="customization">Customization</option>
                      <option value="modelling">3D Modelling</option>
                      <option value="mockup">Mockup Creation</option>
                      <option value="other">Other</option>
                    </select>
                  </FormGroup>
                </FormRow>
                
                <FormGroup>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </FormGroup>
                
                <SubmitButton type="submit">Send Message</SubmitButton>
              </form>
            </motion.div>
          </ContactForm>
        </ContactContainer>
      </ContactSection>
      
      {/* Map Section */}
      <MapSection>
        <MapContainer>
          <h2 className="section-title">Visit Our Studio</h2>
          <p className="section-subtitle">
            Come see our print on demand facilities and discuss your project in person
          </p>
          
          <MapPlaceholder>
            Map Location: 123 Print Street, Design City
          </MapPlaceholder>
        </MapContainer>
      </MapSection>
      
      {/* FAQ Section */}
      <FAQSection>
        <FAQContainer>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Quick answers to common questions about contacting us
          </p>
          
          <FAQItem
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="question">How quickly will you respond to my inquiry?</div>
            <div className="answer">
              We typically respond to all inquiries within 24 business hours. For urgent matters, we recommend calling our office directly.
            </div>
          </FAQItem>
          
          <FAQItem
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="question">Do I need to make an appointment to visit your studio?</div>
            <div className="answer">
     
(Content truncated due to size limit. Use line ranges to read in chunks)