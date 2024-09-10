import React from 'react';
import logo from './assets/logo_name.svg';

const Logo = () => {
  return (
    <img src={logo} alt="Nimble Logo" className="w-24 h-4 sm:w-48 sm:h-28" />
  );
};

export default Logo;
