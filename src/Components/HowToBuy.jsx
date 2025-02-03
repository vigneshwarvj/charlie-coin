import React from 'react';
import { motion } from 'framer-motion';

const HowToBuy = () => {
  return (
    <section className="bg-[#efc3a4] py-16 px-8 text-center" id='buy-our-coin'>
      <div className="max-w-screen-xl mx-auto">
        <motion.h2
          className="text-4xl font-extrabold text-[#facc15] mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          How To Buy Our Coin
        </motion.h2>
        <p className="text-lg text-green-600 mb-16">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          accumsan nisi ut ut felis congue nisl hendrerit commodo.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <motion.div
            className="bg-[#250b0e] text-white p-8 rounded-lg text-left shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            data-aos="fade-right"
          >
            <h3 className="text-3xl font-bold text-yellow-400 mb-4">01</h3>
            <h4 className="text-2xl font-bold mb-4">Connect Your Wallet</h4>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Alias
              illo temporibus, molestias elit.
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            className="bg-white text-[#250b0e] p-8 rounded-lg text-left shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            data-aos="fade-down"
          >
            <h3 className="text-3xl font-bold text-yellow-400 mb-4">02</h3>
            <h4 className="text-2xl font-bold mb-4">Swap Some Crypto Coin</h4>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Alias
              illo temporibus, molestias elit.
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            className="bg-[#250b0e] text-white p-8 rounded-lg text-left shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            data-aos="fade-left"
          >
            <h3 className="text-3xl font-bold text-yellow-400 mb-4">03</h3>
            <h4 className="text-2xl font-bold mb-4">Purchase Our Memecoin</h4>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Alias
              illo temporibus, molestias elit.
            </p>
          </motion.div>
        </div>

        <div className="mt-16">
          <motion.img
            src="https://meme-coin77.netlify.app/img/core-img/img1.png"
            alt="Frog King"
            className="mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            whileHover={{ rotate: 10 }}
          />
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;