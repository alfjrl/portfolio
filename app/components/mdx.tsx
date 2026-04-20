import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { highlight } from "sugar-high";
import React from "react";

function Table({ data }) {
  let headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ));
  let rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function CustomLink(props) {
  let href = props.href;

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

function RoundedImage(props) {
  // If width/height are not provided or are "auto", make it responsive
  if (
    !props.width ||
    !props.height ||
    props.width === "auto" ||
    props.height === "auto"
  ) {
    return (
      <figure className="my-4">
        <img
          alt={props.alt}
          src={props.src}
          className="rounded-lg w-full h-auto mb-4 bg-white"
          {...props}
        />
        {props.alt && (
          <figcaption className="text-center text-sm text-gray-600 mt-2 italic">
            {props.alt}
          </figcaption>
        )}
      </figure>
    );
  }
  return (
    <figure className="my-4">
      <Image alt={props.alt} className="rounded-lg bg-white" {...props} />
      {props.alt && (
        <figcaption className="text-center text-sm text-gray-600 mt-2 italic">
          {props.alt}
        </figcaption>
      )}
    </figure>
  );
}

function Paragraph({ children, ...props }) {
  const childArray = React.Children.toArray(children);
  const isImageOnly =
    childArray.length > 0 &&
    childArray.every(
      (child) =>
        React.isValidElement(child) &&
        (child.type === RoundedImage ||
          child.type === "figure" ||
          child.type === "img"),
    );
  if (isImageOnly) {
    return <>{children}</>;
  }
  return <p {...props}>{children}</p>;
}

function Code({ children, ...props }) {
  let codeHTML = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

function CardExternalLinkIcon() {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition ease-in flex-shrink-0"
      height="14"
      width="14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

function LinkCard({
  href,
  label,
  title,
}: {
  href: string;
  label: string;
  title: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="link-card group bg-white flex flex-row min-w-fit w-[360px] justify-between items-center border border-gray-200 rounded-lg p-4 mb-4 transition ease-in hover:border-gray-400"
    >
      <div className="flex flex-col justify-center">
        <div className="pb-2 flex flex-row items-center gap-1 text-gray-400 group-hover:text-gray-700 transition ease-in">
          <p className="text-sm m-0">{label}</p>
          <CardExternalLinkIcon />
        </div>
        <p className="font-bold text-black card-title">{title}</p>
      </div>
    </a>
  );
}

function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

function createHeading(level) {
  const Heading = ({ children }) => {
    let slug = slugify(children);
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
      ],
      children,
    );
  };

  Heading.displayName = `Heading${level}`;

  return Heading;
}

let components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  img: RoundedImage,
  p: Paragraph,
  a: CustomLink,
  code: Code,
  Table,
  LinkCard,
};

export function CustomMDX(props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
