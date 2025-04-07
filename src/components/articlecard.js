import React from "react";
import Link from "next/link";
import article from "@/data/article";

export default function ArticleCard() {
  const articles = article();

  const cards = articles.map((data) => (
    <div
      key={data.id}
      className="relative group container max-w-screen-lg max-auto px-5 sm:px-8 pt-10 h-full grid justify-items-center"
    >
      <div className="absolute rounded-lg bottom-0 px-5 sm:px-8 w-[calc(100%-40px)] sm:w-[calc(100%-64px)] h-[250px] sm:h-[200px] bg-slate-700"></div>
      <Link
        href={data.link}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-lg relative w-full h-[250px] sm:h-[200px] border border-slate-700 bg-white transition-all duration-100 ease-in hover:border-slate-900 overflow-hidden group-hover:-translate-y-2 group-hover:-translate-x-2"
      >
        <div className="w-full h-full grid content-center p-5 sm:p-8 sm:py-0">
          <p className="font-manrope text-sm text-slate-500 transition ease-in group-hover:text-slate-700">
            {data.date} - {data.readtime} mins read
          </p>
          <h3 className="font-manrope text-xl pt-3 font-semibold text-slate-900">
            {data.title}
          </h3>
          <p className="font-medium mt-3 text-xs w-fit uppercase p-1 px-3 tracking-wide rounded-md bg-custom-tag transition ease-in group-hover:text-slate-700 truncate ...">
            {data.tag}
          </p>
          <p className="font-manrope pt-3 text-slate-500 transition ease-in group-hover:text-slate-700 truncate ...">
            {data.description}
          </p>
        </div>
      </Link>
    </div>
  ));

  return <div>{cards}</div>;
}
