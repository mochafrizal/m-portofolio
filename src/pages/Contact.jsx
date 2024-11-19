import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion"; // Import Framer Motion
import "../assets/Clear.js";

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2, // Delay antar elemen dalam grid
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="p-8 mx-3 max-w-[1100px] md:h-[92vh] md:mt-44 bg-gradient-to-r from-gray-600 via-gray-800 to-black md:mx-auto rounded-xl mb-28"
      id="contact"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="text-center mx-auto p-5"
        variants={itemVariants}
      >
        <h2 className="text-gray-200 font-bold tracking-tight text-3xl md:text-5xl">
          Let's connect
        </h2>
        <p className="text-xl text-gray-400 mb-5">Feel free to reach out!</p>
      </motion.div>

      <div className="grid md:grid-cols-2">
        <motion.div
          className="place-content-center mx-auto m-4"
          variants={itemVariants}
        >
          <div className="md:grid flex justify-center mb-5 md:mb-6 gap-2">
            <a href="https://wa.me/6285860395611">
              <FaWhatsapp className="md:mb-2 md:w-16 w-10 h-auto text-gray-300 hover:scale-105 hover:text-zinc-100 duration-100" />
            </a>

            <a href="https://www.instagram.com/mchafrizal/">
              <FaInstagram className="md:w-16 w-10 h-auto text-gray-300 hover:scale-105 hover:text-zinc-100 duration-100" />
            </a>
          </div>
          <div className="bg-gradient-to-r from-gray-400 via-gray-600 to-gray-700 p-2 rounded-lg shadow-lg">
            <h3 className="text-center text-lg font-bold text-gray-100 mb-2">
              Contact
            </h3>
            <p className="text-gray-100">Mobile: +6285860395611</p>
            <p className="text-gray-100">Email: mochafrizalm60@gmail.com</p>
          </div>
        </motion.div>

        <motion.div
          className="md:max-w-[30rem] p-2 md:p-12"
          id="form"
          variants={itemVariants}
        >
          <p className="text-gray-200 mb-4 text-lg">Message me with email</p>
          <form action="https://getform.io/f/bejymkma" method="POST">
            <div className="mb-6">
              <input
                type="text"
                id="name"
                placeholder="Your Name ..."
                className="mb-2 w-full rounded-md border-gray-400 py-2 pl-2 pr-4"
              />
              <input
                type="text"
                id="email"
                placeholder="Your Email ..."
                className="mb-2 w-full rounded-md border-gray-400 py-2 pl-2 pr-4"
              />
              <textarea
                id="textarea"
                name="textarea"
                cols="30"
                rows="4"
                placeholder="Write your message ....."
                className="w-full rounded-md border border-gray-400 py-2 pl-2"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-gray-400 via-gray-600 to-gray-700 rounded-md text-gray-200 font-semibold text-xl py-3 hover:scale-95 duration-100"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
