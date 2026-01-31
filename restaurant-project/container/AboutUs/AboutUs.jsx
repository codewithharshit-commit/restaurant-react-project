import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';
import '../../src/index.css'

const AboutUs = () => (
  <div style={{backgroundImage:`URL(${images.bg})`}} className='section__padding relative flex h-screen bg-cover bg-center'>
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      <img className='w-97.75 h-103.75' src={images.G} alt="about_us-G" />
    </div>

    <div className='app__aboutUs_wrapper flex items-center justify-center z-30 w-full '>
        <div className='app__aboutUs_wrapper-section flex flex-col items-end max-w-[524px]'>
          <h1 className='text-[#dcca86]'>About Us</h1>
          <img src={images.spoon} alt="spoon" />
          <p className='text-white text-right mt-10 mb-10'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.
            Know More
          </p>
          <div className='relative app__menu_btn overflow-hidden bg-[rgb(220,202,134)] inline-block  cursor-pointer px-8 py-2 mt-10 group border-2 border-[#dcca86] '>
                  <span
              className="absolute left-0 top-0 h-full w-0 bg-black
                     transition-all duration-600 linear
                     group-hover:w-full"
            ></span>
                  <span className='relative mr-4 z-10 font-bold group-hover:text-[#dcca86]'>Know More</span>
                </div>
        </div>

        <div className='ml-20 mr-20 w-[76px] h-auto'>
          <img className='app__aboutUs_knife' src={images.knife} alt="knife" />
        </div>

        <div className='app__aboutUs_wrapper-section max-w-[524px]'>
          <h1 className='text-[#dcca86]'>History</h1>
          <img className="app__aboutUs_knife scale-x-[-1]" src={images.spoon} alt="spoon" />
          <p className='text-white  mt-10 mb-10'>
            Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.
          </p>
         <div className='relative app__menu_btn overflow-hidden bg-[rgb(220,202,134)] inline-block  cursor-pointer px-8 py-2 mt-10 group border-2 border-[#dcca86] '>
                  <span
              className="absolute left-0 top-0 h-full w-0 bg-black
                     transition-all duration-600 linear
                     group-hover:w-full"
            ></span>
                  <span className='relative mr-4 z-10 font-bold group-hover:text-[#dcca86]'>Know More</span>
                </div>
        </div>
    </div>
  </div>
);

export default AboutUs;
