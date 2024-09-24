import React from "react";
import {FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="max-w-[1000px] mx-auto bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-t-3xl place-items-center p-1 md:p-3 text-sm md:text-lg mt-12 text-center">

            <ul className="space-y-1 mb-0 text-center">
                <p className="text-gray-200 font-bold"></p>
                <p className="text-gray-400">i am a Front-end developer and Quality Assurance</p>
                  <div className="flex justify-center gap-2 text-gray-400">
                    <a href="https://wa.me/6285860395611"> 
                        < FaWhatsapp className="hover:text-gray-600"/>
                    </a>
                    <a href="https://www.instagram.com/mchafrizal/">
                        <FaInstagram className="hover:text-gray-600"/>
                    </a>
                  </div>
                <p className="text-gray-400">@2024 mafrizal</p>
            </ul>
        </div>
    )
}

export default Footer;