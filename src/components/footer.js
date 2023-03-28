import React from "react";
import Link from "next/link";
import Image from "next/image";

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
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <p className="flex flex-row font-inter font-light text-sm pt-4 md:pb-1 order-2 md:order-1 text-slate-900">
            <span className="hidden sm:block md:hidden lg:block">
              Made with my bear hands&nbsp;
            </span>
            © 2023 Alfred Jhan-Ren Lin
          </p>
          <div className="flex flex-col md:flex-row order-1 md:order-2 pt-2 md:pt-0">
            <div className="flex flex-row order-2 pt-2 md:pt-0 md:order-1 self-end">
              <Link
                href={"mailto:alfred.jr.lin@gmail.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="pr-2 md:px-2 py-1 rounded-md transition ease-in hover:bg-slate-100"
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
                <p className="font-inter font-medium text-sm order-2 sm:order-1 text-slate-900 ">
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
                className="px-2 py-1 rounded-md  transition ease-in hover:bg-slate-100"
              >
                {/* <BsGithub className="w-6 h-6"></BsGithub> */}
                <p className="font-inter font-medium text-sm order-2 sm:order-1 text-slate-900">
                  Github
                </p>
              </Link>
            </div>
            <Image
              src="/qrcode.png"
              alt="rmqrcode"
              width={189}
              height={39}
              className="md:pl-2 order-1 md:order-2 -ml-1.5 md:ml-0"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
