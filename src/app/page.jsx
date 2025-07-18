"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Dividor from "@/components/Dividor";
import About from "@/components/About";
import { iconLinks } from "@/context/data";

export default function Home() {
  let ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  let by = useTransform(scrollYProgress, [0, 1], ["0%", "250%"]);
  let opacity = useTransform(scrollYProgress, [0, 1], ["80%", "-100%"]);
  let scale = useTransform(scrollYProgress, [0, 1], ["100%", "200%"]);

  return (
    <>
      <main className="w-full h-auto overflow-hidden -translate-y-[70px] -mb-[70px] border-[px] flex flex-col gap-5 px-2 sm:px-4">
        <section ref={ref.current} className="relative w-full h-screen">
          <motion.div
            className="inset-0 absolute z-0 bg-[#000300]"
            style={{ y: by }}
          />
          <motion.div
            className="inset-0 absolute z-10 backdrop-filter backdrop-blur-sm"
            style={{ y: by }}
          />
          <motion.div
            className="inset-0 absolute z-0"
            style={{
              backgroundImage: "url(/heroBannerThree.gif)",
              backgroundPosition: "bottom",
              backgroundSize: "cover",
              y: by,
              scale,
              opacity,
            }}
          />
          {/* content */}
          <HeroContent />
        </section>
        {/*  sm:h-[465vh] md:h-[480vh] lg:h-[483vh] */}
        <section className="w-full h-auto border-[px] bg-black z-50 flex flex-col relative ease-in-out duration-200">
          <div className="w-full -mt-[110px]">
            <Dividor />
          </div>
          <section
            id="aboutus"
            className="w-full h-auto z-50 bg-black border-[px] px-2 sm:px-4 md:px-8 lg:px-16 overflow-hidden"
          >
            {/*  scrollDiv overflow-y-scroll scroll-snap-type-x-mandatory */}
            <About />
          </section>
        </section>
        <section
          id="contact"
          className="w-full h-auto bg-black border-[px] px-2 sm:px-4 md:px-8 lg:px-16 relative z-50 overflow-hidden"
        >
          <Contact />
        </section>
      </main>
    </>
  );
}

export const HeroContent = () => {
  return (
    <>
      <div className="w-full h-full bg-transparent relative z-20 flex flex-col items-center justify-center text-center ease-in-out duration-300">
        <div className="text-[15px] md:text-[20px] ease-in-out duration-500">
          <span className="backdrop-filter backdrop-blur-sm border-2 border-[#43fcff] font-bold text-[22px] sm:text-[28px] md:text-[32px] lg:text-[36px] px-4 py-1 w-full inline-block tracking-wide rounded-lg" style={{letterSpacing:'0.04em'}}>Patkar-Varde College&apos;S</span>
        </div>
        <div className="text-[25px] md:text-[30px] lg:text-[35px] font-bold leading-[36px] md:leading-[40px] lg:leading-[45px] ease-in-out duration-200">
          <div className="w-full animate-slideDown text-[#53c28b] flex flex-col">
            <div className="flex flex-col items-center">
  <span>Department of</span>
  <span>Computer Science &</span>
  <span>Information Technology</span>
</div>
          </div>
        </div>
        <div 
          className="-mt-4 animate-slideDown text-[#43fcff] flex flex-col w-full max-w-full"
          style={{
            fontSize: "clamp(2.5rem, 12vw, 5rem)",
            wordBreak: "break-word",
            overflowWrap: "break-word",
            textAlign: "center",
            maxWidth: "100%"
          }}
        >
          TechTopia
        </div>
        <hr className="border-[#43fcff] w-[70%] md:w-[60%] lg:w-[60vh] h-[3px] shadow-lg border-solid border-[0.5px] rounded-lg ease-in-out duration-300" />
        <div className="mt-4 text-[15px] md:text-[20px] ease-in-out duration-700">
          <span>26th July 2025</span>
        </div>
        <div className="mt-4 text-[15px] md:text-[20px] flex flex-col ease-in-out duration-700">
          <span>Securely Digitalize,</span>
          <span>Live Cyberwise</span>
        </div>
      </div>
    </>
  );
};

export const Contact = () => {
  return (
    <div className="w-full border-[px] p-2 md:px-4 lg:px-8">
      <h3 className="text-[#43fcff]/80 font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
        Contact
      </h3>
      <div className="w-full h-auto flex flex-col gap-2 justify-center p-2 md:px-4 lg:px-8">
        <div className="w-full h-auto flex flex-col">
          <h3 className="text-base md:text-lg lg:text-xl">Locate Us :</h3>
          <span className="text-[#43fcff] text-sm md:text-base lg:text-lg">
          S. V. Road, Goregaon (West),Mumbai - 400104
          </span>
        </div>
        <div className="w-full h-auto flex flex-col">
          <h3 className="text-base md:text-lg lg:text-xl">E-mail Us :</h3>
          <span className="text-[#43fcff] text-sm md:text-base lg:text-lg">
            pvc.techtopia@gmail.com
          </span>
        </div>
        <div className="w-full h-auto flex flex-col">
          <h3 className="text-base md:text-lg lg:text-xl">Call Us :</h3>
          <span className="text-[#43fcff] text-sm md:text-base lg:text-lg">
            Shree Pillay : +91 7304383036
          </span>
          <span className="text-[#43fcff] text-sm md:text-base lg:text-lg">
            Pratham Shinde : +91 9321882776
          </span>
        </div>
        <div className="w-full h-auto flex flex-row gap-2 items-center">
          <h3 className="text-base md:text-lg lg:text-xl">
            Follow Us on Social :
          </h3>
          <div className="w-auto h-auto flex flex-row gap-1">
            {/* Assume you have an 'iconLinks' array defined */}
            {iconLinks.map((icon) => (
              <a
                key={icon.id}
                href={icon.url}
                target="_blank"
                className="icon w-auto h-auto p-1"
              >
                <i
                  className={`${icon.className} opacity-[0.8] text-[#43fcff] hover:opacity-[1] scale-125 hover:scale-150 ease-in-out duration-300`}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
