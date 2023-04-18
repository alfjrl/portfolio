import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

export default function InTextLink(props) {
  return (
    <div className="group">
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <div className="flex flex-row items-center">
          <p className="font-inter font-medium underline text-slate-900 decoration-slate-900">
            {props.description}
          </p>
          <FiArrowUpRight
            size={20}
            className="text-slate-400 group-hover:text-slate-900 transition-all ease-in duration-50"
          ></FiArrowUpRight>
        </div>
      </a>
    </div>
  );
}
