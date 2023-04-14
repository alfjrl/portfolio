import React from "react";

export default function Paragraph({ props }) {
  return (
    <div className="container max-auto max-w-screen-lg px-2 sm:px-5">
      <p className="font-inter text-slate-700 sm:text-lg pt-6 lg:pt-8 px-2 lg:px-4">
        {props}
      </p>
    </div>
  );
}
