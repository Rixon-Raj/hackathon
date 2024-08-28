import React, { useEffect, useState } from 'react';
import logo from './assets/logo.png'; // Make sure you have a logo image in the assets folder

const NavigationBar = () => {
 
  return (
    <nav className="navbar navbar-expand-lg" style={{ background: '#FFF9F4' }}>
      <a className="navbar-brand" href="#home">
        <img src={logo} alt="Brand Logo" style={{ width: '260px', height: '40px', marginLeft: '30px' }} />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#products">Products</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
