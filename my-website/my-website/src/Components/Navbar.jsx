import { useState } from 'react';
import { NavLink } from 'react-router';
import 'boxicons'
function Navbar () {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='w-screen h-16 bg-[#e0dac9] flex items-center justify-between px-4'>
            <div className='text-[#798a73] text-2xl font-bold'>
                <h5>My Website</h5>
            </div>
            <div className='hidden md:flex space-x-4'>
                <NavLink to="/" className='text-[#798a73] hover:text-[#798a73]'>Home</NavLink>
                <NavLink to="/projects" className='text-[#798a73] hover:text-[#798a73]'>Projects</NavLink>
                <NavLink to="/about" className='text-[#798a73] hover:text-[#798a73]'>About Me</NavLink>
                <NavLink to="/contact" className='text-[#798a73] hover:text-[#798a73]'>Contact</NavLink>
            </div>
            <div className='md:hidden flex items-center'>
                {/*<i onClick={toggleMenu} class='bx bx-menu' style='color:#798a73'  ></i>*/}
            </div>
            <div className={`absolute top-16 left-0 w-full bg-[#e0dac9] text-center transition-transform duration-300 ${isOpen ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
                <div className='flex flex-col space-y-4 py-4'>
                    <NavLink to="/" className='text-[#798a73] hover:text-[#798a73]'>Home</NavLink>
                    <NavLink to="/projects" className='text-[#798a73] hover:text-[#798a73]'>Projects</NavLink>
                    <NavLink to="/about" className='text-[#798a73] hover:text-[#798a73]'>About Me</NavLink>
                    <NavLink to="/contact" className='text-[#798a73] hover:text-[#798a73]'>Contact</NavLink>
                </div>
                <div className='flex justify-center py-4'>
                    <i onClick={toggleMenu} class='bx bx-x' style='color:#798a73' ></i>
                </div>
            </div>

        </div>
  );
}
export default Navbar;