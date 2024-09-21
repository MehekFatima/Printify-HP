import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Printify from '../assets/printify.svg';
import Image1 from '../assets/big.svg'; 
import Image2 from '../assets/etsy.svg'; 
import Image3 from '../assets/presta.svg'; 
import Image4 from '../assets/squarespace.svg'; 
import { Container, Row, Col, Button } from 'react-bootstrap';
import './style/PrintifyIntegration.css';  

function PrintifyIntegration() {
  const imageRef = useRef(null);
  const elementsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const elements = elementsRef.current;

    // Set initial state for animation
    gsap.set(elements, { opacity: 0, x: 200 }); // Start from the right

    // Create a timeline for the animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imageRef.current,
        start: 'top center',
        end: '+=300',
        scrub: false,
        once: true,
      },
    });

    // Animate each element
    elements.forEach((element, index) => {
      const direction = index % 2 === 0 ? -200 : 200; // Alternate direction
      tl.fromTo(
        element,
        { opacity: 0, x: direction },
        { opacity: 1, x: 0, duration: 0.5 }
      );
    });
  }, []);

  return (
    <>
      <Container className="printify-integration text-center mt-5">
        <Row className="justify-content-center">
          <Col xs={12}>
            <img 
              src={Printify} 
              alt="Printify Integration" 
              ref={imageRef} 
              style={{ height: '150px', width: '150px', background: '#18c75a', display: 'block', margin: 'auto', position: 'relative', zIndex: 2 }} 
            />
          </Col>
        </Row>
        <Row className="connected-elements">
          {/* Top images positioned above the green image */}
          <Col className="element top-left" ref={(el) => (elementsRef.current[2] = el)}>
            <img src={Image3} alt="Image 3" style={{ height: '90px', width: '90px' }} />
          </Col>
          <Col className="element top-right" ref={(el) => (elementsRef.current[3] = el)}>
            <img src={Image4} alt="Image 4" style={{ height: '150px', width: '150px' }} />
          </Col>
          {/* Bottom images positioned below the green image */}
          <Col className="element bottom-left" ref={(el) => (elementsRef.current[0] = el)}>
            <img src={Image1} alt="Image 1" />
          </Col>
          <Col className="element bottom-right" ref={(el) => (elementsRef.current[1] = el)}>
            <img src={Image2} alt="Image 2" />
          </Col>
        </Row>
      </Container>

      {/* New Section for Custom Solutions */}
      <Container className="text-center my-5 py-5" style={{ backgroundColor: '#18c75a' , borderRadius:'20px'}}>
        <Row>
          <Col>
            <h2 style={{ color: '#fff' }}>Are you a large business looking for custom solutions?</h2>
            <Button variant="light" size="lg" style={{ marginTop: '20px' }}>Get in Touch</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default PrintifyIntegration;
