import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';
import './style/Footer.css'; // You can create a CSS file for custom styles

const Footer = () => {
  return (
    <footer className="bg-light text-dark pt-5 pb-3"> 
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>
              We are dedicated to providing the best services and solutions
              for your business needs. Our team of experts is here to help you
              grow and succeed.
            </p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/services" className="text-dark">Services</a></li> {/* Change text-light to text-dark */}
              <li><a href="/about" className="text-dark">About Us</a></li>
              <li><a href="/contact" className="text-dark">Contact</a></li>
              <li><a href="/faq" className="text-dark">FAQ</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>Email: support@example.com</p>
            <p>Phone: (123) 456-7890</p>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={24} className="text-dark mr-2" /> {/* Change text-light to text-dark */}
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={24} className="text-dark mr-2" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24} className="text-dark mr-2" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} className="text-dark" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="text-center mt-4">
        <small>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
