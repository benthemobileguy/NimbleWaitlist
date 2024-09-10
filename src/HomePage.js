import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Logo from './Logo';
import logoSmall from './assets/logo.svg';
import BackgroundPattern from './BackgroundPattern';
import ClipLoader from 'react-spinners/ClipLoader';

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

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      {loading ? (
        <div className="flex flex-grow justify-center items-center">
          <ClipLoader color="#005051" size={100} />
        </div>
      ) : (
        <>
          <BackgroundPattern />


          <Header
            isMenuOpen={isMenuOpen}
            toggleMenu={toggleMenu}
            logoSmall={logoSmall}
          />

          <NavMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />

          <main className="flex-grow flex flex-col items-center justify-center text-center px-4 py-8 z-10">
            <div className="max-w-4xl w-full">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-[#003030]">Shopping Made Simple</h2>
              <section className="mb-8">
                <p className="text-[#005051] text-lg sm:text-xl lg:text-xl">
                  Nimble is revolutionizing shopping by making it faster and more convenient.
                  Stay tuned for the launch of our innovative app!
                </p>
              </section>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-[#005051]">Coming Soon!</div>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full max-w-2xl mx-auto">
                {/* Modified Join the Waitlist Button */}
                <a
                  href="https://docs.google.com/forms/d/1mJFtwThAP2c0mIf-mYkcfU5GwbPYk60-QvFawSwX5qk/prefill"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#005051] hover:bg-[#003030] text-white font-bold py-4 px-8 rounded-full flex items-center justify-center text-lg sm:text-xl transition-colors duration-300 w-full text-center sweet-sans-font"
                >
                  Join the Waitlist
                </a>

                {/* Contact Us Button */}
                <Link
                  to="/contact"
                  className="bg-[#005051] hover:bg-[#003030] text-white font-bold py-4 px-8 rounded-full text-lg sm:text-xl transition-colors duration-300 w-full text-center sweet-sans-font">
                  Contact Us
                </Link>
              </div>
            </div>
          </main>

          <footer className="bg-[#005051] text-white py-4 text-center z-10">
            <p className="text-sm sm:text-base">
              © 2024 <span className="font-bold">Nimble</span>. All rights reserved.
            </p>
          </footer>
        </>
      )}
    </div>
  );
};

export default HomePage;
