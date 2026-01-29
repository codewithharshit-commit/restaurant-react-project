import React from 'react';
import '../../src/index.css'
import {images} from "../../constants"
import "./SubHeading.css"

const SubHeading = ({title}) => {
  return (
    <div className='app__subheading'>
      <p className='p__cormorant text-[23px] font-bold'>Chase the new Flavour</p>
      <img src={images.spoon} alt="spoon" className='mb-2'/>
      <h1 className='app__header_h1 leading-29.25 '>{title}</h1>
    </div>
  )
};
 

export default SubHeading;
