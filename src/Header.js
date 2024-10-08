import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Header = ({ isMenuOpen, toggleMenu, logoSmall }) => {
  return (
    <header className="bg-[#005051] text-white py-2 sm:py-2 px-4 z-10 font-roboto sm:font-sweet-sans">
      <div className="container mx-auto relative flex justify-between items-center h-14 sm:h-14">
        {/* Small device logo on the left */}
        <div className="sm:hidden flex items-center">
          <img src={logoSmall} alt="Nimble Logo" className="w-26 h-20" />
        </div>

        {/* Large screen logo - Centered */}
        <div className="hidden sm:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Logo />
        </div>

        {/* Hamburger Button for small screens */}
        <div className="sm:hidden">
          <button className="text-white focus:outline-none" onClick={toggleMenu}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Links for larger screens - Right aligned and vertically centered */}
        <nav className="hidden sm:flex items-center ml-auto">
          <Link to="/" className="text-white text-base font-extrabold px-4">Home</Link>
          <Link to="/about" className="text-white text-base font-extrabold px-4">About Us</Link>
          <Link to="/contact" className="text-white text-base font-extrabold px-4">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
