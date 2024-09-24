import React, {useState} from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
import logo from "../assets/Logo_0.png";

const Navbar = () => {
    const [nav,setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    const closeNav = () => {
        setNav(false)
    }

    return(
        <div className= "text-gray-800 flex justify-between items-center max-w-[1000px] mx-auto h-24">

            <a className="mt-2 ml-8">
            <img src={logo} alt="logo" className="w-[150px] md:w-[200px]" />
            </a>
            
            <ul className="hidden md:flex font-semibold cursor-pointer">
                <li className="p-5  hover:scale-125 hover:text-gray-600 duration-150"><Link to="about" smooth={true} offset={50} duration={500}>About</Link></li>
                <li className="p-5  hover:scale-125 hover:text-gray-600 duration-150"><Link to="skills" smooth={true} offset={50} duration={500}>Skills</Link></li>
                <li className="p-5  hover:scale-125 hover:text-gray-600 duration-150"><Link to="experience" smooth={true} offset={50} duration={500}>Experience</Link></li>
                <li className="p-5  hover:scale-125 hover:text-gray-600 duration-150"><Link to="contact" smooth={true} offset={50} duration={500}>contact</Link></li>
            </ul>

            <div onClick={handleNav} className="fixed top-5 right-1 z-10 md:hidden mr-6 bg-transparent rounded-md p-2">
                {nav ? <AiOutlineClose size={40}/> : <AiOutlineMenu size={40}/> }
            </div>

            <div className={nav ? "z-10 text-gray-300 fixed h-auto left-2 top-6 w-50 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 ease-in-out duration-500 rounded-md p-3" : "fixed left-[-110%]"  }>

            <a className="mx-auto px-2">
            <img src={logo} alt="logo" className="w-[200px] h-[60px]" />
            </a>

               <ul className="font-semibold text-4xl text-start cursor-pointer ">
                   <li className="p-5 hover:text-zinc-400 hover:scale-110"><Link to="about" onClick={closeNav} smooth={true} offset={50} duration={500}>About</Link></li>
                   <li className="p-5 hover:text-zinc-400 hover:scale-110"><Link to="skills" onClick={closeNav} smooth={true} offset={50} duration={500}>Skills</Link></li>
                   <li className="p-5 hover:text-zinc-400 hover:scale-110"><Link to="experience" onClick={closeNav} smooth={true} offset={50} duration={500}>Experience</Link></li>
                   <li className="p-5 hover:text-zinc-400 hover:scale-110"><Link to="contact" onClick={closeNav} smooth={true} offset={50} duration={500}>contact</Link></li>
               </ul>
            </div>
        </div>
    )
}

export default Navbar;