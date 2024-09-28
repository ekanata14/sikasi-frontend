import React from "react";
import { cn } from "~/lib/utils";
import { Backdrop } from "~/components/backdrop";
import { Toaster } from "~/components/ui/toaster";

export default function Layout({ children }) {
  return (
    <>
      <div className={cn("min-h-screen grid", "lg:grid-cols-3 lg:items-center")}>
        <div className={cn("w-full static order-2", "lg:max-w-6xl lg:mx-auto")}>
          {children}
        </div>

        <Backdrop variant="cover" className={"lg:bottom-0 lg:rotate-90 lg:w-[300%] lg:right-auto lg:-left-[145%]"} />
        <Backdrop variant="cover" container={cn("order-3 top-0 rotate-180 lg:block")} align="opposite" className={"lg:order-3 lg:rotate-90 lg:w-[300%] lg:bottom-0 lg:-right-[55%] lg:left-auto"} />
      </div>
      <Toaster />
    </>
  );
}