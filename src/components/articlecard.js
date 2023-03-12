import React from "react";
import Link from "next/link";
import article from "@/data/article";

export default function ArticleCard() {
  const articles = article();

  const cards = articles.map((data) => (
    <div
      key={data.id}
      className="group container max-w-screen-lg max-auto px-5 sm:px-8 pt-10 h-full grid justify-items-center"
    >
      <Link
        href={data.link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full h-[250px] sm:h-[200px] border-2 border-white bg-white transition-all duration-100 ease-in hover:border-slate-400 overflow-hidden"
      >
        <div className="w-full h-full grid content-center p-5 sm:p-8 sm:py-0">
          <p className="font-inter text-sm text-slate-500 transition ease-in group-hover:text-slate-700">
            {data.date} - {data.readtime} mins read
          </p>
          <h1 className="font-inter text-xl pt-3 font-semibold text-slate-900">
            {data.title}
          </h1>
          <p className="font-inter pt-3 text-slate-500 transition ease-in group-hover:text-slate-700 truncate ...">
            {data.description}
          </p>
          <p className="font-inter text-sm p-1 px-3 mt-3 w-fit rounded-md bg-slate-100 text-slate-500 transition ease-in group-hover:text-slate-700 truncate ...">
            {data.tag}
          </p>
        </div>
      </Link>
    </div>
  ));

  return <div>{cards}</div>;
}
