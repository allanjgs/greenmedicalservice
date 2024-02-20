import React, { useState, useEffect } from "react";
//import data
import { header } from "../data";
//icones
import { HiMenu, HiOutlineX } from "react-icons/hi";
//import componentes
import MobileNav from "../components/MobileNav";
import Nav from "../components/Nav";

const Header = () => {
  //mobile nav state
  const [mobileNav, setMobile] = useState(false);
  //header state
  const [isActive, setIsActive] = useState(false);
  //estrutura header data
  const { logo, btnText } = header;
  //scroll event
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`${
        isActive ? "lg:top-0 bg-white shadow-2xl" : "lg:top-0"
      } py-2 fixed w-full transition-all z-10 `}
    >
      <div className="container mx-auto flex justify-between items-center ">
        {/* logo */}
        <a href="#" data-aos="fade-down" data-aos-delay="1000">
          <img className="h-12 lg:h-full" src={logo} alt="" />
        </a>
        {/* Nav - Inicialmente escondido - visivel em desktop */}
        <div
          className="hidden lg:flex"
          data-aos="fade-down"
          data-aos-delay="1200"
        >
          <Nav />
        </div>
        {/* cta button - inicialmente escondido - visivel em desktop */}

        <button
          data-aos="fade-down"
          data-aos-delay="1400"
          className="btn btn-sm btn-outline hidden lg:flex"
        >
          <a
            href="https://api.whatsapp.com/send?phone=5519993437507&text=Ol%C3%A1%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Green%20Medical%20Service."
            target="_blank"
            rel="noreferrer"
          >
            {btnText}
          </a>
        </button>
        {/* mobile nav trigger btn - hidden on desktop*/}
        <button
          className="lg:hidden -ml-12"
          onClick={() => setMobile(!mobileNav)}
        >
          {mobileNav ? (
            <HiOutlineX className="text-2xl text-main" />
          ) : (
            <HiMenu className="text-2xl text-main" />
          )}
        </button>

        {/* mobile nav - hidden on desktop*/}
        <div
          className={`${
            mobileNav ? "left-0" : "-left-full"
          } fixed top-0 bottom-0 w-[60vw] lg:hidden transition-all`}
        >
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
