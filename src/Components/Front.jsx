import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles
import logo from '../assets/images/Logo.png';

const Front = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="relative flex flex-col items-center text-center bg-[#EFC3A4] py-16 px-6" id='home'>
      {/* <img
          src="https://meme-coin77.netlify.app/img/core-img/c-left.png"
          alt="Tree Left"
          className="absolute left-0 bottom-0 top-0 h-90"
          data-aos="fade-right"
        />
        <img
          src="https://meme-coin77.netlify.app/img/core-img/c-right.png"
          alt="Tree Right"
          className="absolute right-0 bottom-0 top-0 h-90"
          data-aos="fade-left"
        /> */}

        <img
          src={logo}
          alt="Frog Meme Coin"
          className="w-64 h-64"
          data-aos="fade-down"
        />
        <h1 className="text-5xl font-bold text-[#b8860b] mt-4" data-aos="fade-up">CHARLIE Coin</h1>
        <p className="text-gray-700 max-w-2xl mt-4" data-aos="fade-up">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eveniet dolorem blanditiis ad, labore delectus dolor sit amet, adipisicing elit. Eveniet ipsum dolor sit amet labore delectus dolor sit amet, adipisicing elit.
        </p>

        <div className="mt-6 flex space-x-4" data-aos="fade-up">
          <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-800">
            DexTools
          </button>
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-yellow-500">
            Buy Token
          </button>
        </div>
      </section>
  )};

  export default Front;
