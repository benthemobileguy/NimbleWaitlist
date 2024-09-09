import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import BackgroundPattern from './BackgroundPattern';

const HomePage = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* BackgroundPattern component */}
      <BackgroundPattern />

      {/* Header */}
      <header className="bg-[#005051] text-white py-4 px-6 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            {/* Logo component */}
            <Logo />
            <h1 className="ml-4 text-2xl sm:text-3xl font-bold">Nimble</h1>
          </div>
          <nav>
            <Link to="/" className="text-white mr-4 text-sm sm:text-base">Home</Link>
            <Link to="/contact" className="text-white text-sm sm:text-base">Contact Us</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
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
              href="https://docs.google.com/forms/d/1mJFtwThAP2c0mIf-mYkcfU5GwbPYk60-QvFawSwX5qk/prefill"
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

      {/* Footer */}
      <footer className="bg-[#005051] text-white py-4 text-center z-10">
        <p className="mb-2 text-sm sm:text-base">Contact us: sales@getnimbleapp.com</p>
        <p className="text-sm sm:text-base">© 2024 Nimble. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
