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

export default function Footer() {
  return (
    <footer className="mb-5 md:mb-16">
      <ul className="font-sm mt-16 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-black dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:alfred.jr.lin@gmail.com"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">email</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-black dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/alfredjrlin/"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">LinkedIn</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-black dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://medium.com/@alfredjlin"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">Medium</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-black dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/alfjrl"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">GitHub</p>
          </a>
        </li>
      </ul>
      <p className="mt-4 flex flex-row">
        <span className="hidden md:block">
          Made with love &amp; coffee&nbsp;
        </span>
        {" © "}
        {new Date().getFullYear()} Alfred Jhan-Ren Lin
      </p>
    </footer>
  );
}
