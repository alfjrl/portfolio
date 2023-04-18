import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";

export default function AtGlance({ props }) {
  return (
    <div className="font-inter container max-auto max-w-screen-xl flex flex-row px-2 sm:px-5">
      <div className="w-full py-10 px-4 lg:px-8 bg-sky-100 divide-y divide-slate-700">
        <div>
          <p className="text-sm text-slate-700 uppercase">
            Project At A Glance
          </p>
          <h2 className="text-2xl pt-2 font-semibold text-slate-900 max-w-screen-md">
            {props.title}
          </h2>
          <div className="py-6 lg:py-8 text-slate-700 font-light max-w-screen-md">
            <p>{props.subtitle}</p>
            <p className="pt-3">{props.description}</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="pt-6 lg:pt-8 pr-4 lg:pr-6 basis-1/2">
            <Link
              href={`#${props.subtitle1}`}
              className="group flex flex-row items-center"
            >
              <h3 className="text-xl font-medium uppercase pr-1 text-slate-900">
                {props.subtitle1}
              </h3>
              <FiArrowUpRight
                size={20}
                className="text-slate-400 group-hover:text-slate-900 transition-all ease-in duration-50 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              ></FiArrowUpRight>
            </Link>
            <p className="pt-3 pr-4 lg:pr-6 font-light text-slate-700">
              {props.description1}
            </p>
          </div>
          <div className="pt-6 lg:pt-8 pr-4 lg:pr-6 basis-1/2">
            <Link
              href={`#${props.subtitle2}`}
              className="group flex flex-row items-center transition ease-in duration-50"
            >
              <h3 className="text-xl font-medium uppercase pr-1 text-slate-900">
                {props.subtitle2}
              </h3>
              <FiArrowUpRight
                size={20}
                className="text-slate-400 group-hover:text-slate-900 transition-all ease-in duration-50 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              ></FiArrowUpRight>
            </Link>
            <p className="pt-3 pr-4 lg:pr-6 font-light text-slate-700">
              {props.description2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
