import React from 'react';
import {images} from '../../constants'

import { BsArrowRight } from "react-icons/bs";

import '../../src/index.css'
import "./Header.css"
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper p-65 bg-[#0c0c0c] h-screen' >
    
    <div className="app__wrapper_info w-full lg:w-1/2 min-w-[300px] ">
      <SubHeading title="The Key to Fine Dining" heading="Chase the new Flavour"/>
      <p className='p__text text-[#aaaaaa] max-w-full lg:max-w-112.5 mt-6'>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
      <div className='relative app__menu_btn overflow-hidden bg-[rgb(220,202,134)] inline-block  cursor-pointer px-8 py-2 mt-10 group border-2 border-[#dcca86] '>
        <span
          className="absolute left-0 top-0 h-full w-0 bg-black
                 transition-all duration-600 linear
                 group-hover:w-full"
        ></span>
        <span className='relative mr-4 z-10 font-bold group-hover:text-[#dcca86]'>Explore Menu</span>
        <BsArrowRight className='relative group-hover:text-[#dcca86] inline z-10'/>
      </div>
    </div>

    <div className='img max-w-150  w-full h-auto '>
      <img className="w-full h-full" src={images.welcome} alt="welcome image" />
    </div>
  </div>
);

export default Header;
