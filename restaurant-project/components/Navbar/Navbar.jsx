import React from 'react';
import {GiHamburgerMenu} from 'react-icons/gi'
import { IoSearch } from "react-icons/io5";

import './Navbar.css';
import "../../src/index.css"

const Navbar = () => (
  <nav className='app__navbar w-full bg-black-shade flex p-8 justify-between items-center px-30 text-white'>
    <div className='app__navbar-logo w-[134px]'>
      <img src="https://wordpress.iqonic.design/product/wp-free/geritcht/wp-content/themes/geritcht-theme/assets/images/logo.svg" alt="app logo" />
    </div>

    <ul className='app__navbar-links text-[#dcca86] flex gap-6'>
      <li><a href="#home">HOME</a></li>
      <li><a href="#pages">PAGES</a></li>
      <li><a href="#contact">CONTACT US</a></li>
      <li><a href="#blog">BLOG</a></li>
    </ul>

    <div className='app__nav-searchbar flex items-center pb-5 border-b-1 border-gray-500'>
      <input type="text" className="text-white outline-none" placeholder='Search Website'/>
      < IoSearch/>
    </div>

  </nav>
);

export default Navbar;

//https://wordpress.iqonic.design/product/wp-free/geritcht/wp-content/themes/geritcht-theme/assets/images/pattern-bg.svg
