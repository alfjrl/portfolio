"use client";

import React, { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

import { RiMenuFill, RiCloseFill } from "react-icons/ri";
import { FiArrowUpRight } from "react-icons/fi";

import { LuAlignJustify } from "react-icons/lu";

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Navbar() {
  // resume link
  const resume = "https://drive.proton.me/urls/47V3157E8M#XWQqsS5BHD7Z";

  // show or hide mobile navbar
  const [open, setOpen] = useState(false);

  // hide navbar when scrolling down, show navbar when scrolling up
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <nav
      className={`sticky w-full z-50 ${
        visible ? "top-0" : ""
      }  bg-white font-manrope`}
    >
      {/* desktop navbar */}
      <div className="container  max-w-screen-xl">
        <div className="py-4 sm:flex sm:items-center sm:justify-between">
          <ul
            className={`hidden sm:visible sm:flex sm:items-center flex flex-row items-center`}
          >
            <li>
              <Link
                href={"/"}
                className="font-medium text-base text-gray-600 hover:text-black"
              >
                <p className="h-7">home</p>
              </Link>
            </li>
            <li>
              <Link
                href={"/#project"}
                className="font-medium text-base text-gray-600 hover:text-black"
              >
                <p className="ml-4 h-7">work</p>
              </Link>
            </li>
            <li>
              <Link
                href={"/about"}
                className="font-medium text-base text-gray-600 hover:text-black"
              >
                <p className="ml-4 h-7">about</p>
              </Link>
            </li>
            <li>
              <Link
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-base text-gray-600 hover:text-black flex flex-row items-center transition-all ml-4"
              >
                <ArrowIcon />
                <p className="ml-2 h-7">resume</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* button hamburger menu for mobile navbar */}
      <div
        onClick={() => setOpen(!open)}
        className="text-3xl absolute right-0 top-6 cursor-pointer sm:hidden z-50"
      >
        <RiMenuFill className={`${open ? "hidden" : "visible"}`}></RiMenuFill>
        <RiCloseFill className={`${open ? "visible" : "hidden"}`}></RiCloseFill>
      </div>

      {/* mobile navbar */}
      <div
        className={`fixed top-0 sm:hidden h-screen w-screen bg-white transition-all ease-in duration-200 z-auto ${
          open ? "left-0" : "-left-[700px]"
        }`}
      >
        <ul className={`w-screen h-screen grid content-center `}>
          <li className="mx-8 my-6">
            <Link
              href={"/"}
              className="font-medium text-base"
              onClick={() => setOpen(!open)}
            >
              home
            </Link>
          </li>
          <li className="mx-8 my-6">
            <Link
              href={"/#project"}
              className="font-medium text-base"
              onClick={() => setOpen(!open)}
            >
              work
            </Link>
          </li>
          <li className="mx-8 my-6">
            <Link
              href={"/about"}
              className="font-medium text-base"
              onClick={() => setOpen(!open)}
            >
              about
            </Link>
          </li>
          <li className="mx-8 my-6 flex items-center">
            <Link
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-base"
            >
              resume
            </Link>
            <FiArrowUpRight
              size={16}
              className="group-hover:rotate-45 transition ease-in"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
}
