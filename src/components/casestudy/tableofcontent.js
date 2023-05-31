import * as React from "react";
import Link from "next/link";

export default function TableOfContents() {
  return (
    <div className="hidden lg:block max-h-[calc(100vh-9rem-113px)] overflow-auto">
      <h3 className="text-slate-900 text-xl font-medium">Table of Contents</h3>
      <div className="mt-4 flex flex-col space-y-2 text-sm">
        <Link href="#ataglance">
          <p>Project at a glance</p>
        </Link>
        <Link href="#herosection">
          <p>Return to top</p>
        </Link>
      </div>
    </div>
  );
}
