"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RiMenuFill, RiCloseFill } from "react-icons/ri";
import { FiArrowUpRight } from "react-icons/fi";

export default function Navbar() {
  const resume = "https://drive.proton.me/urls/47V3157E8M#XWQqsS5BHD7Z";
  const [open, setOpen] = useState(false);

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

  return (
    <nav className="sticky top-0 w-full z-50 bg-white">
      {/* desktop navbar */}
      <div className="py-4 hidden sm:flex sm:items-center sm:justify-between">
        <Link href="/">
          <Image src="/Al.svg" alt="Alfred Lin logo" width={32} height={18} />
        </Link>
        <ul className="flex flex-row items-center">
          <li>
            <Link
              href="/#project"
              className="flex font-medium text-base text-gray-600 hover:text-black"
            >
              <span className="h-7">work</span>
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="flex font-medium text-base text-gray-600 hover:text-black ml-6"
            >
              <span className="h-7">about</span>
            </Link>
          </li>
          <li>
            <Link
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-base text-gray-600 hover:text-black flex items-center bottom gap-2 ml-6"
            >
              <ArrowIcon />
              <span className="h-7">resume</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* mobile hamburger button */}
      <div className="py-4 flex items-center justify-between sm:hidden">
        <Link href="/">
          <Image src="/Al.svg" alt="Alfred Lin logo" width={32} height={18} />
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className="text-2xl cursor-pointer z-50"
          aria-label="Toggle menu"
        >
          {open ? <RiCloseFill /> : <RiMenuFill />}
        </button>
      </div>

      {/* mobile menu */}
      <div
        className={`fixed top-0 left-0 sm:hidden h-screen w-screen bg-white transition-transform ease-in-out duration-300 z-40 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="w-screen h-screen grid content-center">
          <li className="mx-8 my-6">
            <Link
              href="/"
              className="font-medium text-base"
              onClick={() => setOpen(false)}
            >
              home
            </Link>
          </li>
          <li className="mx-8 my-6">
            <Link
              href="/#project"
              className="font-medium text-base"
              onClick={() => setOpen(false)}
            >
              work
            </Link>
          </li>
          <li className="mx-8 my-6">
            <Link
              href="/about"
              className="font-medium text-base"
              onClick={() => setOpen(false)}
            >
              about
            </Link>
          </li>
          <li className="mx-8 my-6 flex items-center gap-2">
            <Link
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-base"
            >
              <span className="h-7">Resume</span>
            </Link>
            <ArrowIcon />
          </li>
        </ul>
      </div>
    </nav>
  );
}
