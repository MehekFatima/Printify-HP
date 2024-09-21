import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Carousel, Container } from 'react-bootstrap';
import { FaUser, FaStar } from 'react-icons/fa';

function CustomerTestimonials() {
  const testimonialsRef = useRef(null);
  const testimonialRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Ensure all refs are assigned
    const testimonialElements = testimonialRefs.current.filter(Boolean);

    if (testimonialElements.length > 0) {
      // Set initial state for animation
      gsap.set(testimonialElements, { opacity: 0, y: 100 });

      // Create a timeline for the animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: testimonialsRef.current,
          start: 'top center',
          end: '+=300',
          scrub: false,
          once: true,
        },
      });

      // Animate each testimonial element
      testimonialElements.forEach((element, index) => {
        tl.fromTo(
          element,
          { opacity: 0, y: 100 },
          { opacity: 1, y: 0, duration: 0.5, delay: 0.2 * index } // Stagger animations
        );
      });
    }
  }, []);

  return (
    <Container
      className="customer-testimonials text-center mt-5"
      style={{ backgroundColor: '#d4edda', padding: '30px', borderRadius: '8px' }}
      ref={testimonialsRef}
    >
      <h2 className="section-title">Trusted by Over 8M Sellers Around the World</h2>
      <Carousel>
        <Carousel.Item>
          <div className="testimonial-card" ref={(el) => (testimonialRefs.current[0] = el)}>
            <div className="testimonial-icon">
              <FaUser size={20} />
              <span className="testimonial-name">Robert A. Voltaire</span>
            </div>
            <p className="testimonial-text">
              Printify has been an incredible service for us musicians unable to keep large amounts of inventory...
            </p>
            <div className="testimonial-rating">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="testimonial-card" ref={(el) => (testimonialRefs.current[1] = el)}>
            <div className="testimonial-icon">
              <FaUser size={20} />
              <span className="testimonial-name">Jessica B. Warner</span>
            </div>
            <p className="testimonial-text">
              The quality and service provided by Printify have been a game changer for my online store...
            </p>
            <div className="testimonial-rating">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="testimonial-card" ref={(el) => (testimonialRefs.current[2] = el)}>
            <div className="testimonial-icon">
              <FaUser size={20} />
              <span className="testimonial-name">Michael T. Johnson</span>
            </div>
            <p className="testimonial-text">
              I couldn't be happier with the print quality and customer support. Highly recommended!
            </p>
            <div className="testimonial-rating">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default CustomerTestimonials;
