"use client";

import { useEffect, useState } from "react";

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

export default function Footer() {
  const [year, setYear] = useState(2025);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="max-w-[1280px] md:mx-auto p-4 md:py-8 border-x border-gray-700">
        <div className="mb-16 max-w-2xl">
          <p className="leading-relaxed font-manrope">
            On the side, I always think about how design influences our daily
            lives and why things are designed that way, which is fascinating to
            me. I enjoy talking to random people and learning something new from
            them, whether it's their life experiences or tips for finding a
            parking space in an overly crowded city.
          </p>
        </div>

        <ul className="flex flex-col space-x-0 space-y-2 text-gray-200 md:flex-row md:space-x-4 md:space-y-0 mb-4">
          <li>
            <a
              className="flex items-center transition-all hover:text-white"
              rel="noopener noreferrer"
              target="_blank"
              href="mailto:alfred.jr.lin@gmail.com"
            >
              <ArrowIcon />
              <p className="ml-2 h-7">Email</p>
            </a>
          </li>
          <li className="md:ml-6">
            <a
              className="flex items-center transition-all hover:text-white"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/alfredjrlin/"
            >
              <ArrowIcon />
              <p className="ml-2 h-7">LinkedIn</p>
            </a>
          </li>
          <li className="md:ml-6">
            <a
              className="flex items-center transition-all hover:text-white"
              rel="noopener noreferrer"
              target="_blank"
              href="https://medium.com/@alfredjlin"
            >
              <ArrowIcon />
              <p className="ml-2 h-7">Medium</p>
            </a>
          </li>
          <li className="md:ml-6">
            <a
              className="flex items-center transition-all hover:text-white"
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/alfjrl"
            >
              <ArrowIcon />
              <p className="ml-2 h-7">GitHub</p>
            </a>
          </li>
        </ul>
        <p className="flex flex-row">
          <span className="hidden md:block md:mr-1">
            Made with love & coffee
          </span>
          {"  © "}
          {year} Alfred Jhan-Ren Lin
        </p>
      </div>
    </footer>
  );
}
