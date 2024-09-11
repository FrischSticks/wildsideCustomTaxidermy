import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import '../css/NavBar.css';
import logo from '../images/wildsideCustomTaxidermy.jpeg';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

function NavBar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <div id='navBar' className='sticky top-0 left-0 w-full h-28 shadow-xl z-[100] bg-[#fffdfb]'>
      <div className='flex justify-between items-center w-full h-full px-8 lg:px-12 2xl:px-16'>
        <Link to='/'>
          <img src={logo} alt='Wildside Custom Taxidermy logo' className='h-20 mb-3 md:h-28'/>
        </Link>
        <ul className='hidden pt-7 sm:flex justify-start'>
          <li className='ml-5 lg:ml-8 text-lg md:text-xl uppercase hover:border-b-4 border-[#A42843] hover:scale-105'>
            <Link to='/awards'>Awards</Link>
          </li>
          <li className='ml-5 lg:ml-8 text-lg md:text-xl uppercase hover:border-b-4 border-[#A42843] hover:scale-105'>
            <Link to='/gallery'>Gallery</Link>
          </li>
          <li className='ml-5 lg:ml-8 text-lg  md:text-xl uppercase hover:border-b-4 border-[#A42843] hover:scale-105'>
            <Link to='/prices'>Prices</Link>
          </li>
          <li className='ml-5 lg:ml-8 text-lg  md:text-xl uppercase hover:border-b-4 border-[#A42843] hover:scale-105'>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
        {/* START of MOBILE NAV */}
        <div className='sm:hidden' onClick={handleNav}>
          <AiOutlineMenu size={30}/>
        </div>
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-full h-screen bg-black/75 sm:hidden' : ''}>
        <div className={nav ? 'fixed left-0 top-0 w-[70%] h-screen bg-[#fffdfb] p-10 ease-in duration-500' : 'hidden'}>
          <div>
            <div className='flex w-full justify-between' onClick={handleNav}>
              <Link to='/'>
                <img src={logo} alt='Wildside Custom Taxidermy logo' className='w-28'/>
              </Link>
              <AiOutlineClose className='rounded-full shadow-lg shadow-gray-600 mt-1.5 text-[#A42843] cursor-pointer' onClick={handleNav}/>
            </div>
            <ul className='w-full text-[#0b0304] items-end text-center text-xl'>
              <li className='pt-5 hover:scale-105 uppercase' onClick={handleNav}>
                <Link to='/awards'>Awards</Link>
              </li>
              <li className='pt-5 hover:scale-105 uppercase' onClick={handleNav}>
                <Link to='/gallery'>Gallery</Link>
              </li>
              <li className='pt-5 hover:scale-105 uppercase' onClick={handleNav}>
                <Link to='/prices'>Prices</Link>
              </li>
              <li className='pt-5 hover:scale-105 uppercase' onClick={handleNav}>
                <Link to='/contact'>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;