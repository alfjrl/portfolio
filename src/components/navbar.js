import React, { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

import { RiMenu5Line, RiCloseFill } from "react-icons/ri";
import { FiArrowUpRight } from "react-icons/fi";

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
      }  bg-white border-b border-solid border-slate-700 font-inter text-slate-900`}
    >
      {/* desktop navbar */}
      <div className="container  max-w-screen-xl px-2 sm:px-5">
        <div className="p-5 sm:flex sm:items-center sm:justify-between">
          <Link href={"/"} className="flex flex-row items-center">
            <Image src="/al.svg" alt="logo" width={40} height={10}></Image>
            <p className="mx-3 text-md font-medium">ALFRED J. LIN</p>
          </Link>
          <ul className={`hidden sm:visible sm:flex sm:items-center`}>
            <li className="mx-0.5 py-1 px-4 rounded-md transition ease-in hover:bg-slate-100">
              <Link href={"/#project"} className="font-medium text-sm">
                PROJECT
              </Link>
            </li>
            <li className="mx-0.5 py-1 px-4 rounded-md  transition ease-in hover:bg-slate-100">
              <Link href={"/about"} className="font-medium text-sm">
                ABOUT
              </Link>
            </li>
            <li className="group mx-0.5 py-1 px-4 rounded-md flex items-center transition ease-in hover:bg-slate-100">
              <Link
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-sm py-0.5"
              >
                RESUME
              </Link>
              <FiArrowUpRight
                size={16}
                className="group-hover:rotate-45 transition ease-in"
              />
            </li>
          </ul>
        </div>
      </div>

      {/* button hamburger menu for mobile navbar */}
      <div
        onClick={() => setOpen(!open)}
        className="text-3xl absolute right-7 top-4 cursor-pointer sm:hidden z-50"
      >
        <RiMenu5Line className={`${open ? "hidden" : "visible"}`}></RiMenu5Line>
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
              Home
            </Link>
          </li>
          <li className="mx-8 my-6">
            <Link
              href={"/#project"}
              className="font-medium text-base"
              onClick={() => setOpen(!open)}
            >
              Project
            </Link>
          </li>
          <li className="mx-8 my-6">
            <Link
              href={"/about"}
              className="font-medium text-base"
              onClick={() => setOpen(!open)}
            >
              About
            </Link>
          </li>
          <li className="mx-8 my-6 flex items-center">
            <Link
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-base"
            >
              Resume
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
