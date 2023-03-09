import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function CurrentCard(link) {
  return (
    <div className="container max-w-screen-lg max-auto px-5 sm:px-8 py-5 h-full grid justify-items-center">
      <Link href={link} className="">
        <div className="h-20 w-20 overflow-hidden">
          <Image
            src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1492895089i/34790762.jpg"
            alt="Designing with data book cover"
            width={100}
            height={100}
            className="object-cover w-full h-full rounded-xl"
          ></Image>
        </div>
      </Link>
    </div>
  );
}
