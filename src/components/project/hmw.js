import React from "react";

export default function HMW({ props }) {
  return (
    <div className="container max-auto max-w-screen-lg px-4 sm:px-9 flex flex-row py-8 lg:py-10 transition ease-in duration-50 hover:-translate-y-1 hover:-translate-x-1">
      <blockquote className="w-full bg-sky-100 italic font-inter text-slate-900 font-medium text-xl py-24 px-10 leading-8">
        {`" ${props} "`}
      </blockquote>
    </div>
  );
}
