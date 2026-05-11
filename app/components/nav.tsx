"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiMenuFill, RiCloseFill } from "react-icons/ri";
import {
  getLocaleFromPath,
  swapLocaleInPath,
  type Locale,
} from "app/lib/i18n";
import { getDictionary } from "app/lib/dictionaries";

export default function Navbar() {
  const resume = "https://drive.proton.me/urls/2MFFH0QYWW#FdUWt8ABQq2e";
  const [open, setOpen] = useState(false);
  const pathname = usePathname() ?? "/";
  const locale = getLocaleFromPath(pathname);
  const dict = getDictionary(locale);
  const otherLocale: Locale = locale === "en" ? "zh" : "en";
  const otherHref = swapLocaleInPath(pathname, otherLocale);
  const workHref = locale === "zh" ? "/zh#project" : "/#project";
  const aboutHref = locale === "zh" ? "/zh/about" : "/about";
  const homeHref = locale === "zh" ? "/zh" : "/";

  // Keep <html lang> in sync with the active locale. The root layout renders a
  // static lang="en"; this nudges it whenever the locale changes on the client.
  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-Hant" : "en";
  }, [locale]);

  function ArrowIcon() {
    return (
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  function LanguageToggle({ className = "" }: { className?: string }) {
    return (
      <Link
        href={otherHref}
        aria-label={dict.languageToggle.switchTo}
        className={`font-bold text-base text-gray-600 hover:text-black flex items-center gap-1 ${className}`}
      >
        <span
          className={locale === "en" ? "text-black" : ""}
          aria-current={locale === "en" ? "true" : undefined}
        >
          {dict.languageToggle.enLabel}
        </span>
        <span aria-hidden="true">/</span>
        <span
          className={locale === "zh" ? "text-black" : ""}
          aria-current={locale === "zh" ? "true" : undefined}
        >
          {dict.languageToggle.zhLabel}
        </span>
      </Link>
    );
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      {/* desktop navbar */}
      <div className="p-4 md:py-6  max-w-[1280px] w-full md:mx-auto hidden sm:flex sm:items-center sm:justify-between">
        <Link href={homeHref}>
          <Image src="/Al.svg" alt="Alfred Lin logo" width={32} height={18} />
        </Link>
        <ul className="flex flex-row items-center">
          <li>
            <Link
              href={workHref}
              className="flex font-bold text-base text-gray-600 hover:text-black"
            >
              <span className="h-7">{dict.nav.work}</span>
            </Link>
          </li>
          <li>
            <Link
              href={aboutHref}
              className="flex font-bold text-base text-gray-600 hover:text-black ml-12"
            >
              <span className="h-7">{dict.nav.about}</span>
            </Link>
          </li>
          <li>
            <Link
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-base text-gray-600 hover:text-black flex items-center bottom gap-2 ml-12"
            >
              <ArrowIcon />
              <span className="h-7">{dict.nav.resume}</span>
            </Link>
          </li>
          <li className="ml-12">
            <LanguageToggle />
          </li>
        </ul>
      </div>

      {/* mobile hamburger button */}
      <div className="p-4 flex items-center justify-between sm:hidden">
        <Link href={homeHref}>
          <Image src="/Al.svg" alt="Alfred Lin logo" width={32} height={18} />
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className="text-2xl cursor-pointer z-50"
          aria-label="Toggle menu"
        >
          {open ? <RiCloseFill /> : <RiMenuFill />}
        </button>
      </div>

      {/* mobile menu */}
      <div
        className={`fixed top-0 left-0 sm:hidden h-screen w-screen bg-white transition-transform ease-in-out duration-300 z-40 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="w-screen h-screen grid content-center">
          <li className="mx-8 my-6">
            <Link
              href={homeHref}
              className="font-medium text-base"
              onClick={() => setOpen(false)}
            >
              {dict.nav.home}
            </Link>
          </li>
          <li className="mx-8 my-6">
            <Link
              href={workHref}
              className="font-medium text-base"
              onClick={() => setOpen(false)}
            >
              {dict.nav.work}
            </Link>
          </li>
          <li className="mx-8 my-6">
            <Link
              href={aboutHref}
              className="font-medium text-base"
              onClick={() => setOpen(false)}
            >
              {dict.nav.about}
            </Link>
          </li>
          <li className="mx-8 my-6 flex items-center gap-2">
            <Link
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-base"
            >
              <span className="h-7">{dict.nav.resume}</span>
            </Link>
            <ArrowIcon />
          </li>
          <li className="mx-8 my-6">
            <LanguageToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
}
