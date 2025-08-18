'use client'

import React, { useState } from 'react';

export default function Navbar () {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // close menu on mobile after click
  };

  return (
    <div className='h-20 pt-4 items-center justify-end pr-14 flex bg-[#1c1c1c] relative'>
      
      {/* Desktop Menu */}
      <ul className='hidden md:flex space-x-28 text-xl font-bold text-white font-mono'>
        <li className='hover:text-[#00f5a0] transition-colors duration-300 cursor-pointer' onClick={() => scrollToSection("projects")}>Projects</li>
        <li className='hover:text-[#00f5a0] transition-colors duration-300 cursor-pointer' onClick={() => scrollToSection("aboutme")}>About Me</li>
        <li className='hover:text-[#00f5a0] transition-colors duration-300 cursor-pointer' onClick={() => scrollToSection("contact")}>Contact</li>
      </ul>

      {/* Mobile Hamburger Button */}
      <div className='md:hidden flex items-center'>
        <button
          className='text-white text-2xl focus:outline-none'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className='absolute top-full right-0 mt-2 w-40 bg-[#1c1c1c] flex flex-col items-start py-2 px-4 space-y-2 text-white font-bold font-mono md:hidden shadow-lg rounded'>
          <li className='hover:text-[#00f5a0] transition-colors duration-300 cursor-pointer' onClick={() => scrollToSection("projects")}>Projects</li>
          <li className='hover:text-[#00f5a0] transition-colors duration-300 cursor-pointer' onClick={() => scrollToSection("aboutme")}>About Me</li>
          <li className='hover:text-[#00f5a0] transition-colors duration-300 cursor-pointer' onClick={() => scrollToSection("contact")}>Contact</li>
        </ul>
      )}
    </div>
  )
}
