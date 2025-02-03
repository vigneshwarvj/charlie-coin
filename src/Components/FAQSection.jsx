import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle the active question
  };

  return (
    <section className="bg-[#250b0e] py-16 px-8 text-center" id='faq'>
      <div className="max-w-screen-xl mx-auto">
        <motion.h2
          className="text-4xl font-extrabold text-yellow-400 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          FAQ Questions
        </motion.h2>
        <h3 className="text-3xl font-bold text-green-200 mb-16">
          Our Top Questions and Answers
        </h3>
        <p className="text-lg text-green-100 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Labore
          reprehe nderit eaque eum, aut eum ipsum sicing elit.
        </p>

        {/* FAQ Items */}
        <div className="space-y-6">
          {[
            {
              question: "What are the objectives of this Token?",
              answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolore omnis quaerat nostrum, pariatur ipsum sunt accumsamus enim necessitatibus est fugiat, assumenda dolorem, deleniti corrupti cupiditate ipsum, dolorum.",
            },
            {
              question: "What is the best features and services we deliver?",
              answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Labore reprehe nderit eaque eum, aut eum ipsum sicing elit.",
            },
            {
              question: "Why this ICO important to me?",
              answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Labore reprehe nderit eaque eum, aut eum ipsum sicing elit.",
            },
            {
              question: "How may I take part in and purchase this Token?",
              answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Labore reprehe nderit eaque eum, aut eum ipsum sicing elit.",
            },
          ].map((faq, index) => (
            <motion.div
              key={index}
              className="bg-[#efc3a4] text-white p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              
            >
              <div
                className="cursor-pointer text-xl font-semibold mb-4 flex justify-between"
                onClick={() => toggleFAQ(index)}
                data-aos="fade-down"
              >
                <span>{faq.question}</span>
                <span>
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>
              {activeIndex === index && (
                <motion.p
                  className="text-sm text-[#250b0e]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {faq.answer}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Contact Button */}
        <div className="mt-8">
          <motion.button
            className="bg-yellow-400 text-green-800 py-3 px-8 rounded-full font-bold"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          ><a href="#contact">Contact Us</a>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;