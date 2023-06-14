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
      className="font-inter relative group container max-w-screen-lg max-auto grid justify-items-center px-5 sm:px-8 pt-5 sm:pt-10"
    >
      <div className="absolute bottom-0 px-5 sm:px-8 w-[calc(100%-40px)] sm:w-[calc(100%-64px)] h-[650px] sm:h-[450px] bg-slate-700"></div>
      <Link
        href={data.link}
        className="relative top-0 right-0 w-full h-[650px] sm:h-[450px] border border-slate-700 bg-white transition-all duration-50 ease-in hover:border-slate-900 overflow-hidden group-hover:-translate-y-2 group-hover:-translate-x-2"
      >
        <div className="w-full h-full flex flex-col sm:flex-row">
          <div className="w-full h-full p-4 sm:p-8 sm:py-0 basis-7/12 sm:basis-auto grid content-between">
            <div className="">
              <p className="text-sm pt-2 sm:pt-8 text-slate-500 transition ease-in group-hover:text-slate-700">
                {data.cate}
              </p>
              <h2 className="text-xl pt-6 font-semibold text-slate-900">
                {data.title}
              </h2>
              <p className="font-medium pt-2 text-slate-900">{data.subtitle}</p>
              <p className="pt-2 sm:pt-6 text-slate-500 transition ease-in group-hover:text-slate-700">
                {data.description}
              </p>
            </div>
            <span className="flex flex-row pb-8 items-center text-slate-500 transition ease-in group-hover:text-slate-900">
              <p className="pr-1 text-sm font-light">See Project</p>
              <FiArrowUpRight
                size={20}
                className="group-hover:rotate-45 transition ease-in"
              ></FiArrowUpRight>
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
