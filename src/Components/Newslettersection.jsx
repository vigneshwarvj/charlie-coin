import React from "react";

const NewsletterSection = () => {
  return (
    <div className="bg-[#efc3a4] flex items-center justify-center py-20">
      <div
        className="relative bg-[#be7656] text-white rounded-lg p-8 md:p-10 flex flex-col md:flex-row items-center 
        space-y-6 md:space-y-0 md:space-x-8 max-w-4xl w-full shadow-lg animate-fade-in"
      >
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="text-yellow-400 text-xl md:text-2xl font-bold flex items-center">
            <span className="text-3xl md:text-4xl mr-2">|</span> Don't Miss Memecoin News
          </h2>
          <p className="text-sm md:text-base mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi. 
            Ut ut felis congue nisl hendrerit commodo.
          </p>

          {/* Email Input Field */}
          <div className="flex mt-4">
            <input
              type="email"
              placeholder="Enter your Email"
              className="p-3 flex-1 rounded-l-md border border-gray-300 text-gray-900 focus:outline-none"
            />
            <button className="bg-yellow-400 px-6 py-3 rounded-r-md font-semibold text-black hover:bg-yellow-500 transition">
              Subscribe
            </button>
          </div>
        </div>

        {/* Right Side - Frog King Image */}
        <div className="w-48 md:w-56 lg:w-64 flex-shrink-0">
          <img
            src="https://meme-coin77.netlify.app/img/core-img/img2.png" // Update the path if needed
            alt="Frog King"
            className="rounded-md w-full drop-shadow-lg transform hover:scale-105 transition duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
