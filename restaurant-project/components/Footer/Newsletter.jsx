import React from 'react';
import {images} from '../../constants'
import './Newsletter.css';
import '../../src/index.css'

const Newsletter = () => (
  <div className='bg-[#0c0c0c] w-screen  h-auto relative flex justify-center '>
    <img className='absolute logo z-10 w-[150px] left-50 top-30' src={images.logo} alt="logo" />
    <div className='news__box  w-[80%] bg-[#0c0c0c] translate-y-1/2  h-[400px] border-2 border-[#dcca86] flex flex-col items-center '>
   
      <div className='flex flex-col justify-center items-center'>
      <h1 className=' text-white font-family text-3xl mt-10'>Newsletter</h1>
      <img className='w-10' src={images.spoon} alt="spoon" />
      </div>
      <h1 className='text-[#dcca86] content text-6xl font-family mt-10 font-extrabold'>Subscribe To Our Newsletter</h1>
      <p className='text-[#aaaaaa] text-center mt-10'>And never miss latest Updates!</p>
      
      
    </div>
  </div>
);

export default Newsletter;
