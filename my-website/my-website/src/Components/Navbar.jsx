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
            <div className='flex md:hidden items-center hover:cursor-pointer'>
                <box-icon onClick={toggleMenu} name='menu'></box-icon>
            </div>
            <div className={`flex flex-col md:flex-row items-center gap-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
                <ul className={'gap-4 text-[#798a73]'}>
                    <li>
                        <NavLink to='/' className='hover:text-[#4b5c4a]'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' className='hover:text-[#4b5c4a]'>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' className='hover:text-[#4b5c4a]'>Contact</NavLink>
                    </li>
                </ul>
            </div>
        </div>
  );
}
export default Navbar;