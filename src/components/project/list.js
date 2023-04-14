import React from "react";

export default function List({ props }) {
  const list = props.map((data, index) => (
    <li
      key={index}
      className="font-inter font-medium sm:text-lg text-slate-700 pt-2 px-2 pl-6 lg:px-4 lg:pl-10"
    >
      {index + 1}. {data}
    </li>
  ));

  return (
    <div className="container max-auto max-w-screen-lg px-2 pt-4 lg:px-5">
      <ol>{list}</ol>
    </div>
  );
}
