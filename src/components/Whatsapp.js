import React from 'react';
import wpp from '../assets/img/whatsappIco.svg';

const Whatsapp = () => {
  return (
    <section className='fixed z-20 right-8 bottom-8  animate-bounce filter drop-shadow-lg'>
      <div className='flex items-center justify-center text-center rounded-full'>
        <a
          aria-label='Chat on WhatsApp'
          href='https://api.whatsapp.com/send?phone=5519993437507&text=Ol%C3%A1%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Green%20Medical%20Service.'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img className='h-20 w-20' src={wpp} alt='WhatsApp' />
        </a>
      </div>
    </section>
  );
};

export default Whatsapp;