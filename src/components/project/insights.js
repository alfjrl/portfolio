import React from "react";

export default function Insights({ props }) {
  const content = props;

  const card = content.map((data) => (
    <div
      key={data}
      className="m-3 p-4 w-72 h-72 flex items-center bg-amber-200 transition ease-in duration-50 hover:-translate-y-1 hover:-translate-x-1"
    >
      <p className="text-center font-semibold">{data}</p>
    </div>
  ));

  return (
    <div className="container max-auto max-w-screen-lg px-2 sm:px-5">
      <div className="font-inter text-slate-700 text-md pt-6 lg:pt-8 px-2 lg:px-4 flex flex-row flex-wrap justify-center">
        {card}
      </div>
    </div>
  );
}
