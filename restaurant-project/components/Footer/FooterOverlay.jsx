import React from 'react';
import {images} from '../../constants'
import './FooterOverlay.css';
import '../../src/index.css'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const FooterOverlay = () => (
  <div className="boxx w-full h-[80vh] bg-[url('../assets/bg.png')] bg-cover bg-center flex items-center justify-center">
    

    <div className='sections   h-[250px] gap-10 mt-60 flex justify-around'>
      <div className='flex flex-col gap-2 items-center justify-center sections  text-[#aaaaaa]'>
        <h1 className='text-white font-family text-3xl mb-5'>Contact Us</h1>
        <p>9 W 53rd St, New York, NY 10019, USA</p>
        <h2>+1 212-344-1230</h2>
        <h2>+1 212-555-1230</h2>
      </div>
      <div className='flex gap-2  flex-col items-center justify-center sections  text-[#aaaaaa] max-w-[400px]'>
        <h1 className='text-[#dcca86] text-6xl font-extrabold font-family '>Gerícht</h1>
        <p className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla quibusdam incidunt </p>
        <img src={images.spoon} alt="spoon" />
        <div className='flex gap-3'>
          <FaFacebookF fontSize={35} className='cursor-pointer hover:text-[#dcca86]'/>
          <FaTwitter fontSize={35} className='cursor-pointer hover:text-[#dcca86]'/>
<FaInstagram fontSize={35} className='cursor-pointer hover:text-[#dcca86]'/>
        </div>
      </div>
      <div className='flex  gap-2  flex-col items-center justify-center sections  text-[#aaaaaa]'>
        <h1 className='text-white font-family text-3xl mb-5'>Working Hours</h1>
        <div className='text-center'>
<p>Monday-Friday:</p>
        <p>08:00 am -12:00 am</p>
        </div>
        
        <div  className='text-center'>
 <p>Saturday-Sunday:</p>
        <p>07:00am -11:00 pm</p>
        </div>
       
        
       
      </div>
    </div>
  </div>
);

export default FooterOverlay;
