import React from "react";
import Image from "next/image";
import Divider from "./divider";

export default function ProjectIntro(props) {
  return (
    <div className="container max-auto max-w-screen-xl px-2 sm:px-5">
      <div className="h-[600px] relative min-h-[60vh]">
        <Image
          src={props.src}
          alt="project cover"
          fill
          className="overflow-hidden rounded object-cover pt-8"
        ></Image>
      </div>
      <div className="flex flex-col lg:flex-row pt-10 px-2 lg:px-4 lg:items-center  bg-white">
        <div className="max-w-screen-md flex-auto">
          <p className="w-fit text-sm font-medium text-slate-500 uppercase py-1 px-3 rounded-md bg-slate-100">
            {props.type}
          </p>
          <h1 className="font-inter font-semibold text-2xl pt-3">
            {props.title}
          </h1>
          <p className="font-inter text-slate-500 pt-4">{props.intro}</p>
        </div>
        <div className="flex flex-col flex-auto lg:pl-10 pt-8 lg:pt-0">
          <div className="">
            <h2 className="font-inter font-medium text-slate-900">Role</h2>
            <p className="font-inter text-slate-500 pt-2">{props.role}</p>
          </div>
          <div className="pt-4">
            <h2 className="font-inter font-medium text-slate-900">Year</h2>
            <p className="font-inter text-slate-500 pt-2">{props.time}</p>
          </div>
          <div className="pt-4">
            <h2 className="font-inter font-medium text-slate-900">Team</h2>
            <p className="font-inter text-slate-500 pt-2">{props.coworkers}</p>
          </div>
          <div className="pt-4">
            <h2 className="font-inter font-medium text-slate-900">
              Product Platform
            </h2>
            <p className="font-inter text-slate-500 pt-2">{props.platform}</p>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <Divider></Divider>
      </div>
    </div>
  );
}
