import { useState } from 'react';
import { NavLink } from 'react-router';
import 'boxicons'
function Navbar () {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='text-white'>
            <h1 className="w-full text-3xl font-bold text-[#00df9a] text-center py-4">My Website</h1>
            <nav className="flex justify-between items-center bg-gray-800 p-4">
                <div className="flex items-center">
                    <div className="text-3xl cursor-pointer" onClick={toggleMenu}>
                        <box-icon name={isOpen ? 'x' : 'menu'} color="white"></box-icon>
                    </div>
                    <div className={`flex flex-col ${isOpen ? 'block' : 'hidden'} md:flex md:flex-row md:items-center`}>
                        <NavLink to="/" className="text-white px-4 py-2 hover:bg-gray-700 rounded">Home</NavLink>
                        <NavLink to="/about" className="text-white px-4 py-2 hover:bg-gray-700 rounded">About</NavLink>
                        <NavLink to="/contact" className="text-white px-4 py-2 hover:bg-gray-700 rounded">Contact</NavLink>
                    </div>
                </div>
            </nav>    
        </div>
  );
}
export default Navbar;