import React from "react";

export default function Quote({ props }) {
  return (
    <div className="container max-auto max-w-screen-lg px-4 sm:px-9 flex flex-row  pt-6 lg:pt-8">
      <blockquote className="border-l-2 border-slate-700 italic font-inter text-slate-700 font-medium text-lg py-4 pl-6">
        {`" ${props} "`}
      </blockquote>
    </div>
  );
}
