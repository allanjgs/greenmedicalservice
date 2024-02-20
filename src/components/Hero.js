import React from "react";
//import data
import { hero } from "../data";
//import icons
import { HiOutlineChevronDown } from "react-icons/hi";

//import
import Resso from "../assets/img/aera.png";

const Hero = () => {
  //Estrutura do Hero
  const { title, subtitle, btnText } = hero;

  return (
    <section id="Home" className="section flex items-center h-screen lg:bg-bghero bg-cover bg-no-repeat ">
      <div className="container mx-auto ">
        <div className="flex flex-col lg:gap-x-[30px] lg:flex-row gap-y-8 lg:gap-y-0  ">
          {/* TEXTO */}
          <div className="flex flex-col lg:w-[8 00px] lg:bg-grey/50 lg:absolute left-0 top-1/4 lg:border-r-2 lg:border-b-2  lg:border-main rounded-br-xl rounded-tr-xl filter lg:drop-shadow-2xl">
            <div className="flex-1 lg:p-8 lg:ml-60">
              <h1
                data-aos="fade-down"
                data-aos-delay="500"
                className="flex text-5xl lg:text-6xl text-main font-bold mb-4 lg:mb-5 lg:w-[600px] items-end filter lg:drop-shadow-2xl"
              >
                {title}
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="500"
                className="text-xl mb-5 lg:mb-10 filter lg:drop-shadow-2xl"
              >
                {subtitle}
              </p>

              <div className="">
                <img className="lg:hidden" src={Resso} alt="" loading="lazy"/>
              </div>
              {/* btn e Comp text*/}
              <div
                data-aos="fade-up"
                data-aos-delay="500"
                className="flex items-center max-w-sm lg:max-w-full mx-auto lg:mx-0 gap-x-2 lg:gap-x-6"
              >
                <a href="#Services">
                  <button className="btn btn-md lg:btn-lg lg:btn-lg btn-accent flex justify-center items-center lg:gap-x-4 filter drop-shadow-2xl">
                    {btnText}
                    <HiOutlineChevronDown />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
