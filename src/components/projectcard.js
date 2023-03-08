import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

export default function ProjectCard({ title, description, image, link }) {
  return (
    <div className="group container max-w-screen-lg max-auto px-5 py-5 h-full grid justify-items-center">
      <Link
        href={link}
        className="w-full h-[650px] sm:h-[450px] border-2 border-white rounded-xl bg-white transition-all duration-100 ease-in hover:border-slate-400 overflow-hidden"
      >
        <div className="w-full h-full flex flex-col sm:flex-row">
          <div className="w-full h-full grid content-center p-5 sm:p-8 sm:py-0 basis-8/12 sm:basis-auto">
            <p className="font-inter text-sm pb-4">
              Hyena Inc. - Product Designer
            </p>
            <h1 className="font-inter text-2xl py-2 font-semibold">
              Online Postal Service
            </h1>
            <p className="font-inter font-semibold pb-4">
              OTT | Streaming | Product Iteration
            </p>
            <p className="font-inter pt-2 pb-4 sm:pb-8">
              Starting as an MVP(Minimum Viable Product) product, the online
              postal service was introduced to people with basic functions
              without any consideration for user experience. In this project, we
              started with user research and followed by a redesign aiming at
              improving the user experience.
            </p>
            <span className="flex flex-row items-center">
              <p className="py-4 pr-1 font-inter">See Project</p>
              <FiArrowUpRight size={20} className=""></FiArrowUpRight>
            </span>
          </div>
          <div className="w-full h-full relative basis-4/12 transition-all duration-100 ease-in sm:basis-auto group-hover:scale-110">
            <Image
              fill
              src="/tentrr.png"
              alt="cover"
              className="object-cover sm:object-scale-down"
            ></Image>
          </div>
        </div>
      </Link>
    </div>
  );
}
