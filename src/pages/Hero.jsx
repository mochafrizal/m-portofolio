import React from "react";
import profil from "../assets/sapiens.png";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="my-7 md:my-0 max-w-[1000px] md:h-[70vh] mx-auto grid md:grid-cols-4 place-items-center">
      {/* Text Section with Animation */}
      <motion.div
        className="max-w-[400px]"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="md:text-5xl text-3xl tracking-tight md:text-nowrap">
          My name is <br />
          <span className="font-normal italic">Moch Afrizal</span>
          <br />
        </p>
        <div className="md:text-3xl text-lg">
          <TypeAnimation
            sequence={["Front-end Web", 1000, "Quality Assurance", 1000]}
            speed={50}
            repeat={Infinity}
          />
        </div>
      </motion.div>

      {/* Profile Image with Animation */}
      <motion.div
        className="md:col-span-2 md:ml-28"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      >
        <img
          src={profil}
          alt="Moch Afrizal's profile"
          className="w-[300px] md:w-[1000px] h-auto mx-auto"
        />
      </motion.div>

      {/* Social Media Links with Animation */}
      <motion.div
        className="text-4xl flex flex-row md:flex-col gap-10 md:w-full place-items-end"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <a
          className="hover:scale-110 hover:text-gray-500"
          href="https://wa.me/6285860395611"
        >
          <FaWhatsapp />
        </a>
        <a
          className="hover:scale-110 hover:text-gray-500"
          href="https://www.instagram.com/mchafrizal"
        >
          <FaInstagram />
        </a>
      </motion.div>
    </div>
  );
};

export default Hero;
