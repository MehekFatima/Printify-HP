import React from 'react';
import Logo from '../assets/logo-full.svg';
import '../App.css';

const Header = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light w-100 fixed-top shadow-sm">
          <div className="container px-3">
            <a className="navbar-brand" href="./index.html">
              <img src={Logo} alt="Company Logo" style={{ width: '150px', height: 'auto' }} />
            </a>

            {/* Navbar toggler for mobile view */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#mobileMenu"
              aria-controls="mobileMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Offcanvas menu */}
            <div className="offcanvas offcanvas-start" id="mobileMenu" tabIndex="-1" aria-labelledby="offcanvasMenuLabel">
            <div className="offcanvas-header">
              <a href="./index.html">
               <img src={Logo} alt="Company Logo" style={{ width: '120px', height: 'auto' }} />
              </a>
               <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>

              <div className="offcanvas-body">
                <ul className="navbar-nav mx-auto align-items-lg-center">
                  {/* Catalog Dropdown */}
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Catalog
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="./catalog-item1.html">Catalog Item 1</a></li>
                      <li><a className="dropdown-item" href="./catalog-item2.html">Catalog Item 2</a></li>
                      <li><a className="dropdown-item" href="./catalog-item3.html">Catalog Item 3</a></li>
                    </ul>
                  </li>

                  {/* Other Nav Items */}
                  <li className="nav-item"><a className="nav-link" href="./how-it-works.html">How it works</a></li>
                  <li className="nav-item"><a className="nav-link" href="./pricing.html">Pricing</a></li>
                  <li className="nav-item"><a className="nav-link" href="./blog.html">Blog</a></li>
                  <li className="nav-item"><a className="nav-link" href="./need-help.html">Need help?</a></li>

                  {/* Use-cases Dropdown */}
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Use-cases
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="./use-case1.html">Use Case 1</a></li>
                      <li><a className="dropdown-item" href="./use-case2.html">Use Case 2</a></li>
                      <li><a className="dropdown-item" href="./use-case3.html">Use Case 3</a></li>
                    </ul>
                  </li>
                </ul>

                {/* Signup and Login Buttons */}
                <div className="mt-3 mt-lg-0 d-flex align-items-center">
                  <a href="./signin.html" className="btn btn-light mx-2">Login</a>
                  <a href="./signup.html" className="btn btn-primary" style={{ backgroundColor: '#18c75a', border: '0' }}>
                    Signup
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
