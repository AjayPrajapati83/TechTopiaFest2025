import Link from "next/link";
import React from "react";

const Footer = (props) => {
  return (
    <>
      <footer>
        <div className="footer border-t-[.5px] rounded-md border-[#43fcff]/50 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4 p-2 sm:p-4 ease-in-out duration-300 md:duration-500">
          <div className="row text-[gray] flex flex-row gap-3 sm:scale-75 sm:hidden duration-300 ease-in-out">
            {footerIcon.map((icon) => (
              <a
                key={icon.id}
                href={icon.url}
                className="icon w-auto h-auto flex items-center justify-center text-center p-[2px]"
              >
                <i
                  className={`${icon.className} opacity-[0.8] hover:opacity-[1] scale-125 hover:scale-150 ease-in-out duration-300`}
                />
              </a>
            ))}
          </div>
          <div className="row text-[gray] flex flex-row gap-3 duration-300 sm:scale-75">
            <Link
              href={"/"}
              className=" text-4xl hover:text-[#43fcff] hover:scale-105 ease-in-out duration-300"
            >
              TechTopia
            </Link>
          </div>
          <span className="row text-[gray] duration-300 sm:scale-75 text-sm sm:ml-3">
  2025 TechTopia | All rights reserved by AP.
</span>
          <div className="row text-[gray] hidden sm:flex flex-row gap-3 duration-300 ease-in-out">
            {footerIcon.map((icon) => (
              <a
                key={icon.id}
                href={icon.url}
                target="_blank"
                className="icon w-auto h-auto p-[2px]"
              >
                <i
                  className={`${icon.className} opacity-[0.8] hover:opacity-[1] scale-110 hover:scale-150 ease-in-out duration-300`}
                />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

const footerIcon = [
  {
    id: 1,
    className: "fa fa-instagram text-pink-500 hover:text-pink-600",
    url: "https://www.instagram.com/techtopiafest/",
  },
];
