import React from "react";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav class="p-5 sm:flex sm:items-center sm:justify-between">
      <div class="flex flex-row">
        <Image src="/vercel.svg" alt="logo" width={100} height={24}></Image>
        <p class="mx-3">Alfred J Lin</p>
      </div>
      <ul class="sm:flex sm:items-center z-[-1] sm:z-auto">
        <li class="mx-4 my-6 sm:my-0">
          <a>Project</a>
        </li>
        <li class="mx-4 my-6 sm:my-0">
          <a>About</a>
        </li>
      </ul>
    </nav>
  );
}
