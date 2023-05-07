import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  FaHome,
  FaUser,
  FaChevronCircleRight,
  FaChevronCircleLeft,
  FaSignOutAlt,
  FaListAlt,
} from 'react-icons/fa';

const NavBar = () => {
  const [navExpand, setNavExpand] = useState(false);

  const toggleFunc = () => {
    setNavExpand(!navExpand);
  };

  const sidebar =
    'bg-[#E4E9F7]  h-full pb-10 pl-7  fixed top-0 transition-all duration-500 w-72 z-2  ';

  const sidebarClose =
    'bg-[#E4E9F7] h-full pb-10   fixed top-0 transition-all duration-500 w-28 z-2';

  return (
    <>
      <nav className={`${!navExpand ? sidebarClose : sidebar}`}>
        {/* header */}
        <header>
          <div className='pl-10'>
            {/* <div className='flex flex-col'>
              {navExpand && (
                <span className='text-base font-medium mt-5'>LeetCode</span>
              )}
              {navExpand && (
                <span className='text-base font-semibold transition-all duration-500 '>By DevReporters</span>
              )}
            </div> */}
          </div>
          <button
            className='absolute right-3 top-14  translate-x-full rounded-full bg-blue-500 text-white flex items-center justify-center w-6 h-6 transition-all duration-300 cursor-pointer'
            onClick={toggleFunc}
          >
            {navExpand ? <FaChevronCircleLeft /> : <FaChevronCircleRight />}
          </button>
        </header>
        {/* menu bar */}
        <div className='flex flex-col h-screen pb-8 pt-6  '>
          {/* bar beginning */}
          <div className='mt-10'>
            <ul className='flex flex-col w-full list-none justify-center'>
              {/* <li className='rounded-6px bg-f6f5ff cursor-pointer transition-all duration-300'>
                <Link
                  
                  className='flex items-center h-full no-underline rounded-md transition-all duration-300 font-extrabold'
                >
                  <span className='border-2 rounded-md bg-gray-100 cursor-pointer transition-all duration-300 ml-10'>
                    <FaSearch size='20px' />
                  </span>
                  {navExpand && (
                    <input
                      type='text'
                      placeholder='Search'
                      className='bg-[#B6C8EB] h-full w-full outline-none border-none bg-f6f5ff text-707070 rounded-6px text-base font-medium transition-all duration-300
'
                    />
                  )}
                </Link>
              </li> */}
              <li className='flex items-center list-none mt-10 px-10 pt-0 mb-10 h-10 pr-10  rounded-lg w-48'>
                <Link
                  to='/'
                  className=' flex items-center h-full no-underline rounded-md transition-all duration-200 w-full'
                >
                  <FaHome size='20px' />
                  {navExpand && (
                    <span className='ml-2 font-semibold  transition-all duration-500 '>
                      Home
                    </span>
                  )}
                </Link>
              </li>
              <li className='flex items-center list-none mt-10 px-10 pt-0 mb-10 h-10 pr-10   rounded-lg w-48'>
                <Link
                  to='/dashboard'
                  className='flex items-center h-full no-underline rounded-md transition-all duration-300 w-full'
                >
                  <FaListAlt size='20px' />
                  {navExpand && (
                    <span className='ml-2 font-semibold  '>Dashboard</span>
                  )}
                </Link>
              </li>
              <li className='flex items-center list-none mt-10 px-10 pt-0 mb-10 h-10 pr-10   rounded-lg w-48'>
                <Link
                  to='/profile'
                  className='flex items-center h-full no-underline rounded-md transition-all duration-300 w-full'
                >
                  <FaUser size='20px' />
                  {navExpand && (
                    <span className='ml-2 font-semibold'>Profile</span>
                  )}
                </Link>
              </li>
            </ul>
          </div>
          {/* bottom content beginning */}

          <div className='items-center pt-10'>
            <li className='flex pl-10 items-center h-10 list-none  rounded-lg w-48 '>
              <Link
                to='/'
                className=' flex  items-center duration-700 transition-all '
              >
                <FaSignOutAlt size='20px' />
                {navExpand && (
                  <span className=' pl-2 font-semibold  '>Sign Out</span>
                )}
              </Link>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
