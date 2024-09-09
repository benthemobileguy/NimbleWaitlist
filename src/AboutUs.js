import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import BackgroundPattern from './BackgroundPattern';

const NavMenu = ({ isOpen, toggleMenu }) => (
  <div className={`fixed inset-0 bg-[#005051] z-20 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
    <div className="flex justify-end p-4">
      <button onClick={toggleMenu} className="text-white">
        <X size={24} />
      </button>
    </div>
    <nav className="flex flex-col items-center justify-center h-full">
      <Link to="/" className="text-white text-2xl mb-6 hover:text-[#A6EC8A] transition-colors" onClick={toggleMenu}>
        Home
      </Link>
      <Link to="/about" className="text-white text-2xl mb-6 hover:text-[#A6EC8A] transition-colors" onClick={toggleMenu}>
        About Us
      </Link>
      <Link to="/contact" className="text-white text-2xl hover:text-[#A6EC8A] transition-colors" onClick={toggleMenu}>
        Contact Us
      </Link>
    </nav>
  </div>
);

const AboutUs = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      <BackgroundPattern />

      <header className="bg-[#005051] text-white py-4 px-6 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Logo />

          </div>

          {/* Hamburger Button for small screens */}
          <button
            className="text-white sm:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Links for larger screens */}
          <nav className="hidden sm:flex space-x-6">
            <Link to="/" className="text-white text-sm sm:text-base font-extrabold">Home</Link>
            <Link to="/about" className="text-white text-sm sm:text-base font-extrabold">About Us</Link>
            <Link to="/contact" className="text-white text-sm sm:text-base font-extrabold">Contact Us</Link>
          </nav>
        </div>
      </header>

      {/* Expandable menu for small screens */}
      <NavMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />

      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 py-8 z-10">
        <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8 sm:p-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-[#003030]">About Us</h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-[#005051] mb-6">
            At Nimble, we're redefining the shopping experience. Our vision is to make your purchases as quick and effortless as possible.
          </p>
          {/* Add the rest of your content here */}
        </div>
      </main>

      <footer className="bg-[#005051] text-white py-4 text-center z-10">
        <p className="text-sm sm:text-base">
          © 2024 <span className="font-bold">Nimble</span>. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default AboutUs;
