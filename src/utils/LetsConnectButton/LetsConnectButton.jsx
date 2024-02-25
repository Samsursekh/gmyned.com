import Link from "next/link";
import React from "react";

export default function LetsConnectButton() {
  return (
    <>
      <Link href={"/contact"} className="my-4">
        <button className="inline-flex font-roboto h-12 my-2 py-3 animate-shimmer items-center justify-center rounded-md border border-slate-950 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 ">
          Let's Connect
        </button>
      </Link>
    </>
  );
}
