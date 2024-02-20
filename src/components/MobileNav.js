import React from 'react';
//import data
import { nav } from '../data'


const MobileNav = () => {
  return <div className='bg-main w-full h-full '>
    <ul className='h-full flex flex-col pt-10 justify-start items-center gap-y-8'>
      {nav.map((item, index) => {
        //estruturando item 
        const { href, name } = item
        return <li key={index}>
          <a className='link text-white text-xl ' href = {href} >
            {name}
          </a>
        </li>
      })}
    </ul>
  </div>;
};

export default MobileNav;
