import React from "react";

const CoinFeature = () => {
  return (
    <section className="bg-[#efc3a4] p-8 md:p-16">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex-1 text-center md:text-left space-y-4">
          <div className="text-[#ffffff] text-2xl font-bold flex items-center space-x-2">
            <span className="text-3xl">🌟</span>
            <span>Our Coin Features</span>
          </div>
          <h2 className="text-4xl font-extrabold text-[#250b0e]">
            Our Meme Coin is Your <span className="text-[#ff9f00]">Ultimate Solution</span> for Meme Inspired Cryptocurrencies
          </h2>
          <p className="text-xl text-green-700 mt-4">Trusted by <span className="text-[#ffffff]">27,000+</span> customers around the world</p>
        </div>

        <div className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0">
          <img src="https://meme-coin77.netlify.app/img/core-img/main-feature.png" alt="Frog" className="w-72 rounded-lg" />
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-[#ffffff] text-[#250b0e] rounded-lg p-6" data-aos="fade-right">
          <div className="flex items-center justify-center mb-4">
            <span className="text-4xl"><img src="https://meme-coin77.netlify.app/img/icons/f1.png" alt="coin-feature-1" /></span>
          </div>
          <h3 className="text-2xl font-semibold">Friendly and Funny Coin</h3>
          <p className="text-sm mt-4">
            Lorem ipsum dolor sit amet, elit Sed quis accumsan nisi Ut ut
          </p>
        </div>

        <div className="bg-[#250b0e] text-white rounded-lg p-6" data-aos="fade-down">
          <div className="flex items-center justify-center mb-4">
            <span className="text-4xl"><img src="https://meme-coin77.netlify.app/img/icons/f2.png" alt="coin-feature-2" /></span>
          </div>
          <h3 className="text-2xl font-semibold">Strategic Partnerships</h3>
          <p className="text-sm mt-4">
            Lorem ipsum dolor sit amet, elit Sed quis accumsan nisi Ut ut
          </p>
        </div>

        <div className="bg-[#ffffff] text-[#250b0e] rounded-lg p-6" data-aos="fade-left">
          <div className="flex items-center justify-center mb-4">
            <span className="text-4xl"><img src="https://meme-coin77.netlify.app/img/icons/f3.png" alt="coin-feature-3" /></span>
          </div>
          <h3 className="text-2xl font-semibold">Growing Ecosystem</h3>
          <p className="text-sm mt-4">
            Lorem ipsum dolor sit amet, elit Sed quis accumsan nisi Ut ut
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoinFeature;