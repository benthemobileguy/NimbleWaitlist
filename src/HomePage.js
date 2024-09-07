import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => (
  <svg viewBox="0 0 100 100" className="w-12 h-12 sm:w-16 sm:h-16">
    <rect width="100" height="100" fill="black" />
    <rect x="5" y="5" width="90" height="90" fill="white" />
    <text x="50" y="75" fontSize="60" fontWeight="bold" textAnchor="middle" fill="black">N</text>
    <circle cx="10" cy="10" r="3" fill="black" />
    <circle cx="90" cy="10" r="3" fill="black" />
    <circle cx="10" cy="90" r="3" fill="black" />
    <circle cx="90" cy="90" r="3" fill="black" />
  </svg>
);

const BackgroundPattern = () => (
  <svg className="fixed inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" preserveAspectRatio="none">
    <path d="M0,0 L1000,0 L1000,1000 L0,1000 Z" fill="#A6EC8A" />
    <path d="M0,0 Q250,0 250,250 T500,500 T750,750 T1000,1000 L1000,0 Z" fill="#F1EFDE" />
    <path d="M0,250 Q250,250 250,500 T500,750 T750,1000 L0,1000 Z" fill="#F1EFDE" />
  </svg>
);

const HomePage = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <BackgroundPattern />

      <header className="bg-[#005051] text-white py-4 px-6 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Logo />
            <h1 className="ml-4 text-2xl sm:text-3xl font-bold">Nimble</h1>
          </div>
          <nav>
            <Link to="/" className="text-white mr-4 text-sm sm:text-base">Home</Link>
            <Link to="/contact" className="text-white text-sm sm:text-base">Contact Us</Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 py-8 z-10">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-[#003030]">Shopping Made Simple</h2>
          <section className="mb-8">
            <p className="text-[#005051] text-lg sm:text-xl lg:text-2xl">
              Nimble is revolutionizing shopping by making it faster and more convenient.
              Stay tuned for the launch of our innovative app!
            </p>
          </section>
          <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-[#005051]">Coming Soon!</div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full max-w-2xl mx-auto">
            <a 
              href="https://forms.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#005051] hover:bg-[#003030] text-white font-bold py-4 px-8 rounded-lg text-lg sm:text-xl transition-colors duration-300 w-full text-center"
            >
              Join the Waitlist
            </a>

            <Link 
              to="/contact" 
              className="bg-[#005051] hover:bg-[#003030] text-white font-bold py-4 px-8 rounded-lg text-lg sm:text-xl transition-colors duration-300 w-full text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </main>

      <footer className="bg-[#005051] text-white py-4 text-center z-10">
        <p className="mb-2 text-sm sm:text-base">Contact us: sales@getnimbleapp.com</p>
        <p className="text-sm sm:text-base">© 2024 Nimble. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
