import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import project from "@/data/project";

export default function ProjectCard({ title, description, image, link }) {
  const projects = project();

  const cards = projects.map((data) => (
    <div
      key={data.id}
      className="font-manrope relative group container max-w-screen-lg max-auto grid justify-items-center px-5 sm:px-8 pt-5 sm:pt-10"
    >
      <div className="absolute rounded-lg bottom-0 px-5 sm:px-8 w-[calc(100%-40px)] sm:w-[calc(100%-64px)] h-[650px] sm:h-[360px] bg-slate-700"></div>
      <Link
        href={data.link}
        className="relative rounded-lg  top-0 right-0 w-full h-[650px] sm:h-[360px] border border-slate-700 bg-white transition-all duration-50 ease-in hover:border-slate-900 overflow-hidden group-hover:-translate-y-2 group-hover:-translate-x-2"
      >
        <div className="w-full h-full flex flex-col sm:flex-row">
          <div className="w-full h-full p-6 sm:p-8 sm:py-0 basis-7/12 sm:basis-auto grid content-between">
            <div className="">
              <h3 className="text-xl pt-6 font-semibold text-slate-900">
                {data.title}
              </h3>
              <div className="flex flex-wrap gap-2 mt-3">
                {Array.isArray(data.cate) &&
                  data.cate.map((category, index) => (
                    <p
                      key={index}
                      className="font-medium text-xs uppercase p-1 px-3 tracking-wide rounded-md bg-custom-tag transition ease-in group-hover:text-slate-700 truncate ..."
                    >
                      {category}
                    </p>
                  ))}
              </div>
              <p className="pt-2 sm:pt-6 text-slate-500 transition ease-in group-hover:text-slate-700">
                {data.description}
              </p>
            </div>
            <span className="flex flex-row pb-8 items-center text-slate-900 transition ease-in">
              {/* <FiArrowUpRight
                size={20}
                className="group-hover:rotate-45 transition ease-in"
              ></FiArrowUpRight> */}

              <div className="see-more mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    d="M9 15L13 11.5L9 8M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z"
                    stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <p className="pr-1 text-sm font-light">See More</p>
            </span>
          </div>
          <div className="w-full h-full relative basis-5/12 transition-all duration-50 ease-in sm:basis-auto group-hover:scale-110">
            <Image
              fill
              src={data.src}
              alt={data.alt}
              className="object-cover sm:object-scale-down"
            ></Image>
          </div>
        </div>
      </Link>
    </div>
  ));
  return <div>{cards}</div>;
}
