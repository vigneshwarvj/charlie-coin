import React, { useState } from 'react';
import menuIcon from '../assets/images/menu.png';

const Navigation = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-evenly items-center px-8 py-4 bg-[#250b0e] text-white">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
          alt="Coin Logo"
          className="h-10 w-10"
        />
        <nav className="hidden md:flex space-x-6 text-lg font-semibold">
          <ul className="flex space-x-6">
            <li className="hover:text-yellow-500"><a href="#home">Home</a></li>
            <li className="hover:text-yellow-500"><a href="#about-us">About Us</a></li>
            <li className="hover:text-yellow-500"><a href="#roadmap">Roadmap</a></li>
            <li className="hover:text-yellow-500"><a href="#buy-our-coin">Buy our Coin</a></li>
            <li className="hover:text-yellow-500"><a href="#faq">FAQ</a></li>
            <li className="hover:text-yellow-500"><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        {isOpen && (
        <nav className="md:hidden bg-[#250b0e] text-white">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li className="hover:text-yellow-500"><a href="#home">Home</a></li>
            <li className="hover:text-yellow-500"><a href="#about-us">About Us</a></li>
            <li className="hover:text-yellow-500"><a href="#roadmap">Roadmap</a></li>
            <li className="hover:text-yellow-500"><a href="#buy-our-coin">Buy our Coin</a></li>
            <li className="hover:text-yellow-500"><a href="#faq">FAQ</a></li>
            <li className="hover:text-yellow-500"><a href="#contact">Contact</a></li>
            <button className="bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold shadow-md hover:bg-yellow-500">
              Get Started
            </button>
          </ul>
        </nav>
      )}

        <button className="bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold shadow-md hidden md:block hover:bg-yellow-500">
          Get Started
        </button>
        <button className="md:hidden" onClick={toggleMenu}>
          <img src={menuIcon} alt="Menu Icon" className="h-10 w-10" />
        </button>
      </header>
  )};

  export default Navigation;