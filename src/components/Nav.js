import React from 'react';
//import data
import { nav } from '../data'


const Nav = () => {
  return <nav>
    <ul className='flex gap-x-10'>
      {nav.map((item, index) => {
        //estruturando navegação desktop
        const { href, name } = item;
        return (
          <li key={index}>
            <a
              className='hover:text-main hover:font-bold transition'
              href={href}>
              {name}
            </a>
          </li>
        );
      })}
    </ul>
  </nav>;
};

export default Nav;
