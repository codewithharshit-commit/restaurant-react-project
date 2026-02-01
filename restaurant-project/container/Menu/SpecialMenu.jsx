import React from 'react';
import {images,data} from '../../constants'

import { SubHeading,MenuItem } from '../../components';
// import "../../components/SubHeading/SubHeading.css"
import '../../src/index.css'
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu section__padding flex__center flex-col bg-[#0c0c0c]'>
    <div className='text-center'>
      <SubHeading title="Today's Special" heading="Menu That Fits You Palatte"/>
    </div>

    <div className='app__specialMenu-menucard flex '>
      <div>
          <h1 className='text-white'>Wine & Beer</h1>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
      </div>

      <img src={images.menu} alt="menu icon" />

      <div>
        
      </div>
    </div>
  </div>
);

export default SpecialMenu;
