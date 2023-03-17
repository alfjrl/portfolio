import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-white shadow">
      <div className="container max-w-screen-xl p-5 pb-10">
        <div className="pt-8 pb-12 max-w-2xl">
          <p className="font-inter text-slate-900">
            {`On the side, I always think about how a product design influences
            users' behaviors and the design mindsets/strategies behind it, which
            always surprises me. I enjoy talking to random people and learning
            something new from them, either their life experiences or tips for
            finding a parking space in an overly crowded city.`}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <p className="font-inter font-light text-sm order-2 sm:order-1 text-slate-900">
            Made with my bear hands © 2023 Alfred Jhan-Ren Lin
          </p>
          <div className="flex flex-row order-1 sm:order-2 py-4 sm:py-0">
            <Link
              href={"mailto:alfred.jr.lin@gmail.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="pr-2 sm:px-2 py-1 rounded-md transition ease-in hover:bg-slate-100"
            >
              {/* <HiOutlineMail className="w-6 h-6"></HiOutlineMail> */}
              <p className="font-inter font-medium text-sm order-2 sm:order-1 text-slate-900">
                Email
              </p>
            </Link>
            <Link
              href={"https://www.linkedin.com/in/alfredjrlin/"}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-1 rounded-md transition ease-in hover:bg-slate-100"
            >
              {/* <BsLinkedin className="w-6 h-6"></BsLinkedin> */}
              <p className="font-inter font-medium text-sm order-2 sm:order-1 text-slate-900">
                LinkedIn
              </p>
            </Link>
            <Link
              href={"https://medium.com/@alfredjlin"}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-1 rounded-md  transition ease-in hover:bg-slate-100"
            >
              {/* <BsMedium className="w-6 h-6"></BsMedium> */}
              <p className="font-inter font-medium text-sm order-2 sm:order-1 text-slate-900">
                Medium
              </p>
            </Link>
            <Link
              href={"https://github.com/alfjrl"}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-1 rounded-md  transition ease-in hover:bg-slate-100 "
            >
              {/* <BsGithub className="w-6 h-6"></BsGithub> */}
              <p className="font-inter font-medium text-sm order-2 sm:order-1 text-slate-900">
                Github
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
