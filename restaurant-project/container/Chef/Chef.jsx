import React from 'react';
import { images } from '../../constants';
import './Chef.css';
import { SubHeading } from '../../components';  
const Chef = () => (
  <div className='app__bg app__wrapper section__padding gap-15'>
    <div className='app__wrapper_img app__wrapper_img_reverse max-w-[680px] min-w-[200px]'>
      <img src={images.chef} alt="chef" />
    </div>
    <div >
      <SubHeading heading="Chef's Word" title="What we believe in"/>
      
      <div className='mt-15'>
        <img className="inline-block" src={images.quote} alt="quote" style={{width: '47px', height: '41px'}}/>
        <p className='text-[#aaaaaa]  inline'>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
    </div>

      <div className='mt-20 flex flex-col gap-2'>
        <h2 className='heading text-white text-2xl'>Kevin Luo</h2>
        <p className='text-[#aaaaaa]'>Chef & Founder</p>
        <img src={images.sign} alt="sign" className='w-[250px] h-[155px]' />
      </div>
    </div>
  </div>
);

export default Chef;
