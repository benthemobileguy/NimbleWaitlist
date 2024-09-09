import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-[#003030] fixed flex flex-col items-start py-8 px-4">
      <Link to="/" className="text-white text-xl font-bold mb-8">
        Nimble
      </Link>
      <nav className="flex flex-col gap-6">
        <Link to="/" className="text-white text-lg hover:text-[#00b3b3] transition">
          Home
        </Link>
        <Link to="/about" className="text-white text-lg hover:text-[#00b3b3] transition">
          About Us
        </Link>
        <Link to="/contact" className="text-white text-lg hover:text-[#00b3b3] transition">
          Contact Us
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
