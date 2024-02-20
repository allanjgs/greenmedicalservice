import React from 'react';
//import data
import { footer } from '../data'
//import components
import Copyright from '../components/Copyright'
import { overview } from '../data';


const Footer = () => {
  // destruturando footer data
  const { brands } = overview;
  const { logo, links} = footer;
  return (
    <footer className='section'>
      <div className='container mx-auto '>
        <div className='flex flex-col items-center text-center lg:flex-row lg:text-left lg:items-center lg:justify-between gap-y-8'>
          
          {/* logo */}
          <div className='mb-4' >
            <img src={logo} alt='' />
          </div>
          <div className='container mx-auto bg-transparent flex flex-row items-center justify-center gap-x-10  '>
            {/* brands */}
            {brands.map((item, index) => {
              // destruturando o brand
              const { image, link } = item;
              return (
                <button>
                  <a aria-label="Chat on WhatsApp" href={link} target="_blank">
                    <img className='h-10' src={image} alt='' />
                  </a>
                </button>
              );
            })}
          </div>
          {/* lista 2 */}
          <div >
            <div className='text-2xl uppercase font-medium mb-6'>Links</div>
            <ul className='flex flex-col gap-y-0'>
              {links.map((item, index) => {
                //destruturando links
                const { href, name } = item
                return <li key={index}>
                  <a className='font-medium hover:text-main  transition' href={href}>{name}</a>
                </li>
              })}
            </ul>
          </div>
          {/* newsletter */}
          <div >

          </div>

        </div>
        <hr className='mt-10 mb-5' />
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
