"use client";

import * as React from "react";
import { cn } from "~/lib/utils";

const Backdrop = React.forwardRef(({ className, ...props }, ref) => {

  const { variant, container } = props;

  return (
    <div className={cn("relative w-full overflow-hidden min-h-[10rem] block z-20", "lg:h-full", container)}>
      <svg
        className={cn(
          "absolute opacity-25 bottom-0 right-0 -left-[20%] w-[130%] m-auto rotate-180",
          variant == "cover" && "opacity-85",
          className
        )}
        viewBox="0 0 602 350"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="371.174"
          y="188.225"
          width="102.417"
          height="74.4504"
          transform="rotate(-119.619 371.174 188.225)"
          fill="#DE0E0E"
        />
        <rect
          x="126.719"
          y="264.555"
          width="155.643"
          height="164.655"
          transform="rotate(-119.619 126.719 264.555)"
          fill="#ECF016"
        />
        <rect
          x="440.781"
          y="349.559"
          width="185.453"
          height="185.453"
          transform="rotate(-119.619 440.781 349.559)"
          fill="#2371E7"
        />
        <rect
          x="54.1965"
          y="192.457"
          width="109.657"
          height="109.657"
          transform="rotate(-119.619 54.1965 192.457)"
          fill="#DE0E0E"
        />
        <rect
          x="260.719"
          y="216.849"
          width="49.2792"
          height="49.2792"
          transform="rotate(-119.619 260.719 216.849)"
          fill="#2371E7"
        />
        <rect
          x="341.225"
          y="202.537"
          width="20.8735"
          height="20.8735"
          transform="rotate(-119.619 341.225 202.537)"
          fill="#ECF016"
        />
        <rect
          x="427.963"
          y="28.6255"
          width="20.8735"
          height="20.8735"
          transform="rotate(-119.619 427.963 28.6255)"
          fill="#2371E7"
        />
        <rect
          x="149.408"
          y="64.6221"
          width="32.03"
          height="32.03"
          transform="rotate(-119.619 149.408 64.6221)"
          fill="#2371E7"
        />
        <rect
          x="309.818"
          y="181.719"
          width="12.6105"
          height="12.6105"
          transform="rotate(-119.619 309.818 181.719)"
          fill="#DE0E0E"
        />
        <rect
          x="181.94"
          y="12.5789"
          width="9.22496"
          height="9.22496"
          transform="rotate(-119.619 181.94 12.5789)"
          fill="#DE0E0E"
        />
        <rect
          x="415.345"
          y="187.357"
          width="101.969"
          height="101.969"
          transform="rotate(-119.619 415.345 187.357)"
          fill="#ECF016"
        />
        <path
          d="M65.6147 257.293L27.6706 190.552L94.4117 152.608L132.356 219.349L65.6147 257.293Z"
          fill="#2371E7"
        />
      </svg>
    </div>
  );
});
Backdrop.displayName = "Backdrop";

export { Backdrop }; 