import { useState } from 'react';
import { NavLink } from 'react-router';
import 'boxicons'
function Navbar () {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <div className="flex w-screen h-24 bg-gray-950 fixed top-0 left-0">
                <h1 className="w-full text-3xl font-bold text-[#00df9a] text-center py-4 z-50">MY WEBSITE.</h1>
                    <div onClick={toggleMenu} className="block md:hidden items-center justify-center cursor-pointer z-50 p-4">
                        <box-icon name={isOpen ? 'x' : 'menu'} size="2rem" color="#00df9a"></box-icon>
                    </div>
            </div>
        {/** MOBILE NAV BAR*/} 
            <div className={`md:hidden fixed left-0 top-0 w-[60%] h-full border-r-gray-900 bg-gray-800 ease-in-out duration-500 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="fixed left-0 top-0 w-[60%] h-full border-r-gray-900 bg-[#0030000]">   
                   <ul className="pt-24">
                        <li className="p-4 cursor-pointer border-b border-gray-600">
                            <NavLink to="/" className="text-white hover:text-[#00df9a]">HOME</NavLink>
                        </li>
                        <li className="p-4 cursor-pointer border-b border-gray-600">
                            <NavLink to="/about" className="text-white hover:text-[#00df9a]">ABOUT</NavLink>
                        </li>
                        <li className="p-4 cursor-pointer border-b border-gray-600">
                            <NavLink to="/contact" className="text-white hover:text-[#00df9a]">CONTACT</NavLink>
                        </li>
                        <li className="p-4 cursor-pointer border-b border-gray-600">
                            <NavLink to="/contact" className="text-white hover:text-[#00df9a]">PROJECTS</NavLink>
                        </li>
                        <li className="p-4 cursor-pointer">
                            <NavLink to="/contact" className="text-white hover:text-[#00df9a]">BLOG</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        {/** DESKTOP NAV BAR */}
            <div className="hidden md:flex items-center justify-center w-full h-full bg-gray-950 mt-27">
                <ul className="flex space-x-8">
                    <li className="p-4 cursor-pointer">
                        <NavLink to="/" className="text-white hover:text-[#00df9a]">HOME</NavLink>
                    </li>
                    <li className="p-4 cursor-pointer">
                        <NavLink to="/about" className="text-white hover:text-[#00df9a]">ABOUT</NavLink>
                    </li>
                    <li className="p-4 cursor-pointer">
                        <NavLink to="/contact" className="text-white hover:text-[#00df9a]">CONTACT</NavLink>
                    </li>
                    <li className="p-4 cursor-pointer">
                        <NavLink to="/projects" className="text-white hover:text-[#00df9a]">PROJECTS</NavLink>
                    </li>
                    <li className="p-4 cursor-pointer">
                        <NavLink to="/blog" className="text-white hover:text-[#00df9a]">BLOG</NavLink>
                    </li>
                </ul>
            </div>
        </div>
  );
}
export default Navbar;