import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

import {
  FaSearch,
  FaHome,
  FaUser,
  FaChevronCircleRight,
  FaChevronCircleLeft,
} from 'react-icons/fa';

const NavBar = () => {
  const [navExpand, setNavExpand] = useState(false)
  const toggleFunc = () => {

  };

  return (
    <>
      <nav className='bg-slate-700  h-full py-10 px-14 fixed top-0 transition-all duration-300'>
        <header>
          <div>
            <span></span>
            <div className='flex flex-col'>
              <span className='text-base font-medium mt-5'>LeetCode</span>
            </div>
          </div>
          <span className=''>
            <FaChevronCircleRight />
          </span>
        </header>
        <div></div>
      </nav>
    </>
  );
};

export default NavBar;
