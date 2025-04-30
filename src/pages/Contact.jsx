import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaClock, FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #000;
  color: #fff;
  padding-top: 80px;
`;

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
    gap: 3rem;
  }
`;

const ContactInfo = styled.div`
  h2 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    background: linear-gradient(90deg, #ffffff, #cccccc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 3rem;
  }
`;

const ContactMethods = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 3rem;
`;

const ContactMethod = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;

  .icon {
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    color: #ff4d4d;
  }

  .details {
    h3 {
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: rgba(255, 255, 255, 0.9);
    }

    p {
      color: rgba(255, 255, 255, 0.7);
      margin-bottom: 0;
      font-size: 1rem;
    }
  }
`;

const SocialLinks = styled.div`
  h3 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: rgba(255, 255, 255, 0.9);
  }

  .links {
    display: flex;
    gap: 1rem;
  }

  a {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 1.2rem;
    transition: all 0.3s ease;

    &:hover {
      background: linear-gradient(90deg, #ff4d4d, #f9cb28);
      transform: translateY(-3px);
    }
  }
`;

const FormContainer = styled.div`
  background: rgba(20, 20, 20, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 3rem;

  @media (max-width: 768px) {
    padding: 2rem;
  }

  h2 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2rem;
    text-align: center;
    background: linear-gradient(90deg, #ffffff, #cccccc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: rgba(255, 255, 255, 0.8);
  }

  input, select, textarea {
    width: 100%;
    padding: 0.8rem;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    color: #fff;
    font-size: 1rem;
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-color: #ff4d4d;
      box-shadow: 0 0 0 2px rgba(255, 77, 77, 0.2);
    }
  }

  textarea {
    min-height: 150px;
    resize: vertical;
  }

  select {
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='white' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E");
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
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 77, 77, 0.3);
  }
`;

const StatusMessage = styled.div`
  margin-top: 1rem;
  padding: 0.75rem;
  border-radius: 4px;
  text-align: center;
  background-color: ${props => props.isError ? 'rgba(255, 0, 0, 0.1)' : 'rgba(0, 255, 0, 0.1)'};
  color: ${props => props.isError ? '#ff4d4d' : '#4caf50'};
`;

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ message: '', isError: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    setSubmitStatus({ message: 'Sending...', isError: false });

    // Get form data
    const form = e.target;
    const data = {
      from_name: form.from_name.value,
      from_email: form.from_email.value,
      phone: form.phone.value,
      message: form.message.value,
    };

    console.log('Attempting to send email with data:', data);

    // Send email using window.emailjs
    if (window.emailjs) {
      window.emailjs.send('service_wkk654n', 'template_ullq4fa', data)
        .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
          setSubmitStatus({ message: 'Message sent successfully!', isError: false });
          form.reset();
        }, function(error) {
          console.log('FAILED...', error);
          setSubmitStatus({ 
            message: 'Failed to send message. Please try again.', 
            isError: true 
          });
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    } else {
      console.error('EmailJS not loaded');
      setSubmitStatus({ 
        message: 'Error: Email service not available. Please try again later.', 
        isError: true 
      });
      setIsSubmitting(false);
    }
  };

  return (
    <PageContainer>
      <ContactSection>
        <ContactContainer>
          <ContactInfo>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2>Get In Touch</h2>
              <p>
                We're here to help bring your creative ideas to life. Contact us today to
                discuss your print on demand needs, request a quote, or learn more about
                our services.
              </p>

              <ContactMethods>
                <ContactMethod>
                  <div className="icon">
                    <FaEnvelope />
                  </div>
                  <div className="details">
                    <h3>Email Us</h3>
                    <p>info@gomakeit.pt</p>
                  </div>
                </ContactMethod>

                <ContactMethod>
                  <div className="icon">
                    <FaClock />
                  </div>
                  <div className="details">
                    <h3>We're here for you</h3>
                    <p>
                      Contact us anytime — we'll get back to you as soon as possible.<br />
                      Please note that during periods of high demand, responses may be slightly delayed.<br />
                      Thanks for your patience!
                    </p>
                  </div>
                </ContactMethod>
              </ContactMethods>

              <SocialLinks>
                <h3>Follow Us</h3>
                <div className="links">
                  <a href="https://www.instagram.com/gomakeitpt/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <FaInstagram />
                  </a>
                  <a href="#" aria-label="LinkedIn">
                    <FaLinkedinIn />
                  </a>
                </div>
              </SocialLinks>
            </motion.div>
          </ContactInfo>

          <FormContainer>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2>Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                <FormRow>
                  <FormGroup>
                    <label htmlFor="from_name">Name</label>
                    <input
                      type="text"
                      id="from_name"
                      name="from_name"
                      required
                      placeholder="Your name"
                    />
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Your phone number"
                    />
                  </FormGroup>
                </FormRow>
                <FormGroup>
                  <label htmlFor="from_email">Email</label>
                  <input
                    type="email"
                    id="from_email"
                    name="from_email"
                    required
                    placeholder="Your email"
                  />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Your message"
                  ></textarea>
                </FormGroup>
                <SubmitButton 
                  type="submit" 
                  disabled={isSubmitting}
                  style={{ opacity: isSubmitting ? 0.7 : 1 }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </SubmitButton>
                {submitStatus.message && (
                  <StatusMessage isError={submitStatus.isError}>
                    {submitStatus.message}
                  </StatusMessage>
                )}
              </form>
            </motion.div>
          </FormContainer>
        </ContactContainer>
      </ContactSection>
    </PageContainer>
  );
};

export default Contact; 