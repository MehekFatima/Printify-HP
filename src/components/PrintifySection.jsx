import React, { useEffect, useRef } from 'react';
import Custom from '../assets/custom-products.webp';
import Prod from '../assets/your-products.webp';
import Full from '../assets/fullfillment.webp';
import { Container, Row, Col } from 'react-bootstrap';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './style/PrintifySection.css';

gsap.registerPlugin(ScrollTrigger);

function PrintifySection() {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const items = sectionRef.current.querySelectorAll('.animated-item');

    gsap.fromTo(items, 
      { opacity: 0, y: -30 }, // Initial state
      {
        opacity: 1,
        y: 0,
        duration: 0.3,
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 90%', // Trigger when the top of the section is near the viewport
          once: true, // Only trigger once
          onEnter: () => {
            gsap.set(items, { clearProps: 'all' }); // Clear animation properties to keep items visible
          }
        },
      }
    );
  }, []);

  return (
    <Container fluid className="printify-section mt-5 mt-sm-3" ref={sectionRef}>
      <Row className="justify-content-center">
        <Col xs={12} sm={6} md={4} className="animated-item">
          <img src={Custom} alt="Printify" className="icon" />
          <h3 className="green-text">CREATE</h3>
          <h5>custom products</h5>
          <p>Easily add your designs to a wide range of products using our free tools.</p>
        </Col>
        <Col xs={12} sm={6} md={4} className="animated-item">
          <img src={Prod} alt="Sell on Your Terms" className="icon" />
          <h3 className="green-text">SELL</h3>
          <h5>on your terms</h5>
          <p>You choose the products, sale price, and where to sell.</p>
        </Col>
        <Col xs={12} sm={6} md={4} className="animated-item">
          <img src={Full} alt="We Handle Fulfillment" className="icon" />
          <h3 className="green-text">WE HANDLE</h3>
          <h5>fulfillment</h5>
          <p>Once an order is placed, we automatically handle all the printing and delivery logistics.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default PrintifySection;
