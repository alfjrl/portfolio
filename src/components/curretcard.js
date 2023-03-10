import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

export default function CurrentCard(link) {
  return (
    <div className="container max-w-screen-lg max-auto pt-5 pb-10 px-5 sm:px-8 flex flex-col sm:flex-row justify-between">
      <Link
        href={
          "https://www.goodreads.com/book/show/51146931-designing-with-data"
        }
        target="_blank"
        rel="noopener noreferrer"
        className="sm:mx-2 bg-white flex flex-row basis-0 flex-grow justify-between items-center rounded-xl p-5 my-2 hover:shadow-lg"
      >
        <div className="flex flex-col justify-center">
          <div className="flex flex-row items-center pb-2">
            <p className="font-inter text-sm font-light pr-2">
              Currently Reading
            </p>
            <FiArrowUpRight size={14} className=""></FiArrowUpRight>
          </div>

          <p className="font-inter font-medium">Designing with Data</p>
        </div>
        <div className="h-14 w-14 overflow-hidden">
          <Image
            src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1492895089i/34790762.jpg"
            alt="Designing with data book cover"
            width={100}
            height={100}
            className="object-cover w-full h-full rounded-xl"
          ></Image>
        </div>
      </Link>
      <Link
        href={"https://freakonomics.com/series/nsq/"}
        target="_blank"
        rel="noopener noreferrer"
        className="sm:mx-2 bg-white flex flex-row basis-0 flex-grow justify-between items-center rounded-xl p-5 my-2 hover:shadow-lg"
      >
        <div className="flex flex-col justify-center">
          <div className="flex flex-row items-center pb-2">
            <p className="font-inter text-sm font-light pr-2">Listening to</p>
            <FiArrowUpRight size={14} className=""></FiArrowUpRight>
          </div>

          <p className="font-inter font-medium">No Stupid Questions</p>
        </div>
        <div className="h-14 w-14 overflow-hidden">
          <Image
            src="https://freakonomics.com/wp-content/uploads/2021/07/NoStupidQuestions-logo.png"
            alt="No Stupid Questions podcast cover"
            width={100}
            height={100}
            className="object-cover w-full h-full rounded-xl"
          ></Image>
        </div>
      </Link>

      <Link
        href={"https://www.formula1.com/en.html"}
        target="_blank"
        rel="noopener noreferrer"
        className="sm:mx-2 bg-white flex flex-row basis-0 flex-grow justify-between items-center rounded-xl p-5 my-2 hover:shadow-lg"
      >
        <div className="flex flex-col justify-center">
          <div className="flex flex-row items-center pb-2">
            <p className="font-inter text-sm font-light pr-2">Watching</p>
            <FiArrowUpRight size={14} className=""></FiArrowUpRight>
          </div>

          <p className="font-inter font-medium">Formula 1™</p>
        </div>
        <div className="h-14 w-20 overflow-hidden">
          <Image
            src="/f1-logo.png"
            alt="Designing with data book cover"
            width={100}
            height={100}
            className="object-scale-down w-full h-full rounded-xl"
          ></Image>
        </div>
      </Link>
    </div>
  );
}
