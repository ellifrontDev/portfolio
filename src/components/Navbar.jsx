import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook,} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import {BsFillPersonLinesFill} from "react-icons/bs";
import {Link} from 'react-scroll'
import imgLogo from '../img/logoel.png'
import {SiCodewars} from 'react-icons/si'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
            <div>
                <h1 style={{
                    width: '150px'
                }}><img src={imgLogo} alt=""/></h1>
            </div>

            {/*Menu*/}
            <ul className="hidden md:flex">
                <li>
                    <Link to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li><Link to="about" smooth={true} duration={500}>
                    About
                </Link></li>
                <li><Link to="skills" smooth={true} duration={500}>
                    Skills
                </Link></li>
                <li><Link to="work" smooth={true} duration={500}>
                    Work
                </Link></li>
                <li><Link to="contact" smooth={true} duration={500}>
                    Contact
                </Link></li>
            </ul>
            {/*Hamburger */}
            <div onClick={handleClick} className="md:hidden z-10">
                {!nav ? <FaBars/> : <FaTimes/>}
            </div>

            {/*Mobile menu*/}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link>
                </li>
                <li className="py-6 text-4xl"><Link onClick={handleClick} to="about" smooth={true} duration={500}>
                    {' '}
                    About
                </Link></li>
                <li className="py-6 text-4xl"><Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                    {' '}
                    Skills
                </Link></li>
                <li className="py-6 text-4xl"><Link onClick={handleClick} to="work" smooth={true} duration={500}>
                    {' '}
                    Work
                </Link></li>
                <li className="py-6 text-4xl"><Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                    {' '}
                    Contact
                </Link></li>
            </ul>
            {/*Social icons*/}
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
                        <a className="flex justify-between items-center w-full text-gray-300" href="https://www.linkedin.com/in/%D1%8D%D0%BB%D0%B8%D0%B4%D0%B0-%D0%BD%D1%83%D1%80%D0%BB%D0%B0%D0%BD-%D0%BA%D1%8B%D0%B7%D1%8B-35a85b275/">
                            Linkedin <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black">
                        <a className="flex justify-between items-center w-full text-gray-300" href="https://github.com/ellifrontDev">
                            GitHub <FaGithub size={30}/>
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-500">
                        <a className="flex justify-between items-center w-full text-gray-300" href="https://www.codewars.com/users/ellida">
                            Codewars <SiCodewars size={30}/>
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-pink-500">
                        <a className="flex justify-between items-center w-full text-gray-300" href="https://www.canva.com/design/DAFnCF4zGJE/ohmaZm0F4Qg0uTcsME2pzw/view">
                            Resume <BsFillPersonLinesFill size={30}/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;