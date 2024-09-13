import { Navbar } from "~/components/navigation-bar";
import React from "react";
import { cn } from "~/lib/utils";
import { Backdrop } from "~/components/backdrop";
import { Data } from "~/data/data";

export default function Layout({ children }) {
  return(
    <div className="lg:grid">
      <div className={cn("w-full", "lg:max-w-6xl lg:order-2 lg:mx-auto")}>
        <span className={cn("hidden", "w-full border-b-2 lg:block p-1")}></span>
        { children }
      </div>
      <Navbar className={"lg:order-1"} data={Data} />
      {/* <Backdrop/> */}
    </div>
  ); 
}