"use client"
import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { href:"about", label: "Sobre" },
    { href: "projects", label: "Projetos" },
    { href: "contact", label: "Contato" },
  ];

  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <>
      {isClient && (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90 mb-16">
          <div className="flex flex-wrap items-center justify-between mx-auto px-4">
            <Link href="/">
              <ScrollLink
                to="/"
                spy={true}
                smooth={true}
                offset={-70} 
                duration={500}
                className="text-[#D2D2D2] hover:text-white">
              </ScrollLink>
              <Image
                src="/images/JG.png"
                alt="JG"
                width={100}
                height={100}/>
            </Link>
            <div className="hidden md:block md:w-auto cursor-pointer" id="navbar">
              <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href= "#about">
                      <ScrollLink
                        to={link.href}
                        spy={true}
                        smooth={true}
                        offset={-70} 
                        duration={500}
                        className="text-[#D2D2D2] hover:text-white">
                        {link.label}
                      </ScrollLink>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
          <div className="hidden max-lg:block cursor-pointer" onClick={() => { setMenuOpen(!isMenuOpen);}}>
            <RxHamburgerMenu className="text-4xl text-sky-600" />
          </div>
      </div>
        <div className="w-auto h-[1px] bg-[#d2d2d244] max-lg:hidden"></div>
          {isMenuOpen && (
            <div className="fixed top-0 left-0 right-0 bottom-0 bg-[#121212] bg-opacity-90 flex justify-center items-center">
              <ul className="text-[#d2d2d2] hover:text-white text-2xl">
                {navLinks.map((link) => (
                  <li key={link.href} className="my-4">
                    <ScrollLink
                      to={link.href}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      onClick={() => setMenuOpen(false)}>
                      {link.label}
                    </ScrollLink>
                  </li>))}
                </ul>
                <div className="absolute top-4 right-4 cursor-pointer"onClick={() => setMenuOpen(false)}>
                  <AiOutlineClose className="text-4xl text-sky-600" />
                </div>
            </div>)}
        </nav>
      )}
    </>
  );
};

export default Header;
