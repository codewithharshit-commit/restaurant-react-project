import React from 'react';
import {images,data} from '../../constants'

import { SubHeading,MenuItem } from '../../components';
import '../../src/index.css'
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu section__padding flex__center flex-col bg-[#0c0c0c] px-4 sm:px-8 lg:px-16'>
    <div className='text-center'>
      <SubHeading title="Today's Special" heading="Menu That Fits You Palatte"/>
    </div>

    <div className='app__specialMenu-menucard flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10 mt-16 w-full'>
      <div className='app__specialMenu-wines flex-1 flex flex-col w-full'>
          <h1 className='text-white text-center mb-8' style={{ fontFamily: '"Cormorant Upright", serif' }}>Wine & Beer</h1>
          {data.wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
      </div>

      <div className='app__specialMenu-img hidden lg:flex items-center justify-center'>
        <img className='w-[410px] h-auto' src={images.menu} alt="menu icon" />
      </div>

      <div className='app__specialMenu-cocktails flex-1 flex flex-col w-full'>
          <h1 className='text-white text-center mb-8' style={{ fontFamily: '"Cormorant Upright", serif' }}>Cocktails</h1>
          {data.cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
      </div>
    </div>

    <div className='mt-12 relative app__menu_btn overflow-hidden bg-[rgb(220,202,134)] inline-block cursor-pointer px-8 py-2 group border-2 border-[#dcca86]'>
      <span
        className="absolute left-0 top-0 h-full w-0 bg-black
               transition-all duration-600 linear
               group-hover:w-full"
      ></span>
      <span className='relative mr-4 z-10 font-bold group-hover:text-[#dcca86]'>View More</span>
    </div>
  </div>
);

export default SpecialMenu;
