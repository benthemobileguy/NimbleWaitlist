import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import BackgroundPattern from './BackgroundPattern';

const ContactUs = () => {
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
            <Link to="/about" className="text-white mr-4 text-sm sm:text-base">About Us</Link>
            <Link to="/contact" className="text-white text-sm sm:text-base">Contact Us</Link>
          </nav>
                </div>
            </header>

            <main className="flex-grow flex flex-col items-center justify-center text-center px-4 py-8 z-10">
                <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8 sm:p-12">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-[#003030]">Contact Us</h2>
                    <p className="text-lg sm:text-xl lg:text-2xl text-[#005051] mb-6">
                        We'd love to hear from you! Whether you have questions, feedback, or partnership inquiries, feel free to reach out to us. We're here to help!
                    </p>
                    <div className="text-lg sm:text-xl lg:text-2xl text-[#005051] mb-6">
                        <p className="mb-4">Email: <strong>sales@getnimbleapp.com</strong></p>
                        <p>Phone: <strong>+1 800-123-4567</strong></p>
                    </div>
                    <p className="text-lg sm:text-xl lg:text-2xl text-[#005051]">
                        Stay connected with us on our social channels for the latest updates and announcements.
                    </p>
                </div>
            </main>

            <footer className="bg-[#005051] text-white py-4 text-center z-10">
                <p className="mb-2 text-sm sm:text-base">Contact us: sales@getnimbleapp.com</p>
                <p className="text-sm sm:text-base">© 2024 Nimble. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default ContactUs;
