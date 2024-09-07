import React from 'react';

const BackgroundPattern = () => (
    <svg className="fixed inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path d="M0,0 L1000,0 L1000,1000 L0,1000 Z" fill="#A6EC8A" />
        <path d="M0,0 Q250,0 250,250 T500,500 T750,750 T1000,1000 L1000,0 Z" fill="#F1EFDE" />
        <path d="M0,250 Q250,250 250,500 T500,750 T750,1000 L0,1000 Z" fill="#F1EFDE" />
    </svg>
);

export default BackgroundPattern;
