import React, { useState, useEffect, useCallback } from 'react';
import {images} from '../../constants'

import { BsArrowRight } from "react-icons/bs";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import '../../src/index.css'
import "./Header.css"
import { SubHeading } from '../../components';

const sliderImages = [
  { src: images.welcome, alt: 'Welcome dish' },
  { src: images.gallery01, alt: 'Gallery dish 1' },
  { src: images.gallery02, alt: 'Gallery dish 2' },
];

const Header = () => {
  const [current, setCurrent] = useState(0);
  const [activeBtn, setActiveBtn] = useState('next');

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % sliderImages.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className='app__header app__wrapper section__padding bg-[#0c0c0c] h-screen' >
      <div className="app__wrapper_info w-full   ">
        <SubHeading title="The Key to Fine Dining" heading="Chase the new Flavour"/>
        <p className='p__text text-[#aaaaaa] max-w-112.5 mt-6'>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
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

      <div className="app__wrapper_img w-full max-w-[700px] aspect-square flex justify-center relative overflow-hidden self-center rounded-lg mt-12 lg:mt-0">
        {sliderImages.map((img, index) => (
          <img
            key={index}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
            src={img.src}
            alt={img.alt}
          />
        ))}

        {/* Slider arrows with bg and click animation */}
        <div className='absolute bottom-4 left-2 flex gap-4 z-10'>
          <div className={`relative w-12 h-12 flex items-center justify-center cursor-pointer group app__menu_btn border-[#dcca86] 
              ${activeBtn === 'prev' ? 'bg-[#dcca86]' : 'bg-black'}`}
            onClick={() => { setActiveBtn('prev'); setCurrent((prev) => (prev - 1 + sliderImages.length) % sliderImages.length); }}>
              
            <span className={`absolute left-0 top-0 h-full w-0 bg-[#dcca86] transition-all duration-600 linear group-hover:w-full ${activeBtn === 'prev' ? 'hidden' : 'block'}`}></span>
            <FiChevronLeft className={`text-xl relative z-10 ${activeBtn === 'prev' ? 'text-black' : 'text-[#dcca86] group-hover:text-black'}`} />
          </div>

          <div className={`relative w-12 h-12 flex items-center justify-center cursor-pointer group app__menu_btn border-[#dcca86]
              ${activeBtn === 'next' ? 'bg-[#dcca86]' : 'bg-black'}`}
            onClick={() => { setActiveBtn('next'); setCurrent((prev) => (prev + 1) % sliderImages.length); }}>
              
            <span className={`absolute left-0 top-0 h-full w-0 bg-[#dcca86] transition-all duration-600 linear group-hover:w-full ${activeBtn === 'next' ? 'hidden' : 'block'}`}></span>
            <FiChevronRight className={`text-xl relative z-10 ${activeBtn === 'next' ? 'text-black' : 'text-[#dcca86] group-hover:text-black'}`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
