import React from 'react';
import {images} from '../../constants'

import { BsArrowRight } from "react-icons/bs";

import '../../src/index.css'
import "./Header.css"
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding bg-[#0c0c0c] h-screen' >
    <div className="app__wrapper_info w-full   ">
      <SubHeading title="The Key to Fine Dining"/>
      <p className='text-[#aaaaaa] max-w-112.5 mt-6'>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
      <div className='app__menu_btn bg-[#dcca86] inline-block  cursor-pointer px-[32px] py-[8px] mt-10 group border-2 border-[#dcca86] hover:bg-black duration-200 transition-all '>
        <span className='mr-4 font-bold group-hover:text-[#dcca86]'>Explore Menu</span>
        <BsArrowRight className='group-hover:text-[#dcca86] inline'/>
      </div>
    </div>

    <div className="app__wrapper_img w-full h-full min-w-[507px] flex justify-center ">
        <img className='w-full h-full' src={images.welcome} alt="welcome-img" />
    </div>
  </div>
);

export default Header;
