import React from 'react';

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

export default Logo;
