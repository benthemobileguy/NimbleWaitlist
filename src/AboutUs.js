import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import BackgroundPattern from './BackgroundPattern';

const AboutUs = () => {
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
                <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8 sm:p-12">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-[#003030]">About Us</h2>
                    <p className="text-lg sm:text-xl lg:text-2xl text-[#005051] mb-6">
                        At Nimble, we're redefining the shopping experience. Our vision is to make your purchases as quick and effortless as possible. We're not just a company; we're innovators and problem-solvers dedicated to simplifying your life.
                    </p>
                    <p className="text-lg sm:text-xl lg:text-2xl text-[#005051] mb-6">
                        Nimble harnesses cutting-edge technology to create solutions that adapt to your lifestyle, enhancing your shopping with speed and convenience. Our app is more than just a tool—it's the future of shopping, where efficiency meets personalization.
                    </p>
                    <p className="text-lg sm:text-xl lg:text-2xl text-[#005051] mb-6">
                        Behind Nimble is a passionate team driven by the challenge of transforming commerce. Our journey is just beginning, and we invite you to join us as we pioneer a new way to shop.
                    </p>
                    <p className="text-lg sm:text-xl lg:text-2xl text-[#005051]">
                        Stay connected for updates as we prepare to launch an experience you won't want to miss!
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

export default AboutUs;
