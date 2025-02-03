import React, { useState } from 'react';
import { Tooltip } from 'react-tooltip';

const ContractAddress = () => {

  // Function to handle copying to clipboard
  const [copyTooltip, setCopyTooltip] = useState('Copy to Clipboard');
  const contractAddress = '0xe3c127466908c2ccdc43521c8315b87fd369d605';

  const handleCopyToClipboard = () => {
    // Copy to clipboard
    navigator.clipboard.writeText(contractAddress)
      .then(() => {
        setCopyTooltip('Copied!');

        setTimeout(() => {
          setCopyTooltip('Copy to Clipboard');
        }, 2000);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <section className="flex flex-col items-center bg-[#EFC3A4] py-15" id='contract-address'>
      {/* Left Section */}
      <div className="bg-[#BE7656] text-white p-6 rounded-lg w-full md:w-2/3" data-aos="zoom-out-up">
        {/* Contract Address */}
        <h2 className="text-3xl font-bold text-white flex items-center py-3">
          <span className="text-yellow-400 mr-2">|</span> Contract Address
        </h2>
        <div className="relative bg-[#250b0e] p-4 rounded-lg mt-2 flex items-center">
          <span className="bg-yellow-500 p-2 rounded mr-2 cursor-pointer" onClick={handleCopyToClipboard}
            data-tooltip-id="copy-tooltip"
            data-tooltip-content={copyTooltip}>📋</span> <Tooltip id="copy-tooltip"/>
          <span className="truncate"> {contractAddress}</span>
          <div className="absolute right-[-15px] top-[-10px] bg-yellow-400 text-black px-2 py-1 text-xs font-bold rounded-full">
            Get 5% OFF
          </div>
        </div>

        <br></br>

        {/* Buy Coin Now On */}
        <h2 className="text-3xl font-bold text-white flex items-center py-3">
          <span className="text-yellow-400 mr-2">|</span> Buy Coin Now On
        </h2>
        <div className="flex flex-wrap gap-3 mt-3">
          {["BINANCE", "BITGET", "KCOIN", "BINGEX", "BITGET"].map((exchange, index) => (
            <button
              key={index}
              className="flex items-center gap-2 border border-black px-4 py-2 bg-white rounded-lg shadow-md"
            >
              <span className="text-lg">💰</span> {exchange}
            </button>
          ))}
        </div>
      </div>

      {/* Right Section */}
      {/* <div className="bg-green-200 p-6 rounded-lg w-full md:w-1/3 mt-6 md:mt-0">
        <h2 className="text-3xl font-bold text-green-800 flex items-center py-3">
          <span className="text-yellow-400 mr-2">|</span> Join Our Community
        </h2>
        <p className="text-gray-700 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
          reprehenderit eaque eum, autem ipsum sicing elit.
        </p>
        <div className="flex gap-3 mt-4">
          {["✈️", "❌", "🔗"].map((icon, index) => (
            <button key={index} className="bg-yellow-400 p-3 rounded-lg text-lg shadow-md">
              {icon}
            </button>
          ))}
        </div>
      </div> */}
    </section>
  )};

  export default ContractAddress;