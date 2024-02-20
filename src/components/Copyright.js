import React from 'react';
//import data
import { copyright } from '../data'

const Copyright = () => {
  //destruturando copyright
  const { link1, link2, copyText, social } = copyright;
  return (
    <div className=' flex flex-col items-center gap-y-2 lg:flex-row lg:justify-between mb-10' >
      {/* links */}
      <div className='flex gap-x-6'>
        <a className='hover:text-main transition' href={link1.href} target="_blank">{link1.name}</a>
        <a className='hover:text-main transition' href={link2.href} target="_blank">{link2.name}</a>
      </div>
      {/* copyright text */}
      <div>{copyText}</div>
      {/* social icons */}
      <ul className='flex  gap-x-3'>
        {social.map((item, index) => {
          //destruturando icones
          const { href, icon } = item;
          return (
            <li key={index}>
              <a href={href} target="_blank">
                <img className='h-6' src={icon} alt='' />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Copyright;
