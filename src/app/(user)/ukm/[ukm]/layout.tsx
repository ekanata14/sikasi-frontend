import { Navbar } from "~/app/(user)/ukm/[ukm]/navigation-bar";
import React from "react";
import { cn } from "~/lib/utils";
import { Backdrop } from "~/components/backdrop";
import { Data } from "~/data/data";

export default function Layout({ children }) {
  return(
    <div className="lg:grid">
      <div className={cn("w-full py-4 pb-32 px-4", "lg:px-8 lg:pb-0 lg:order-2 lg:mx-auto")}>
        { children }
      </div>
      <Navbar className={"lg:order-1"} data={Data} />
    </div>
  ); 
}