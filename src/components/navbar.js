import React, { useState } from "react";
import Image from "next/image";
import { RiMenu5Line, RiCloseFill } from "react-icons/ri";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white/70 sticky top-0 z-50 backdrop-blur-3xl ">
      <div
        onClick={() => setOpen(!open)}
        className="text-3xl absolute right-8 top-6 cursor-pointer sm:hidden z-50"
      >
        <RiMenu5Line className={`${open ? "hidden" : "visible"}`}></RiMenu5Line>
        <RiCloseFill className={`${open ? "visible" : "hidden"}`}></RiCloseFill>
      </div>
      <nav className="border-b-2 sticky border-slate-200 top-0">
        <div className="container max-w-screen-lg p-5 sm:flex sm:items-center sm:justify-between ">
          <Link href={"/"} className="flex flex-row items-center">
            <Image src="/al.svg" alt="logo" width={50} height={10}></Image>
            <p className="mx-3 text-xl font-inter font-medium">ALFRED J. LIN</p>
          </Link>
          <ul className={`hidden sm:visible sm:flex sm:items-center`}>
            <li className="py-1 px-4 rounded-md hover:bg-slate-100">
              <Link
                href={"/project"}
                className="font-inter font-medium text-sm"
              >
                PROJECT
              </Link>
            </li>
            <li className="py-1 px-4 rounded-md hover:bg-slate-100">
              <Link href={"/about"} className="font-inter font-medium text-sm">
                ABOUT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <nav
        className={`fixed top-0 sm:hidden h-screen w-screen z-49 bg-white transition-all ease-in duration-200 z-auto ${
          open ? "left-0" : "-left-[700px]"
        }`}
      >
        <ul className={`w-screen h-screen grid content-center `}>
          <li className="mx-8 my-6">
            <Link href={"/"} className="font-inter font-medium text-base">
              Home
            </Link>
          </li>
          <li className="mx-8 my-6">
            <Link
              href={"/project"}
              className="font-inter font-medium text-base"
            >
              Project
            </Link>
          </li>
          <li className="mx-8 my-6">
            <Link href={"/about"} className="font-inter font-medium text-base">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
