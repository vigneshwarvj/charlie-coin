import React from 'react';

const Wealth = () => {
  return (
    <section className="bg-[#EFC3A4] py-16 px-6 flex justify-center items-center" id='about-us'>
        <div className="bg-[#250b0e] text-white p-15 rounded-lg flex flex-col md:flex-row items-center max-w-5xl shadow-lg relative" data-aos="zoom-out">
          {/* Hanging Pins */}
          <div className="absolute top-0 left-10 w-6 h-6 bg-black rounded-full"></div>
          <div className="absolute top-0 right-10 w-6 h-6 bg-black rounded-full"></div>
          
          {/* Image */}
          <img
            src="https://cdn.discordapp.com/attachments/1317487496170307636/1333417299050364948/Logo_1.png?ex=679acb61&is=679979e1&hm=7b49e17b1bd7905fbb4ba593701d7ae80264eeeed1bf0f237a5d0fdcbd48e8e4&"
            alt="King Frog"
            className="w-64 h-64 object-contain"
            style={{ borderRadius: '130px', border: '5px solid gold'}}
          />
          
          {/* Content */}
          <div className="ml-6 text-left">
            <h2 className="text-3xl font-bold text-yellow-400">
              Your guide through <span className="text-yellow-500">Wealth 🤑 Making.</span>
            </h2>
            <p className="mt-4 text-gray-300">
            <b>CHARLIE</b> Coin is more than just a cryptocurrency; it represents resilience, innovation, and community-driven growth.
            </p>
            <p className="mt-2 text-gray-300">
            Inspired by Charlie’s journey, this project is built on the Binance Smart Chain (BSC) to provide secure, transparent, and scalable transactions.
            </p>
            <button className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-yellow-500">
              Buy Token
            </button>
          </div>
        </div>
      </section>
  )};

  export default Wealth;
  