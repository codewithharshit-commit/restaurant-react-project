import React from 'react';
import {images} from '../../constants'
import { FaArrowRight } from "react-icons/fa6";

import '../../src/index.css'
import "./Header.css"
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding bg-[#0c0c0c] h-screen
   border-2 border-amber-300 ' >
    <div className="app__wrapper_info w-full border-2 border-amber-300 ">
      <SubHeading title="The Key to Fine Dining"/>
      <p className='text-[#aaaaaa] max-w-112.5 mt-6'>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
      <div className='app__menu_btn bg-[#dcca86] inline-block  cursor-pointer px-[32px] py-[8px] mt-10'>
        <span className='mr-4'>Explore Menu</span><svg className="inline" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="arrow-right">
									<polyline fill="none" stroke="#000" points="10 5 15 9.5 10 14"></polyline>
									<line fill="none" stroke="#000" x1="4" y1="9.5" x2="15" y2="9.5"></line>
								</svg></div>
    </div>

    <div className="app__wrapper_img w-full min-w-[400px] flex justify-center border-2 border-amber-300 ">
        <img className='lg:w-[80%]  ' src={images.welcome} alt="welcome-img" />
    </div>
  </div>
);

export default Header;
