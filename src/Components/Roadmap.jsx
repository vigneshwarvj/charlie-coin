import React from 'react';

const Roadmap = () => {
  return (
    <div className="bg-green-900 min-h-screen text-white relative font-sans" id='roadmap'>
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[#250b0e] bg-pattern"></div>

      <div className="relative z-10 container mx-auto px-6 py-12" >
        {/* Header Section */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h1 className="text-4xl font-bold text-yellow-400">Our Token Roadmap</h1>
          <p className="mt-4 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            accumsan nisi Ut ut felis congue nisl hendrerit commodo.
          </p>
        </div>

        {/* Roadmap Section */}
        <div className="relative">
          <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-white transform -translate-x-1/2"></div>
          {/* Phases */}
          <div className="space-y-8">
            {/* Phase #1 */}
            <div className="flex items-center justify-start">
              <div className="bg-white text-[#250b0e] p-6 rounded-lg shadow-md w-2/5" data-aos="fade-right">
                <div className="bg-[#250b0e] text-white px-4 py-2 rounded-md font-semibold inline-block mb-4">
                  Phase #One
                </div>
                <h3 className="font-bold text-xl mb-2">MEMECOIN WHITEPAPER</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                  malesuada tellus lorem, et condimentum neque commodo quis.
                </p>
              </div>
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#efc3a4] border-4 border-white transform translate-x-1/2"></div>
            </div>

            {/* Phase #2 */}
            <div className="flex items-center justify-end">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#efc3a4] border-4 border-white transform -translate-x-1/2"></div>
              <div className="bg-white text-[#250b0e] p-6 rounded-lg shadow-md w-2/5" data-aos="fade-left">
                <div className="bg-[#250b0e] text-white px-4 py-2 rounded-md font-semibold inline-block mb-4">
                  Phase #Two
                </div>
                <h3 className="font-bold text-xl mb-2">BLOCKCHAIN DESIGN</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                  malesuada tellus lorem, et condimentum neque commodo quis.
                </p>
              </div>
            </div>

            {/* Phase #3 */}
            <div className="flex items-center justify-start">
              <div className="bg-white text-[#250b0e] p-6 rounded-lg shadow-md w-2/5" data-aos="fade-right">
                <div className="bg-[#250b0e] text-white px-4 py-2 rounded-md font-semibold inline-block mb-4">
                  Phase #Three
                </div>
                <h3 className="font-bold text-xl mb-2">WEB3.0 DEVELOPMENT</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                  malesuada tellus lorem, et condimentum neque commodo quis.
                </p>
              </div>
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#efc3a4] border-4 border-white transform translate-x-1/2"></div>
            </div>

            {/* Phase #4 */}
            <div className="flex items-center justify-end">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#efc3a4] border-4 border-white transform -translate-x-1/2"></div>
              <div className="bg-white text-[#250b0e] p-6 rounded-lg shadow-md w-2/5" data-aos="fade-left">
                <div className="bg-[#250b0e] text-white px-4 py-2 rounded-md font-semibold inline-block mb-4">
                  Phase #Four
                </div>
                <h3 className="font-bold text-xl mb-2">PRE-SALE LAUNCH</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                  malesuada tellus lorem, et condimentum neque commodo quis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )};

  export default Roadmap;
