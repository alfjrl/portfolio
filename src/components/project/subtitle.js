import React from "react";

export default function SubTitle({ props }) {
  return (
    <div className="container max-auto max-w-screen-lg px-2 sm:px-5">
      <h3 className="font-inter text-slate-900 font-medium text-lg pt-8 lg:pt-12 px-2 lg:px-4">
        ## {props}
      </h3>
    </div>
  );
}
