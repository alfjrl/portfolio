import React from "react";
import Image from "next/image";

export default function ProjectImg({ props }) {
  const description = () => {
    if (props.description === "") {
      return "";
    } else {
      return (
        <p className="font-inter self-center text-slate-700 text-sm text-center max-auto max-w-screen-md pt-4">
          {props.description}
        </p>
      );
    }
  };

  return (
    <div className="container max-auto max-w-screen-xl pt-6 lg:pt-8 px-4 sm:px-9 flex flex-col py-3 lg:py-4">
      <Image
        src={props.src}
        alt={props.alt}
        width={props.width}
        height={props.height}
        className="object-scale-down w-full h-full"
      ></Image>
      {description()}
    </div>
  );
}
