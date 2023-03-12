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
      className="group container max-w-screen-lg max-auto px-5 sm:px-8 pt-10 h-full grid justify-items-center"
    >
      <Link
        href={data.link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full h-[650px] sm:h-[450px] border-2 border-white bg-white transition-all duration-50 ease-in hover:border-slate-400 overflow-hidden"
      >
        <div className="w-full h-full flex flex-col sm:flex-row">
          <div className="w-full h-full grid content-center p-5 sm:p-8 sm:py-0 basis-8/12 sm:basis-auto">
            <p className="font-inter text-sm text-slate-500 transition ease-in group-hover:text-slate-700">
              {data.cate}
            </p>
            <h1 className="font-inter text-xl pt-6 font-semibold text-slate-900">
              {data.title}
            </h1>
            <p className="font-inter font-medium pt-2 text-slate-900">
              {data.subtitle}
            </p>
            <p className="font-inter pt-6 text-slate-500 transition ease-in group-hover:text-slate-700">
              {data.description}
            </p>
            <span className="flex flex-row pt-8 items-center text-slate-500 transition ease-in group-hover:text-slate-900">
              <p className="pr-1 font-inter text-sm font-light">See Project</p>
              <FiArrowUpRight size={20} className=""></FiArrowUpRight>
            </span>
          </div>
          <div className="w-full h-full relative basis-4/12 transition-all duration-50 ease-in sm:basis-auto group-hover:scale-110">
            <Image
              fill
              src={data.src}
              alt="project cover image"
              className="object-cover sm:object-scale-down"
            ></Image>
          </div>
        </div>
      </Link>
    </div>
  ));
  return <div>{cards}</div>;
}
