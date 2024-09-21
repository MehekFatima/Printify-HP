import React from 'react';
import Clothes from '../assets/clothes.webp';
import '../App.css';

const ProductDesignComponent = () => {
  return (
    <div className="container product-design-container"> {/* Bootstrap container */}
      <div className="d-flex flex-column flex-md-row align-items-center image-text-container"> {/* Flex-column for small screens, flex-row for md and up */}
        <div className="image-container mb-4 mb-md-0 me-md-5"> {/* Add margin-end (me-md-5) for medium screens and above */}
          <img 
            src={Clothes} 
            alt="Product Design" 
            className="product-image img-fluid"  /* img-fluid makes image responsive */
            style={{ height: '400px', width: '400px', objectFit: 'inherit' }} 
          />
          <div className="plus-icons">
            <div className="plus-icon"></div>
            <div className="plus-icon"></div>
            <div className="plus-icon"></div>
            <div className="plus-icon"></div>
            <div className="plus-icon"></div>
            <div className="plus-icon"></div>
          </div>
        </div>
        <div className="text-container flex-grow-1"> 
          <h2 className="fs-2 fw-bold" style={{ lineHeight: '1.5' }}> 
            Easily add your design to a wide range of products
          </h2>
          <p className="fs-5" style={{ lineHeight: '1.8' }}> 
            With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products.
          </p>
          <button className="btn btn-primary" style={{background:'#18c75a',border:'0'}}>All products →</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDesignComponent;
