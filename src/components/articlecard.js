import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ArticleCard({ link }) {
  return (
    <div className="container max-w-screen-lg max-auto px-5 sm:px-8 py-5 h-full grid justify-items-center">
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full h-[280px] sm:h-[210px] border-2 border-white bg-white transition-all duration-100 ease-in hover:border-slate-400 overflow-hidden"
      >
        <div className="w-full h-full grid content-center p-5 sm:p-8 sm:py-0">
          <p className="font-inter text-sm pb-2 pt-4">
            Dec 9, 2022 - 9 min read
          </p>
          <h1 className="font-inter text-xl py-1 font-semibold">
            Co-design customized hearing aids with hearing-impaired people
          </h1>
          <p className="font-inter pt-2 pb-4">
            We started an inclusive design project doing the co-design with a
            participant with a hearing impairment to find customized solutions
            ...
          </p>
        </div>
      </Link>
    </div>
  );
}
