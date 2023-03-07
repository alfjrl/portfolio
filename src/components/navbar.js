import React, { useState } from "react";
import Image from "next/image";
import { RiMenu5Line, RiCloseFill } from "react-icons/ri";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className=" bg-white sticky top-0">
      <div
        onClick={() => setOpen(!open)}
        className="text-3xl absolute right-8 top-6 cursor-pointer sm:hidden z-50"
      >
        <RiMenu5Line className={`${open ? "hidden" : "visible"}`}></RiMenu5Line>
        <RiCloseFill className={`${open ? "visible" : "hidden"}`}></RiCloseFill>
      </div>
      <nav className="border-b-2 sticky top-0">
        <div className="container max-w-screen-xl p-6 sm:flex sm:items-center sm:justify-between ">
          <div className="flex flex-row items-center">
            <Image src="/al.svg" alt="logo" width={50} height={10}></Image>
            <p className="mx-3 font-semibold text-xl">Alfred J Lin</p>
          </div>
          <ul className={`hidden sm:visible sm:flex sm:items-center`}>
            <li className="mx-8 my-6 sm:my-0 sm:mx-4">
              <a>Project</a>
            </li>
            <li className="mx-8 my-6 sm:my-0 sm:mx-4">
              <a>About</a>
            </li>
          </ul>
        </div>
      </nav>
      <nav
        className={`fixed top-0 sm:hidden h-screen w-screen z-49 bg-white transition-all ease-in duration-200 z-49 ${
          open ? "left-0" : "-left-[700px]"
        }`}
      >
        <ul className={`w-screen h-screen grid content-center `}>
          <li className="mx-8 my-6 sm:my-0 sm:mx-4">
            <a>Project</a>
          </li>
          <li className="mx-8 my-6 sm:my-0 sm:mx-4">
            <a>About</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
