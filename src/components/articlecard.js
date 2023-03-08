import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ArticleCard({ link }) {
  return (
    <div className="container max-w-screen-lg max-auto px-5 py-5 h-full grid justify-items-center">
      <Link
        href={link}
        className="w-full h-[300px] sm:h-[210px] border-2 border-white rounded-xl bg-white transition-all duration-100 ease-in hover:border-slate-400 overflow-hidden"
      >
        <div className="w-full h-full grid content-center p-5 sm:py-0">
          <p className="font-inter text-sm pb-2">Dec 9, 2022 - 5 min read</p>
          <h1 className="font-inter text-xl py-1 font-semibold">
            Co-design customized hearing aids with hearing-impaired people
          </h1>
          <p className="font-inter pt-2 pb-4">
            About the authors: Alfred J. Lin, and Sumitkumar Kansagara, both are
            current graduate students studying HCIM at the University of...
          </p>
        </div>
      </Link>
    </div>
  );
}
