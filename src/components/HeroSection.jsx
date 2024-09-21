import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { FaPlay } from 'react-icons/fa';
import SVGComponent from './SVGComponent'; // Import your SVG component
import '../App.css'
const HeroSection = () => {
  return (
    <section className="hero-section d-flex align-items-center" style={{ minHeight: '100vh' }}>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-6 text-start">
            <h1 style={{ fontSize: '3rem' }}>Create and sell</h1>
            <h1 style={{ fontSize: '3rem' }}>custom products</h1>
            <ul className="features list-unstyled mt-4" style={{ fontSize: '1.25rem' }}>
              <li className="d-flex align-items-center"><FaCheckCircle className="text-success me-2" /> 100% Free to use</li>
              <li className="d-flex align-items-center"><FaCheckCircle className="text-success me-2" /> 900+ High-Quality Products</li>
              <li className="d-flex align-items-center"><FaCheckCircle className="text-success me-2" /> Largest global print network</li>
            </ul>
            {/* Buttons */}
            <div className="mt-4">
              <a href="./signup.html" className="btn btn-outline-success mx-2" style={{ borderColor: '#18c75a', color: '#18c75a' }}>
                Start for free
              </a>
              <a href="./play.html" className="btn btn-success mx-2">
                <FaPlay className="me-1" /> How it works?
              </a>
            </div>
            <p className="mt-3" style={{ color: '#18c75a' }}>Trusted by over 8M sellers around the world</p>
          </div>
          <div className="col-md-6 position-relative">
            <SVGComponent /> {/* Use the SVG component here */}
            <div className="floating-arrow">
              <span className="floating-text">Add your design</span>
              <div className="arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
