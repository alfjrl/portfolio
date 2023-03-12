import React, { useState } from "react";
import Image from "next/image";
import { RiMenu5Line, RiCloseFill } from "react-icons/ri";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky z-50 pt-5 top-0">
      <div
        onClick={() => setOpen(!open)}
        className="text-3xl absolute right-7 top-9 cursor-pointer sm:hidden z-50"
      >
        <RiMenu5Line className={`${open ? "hidden" : "visible"}`}></RiMenu5Line>
        <RiCloseFill className={`${open ? "visible" : "hidden"}`}></RiCloseFill>
      </div>
      <div className=" container  max-w-screen-xl px-2 sm:px-5">
        <div className="p-5 bg-white rounded-lg shadow sm:flex sm:items-center sm:justify-between">
          <Link href={"/"} className="flex flex-row items-center">
            <Image src="/al.svg" alt="logo" width={40} height={10}></Image>
            <p className="mx-3 text-md font-inter font-medium text-slate-900">
              ALFRED J. LIN
            </p>
          </Link>
          <ul className={`hidden sm:visible sm:flex sm:items-center`}>
            <li className="py-1 px-4 rounded-md  transition ease-in hover:bg-slate-100">
              <Link
                href={"/#project"}
                className="font-inter font-medium text-sm text-slate-900"
              >
                PROJECT
              </Link>
            </li>
            <li className="py-1 px-4 rounded-md  transition ease-in hover:bg-slate-100">
              <Link
                href={"/about"}
                className="font-inter font-medium text-sm text-slate-900"
              >
                ABOUT
              </Link>
            </li>
            <li className="py-1 px-4 rounded-md  transition ease-in hover:bg-slate-100">
              <Link
                href={"/about"}
                target="_blank"
                rel="noopener noreferrer"
                className="font-inter font-medium text-sm text-slate-900"
              >
                RESUME
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <nav
        className={`fixed top-0 sm:hidden h-screen w-screen z-49 bg-white transition-all ease-in duration-200 z-auto ${
          open ? "left-0" : "-left-[700px]"
        }`}
      >
        <ul className={`w-screen h-screen grid content-center `}>
          <li className="mx-8 my-6">
            <Link
              href={"/"}
              className="font-inter font-medium text-base text-slate-900"
              onClick={() => setOpen(!open)}
            >
              Home
            </Link>
          </li>
          <li className="mx-8 my-6">
            <Link
              href={"/#project"}
              className="font-inter font-medium text-base text-slate-900"
              onClick={() => setOpen(!open)}
            >
              Project
            </Link>
          </li>
          <li className="mx-8 my-6">
            <Link
              href={"/about"}
              className="font-inter font-medium text-base text-slate-900"
              onClick={() => setOpen(!open)}
            >
              About
            </Link>
          </li>
          <li className="mx-8 my-6">
            <Link
              href={"/about"}
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter font-medium text-base text-slate-900"
            >
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </nav>
  );
}
