import React from "react";
import aboutimg from "../assets/about4.jpeg" 

const About = () => {
    return (
        <div className="mt-16 md:mb-24 mb-44 max-w-[1000px] md:h-[82vh] flex items-center justify-center mx-auto px-4 gap-24 md:gap-24 md:px-0" id="about">
            
            <div className="flex flex-row gap-2">
                <img src={aboutimg} 
                alt="aboutimg"
                className="object-cover rounded-xl w-[100px] h-[300px] filter grayscale brightness-50" 
                />
                <img src={aboutimg} 
                alt="aboutimg"
                className="object-cover rounded-xl w-[100px] h-[200px] filter grayscale brightness-50" 
                />
            </div>

            <div className="">
                <p className="text-gray-600 text-justify tracking-tighter leading-loose max-w-[500px] text-lg md:text-xl bg-gradient-to-l from-gray-200 via-gray-100 rounded-3xl shadow-xl overflow-hidden p-7">
                I am a graduate of Computer Engineering from Universitas Muhammadiyah Surakarta <br /> 
                Currently, I am focused on Front-End Web Development and Quality Assurance   
                </p>
            </div>
        </div>
    )
}

export default About;