import React,{useState} from 'react';

import {MdOutlineRestaurantMenu} from 'react-icons/md'
import { IoSearch } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdKeyboardArrowRight } from "react-icons/md"

import './Navbar.css';
import "../../src/index.css"
import "../../container/Header/Header.css"

const Navbar = () => {

  const [toggleMenu,setToggleMenu] = useState(false);

  return (
  <nav className='app__navbar w-full bg-[#0c0c0c] flex justify-between absolute items-center h-auto px-30  text-white'>
    <a className='app__navbar-logo w-[134px]'>
      <img className='w-full h-auto' src="https://wordpress.iqonic.design/product/wp-free/geritcht/wp-content/themes/geritcht-theme/assets/images/logo.svg" alt="app logo" />
    </a>

    <ul className='app__navbar-links text-[#dcca86]  xl:text-[16px] flex items-center gap-6 relative  '>
      <li className=' h-24 flex items-center group'><a href="#home">HOME </a> <span className='text-[30px]'><RiArrowDropDownLine /></span>
      <div className='absolute top-22 flex flex-col gap-6  bg-black w-75 p-5 
       translate-y-2 invisible opacity-0 pointer-events-none group-hover:pointer-events-auto
          group-hover:opacity-100 group-hover:visible duration-500
      '>
        <a href="#" className='text-[#9e9e9e] hover:text-[#dcca86] '>
          Home 1</a>
        <a href="#" className='text-[#9e9e9e] hover:text-[#dcca86] '>Home 2</a>
      </div>
      </li>
      <li className='h-24 flex items-center group'><a href="#pages">PAGES</a> <span className='text-[30px]'><RiArrowDropDownLine /></span>
      <div className='absolute top-22 flex flex-col gap-6  bg-black w-75 p-5 
      left-25 translate-y-2 invisible opacity-0
         group-hover:opacity-100 group-hover:visible duration-500
      '>
        <a href="#" className='text-[#9e9e9e] hover:text-[#dcca86] '>
          About Us</a>
        <a href="#" className='text-[#9e9e9e] hover:text-[#dcca86] '>Services</a>
        <a href="#" className='text-[#9e9e9e] hover:text-[#dcca86]' >Team</a>
        <a href="#" className='text-[#9e9e9e] hover:text-[#dcca86] '>FAQ</a>
      </div></li>
      
      <li><a href="#contact">CONTACT US</a></li>
      <li className='flex items-center group'><a href="#blog">BLOG</a> <span className='text-[30px]'><RiArrowDropDownLine /></span>
      <div className='absolute top-22 flex flex-col gap-6  bg-black w-75 p-5 
      left-80 translate-y-2 invisible opacity-0
         group-hover:opacity-100 group-hover:visible duration-500 
      '>
        <a href="#" className='text-[#9e9e9e] hover:text-[#dcca86] '>
         Two Coloumn Blog</a>
        <a href="#" className='text-[#9e9e9e] hover:text-[#dcca86] '>Three Coloumn Blog</a>
        <a href="#" className='text-[#9e9e9e] hover:text-[#dcca86]' >Left SideBar</a>
        <a href="#" className='text-[#9e9e9e] hover:text-[#dcca86] '>Right SideBar</a>
        <a href="#" className='text-[#9e9e9e] hover:text-[#dcca86]'>Bla Bla</a>
        
      </div></li>
    </ul>

    <div className='app__nav-searchbar flex items-center'>
      <div className='search_box flex items-center border-b-1 border-gray-500  h-15 '>
        <input type="text" className="text-white outline-none" placeholder='Search Website'/>
        <span className='text-xl font-bold'>< IoSearch/></span>
      </div>
     
      <span className='app__hamburger-icon w-[20px] h-[20px] hidden relative cursor-pointer group ml-10' 
      onClick={()=>{setToggleMenu(true)}}>
        <span className='w-full h-[2px] bg-[#aaa]  block absolute cursor-pointer left-0 top-0 group-hover:translate-x-1 
        duration-400 linear'></span>
        <span className='w-full h-[2px] bg-[#aaa] block absolute cursor-pointer left-[5px] top-[10px] group-hover:-translate-x-1 duration-400 linear '></span>
        <span className='w-full h-[2px] bg-[#aaa]  block absolute cursor-pointer left-0 top-[20px] group-hover:translate-x-1 duration-400 linear'></span>
      </span>

      {toggleMenu && ( <div className=" app__navbar-smallscreen_overlay hidden fixed w-full h-screen top-0 left-0 bg-black flex-col z-50 transition-all duration-400 ease-linear">
        

        <nav className='w-full flex items-center justify-between px-20 py-[30px]'>
          <a href="#" className='w-[134px]'> <img className='w-full h-auto' src="https://wordpress.iqonic.design/product/wp-free/geritcht/wp-content/themes/geritcht-theme/assets/images/logo.svg" alt="app logo" /></a>

          <MdOutlineRestaurantMenu fontSize={27} className='overlay__close cursor-pointer hover:text-[#dcca86] ' onClick={()=>setToggleMenu(false)}/>
        </nav>

        <ul className='h-[90vh] flex flex-col justify-center ml-[50px] pl-[50px]'>
          <li className='p__opensans '><a href="">Home</a> <MdKeyboardArrowRight/></li>
          <li className='p__opensans '><a href="">Pages</a><MdKeyboardArrowRight/></li>
          <li className='p__opensans '><a href="">Contact Us</a><MdKeyboardArrowRight/></li>
          <li className='p__opensans'><a href="">Blog</a><MdKeyboardArrowRight/></li>
        </ul>
      </div>)}
    </div>
  </nav>
)};

export default Navbar;

//https://wordpress.iqonic.design/product/wp-free/geritcht/wp-content/themes/geritcht-theme/assets/images/pattern-bg.svg

//https://wordpress.iqonic.design/product/wp-free/geritcht/wp-content/themes/geritcht-theme/assets/images/pattern-title.svg
