import React from 'react';
import { images } from '../../constants';
import './Chef.css';
import '../../src/index.css'
import { SubHeading } from '../../components';  
const Chef = () => (
  <div className='app__bg app__wrapper section__padding flex flex-col lg:flex-row gap-8 lg:gap-15'>
    <div className='app__wrapper_img app__wrapper_img_reverse w-full lg:max-w-[680px] min-w-[300px] lg:min-w-[400px]'>
      <img src={images.chef} alt="chef" className='w-full h-auto object-cover' />
    </div>
    <div className='app__wrapper_info w-full lg:max-w-[670px]'>
      <SubHeading className='mb-10' heading="Chef's Word" title="What we believe in"/>
      <div className='my-[2rem]'>
        <img className='inline-block w-[47px] h-[40px]' src={images.quote} alt="quote" />
        <p className='text-[#aaaaaa] inline'>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
      </div>

      <div className='my-[2rem]'>
        <h2 className='heading text-[#dcca86] text-[32px]'>Kevin Luo</h2>
        <p className='text-[#aaaaaa]'>Chef & Founder</p>
      </div>
      <div className='mt-[3rem] w-[250px] h-[100px]'>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
