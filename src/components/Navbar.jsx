"use client";

// import { Link } from "react-scroll";
import Link from "next/link";
import React, { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import Image from "next/image";
import Headroom from "react-headroom";
import { navLink } from "@/context/data";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <Headroom>
        <div className="containerNav backdrop-filter backdrop-blur-sm px-2 sm:px-5 w-full h-[70px] flex justify-between items-center gap-4 sm:gap-5 z-10">
          {" "}
          {/*  w-[80%] fixed */}
          <div className="open md:hidden ">
            <Hamburger
              size={25}
              easing="ease-in"
              color="#43fcff"
              toggled={toggle}
              toggle={setToggle}
            />
          </div>
          <Link
            
            href={"/"}
            className="flex flex-row items-center animate-fade-in-down hover:text-[#43fcff] ease-in-out duration-500"
          >
            <Image
              src={"/icon.png"}
              width={50}
              height={50}
              alt="TechTopia Logo"
              className="w-10 h-10 mr-1"
            />
            <span className="self-center text-xl font-semibold text-[#43fcff]">
              TechTopia
            </span>
          </Link>
          <div className="flex items-center">
            <div
              className={`menu duration-300 flex-col gap-2 md:gap-0 lg:gap-3 flex md:flex-row fixed md:static top-0 left-0 z-[2000] ${
                !toggle
                  ? 'pointer-events-none opacity-0'
                  : 'pointer-events-auto opacity-100'
              } 
              md:opacity-100 md:pointer-events-auto
              w-screen h-screen md:w-auto md:h-auto
              bg-black/85 backdrop-blur-md md:bg-transparent md:backdrop-blur-none
              transition-all ease-in-out duration-500`}
            >
              {navLink.map((link) => (
                <Link
                  key={link.id}
                  href={link.url}
                  
                  
                  offset={-100}
                  duration={500}
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                  className="hoverText cursor-pointer z-10 active:bg-[#43fcff]/20 text-[#e6e7ec]/90 hover:text-[#43fcff] md:rounded-[10px] rounded-r-[10px] hover:backdrop-blur-sm hover:bg-[#43fcff]/30 px-2"
                >
                  {link.title !== 'Karaoke' ? link.title : null}
                </Link>
              ))}
            </div>
            
          </div>
        </div>
      </Headroom>
    </>
  );
};

export default Navbar;
