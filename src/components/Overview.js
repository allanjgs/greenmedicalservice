import React from 'react';
//import data
import { overview } from '../data';

const Overview = () => {
  //destructure overview data
  const { brands } = overview;

  return (
    <section className='section' id='Sobre'>
      <div className='container mx-auto flex flex-col justify-center overflow-hidden lg:h-full h-screen  bg-sobre bg-opacity bg-cover bg-left-top py-10'>
        <div className='mb-8'>
          <div className='text-justify text-[17px] lg:text-xl px-2 lg:px-10' >
            <p className='mb-3'>
              Bem-vindo à Green Medical Service, líder em manutenção de ressonância magnética. Nossa missão vai além dos reparos, garantimos que cada equipamento alcance seu máximo desempenho. Comprometidos com a precisão, oferecemos diagnósticos detalhados para garantir confiabilidade em diagnósticos rápidos e seguros.</p>
            <p className='mb-3'>
              Na Green Medical Service proporcionamos soluções para diversos problemas, garantimos acesso a peças, desde componentes gerais até módulos específicos. Especializados na manutenção de componentes críticos, como bobinas, placas eletrônicas e módulos.</p>
            <p>
              Sua jornada para a excelência na saúde começa na Green Medical Service, onde inovação, comprometimento e expertise se encontram para transformar sua experiência em manutenção e impulsionar sua tecnologia médica para o futuro.</p>
          </div>
        </div>
        <div className='flex flex-row items-center justify-center lg:gap-x-32 gap-6 ' >
          {/* brands */}
          {brands.map((item, index) => {
            // destruturando o brand
            const { image, link } = item;
            return (
              <button>
                <a aria-label="Chat on WhatsApp" href={link} target="_blank" rel="noreferrer">
                  <img className='h-10' src={image} alt='' />
                </a>
              </button>
            );
          })}
        </div>
      </div>
    </section>);
};

export default Overview;
