import React from 'react';
import HigherP from '../assets/higher-profits.svg';
import Robust from '../assets/robust-scaling.svg';
import Best from '../assets/best-selection.svg';

const BenefitCard = () => {
  return (
    <div className="container">
      <div className="row text-center text-md-start"> {/* Center text on small screens, left-align on md and larger */}
        <div className="col-12 col-md-4 d-flex flex-column align-items-center align-items-md-start"> {/* Center content on small screens, left-align on md */}
          <div className="icon-container mb-3">
            <img src={HigherP} alt="Higher Profits" style={{ height: '120px', width: '120px' }} />
            <h3 className="icon-title">Higher Profits</h3>
            <p className="icon-description">
              We offer some of the lowest prices in the industry because print providers
              continuously compete to win your business.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-4 d-flex flex-column align-items-center align-items-md-start"> {/* Same for the second column */}
          <div className="icon-container mb-3">
            <img src={Robust} alt="Robust Scaling" style={{ height: '120px', width: '120px' }} />
            <h3 className="icon-title">Robust Scaling</h3>
            <p className="icon-description">
              Easily handle peak holiday seasons, with our wide network of partners and
              automatic routing functionality.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-4 d-flex flex-column align-items-center align-items-md-start"> {/* Same for the third column */}
          <div className="icon-container mb-3">
            <img src={Best} alt="Best Selection" style={{ height: '120px', width: '120px' }} />
            <h3 className="icon-title">Best Selection</h3>
            <p className="icon-description">
              With 900+ products and top quality brands, you can choose the best products
              for your business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitCard;
