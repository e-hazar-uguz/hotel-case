// components/Header.js

import React from 'react';
import {  Link } from 'react-router-dom';
const Slider = () => {
  return (
    <div className="slider p-4">
       <Link to='/'>
      <img src="https://www.otelfiyat.com/img/otelfiyat-buyuk-logo.png" alt="Otel Fiyat Logo" className="logo-img"/>
      </Link>  
    </div>
  );
}

export default Slider;
