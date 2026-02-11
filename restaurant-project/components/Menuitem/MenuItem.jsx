import React from 'react';
import './MenuItem.css';

const MenuItem = ({ title, price, tags }) => (
  <div className='app__menuitem flex flex-col w-full mb-4'>
    <div className='app__menuitem-head flex justify-between items-center gap-4'>
      <div className='app__menuitem-name flex-1'>
        <p className='text-[#dcca86] font-bold text-lg' style={{ fontFamily: '"Cormorant Upright", serif' }}>{title}</p>
      </div>
      <div className='app__menuitem-dash flex-1 h-[1px] bg-[#dcca86] opacity-30'></div>
      <div className='app__menuitem-price'>
        <p className='text-[#dcca86] font-bold text-lg' style={{ fontFamily: '"Cormorant Upright", serif' }}>{price}</p>
      </div>
    </div>
    <div className='app__menuitem-sub mt-1'>
      <p className='text-[#aaa] text-sm' style={{ fontFamily: '"Open Sans", sans-serif' }}>{tags}</p>
    </div>
  </div>
);

export default MenuItem;
