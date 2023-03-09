import React from "react";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-white shadow">
      <div className="container max-w-screen-xl p-5">
        <div className="py-8 max-w-2xl">
          <p className="font-inter">
            On the side, I think about systems, design technology and space
            explorations. I occasionally dabble in acrylic painting, and enjoy
            reading about architecture and ethics. Currently mentoring on
            ADPList, watching documentaries like 👀
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <p className="font-inter font-light text-sm order-2 sm:order-1">
            © 2023 Made with my bear hands by Alfred Jhan-Ren Lin
          </p>
          <div className="flex flex-row order-1 sm:order-2 py-4 sm:py-0">
            <Link
              href={"https://www.linkedin.com/in/alfredjrlin/"}
              target="_blank"
              rel="noopener noreferrer"
              className="pr-2"
            >
              <BsLinkedin className="w-6 h-6"></BsLinkedin>
            </Link>
            <Link
              href={"https://github.com/alfjrl"}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2"
            >
              <BsGithub className="w-6 h-6"></BsGithub>
            </Link>
            <Link
              href={"https://www.instagram.com/alfree_lin/"}
              target="_blank"
              rel="noopener noreferrer"
              className="pl-2"
            >
              <BsInstagram className="w-6 h-6"></BsInstagram>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
